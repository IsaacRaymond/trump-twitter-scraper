const puppeteer = require('puppeteer');

let headlessTest = false;

let scrape = async () => {
  const browser = await puppeteer.launch({headless: headlessTest});
  const page = await browser.newPage();

  await page.goto('https://twitter.com/realDonaldTrump');

  const result = await page.evaluate(() => {
    let classesNodeList = document.querySelectorAll(".tweet-text");
    console.log(classesNodeList);
    let tweetTexts = Array.prototype.map.call(classesNodeList, function(element) {
      return element.innerHTML;
    });

    return tweetTexts;
  });

  browser.close();
  return result;
}

scrape().then((value) => {
  console.log(value);
});
