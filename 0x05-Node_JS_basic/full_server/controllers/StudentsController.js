import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2];
    try {
      const students = await readDatabase(filePath);
      let response = 'This is the list of our students\n';
      Object.keys(students).sort().forEach((field) => {
        const names = students[field];
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });
      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const major = req.params.major.toUpperCase();
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const students = await readDatabase(filePath);
      const names = students[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
