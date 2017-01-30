/* ----- Zadanie 1 ----- */

var liczba1 = 7;
var liczba2 = 7;
console.log( liczba1 == liczba2 );

// W konsoli porównanie dwóch zmiennych zwróciło wartość true.

var text1 = "Ala ma kota";
var text2 = "Kot ma Ale";
console.log( text1 == text2 );

//  W konsoli porównanie dwóch zmiennych zwróciło wartość false.

var num = 5;
var users = "5";
console.log( num == users );

// W konsoli porównanie dwóch zmiennych zwróciło wartość true. Operator porównania == sprawdza czy zmienne są sobie równe.


/* ----- Zadanie 2 ----- */

var num1 = 9;
var num2 = 7;
var resultModulo = 0;
resultModulo = num1 % num2;
console.log (resultModulo);

// W konsoli został wyświetlony wynik reszta z dzielenia 2


/* ----- Zadanie 3 ----- */

var str1 = "abc";
var str2 = "def";
var joinedStrings = "";
joinedStrings = str1 + " " + str2;
console.log(joinedStrings);

// W konsoli zostały zmienne połączone ze sobą (konkatenacją) wynik: abc def, pusty string w joinedStrings nic nie robi. 


/* ----- Zadanie 4 ----- */

var myNumber  = 4;
var myString = "4";
console.log(myNumber == myString);
console.log(myNumber === myString);

// W konsoli porównanie tych dwóch zmiennych pierwszy za pomocą operatora == została zwróciona watrosć TRUE, operator porównania == spradza czy zmienne są sobie równe, za pomocą operatora porównania === została zwrócona wartość FALSE, operator === sprawdza czy zmienne są sobie równe dodatkowo sprawdza typ przechowywanej zmiennej.


/* ----- Zadanie 5 ----- */

var counter = 145;
counter = counter + 1;
//counter++
console.log(counter);

// W konsoli zmienna counter zwiększyła zmienną o jeden.

var n = 120;
n--;
// n = n - 1;
console.log(n);

// W konsoli zmienna n zmiejszyła zmienną o jeden.


/* ----- Zadanie 6 ----- */

var number1 = 5;
var number2 = 10;
var result = null;
result = number1 > number2;
console.log(result);

// W konsoli zostało wyświetlone FASLE, w tym przykładznie pierwsza liczba jest mniejsza od drugiej liczby.