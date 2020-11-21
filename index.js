// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let userAge = prompt('How old are you?');

if (userAge >=0 && userAge<=2) {
  alert('you`re an infant')
  } else if (userAge >2 && userAge<12) {
    alert('you are a child')
  } else if (userAge >=12 && userAge <18) {
    alert('you are a teen')
  } else if (userAge >=18 && userAge <60) {
    alert ('you are an adult')
  } else if (userAge >=60) {
    alert('you are old')
  } else {
    alert ('something went wrong, try again later')
  }

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let userInput = +prompt('enter any number in bewtween 0 and 9');

switch (userInput) {
  case 0:
    alert(")")
    break
  case 1:
    alert("!")
    break
    case 2:
    alert("@")
    break
    case 3:
      alert("#")
      break
      case 4:
        alert ("$")
        break
  case 5:
    alert("%")
    break
  case 6:
    alert("^")
    break
  case 7:
  alert("&")
  break
  case 8:
  alert("*")
  break
  case 9:
    alert("(")
    break
    default:
    alert('your number is not within the number range =( Try again')
}

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let userNumberInput = prompt('enter three sylable number');

if(userNumberInput.length == 3){
  if(userNumberInput[0] == userNumberInput[1] || userNumberInput == userNumberInput[2] || userNumberInput[1] == userNumberInput[2]){
    alert('You have similar numbers')
  } else {
    alert('No similar numbers')
  }
} else {
  alert('Incorrect input. Try again!');
}



//Longer option for the same ---------------------------------------
let userNumberInput = prompt('enter three sylable number');

let firstNumber = userNumberInput[0], secondNumber = userNumberInput[1], thirdNumber = userNumberInput[2];

if(userNumberInput.length == 3){

if (firstNumber === secondNumber && firstNumber!== thirdNumber){
  alert(`You have two same numbers ${firstNumber} and ${secondNumber}`)
} else if (firstNumber === thirdNumber && firstNumber !== secondNumber) {
  alert(`You have two same numbers ${firstNumber} and ${thirdNumber}`)
} else if (secondNumber === thirdNumber && secondNumber !== firstNumber){
  alert(`You have two same numbers ${secondNumber} and ${thirdNumber}`)
}else if (firstNumber === secondNumber && firstNumber === thirdNumber){
  alert(`You have three same numbers ${firstNumber} ${secondNumber} ${thirdNumber}`)
} else {
  alert('You dont have same numbers')
}} else {
  alert('Incorrect input. Try again!');
}


// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
let userInputYear = prompt('Enter any year');

if ((userInputYear % 4) == 0){
  alert('intercalary year')
} else{
  alert('not a intercalary year')
}

// another option for the same  -------------------------------

let userInputYear = prompt('Enter any year');
let messageForUser = ((userInputYear % 4) == 0) ? 'intercalary year' : 'not intercalary year';
alert(`${messageForUser}`);

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

let userNumber = prompt('Enter 5 sylable number');

if(userNumber.length == 5){
  if(userNumber[0] === userNumber[4] && userNumber[1] === userNumber[3]){
    alert('Your number is palindrome =)')
  } else {
    alert('Your number IS NOT palindrome')
  }
} else {
  alert('Invalid input')
}


// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let userMoneyAmount = prompt('Enter your amount of USD');
let currency = prompt('Enter the output currency EUR, UAH or AZN');
let finalCurrency = currency.toLowerCase();
const EUR = 0.84, UAH = 28.36, AZN = 1.70;

if(finalCurrency === 'eur' || finalCurrency === 'euro'){
  let convertedToEuro = userMoneyAmount * EUR;
  alert(`${convertedToEuro} Euro`)
} else if (finalCurrency === 'uah'){
  let convertedToUAH = userMoneyAmount * UAH;
  alert(`${convertedToUAH} UAH`)
} else if (finalCurrency === 'azn') {
  let convertedToAZN = userMoneyAmount * AZN;
  alert(`${convertedToAZN} AZN`)
} else {
  alert('inncorrect currency =(')
}


// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let userBillAmount = prompt('Enter your bill amount');

if(userBillAmount<200) {
  alert('no discount for this amount')
} else if(userBillAmount>=200 && userBillAmount<=300){
  let finalPrice = (userBillAmount / 100 )* 97;
  alert(`${finalPrice} with 3% discount`)
} else if (userBillAmount>300 && userBillAmount<500){
  let finalPrice = (userBillAmount / 100 )* 95;
  alert(`${finalPrice} with 5% discount`)
} else if (userBillAmount>=500){
  let finalPrice = (userBillAmount / 100 )* 93;
  alert(`${finalPrice} with 7% discount`)
} else {
  alert('Something went wrong, try again later')
}

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

alert('с геометрией у меня все плохо =( Даже на бумажке не решу');

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
let userPoints = 0;

let firstQuestion = prompt('What do you do with a book?  1) Read  2) Drink  3) Wash');
let secondQuestion = prompt('What goes after Saturday?  1)Monday  2) Cat  3) Sunday');
let thirdQuestion = prompt('Is knowing JS important?  1)No 2)Yes 3)Maybe') ;

if(firstQuestion.toLowerCase() == 'read' || firstQuestion.toLowerCase() == '1'){
  userPoints +=2;
}else{
  userPoints = 0;
}
if(secondQuestion.toLowerCase() == 'sunday' || secondQuestion.toLowerCase() == '3'){
  userPoints +=2;
}else{
  userPoints = 0;
}
if(thirdQuestion.toLowerCase() == 'yes' || thirdQuestion.toLowerCase() == '2'){
  userPoints +=2;
}else{
  userPoints = 0;
}

alert(`You have ${userPoints} points`)


// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
