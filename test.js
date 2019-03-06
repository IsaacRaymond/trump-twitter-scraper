const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({width: 1000, height: 500});
  await page.goto('https://news.yahoo.com/');
  await page.screenshot({path: 'poop.png'});

  await browser.close();
}

getPic();
