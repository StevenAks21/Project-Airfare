const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs');

const app = express();

async function scrape() {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        // Set User-Agent to mimic a real browser
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');

        console.log('Navigating to the page...');
        await page.goto(
            'https://www.kiwi.com/us/search/results/brisbane-queensland-australia/yogyakarta-international-airport-yogyakarta-indonesia/2025-02-09/2025-02-12',
            { waitUntil: 'networkidle2' }
        );

        // Save a screenshot of the page
        console.log('Saving screenshot...');
        await page.screenshot({ path: 'example.png' });

        // Get HTML content of the page
        console.log('Fetching page content...');
        const html = await page.content();

        // Save the HTML content to a file
        fs.writeFileSync('page.html', html, 'utf-8');
        console.log('HTML content saved to page.html');

        // Close the browser
        await browser.close();
    } catch (error) {
        console.error('An error occurred while scraping:', error);
    }
}

app.get('/', async (req, res) => {
    res.json({ message: 'Scraping started!' });

    // Call the scrape function
    await scrape();
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
