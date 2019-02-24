let question = [
  "Quel est votre prénom ? ",
  "Quels sont vos hobbies ? ",
  "Quel est ton langage de programmation favoris ? "
];

let answers = [];

// function for ask questions 
function ask(i) {
  process.stdout.write(`\n \n \n \n ${question[i]}`);
  process.stdout.write(' > ');
}

process.stdin.on('data', function(data) {
  answers.push(data.toString().trim());

  if(answers.length < question.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', function() {
  process.stdin.write('\n \n');
  process.stdout.write(`Va ${answers[1]} ${answers[0]} tu finiras l ecriture du script en ${answers[2]} plus tard`);
  process.stdin.write('\n \n');

})

ask(0);



