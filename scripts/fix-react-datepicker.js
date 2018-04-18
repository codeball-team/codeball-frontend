const fs = require('fs');

const missingLine = 'module.exports.Calendar = WrappedCalendar;';
const filepath = 'node_modules/react-datepicker/lib/index.js';

const file = fs.readFileSync(filepath, 'utf-8');
if (!file.includes(missingLine)) {
  const updatedFile = file + '\n' + missingLine;
  fs.writeFileSync(filepath, updatedFile);
}
