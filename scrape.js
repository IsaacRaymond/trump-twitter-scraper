const puppeteer = require('puppeteer');

let headlessTest = true;

let scrollCount = 12; //How many tweets do you want?  Increase this number if you want more

let scrape = async () => {
  const browser = await puppeteer.launch({headless: headlessTest});
  const page = await browser.newPage();

  await page.goto('https://twitter.com/realDonaldTrump');

  await page.setViewport({
    width: 1200,
    height: 800
  });

  await page.waitFor(200);

  //Loop through the number of times you want to scroll (variable defined at the top)
  for (var i = 0; i < scrollCount; i++){
    await page.evaluate(_ => {
      window.scrollBy(0, window.innerHeight);
    });

    await page.waitFor(500);
  }

  const result = await page.evaluate(() => {
    let classesNodeList = document.querySelectorAll(".tweet-text");

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
