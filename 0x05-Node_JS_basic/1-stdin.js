const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name: ', (name) => {
  console.log(`Your name is ${name}`);
  rl.close();
  console.log('This important software is now closing');
});
