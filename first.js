"use strict";
let number;
let sum;
let sums;
let x;
let s2;
let s;
let cv;
let maxa;
let mina;
let razmah;
let k1 ;
let t  ;
let t1  ;
let patt  ;
let q1;
let k3;
let q3;
let IQR;
let modes;
let count;
let maxIndex;
let number3;
let txt;
let median;
let numsLen;
let i;
let j;
let z;
let k;

function colect() {
    number = new Array();
    alert("Всяко число се въвежда едно по едно! За край въведете (x)!");

    for (i = 0; i < 31; i++) {
        j = (prompt("Въведете число"));
        if (j === "x") {
            break;
        }
        z =parseFloat(j);
        number[i] = z;
        number.sort(function(a, b){return a-b});
    }

    for ( k in number);

    function getSum(total, num) {
        return total + (num);
    }

    sum = parseFloat((number.reduce(getSum)));
    sums = (number.length);

    /*---Средноквадратично отклонение---*/
    x = (sum / sums);

    /*--- S2---*/
    function standardDeviation(values){
        let avg = average(values);

        let squareDiffs = values.map(function(value){
            let diff = value - avg;
            let sqrDiff = diff * diff;
            return sqrDiff;
        });

        let avgSquareDiff = average(squareDiffs);//0.25

        let stdDev = (avgSquareDiff);
        return stdDev;//0.25
    }

    function average(data){
       let gey = data.reduce(function(sum, value){
            return sum + value;
        }, 0);

        let avg = gey / data.length;
        return avg;

    }
    s2= standardDeviation(number);

    /*---S---*/
    s = Math.sqrt(s2);

    /*---CV---*/
    cv = ((s / x) * 100);

    /*---Xmax--*/
    maxa = Math.max.apply(Math, number);

    /*---Xmin--*/
    mina = Math.min.apply(Math, number);

    /*---Размах--*/
    razmah = (maxa - mina);

    /*---Квартили---*/

     k1=(0.25 * sums)
    t = k1.toString()
    patt = /\-?\d+\.\d+/;

    function check (number){
        if (t.match(patt)) {
            k1 = Math.floor(k1);
            q1=number[k1];
        }else{
            k1 = k1 -1;
            q1 = ((number[k1] + number[k1+1]) / 2);
        }
    }
    check(number);

    k3=(0.75 * sums)
    t1 = k3.toString()
    patt = /\-?\d+\.\d+/;

    function checkq3 (number){
        if (t1.match(patt)) {
            k3 = Math.floor(k3);
            q3=number[k3];
        }else{
            k3 = k3 -1;
            q3 = ((number[k3] + number[k3+1]) / 2);
        }
    }
    checkq3(number);

    /*---IQR---*/

    IQR = q3 - q1;

    /*---Мода---*/

    modes = function mode(numbers) {
        modes = [],

            count = [],
            i, number3, maxIndex = 0;

        for (i = 0; i < numbers.length; i += 1) {
            number3 = numbers[i];
            count[number3] = (count[number3] || 0) + 1;
            if (count[number3] > maxIndex) {
                maxIndex = count[number3];
            }
        }

        for (i in count) {
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }
        }
        return modes;
    }

    /*---Медиана---*/

    median = function medians(numbers) {
        median = 0,
            numsLen = numbers.length;
        numbers.sort(function(a, b){return a-b});
        // четно
        if (numsLen % 2 === 0) {
            // средна стойност от двете
            median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
        }
        // нечетно
        else {
            //числото което е в средата
            median = numbers[(numsLen - 1) / 2];
        }
        return median;
    }


    txt = "V = "+number.join(', ')+"<br>"+"Xe = " + Math.round(x * 1000) / 1000 + "<br>" + "Mo = " + (modes(number)).join(', ') + "<br>" + "Me = " + (median(number)) + "<br>" + "S2 = " + Math.round(s2 * 1000) / 1000 + "<br>" + "S = " + Math.round(s * 1000) / 1000 + "<br>" + "CV = " + Math.round(cv * 1000) / 1000 + " % " + "<br>" + "R = " + Math.round(razmah * 1000) / 1000 + "<br>" + "X min = " + Math.round(mina * 1000) / 1000 + "<br>" + "X max = " + Math.round(maxa * 1000) / 1000 + "<br>" + "Q1 = " + Math.round(q1 * 1000) / 1000 + "<br>" + "Q3 = " + Math.round(q3 * 1000) / 1000 + "<br>" + "IQR = " + Math.round(IQR * 1000) / 1000 + "<br>";

    document.getElementById("demo").innerHTML = txt;
}
