const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
const fs = require('fs');

// Function to scrape Google Flights with dynamic parameters
async function scrapeGoogleFlights(source, destination, departureDate, returnDate) {
    let browser;
    try {
        // Launch the browser
        browser = await puppeteer.launch({ headless: false });

        // Open a new page
        const page = await browser.newPage();

        // Construct the URL dynamically based on input parameters
        const baseUrl = 'https://www.google.com/travel/flights';
        let url = `${baseUrl}?hl=en&gl=au&curr=AUD`;

        // Navigate to the initial Google Flights page
        await page.goto(url);

        // Wait for "Where from?" input field to be visible and interact with it
        const sourceSelector = 'input[jsname="yrriRe"][aria-label="Where from?"]';
        await page.waitForSelector(sourceSelector, { timeout: 60000 });  // Increased timeout to 60 seconds
        await page.click();
        
        // Get the page content
        const html = await page.content();
        fs.writeFileSync("scraped_flights.html", html);  // Save the content for inspection (optional)

        return html; // Return the HTML content
    } catch (error) {
        console.error(`Error during scraping: ${error.message}`);
        throw error;
    } finally {
        // Ensure the browser is closed
        if (browser) await browser.close();
    }
}


// API route to trigger scraping with dynamic parameters
app.get('/scrape', async (req, res) => {
    const { source, destination, departure_date, return_date } = req.query;

    // Validate required parameters
    if (!source || !destination || !departure_date) {
        return res.status(400).json({ message: 'Missing required parameters (source, destination, and departure_date)' });
    }

    try {
        // Call the scraping function with the query parameters
        const html = await scrapeGoogleFlights(source, destination, departure_date, return_date);

        // Return scraped content as JSON
        res.json({ message: 'Scraping successful', data: html });
    } catch (error) {
        res.status(500).json({ message: 'Error occurred during scraping', error: error.message });
    }
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
