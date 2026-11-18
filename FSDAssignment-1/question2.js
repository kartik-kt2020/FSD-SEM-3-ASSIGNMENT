const fs = require('fs/promises');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'attendance.txt');

// Helper: Ensure attendance.txt exists before reading/updating
async function ensureFileExists() {
  try {
    await fs.access(FILE_PATH);
  } catch {
    await fs.writeFile(FILE_PATH, '', 'utf8');
  }
}

// 1. ADD a student's name
async function addStudent(name) {
  await ensureFileExists();
  const trimmedName = name.trim();
  if (!trimmedName) return;

  await fs.appendFile(FILE_PATH, `${trimmedName}\n`, 'utf8');
  console.log(` Added: "${trimmedName}"`);
}

// 2. SHOW all student names
async function showStudents() {
  await ensureFileExists();
  const data = await fs.readFile(FILE_PATH, 'utf8');
  const students = data.split('\n').filter((line) => line.trim() !== '');

  console.log('\n --- Student Attendance List ---');
  if (students.length === 0) {
    console.log('(No students recorded yet)');
  } else {
    students.forEach((student, index) => {
      console.log(`${index + 1}. ${student}`);
    });
  }
  console.log('----------------------------------\n');
}

// 3. UPDATE a student's name
async function updateStudent(oldName, newName) {
  await ensureFileExists();
  const data = await fs.readFile(FILE_PATH, 'utf8');
  const students = data.split('\n').filter((line) => line.trim() !== '');

  const index = students.findIndex(
    (student) => student.toLowerCase() === oldName.trim().toLowerCase()
  );

  if (index === -1) {
    console.log(` Student "${oldName}" not found.`);
    return;
  }

  students[index] = newName.trim();
  await fs.writeFile(FILE_PATH, students.join('\n') + '\n', 'utf8');
  console.log(` Updated: "${oldName}" -> "${newName.trim()}"`);
}

// 4. DELETE a student's name
async function deleteStudent(nameToDelete) {
  await ensureFileExists();
  const data = await fs.readFile(FILE_PATH, 'utf8');
  const students = data.split('\n').filter((line) => line.trim() !== '');

  const updatedList = students.filter(
    (student) => student.toLowerCase() !== nameToDelete.trim().toLowerCase()
  );

  if (students.length === updatedList.length) {
    console.log(` Student "${nameToDelete}" not found.`);
    return;
  }

  const content = updatedList.length > 0 ? updatedList.join('\n') + '\n' : '';
  await fs.writeFile(FILE_PATH, content, 'utf8');
  console.log(` Deleted: "${nameToDelete}"`);
}

// --- Run Demonstration ---
async function main() {
  try {
    // Clear file at start of demo so repeated runs stay clean
    await fs.writeFile(FILE_PATH, '', 'utf8');

    // Add students
    await addStudent('Aarav Sharma');
    await addStudent('Priya Verma');
    await addStudent('Rohan Gupta');
    await showStudents();

    // Update a student's name
    await updateStudent('Priya Verma', 'Priya Singh');
    await showStudents();

    // Delete a student's name
    await deleteStudent('Rohan Gupta');
    await showStudents();
  } catch (err) {
    console.error(' File operation error:', err.message);
  }
}

main();