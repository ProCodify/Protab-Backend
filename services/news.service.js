require("dotenv").config();
const error = require("../error/error");
const fetch = require("node-fetch");

const { parse } = require("node-html-parser");

const fetchInternationalNews = async (sources = "bbc-news") => {
  const baseUrl = "https://newsapi.org/v2";
  console.log("Refreshing International new Data");

  const response = await fetch(
    `${baseUrl}/top-headlines?sources=${sources}&apiKey=${process.env.NEWS_API_KEY}`
  );

  const data = await response.json();

  if (data?.status === "error") error(data?.code, data?.message);

  const compressedNews = (data?.articles || []).map((article) => ({
    title: article.title,
    publishedAt: article.publishedAt,
    url: article.url,
  }));
  return compressedNews;
};

const fetchLocalNews = async () => {
  const URL = "https://www.prothomalo.com/collection/latest";
  const SELECTOR =
    "#container > div > div.two-stories-with-load-more-wrapper.stories2AdWithLoadMore-m__wrapper__2Nvc4 > div.stories-set.stories2AdWithLoadMore-m__stories_set__27iKs > div > a";
  const news = [];
  console.log("Refreshing local new data");
  const response = await fetch(URL);
  const body = await response.text();
  const document = parse(body);
  const content = document.querySelectorAll(SELECTOR);
  content.forEach((child) => {
    if (!child) return;
    news.push({
      title: child.getAttribute("aria-label"),
      url: child.getAttribute("href"),
    });
  });

  return news;
};

const getNews = async ({ type, length }) => {
  const opt = {
    type: type || "IN",
    length: length || 10,
  };
  let news = [];
  if (opt.type === "IN") {
    news = await fetchInternationalNews();
  } else {
    news = await fetchLocalNews();
  }

  return news.slice(0, 10);
};
module.exports = { getNews };
