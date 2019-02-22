const fs = require('fs');
const path = require('path');

module.exports = function getTempPath(cwd = __dirname, tmpPath ='../.tmp') {
  const TEMP_PATH = path.join(cwd, tmpPath);
  if (!fs.existsSync(TEMP_PATH)) {
    fs.mkdirSync(TEMP_PATH);
  }
  return TEMP_PATH;
}
