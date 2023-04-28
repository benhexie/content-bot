const fs = require("fs")

const inputText = fs.readFileSync("./daily-content.txt", {encoding: "utf-8"})

const data = [];

let contents = inputText.split(/Day \d+:|Skrima Content:/);

for (let i = 1; i < contents.length; i++) {
  let content = contents[i].trim();
  let [text, hashtagString] = content.split(/Hashtags:/);
  let hashtags = hashtagString.trim().split(/#/).slice(1);
  let promotion = /skrima/i.test(text) ? true : false;

  data.push({
    contents: text.split(/\d+\. /).slice(1).map(point => point.trim()),
    hashtags: hashtags.map((tag) => `#${tag.trim()}`),
    promotion
  });
}

console.log(data);