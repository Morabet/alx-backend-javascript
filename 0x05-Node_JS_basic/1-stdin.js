process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf-8');
// Event listener for data input
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  process.stdin.end();
});
// Event listener for process end
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

