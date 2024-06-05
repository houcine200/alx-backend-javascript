import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
        const students = {};
        lines.forEach((line) => {
          const [name, field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(name);
        });
        resolve(students);
      }
    });
  });
}
