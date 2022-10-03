require("dotenv").config();
const error = require("../error/error");
const fetch = require("node-fetch");

const baseUrl = "https://newsapi.org/v2";
const fetchInternationalNews = async (sources = "bbc-news") => {
  const response = await fetch(
    `${baseUrl}/top-headlines?sources=${sources}&apiKey=${process.env.NEWS_API_KEY}`
  );

  const data = await response.json();

  if (data?.status === "error") error(data?.code, data?.message);

  return {
    news: data?.articles,
    totalNews: data?.totalResults,
  };
};

const getInternationalNews = async () => {
  const { news } = await fetchInternationalNews();

  if (!news) error("No news found");
  const compressedNews = (news || []).map((article) => ({
    title: article.title,
    publishedAt: article.publishedAt,
    url: article.url,
  }));

  return compressedNews;
};
module.exports = { getInternationalNews };
