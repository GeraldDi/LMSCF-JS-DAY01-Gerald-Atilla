var a = 7;

var b = 14;

var c = Number("21");

var d = Number('36');

var e = 42;

var total =a+b+c+d+e;

console.log(total);



var f = Number('1');

var g = 15;

var h = 8;

var i = Number("1");

var multipli= f*g*h*i;
console.log(multipli);

var final = total/multipli
document.write(final)



var multia = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
console.log(multia[1][1], multia[4][2], multia[5][3], multia[2][3], multia [2][1]);

var vienna = [ ["Vienna", null, null, null, null], 
				[null, "is", null, null, null], 
				[null, null, "a", null, null], 
				[null, null, null, "nice", null], 
				[null, null, null, null, "city"]];
document.write("<br>")
document.write("<br>");
document.write(vienna[0][0]," ",vienna[1][1]," ",vienna[2][2]," ",vienna[3][3]," ",vienna[4][4]);


var stringman = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".";

var temp = new  Array();
temp = stringman.split('$');
console.log(temp);
document.write("<br>","<br>");
document.write(temp);
document.write("<br>","<br>");



var stringt = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".";
var strnew= stringt.replace(/\$/g ," ");   /* stringt.replace("$" ," ") does only change the first value. I can use a global replace:stringt.replace(/"$"/g ,"newvalue")
but the global replace does not work with the $ symbole
You need to escape the $ because it has the meaning of "an arbitrary character" in a regular expression.  */
document.write(strnew);
console.log(strnew);

document.write("<br>","<br>"); 
var extra = ["Hey there,", "i am a javascript developer ", ", and i live in vienna"];
document.write(extra[1]);


var fruits =['Apple','Banana','Kiwi',];
console.log(fruits);
fruits.pop();
fruits.push('Orange','strawberry','kiwi');
console.log(fruits);



var money = 270; var hundred=0; var fifty=0; var twenty=0; var ten=0;
if (money >100){
	money -100;
	hundred++;
	money=money;

} 
	else if(money >50){
	money -50;
	fifty++;
	money=money;

} else if(money >20){
	money -20;
	twenty++;
	money=money;

} else if(money >10){
	money -10;
	twenty++;
	money=0;
}
console.log(money, hundred, fifty, twenty, ten)