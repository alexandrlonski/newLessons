let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let question; 


function guessNumber() {
  let a = 22;
  count = 10;
  
   function number(count) {
    let b = prompt('Угадай число от 1 до 100');
    count--;
    
    if (count == 0) {
      questionToLoser = confirm("Попытки закончились, хотите сыграть еще?");
    if (questionToLoser) {
         count = 10;
         number(count);
       }
    }
    if (isNumber(b) && b > a) {
      alert(`Загаданное число меньше, осталось попыток  ${count}`);
      number(count);
    }
     else if (isNumber(b) && b < a) {
      alert(`Загаданное число больше, осталось попыток  ${count}`);
      number(count);
    } 
    else if (b === null) {
      alert('Игра окончена');
    }
    else if (!isNumber(b) ) {
      alert('Введи число!');
      number(count);
    }  
    else if ( +b === a) {
      let questionToViner = confirm("Поздравляю, Вы угадали!!!Хотите сыграть ещё?");
      if (questionToViner) {
         count = 10;
         number(count);
       }
    }

  }
   number(count);
   
    
} 
guessNumber();

