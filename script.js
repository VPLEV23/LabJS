let variant = 2;
let f9 = x => Math.cos(x**x+1)-Math.abs(Math.sin(2*x)-5.76);
let e = 0.0001;

let x = parseFloat(prompt("X= ", ""));
/////////// A ///////////
let sum = 0;
let k = 1;
let val = 0;
do {
    val = f9(k)/k++;
    sum += val;

} while (val > e);
document.write(sum + ", доданки: " + k + "<br>");

/////////// B ///////////
sum = 0;
k = 1;
let sign = 1;
let x_ = x;
let fact = 1
do {
    sign = -sign;
    val = sign*f9(k++)*x_/fact;
    x_ *= x;
    fact *= k;
    sum += val;
} while(val > e);
document.write(sum + ", доданки: " + k + "<br>");