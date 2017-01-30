/* ----- Zadanie 1 ----- */

var names = ["Jan Kowalski" , "Adam Nowak" , "Tomasz Miczek"];
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);


/* ----- Zadanie 2 ----- */

var fruit = ["Mango" , "Strawberry" , "Peach" , "Apple"];
console.log(fruit[0]);
console.log(fruit[fruit.length-1]);

for (var i = 0; i < fruit.length; i++) {
	console.log(fruit[i]);
}


/* ----- Zadanie 3 ----- */

//Inicjalizacja tablicy
var numbers = [3, 5, 7, 45, 77, 55,  36, 89, 777, 3275];
var sum = 0;
console.log("Tablica");
//Wyświetlenie tablicy
for (var i = 0; i < numbers.length; i++) {
	console.log(numbers[i] + ", ");
	//Dodanie do sumy i-tego elementu tablicy
	sum += numbers[i];
}
//Wyświetlenie wyniku w konsoli
console.log("Suma elementów tablicy wynosi: " + sum);


/* ----- Zadanie 4 ----- */

var tab = [4, 6, 8, 12, 37, 57, 69, 596, 3758, 2385];
var sumEven = 0;
console.log("Tablica");
for (var i = 0; i < tab.length; i++) {
	if ((tab[i] %2) === 0) {
		var result = sumEven += tab[i];
		console.log(tab[i]);
	}
}
console.log("Suma wszystkich parzystych liczb wynosi: " + result);


/* ----- Zadanie 5 ----- */

var table = [1, 5, 17, 25, 67, 206, 356, 876, 2467, 5478];
var max = 0;
for (var i = 0; i < table.length; i++) {
	if (table[i] > max) {
		max = table[i];
	}
}
console.log("Największa liczba w tablicy to: " + max);


/* ----- Zadanie 6 ----- */

var arrWithNumbers = [1, 2, 2, 8, 7, 6, 2, 8, 5, 3];
var firstIndex = 0;

for (var i = 0; i < arrWithNumbers.length; i++) {
	var currentNumber = arrWithNumbers.indexOf(arrWithNumbers[i]);
	if (currentNumber !== i) {
		firstIndex = currentNumber;
		break;
	}
}
console.log("Indeks pierwszej powtórzonej liczby w tablicy to: " + firstIndex);


/* ----- Zadanie 7 ----- */

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reverseArray = [];
for (var i = array.length - 1; i >= 0; i--) {
	reverseArray += array[i];
	console.log(array[i]);
}

