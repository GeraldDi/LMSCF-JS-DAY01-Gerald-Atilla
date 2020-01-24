var cars=['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];
console.log(cars.sort()); //the wanted order is identical to the alphabetic order ->therefore it can be done like that

var cars2=['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari']; //different way that still works when order should be different from  alphabetic
console.log(cars2[1], cars2[6],cars2[5],cars2[4],cars2[0],cars2[3],);
var cars3=[cars2[1], cars2[6],cars2[5],cars2[4],cars2[0],cars2[3],];
console.log(cars3)

var fruits =['Apple','Banana','Kiwi',];
console.log(fruits.slice(0,3));//Start
fruits.push('Orange');
console.log(fruits.slice(0,4));//Output1
fruits.pop() //pop nimmt immer das letzte  elementweg
console.log(fruits.slice(0,3));//Output2

var animals =['monkey','horse','dog'];
console.log(animals);
console.log(animals.sort());// ich weis auchn icht wie ich die tabelle umdrehe aber wenn man sienach alphabet sortiert ist siehier zufällig so wiesiefürdieaufgabe sein soll
animals.push('cat')
console.log(animals.sort());


var newfruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new  Array();
temp = newfruits.split('/');

/* not efficient solution a loop will betterfor this
document.write(temp[0]);
document.write("<br>");
document.write(temp[1]);
document.write("<br>");
document.write(temp[2]);
document.write("<br>");
document.write(temp[3]);
document.write("<br>");
document.write(temp[4]);
document.write("<br>");
document.write(temp[5]);
document.write("<br>");
document.write(temp[6]);
document.write("<br>");
document.write(temp[7]);  */

var tempcount =0;
while (tempcount <8) {
	document.write(temp[tempcount]);
	document.write("<br>");
	tempcount++;
}



