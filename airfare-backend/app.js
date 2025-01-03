const app = require(`express`)()
const puppeteer = require(`puppeteer`)
const fs = require(`fs`)

async function scrape() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(`https://www.kiwi.com/us/search/results/brisbane-queensland-australia/yogyakarta-international-airport-yogyakarta-indonesia/2025-02-09/2025-02-12`)
    await page.screenshot({ path: 'example.png' });

    const html = await page.content();
    console.log(`Page title: ${html}`);

    fs.writeFileSync("page.html", html)
    // Close the browser
    await browser.close();

}

app.get('/', (req, res) => {
    res.json({ message: `hi` })
    scrape()
})


app.listen(4000)