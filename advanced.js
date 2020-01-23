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
document.write(vienna[0][0]," ",vienna[1][1]," ",vienna[2][2]," ",vienna[3][3]," ",vienna[4][4]);


var stringman = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\"."

var temp = new  Array();
temp = stringman.split('$');
console.log(temp);
document.write("<br>");
document.write("<br>");
document.write(temp);

document.write("<br>");
var stringma2n = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\"."
var strnew= stringma2n.replace("$", " ")
document.write(strnew);