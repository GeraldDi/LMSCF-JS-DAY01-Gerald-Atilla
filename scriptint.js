var cars=['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];
console.log(cars.sort());

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
document.write(temp[7]);



