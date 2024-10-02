const readline = require('readline');

// Create an interface for reading input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the welcome message and ask for the user's name
console.log('Welcome to Holberton School, what is your name?');

// Wait for the user input
rl.question('', (name) => {
  // Display the user's input
  console.log(`Your name is: ${name}`);

  // Close the interface and display the closing message
  rl.close();
});

// Listen for when the readline interface is closed
rl.on('close', () => {
  console.log('This important software is now closing');
});
