/* ----- Zadanie 1 ----- */

var number1 = 2;
var number2 = 5;

if (number1 > number2) {
    console.log("number1 jest większe od number2");
} else {
    console.log("number2 jest większe od number1");
}

// W konsoli został wyświetlony, że zmienna number2 jest większa od zmiennej number1.


/* ----- Zadanie 2 ----- */

var a = 5;
var b = 7;
var c = 9;

if (a > b && c) {
    console.log("Liczba w zmiennej a liczba jest największa");
} else if (b > c && a) {
    console.log("Liczba w zmiennej b liczba jest największa"); 
} else {
    console.log("Liczba w zmiennej c liczba jest największa");
}

// W konsoli został wyświetlony wynik operacji: Zmienna w c ma największą wartość.


/* ----- Zadanie 3 ----- */

for (var i = 0; i < 10; i++ ) {
    console.log ("Lubię JavaScript");
}


var indeks = 0;
while (indeks < 10) {
   console.log("Lubię JavaScript");
   indeks++;
} 


/* ----- Zadanie 4 ----- */

var result = 0;
for (var i = 0; i < 10; i++) {
    result = result + 1;
    console.log(result);
}


/* ----- Zadanie 5 ----- */

var n = 7;
for (var i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i + " - parzysta"); 
    }
    else {
        console.log(i + " - nieparzysta");
    }
}


/* ----- Zadanie 6 ----- */

for (var i=0; i<10; i++) {
    for (var j=0; j<10; j++); {
    console.log("i=" + i + ", j=" + j);
    }
}


/* ----- Zadanie 7 ----- */

var wielkosc = 5;
var linieGwiazdek = "";

for (var i = 0; i < wielkosc; i++) {
    linieGwiazdek = "";
    for (var j = 0; j < wielkosc; j++) {
        linieGwiazdek = linieGwiazdek + "*";
    }
    console.log(" ");
    console.log(linieGwiazdek);
}


/* ----- Zadanie 8 ----- */

var star = 5;
var line = "";

for (var i = star; i >= 1; i = i-1) {
    line = "";
   for (var j = star; j >= i; j = j-1) {
    line = line + "*";
    }
    console.log (line);
}


/* ----- Zadanie 9 ----- */



/* ----- Zadanie 10 ----- */


// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}

