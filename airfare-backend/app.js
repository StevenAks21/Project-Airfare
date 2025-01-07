const express = require('express');
const { Page } = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const app = express();

// Use the stealth plugin
puppeteer.use(StealthPlugin());

// Function to scrape Google Flights with dynamic parameters
async function scrapeGoogleFlights(source, destination, departureDate, returnDate) {
    let browser;
    try {
        // Launch the browser with stealth enabled
        browser = await puppeteer.launch({ headless: false });

        // Open a new page
        const page = await browser.newPage();

        // Set user agent and viewport to simulate a real user
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
        await page.setViewport({ width: 1280, height: 800 });

        // Construct the URL dynamically based on input parameters
        const baseUrl = 'https://www.google.com/travel/flights';
        let url = `${baseUrl}?hl=en&gl=au&curr=AUD`;

        // Navigate to the initial Google Flights page
        await page.goto(url);

        // Wait for "Where from?" input field to be visible
        const sourceSelector = 'input[aria-label="Where from?"]';
        await page.waitForSelector(sourceSelector, { timeout: 60000 });

        // Type source dynamically
        await page.type(sourceSelector, source, { delay: 100 });
        const html = await page.content();

        return html;
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
