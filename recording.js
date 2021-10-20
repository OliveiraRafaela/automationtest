const puppeteer = require('puppeteer');

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

    await page.goto('https://patternbeauty.com/')

    await page.setViewport({ width: 1440, height: 789 })

    await page.screenshot({
        path: "a.png"
    });

    await page.waitForSelector('.template-index > #shopify-section-hero > .jumbotron > .buttons > .btn:nth-child(1)')
    await page.click('.template-index > #shopify-section-hero > .jumbotron > .buttons > .btn:nth-child(1)')

    await page.waitFor(1000);

    await page.screenshot({
        path: "b.png"
    });

    await navigationPromise

    await page.waitForSelector('#top-navbar-main > .navbar-nav > .nav-item > .navbar-brand > img')
    await page.click('#top-navbar-main > .navbar-nav > .nav-item > .navbar-brand > img')

    await page.waitFor(1000);
    await page.screenshot({
        path: "c.png"
    });

    await navigationPromise

    await browser.close()

    process.exit();
}


start();