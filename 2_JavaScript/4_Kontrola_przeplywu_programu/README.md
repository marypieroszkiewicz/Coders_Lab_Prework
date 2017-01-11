#  JavaScript prework - Kontrola przepływu programu


#### Schemat rozwiązywania zadań:

* wszystkie zadania z tego działu wykonuj w pliku script.js,
* zadania rozdzielaj komentarzami,
* pamiętaj o definiowaniu różnych nazw zmiennych w każdym zadaniu, bo inaczej będą się nadpisywać!
  (nie dotyczy to pętli- w nich używamy zamiennych ```i``` lub ```j```)
* na samym końcu znajduą się zadania dodatkowe. Nie są one obowiązkowe do zaliczenia preworku,
ale postaraj się je wykonać.

#### Zadanie 1

W pliku script.js stwórz dwie zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej ```if ... else ```, wypisz w konsoli, która z nich jest większa.

#### Zadanie 2

W pliku script.js stwórz trzy zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej **if**, **else if** i **else**
(możesz wykorzystać operator logiczny ```&&```, spróbuj sam poszukać o nim informacji), wypisz w konsoli, która z nich jest największa.


#### Zadanie 3
W pliku script.js stwórz pętle, która 10 razy wypisze w konsoli tekst "Lubię JavaScript".

#### Zadanie 4
W pliku script.js stwórz zmienną ```result``` i przypisz do niej liczbę 0. Następnie stwórz pętle, która doda do siebie liczby od 1 do 10.

#### Zadanie 5
W pliku script.js napisz program, który na podstawie wartości zmiennej np. ```var n = 5;``` wypisuje wszystkie liczby od zera do **n**.
Przy każdej liczbie program ma napisać, czy  liczba jest parzysta czy nie. Np.:

```JavaScript
0 – parzysta
1 – nieparzysta
2 – parzysta
3 – nieparzysta
...
```

*Podpowiedź: Jak sprawdzić czy liczba jest parzysta lub nieparzysta? Wystarczy podzielić ją modulo przez 2, jeżeli wynik to 0, wtedy liczba jest parzysta, w przeciwnym przypadku jest nieparzysta.*

#### Zadanie 6
W pliku script.js stwórz dwie pętle niezależne i wypisz wartości ich liczników w każdej iteracji. Wykorzystaj:
konkatenację np.```console.log("i= " + i + ", j= " + j);```


#### Zadanie 7

W pliku script.js, pod odpowiednim komentarzem jest napisany skrypt, który wypisuje w konsoli
schemat z **n** gwiazdek, taki jak poniżej. Odszukaj ten skrypt i przeanalizuj go bardzo dokładnie.
Przykład dla  ```n = 5```:

```
* * * * *

* * * * *

* * * * *

* * * * *

* * * * *
```

Używamy do tego zadania pętli zagnieżdżonych!

#### Zadanie 8

W pliku script.js napisz program rysujący na podstawie wartości zmiennej **n** następujący schemat (tutaj dla ```n = 5```). Użyj do tego  pętli zagnieżdżonych.

```
*
* *
* * *
* * * *
* * * * *
```

Możesz to zadanie rozwiązać na dwa sposoby:
1. używając pętli zależnych.
2. używając pętli niezależnych i instrukcji warunkowej **if**.

*Wzoruj się na zadaniu poprzednim. Trzeba tutaj trochę pomyśleć i rozumieć pętle zagnieżdżone.*

#### Zadanie 9 - dodatkowe

W pliku script.js napisz program rysujący na podstawie wartości zmiennej **n** następujący schemat (tutaj dla ```n = 5```):

```
* 2 3 4 5
* * 3 4 5
* * * 4 5
* * * * 5
* * * * *
* * * * *
* * * * 5
* * * 4 5
* * 3 4 5
* 2 3 4 5
```

#### Zadanie 10 - dodatkowe

W pliku script.js napisz program tworzący tabliczkę mnożenia dla podanej zmiennej **n**. Wyświetl wynik w konsoli. Na przykład dla ```n = 3``` wynik będzie następujący:


1 x 1 = 1 | 1 x 2 = 2 | 1 x 3 = 3 <br>
2 x 1 = 2 | 2 x 2 = 4 | 2 x 3 = 6 <br>
3 x 1 = 3 | 3 x 2 = 6 | 3 x 3 = 9


Do mnożenia liczb użyj operatora *****.
