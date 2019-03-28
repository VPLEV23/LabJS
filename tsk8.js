let f10 = x => Math.sin(x)-Math.cos(x**3)*Math.sin(x**2-4.2)+4.27;
let i_ = 2;
let step = i_ * 0.1;
let values = [];

document.write("<table id=\"tb\"><tr><th>X</th><th>Y</th></tr>");
for (let i = 0; i <= i_; i+=step) {
    let val = f10(i);
    document.write("<tr><td>"+i+"</td><td>"+val+"</td></tr>");
    values.push(val);
}
document.write("</table>");
document.write("Сума першого та останнього: " + (values[0] + values[values.length-1]));
document.write("<br>Сума(y < -3.2): " + sum(values, true, -3.2));
document.write("<br>Сума(y > 0): " + sum(values, false, 0));


function sum(values, less, than) {
    let sum = 0; 
    for (let i = 0; i < values.length; i++) {
        if (less)
            sum += values[i] < than ? values[i] : 0;
        else
            sum += values[i] > than ? values[i] : 0;
    }
    return sum;
}
function count(values, less, than) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        if (less)
            count += values[i] < than ? 1 : 0;
        else
            count += values[i] > than ? 1 : 0;
    }
    return count;
}
