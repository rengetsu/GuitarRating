# GuitarRatingApp
Guitar Shop Rating system app for guitars selection. 

Created using Javascript/CSS/HTML as university project in Vilnius Gediminas technical university.

## How algorithm works
At the beginning, all pictures participating in the rating system are assigned an initial rating, and variables are also declared for the subsequent random display of pictures out of order.
```javascript
var min = 1;
var max = 18;
var rb = Math.random() >= 0.5;
var random = Math.floor(Math.random() * (+max - +min)) + +min;
var rdm2 = Math.floor(Math.random() * (+mee - +mss)) + +mss;
```
All the pictures that will participate in the rating are assigned numbers, after which they are displayed in turn, two pieces on the screen.
You choose either the left or the right picture and you choose the one that you liked the most, after which its rating increases.
```javascript
function go_left(){ ... }
function go_right(){ ... }
```
When pressed, the next pair is immediately displayed, and when all pairs have passed, they begin to be displayed in random order, thereby mixing them together.

Also, by pressing the button, you can display a table with ratings of all guitars on the screen.
```javascript
function showRating(){ ... }
```

## Installation

Just download the project and run the index.html file.

 Or to install run the following commands in a working directory:
 ```
 git clone https://github.com/rengetsu/GuitarRatingApp.git
 ```
 and also open index.html file.

 ## Screenshot Preview

![GitHub Logo](https://i.ibb.co/VppGL05/Guiar-App-Preview.png)
