const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'app.log');

const logger = {
    logInfo: (message) => {
        const logMessage = `[INFO] ${new Date().toISOString()}: ${message}\n`;
        console.log(logMessage);
        fs.appendFileSync(logFilePath, logMessage);
    },
    logError: (message) => {
        const logMessage = `[ERROR] ${new Date().toISOString()}: ${message}\n`;
        console.error(logMessage);
        fs.appendFileSync(logFilePath, logMessage);
    }
};

module.exports = logger;