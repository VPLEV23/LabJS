let f11 = x => Math.abs(Math.sin(12*x)*Math.cos(Math.abs(2*x))/3) +4.21;

let max_val = -1;
let neg_sum = 0;

for (let i = 1991; i <= 2001; i++) {
    let val = 100 * f11(i);
    if (val > 0) {
        document.write(`year: ${i}  : ${val}<br>`);
        if (max_val < val)
            max_val = i+4;
        continue;
    }
}

if (neg_sum != 0)
    document.write("Сума Збитків: " + neg_sum);
else
    document.write("Збитків нема");

document.write("<br>Максимальний рік зитків: " + max_val);