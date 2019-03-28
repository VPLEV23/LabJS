let f12 = x => Math.cos(x**3)/2.1+Math.cos(x**2)/1.1-8.3*Math.sin(3*x+1);
let values = [];
let start =  1;
let end = 7;
let sum = 0

for (let i = start; i <= end; i++)
    values.push(f12(i));
for(let i = 0; i <= end; i++){
    if(values[i] > 0)
    sum = values[3] + values[6];
}
document.write(sum);
