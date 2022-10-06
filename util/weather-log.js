const fs = require("node:fs/promises");
const path = require("node:path");

fs.mkdir(path.join(process.cwd(), "logs"), { recursive: true });
const LOG_PATH = path.join(process.cwd(), "logs", "weather.error-log.json");

async function loadSavedLogsIfExist(path) {
  try {
    const content = await fs.readFile(path);
    return JSON.parse(content);
  } catch (err) {
    return null;
  }
}
async function saveLog(condition) {
  const now = new Date();
  const content = {
    time: now.getTime(),
    date: now.toUTCString(),
    conditionText: condition,
  };
  const previousContent = (await loadSavedLogsIfExist(LOG_PATH)) || [];
  previousContent.push(content);
  const finalContent = JSON.stringify(previousContent);

  await fs.writeFile(LOG_PATH, finalContent);
}

module.exports = saveLog;
