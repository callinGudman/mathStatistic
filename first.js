"use strict";
function colect() {
    var number = new Array();
    alert("Всяко число се въвежда едно по едно! За край въведете (x)!");
    let i;
    for (i = 0; i < 31; i++) {
        var j = (prompt("Въведете число"));
        if (j === "x") {
            break;
        }
		var z =parseFloat(j);
        number[i] = z;
       number.sort(function(a, b){return a-b});
    }
	


    for (var k in number);

    function getSum(total, num) {
        return total + (num);
    }

    var sum = parseFloat((number.reduce(getSum)));

    function getSums(total, num) {
        return total + (num);
    }

    var sums = (number.length);
	
	/*---Средноквадратично отклонение---*/
    var x = (sum / sums);

    /*--- S2---*/
	var s2;
    if (sums === 1) {
         s2 = (((number[0] - x) * (number[0] - x)) / sums)
    }
    else if (sums === 2) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x)) / sums)
    }
    else if (sums === 3) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x)) / sums)
    }
    else if (sums === 4) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x)) / sums)
    }
    else if (sums === 5) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x)+ (number[4] - x) * (number[4] - x)) / sums)
    }
    else if (sums === 6) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x)+ (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x)) / sums)
    }
    else if (sums === 7) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x)) / sums)
    }
    else if (sums === 8) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x)) / sums)
    }
    else if (sums === 9) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x)) / sums)
    }
    else if (sums === 10) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x)) / sums)
    }
    else if (sums === 11) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x)) / sums)
    }
    else if (sums === 12) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x)) / sums)
    }
    else if (sums === 13) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x)) / sums)
    }
    else if (sums === 14) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x)) / sums)
    }
    else if(sums === 15) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x)) / sums)
    }
    else if (sums === 16) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x)) / sums)
    }
    else if (sums === 17) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x)) / sums)
    }
    else if (sums === 18) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x)) / sums)
    }
    else if (sums === 19) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x)) / sums)
    }
    else if (sums === 20) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x) + (number[19] - x) * (number[19] - x)) / sums)
    }
    else if (sums === 21) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x) + (number[19] - x) * (number[19] - x) + (number[20] - x) * (number[20] - x)) / sums)
    }
    else if (sums === 22) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x) + (number[19] - x) * (number[19] - x) + (number[20] - x) * (number[20] - x) + (number[21] - x) * (number[21] - x)) / sums)
    }
    else if (sums === 23) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x) + (number[19] - x) * (number[19] - x) + (number[20] - x) * (number[20] - x) + (number[21] - x) * (number[21] - x) + (number[22] - x) * (number[22] - x)) / sums)
    }
    else if (sums === 24) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x) + (number[19] - x) * (number[19] - x) + (number[20] - x) * (number[20] - x) + (number[21] - x) * (number[21] - x) + (number[22] - x) * (number[22] - x) + (number[23] - x) * (number[23] - x)) / sums)
    }
    else if (sums === 25) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x) + (number[19] - x) * (number[19] - x) + (number[20] - x) * (number[20] - x) + (number[21] - x) * (number[21] - x) + (number[22] - x) * (number[22] - x) + (number[23] - x) * (number[23] - x) + (number[24] - x) * (number[24] - x)) / sums)
    }
    else if (sums === 26) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x) + (number[19] - x) * (number[19] - x) + (number[20] - x) * (number[20] - x) + (number[21] - x) * (number[21] - x) + (number[22] - x) * (number[22] - x) + (number[23] - x) * (number[23] - x) + (number[24] - x) * (number[24] - x) + (number[25] - x) * (number[25] - x)) / sums)
    }
    else if (sums === 27) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x) + (number[19] - x) * (number[19] - x) + (number[20] - x) * (number[20] - x) + (number[21] - x) * (number[21] - x) + (number[22] - x) * (number[22] - x) + (number[23] - x) * (number[23] - x) + (number[24] - x) * (number[24] - x) + (number[25] - x) * (number[25] - x) + (number[26] - x) * (number[26] - x)) / sums)
    }
    else if (sums === 28) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x) + (number[19] - x) * (number[19] - x) + (number[20] - x) * (number[20] - x) + (number[21] - x) * (number[21] - x) + (number[22] - x) * (number[22] - x) + (number[23] - x) * (number[23] - x) + (number[24] - x) * (number[24] - x) + (number[25] - x) * (number[25] - x) + (number[26] - x) * (number[26] - x) + (number[27] - x) * (number[27] - x)) / sums)
    }
    else if (sums === 29) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x) + (number[19] - x) * (number[19] - x) + (number[20] - x) * (number[20] - x) + (number[21] - x) * (number[21] - x) + (number[22] - x) * (number[22] - x) + (number[23] - x) * (number[23] - x) + (number[24] - x) * (number[24] - x) + (number[25] - x) * (number[25] - x) + (number[26] - x) * (number[26] - x) + (number[27] - x) * (number[27] - x) + (number[28] - x) * (number[28] - x)) / sums)
    }
    else if (sums === 30) {
         s2 = (((number[0] - x) * (number[0] - x) + (number[1] - x) * (number[1] - x) + (number[2] - x) * (number[2] - x) + (number[3] - x) * (number[3] - x) + (number[4] - x) * (number[4] - x) + (number[5] - x) * (number[5] - x) + (number[6] - x) * (number[6] - x) + (number[7] - x) * (number[7] - x) + (number[8] - x) * (number[8] - x) + (number[9] - x) * (number[9] - x) + (number[10] - x) * (number[10] - x) + (number[11] - x) * (number[11] - x) + (number[12] - x) * (number[12] - x) + (number[13] - x) * (number[13] - x) + (number[14] - x) * (number[14] - x) + (number[15] - x) * (number[15] - x) + (number[16] - x) * (number[16] - x) + (number[17] - x) * (number[17] - x) + (number[18] - x) * (number[18] - x) + (number[19] - x) * (number[19] - x) + (number[20] - x) * (number[20] - x) + (number[21] - x) * (number[21] - x) + (number[22] - x) * (number[22] - x) + (number[23] - x) * (number[23] - x) + (number[24] - x) * (number[24] - x) + (number[25] - x) * (number[25] - x) + (number[26] - x) * (number[26] - x) + (number[27] - x) * (number[27] - x) + (number[28] - x) * (number[28] - x) + (number[29] - x) * (number[29] - x)) / sums)
    };

    /*---S---*/
    var s = Math.sqrt(s2);

    /*---CV---*/
    var cv = ((s / x) * 100);

    /*---Xmax--*/
    var maxa = Math.max.apply(Math, number);

    /*---Xmin--*/
    var mina = Math.min.apply(Math, number);

    /*---Размах--*/
    var razmah = (maxa - mina);

    /*---Квартили---*/

    /*---Q1---*/
    var k1 = (0.25 * sums)
    var t = k1.toString()
    var patt = /\-?\d+\.\d+/;
	var q1;

    /*---Не е Цяло Число---*/
    if (t.match(patt)) {
        var k1 = Math.floor(k1);
        
        switch (k1) {
            case 0:
                q1 = number[0];
                break;
            case 1:
                q1 = number[1];
                break;
            case 2:
                q1 = number[2];
                break;
            case 3:
                q1 = number[3];
                break;
            case 4:
                q1 = number[4];
                break;
            case 5:
                q1 = number[5];
                break;
            case 6:
                q1 = number[6];
                break;
            case 7:
                q1 = number[7];
                break;
            case 8:
                q1 = number[8];
                break;
            case 9:
                q1 = number[9];
                break;
            case 10:
                q1 = number[10];
                break;
            case 11:
                q1 = number[11];
                break;
            case 12:
                q1 = number[12];
                break;
            case 13:
                q1 = number[13];
                break;
            case 14:
                q1 = number[14];
                break;
            case 15:
                q1 = number[15];
                break;
            case 16:
                q1 = number[16];
                break;
            case 17:
                q1 = number[17];
                break;
            case 18:
                q1 = number[18];
                break;
            case 19:
                q1 = number[19];
                break;
            case 20:
                q1 = number[20];
                break;
            case 21:
                q1 = number[21];
                break;
            case 22:
                q1 = number[22];
                break;
            case 23:
                q1 = number[23];
                break;
            case 24:
                q1 = number[24];
                break;
            case 25:
                q1 = number[25];
                break;
            case 26:
                q1 = number[26];
                break;
            case 27:
                q1 = number[27];
                break;
            case 28:
                q1 = number[28];
                break;
            case 29:
                q1 = number[29];
                break;
            default:
                "Error"
        }
    }


    /*---Цяло Число---*/
    else {
        k1 = k1 - 1;
        switch (k1) {
            case 0:
                q1 = ((number[0] + number[1]) / 2);
                break;
            case 1:
                q1 = ((number[1] + number[2]) / 2);
                break;
            case 2:
                q1 = ((number[2] + number[3]) / 2);
                break;
            case 3:
                q1 = ((number[3] + number[4]) / 2);
                break;
            case 4:
                q1 = ((number[4] + number[5]) / 2);
                break;
            case 5:
                q1 = ((number[5] + number[6]) / 2);
                break;
            case 6:
                q1 = ((number[6] + number[7]) / 2);
                break;
            case 7:
                q1 = ((number[7] + number[8]) / 2);
                break;
            case 8:
                q1 = ((number[8] + number[9]) / 2);
                break;
            case 9:
                q1 = ((number[9] + number[10]) / 2)
                break;
            case 10:
                q1 = ((number[10] + number[11]) / 2);
                break;
            case 11:
                q1 = ((number[11] + number[12]) / 2);
                break;
            case 12:
                q1 = ((number[12] + number[13]) / 2);
                break;
            case 13:
                q1 = ((number[13] + number[14]) / 2);
                break;
            case 14:
                q1 = ((number[14] + number[15]) / 2);
                break;
            case 15:
                q1 = ((number[15] + number[16]) / 2);
                break;
            case 16:
                q1 = ((number[16] + number[17]) / 2);
                break;
            case 17:
                q1 = ((number[17] + number[18]) / 2);
                break;
            case 18:
                q1 = ((number[18] + number[19]) / 2);
                break;
            case 19:
                q1 = ((number[19] + number[20]) / 2);
                break;
            case 20:
                q1 = ((number[20] + number[21]) / 2);
                break;
            case 21:
                q1 = ((number[21] + number[22]) / 2);
                break;
            case 22:
                q1 = ((number[22] + number[23]) / 2);
                break;
            case 23:
                q1 = ((number[23] + number[24]) / 2);
                break;
            case 24:
                q1 = ((number[24] + number[25]) / 2);
                break;
            case 25:
                q1 = ((number[25] + number[26]) / 2);
                break;
            case 26:
                q1 = ((number[26] + number[27]) / 2);
                break;
            case 27:
                q1 = ((number[27] + number[28]) / 2);
                break;
            case 28:
                q1 = ((number[28] + number[29]) / 2);
                break;
            case 29:
                q1 = ((number[29] + number[30]) / 2);
                break;
            default:
                "Error"
        }
    }

    /*---Q2---*/
    var k2 = (0.50 * sums);
    var t = k2.toString();
    var patt = /\-?\d+\.\d+/;
	var q2;

    /*---Не е Цяло Число---*/

    if (t.match(patt)) {
        var k2 = Math.floor(k2);
        switch (k2) {
            case 0:
                q2 = number[0];
                break;
            case 1:
                q2 = number[1];
                break;
            case 2:
                q2 = number[2];
                break;
            case 3:
                q2 = number[3];
                break;
            case 4:
                q2 = number[4];
                break;
            case 5:
                q2 = number[5];
                break;
            case 6:
                q2 = number[6];
                break;
            case 7:
                q2 = number[7];
                break;
            case 8:
                q2 = number[8];
                break;
            case 9:
                q2 = number[9];
                break;
            case 10:
                q2 = number[10];
                break;
            case 11:
                q2 = number[11];
                break;
            case 12:
                q2 = number[12];
                break;
            case 13:
                q2 = number[13];
                break;
            case 14:
                q2 = number[14];
                break;
            case 15:
                q2 = number[15];
                break;
            case 16:
                q2 = number[16];
                break;
            case 17:
                q2 = number[17];
                break;
            case 18:
                q2 = number[18];
                break;
            case 19:
                q2 = number[19];
                break;
            case 20:
                q2 = number[20];
                break;
            case 21:
                q2 = number[21];
                break;
            case 22:
                q2 = number[22];
                break;
            case 23:
                q2 = number[23];
                break;
            case 24:
                q2 = number[24];
                break;
            case 25:
                q2 = number[25];
                break;
            case 26:
                q2 = number[26];
                break;
            case 27:
                q2 = number[27];
                break;
            case 28:
                q2 = number[28];
                break;
            case 29:
                q2 = number[29];
                break;
            default:
                "Error"
        }
    }

    /*---Цяло Число---*/
    else {
        k2 = k2 - 1;
        switch (k2) {
            case 0:
                q2 = ((number[0] + number[1]) / 2);
                break;
            case 1:
                q2 = ((number[1] + number[2]) / 2);
                break;
            case 2:
                q2 = ((number[2] + number[3]) / 2);
                break;
            case 3:
                q2 = ((number[3] + number[4]) / 2);
                break;
            case 4:
                q2 = ((number[4] + number[5]) / 2);
                break;
            case 5:
                q2 = ((number[5] + number[6]) / 2);
                break;
            case 6:
                q2 = ((number[6] + number[7]) / 2);
                break;
            case 7:
                q2 = ((number[7] + number[8]) / 2);
                break;
            case 8:
                q2 = ((number[8] + number[9]) / 2);
                break;
            case 9:
                q2 = ((number[9] + number[10]) / 2)
                break;
            case 10:
                q2 = ((number[10] + number[11]) / 2);
                break;
            case 11:
                q2 = ((number[11] + number[12]) / 2);
                break;
            case 12:
                q2 = ((number[12] + number[13]) / 2);
                break;
            case 13:
                q2 = ((number[13] + number[14]) / 2);
                break;
            case 14:
                q2 = ((number[14] + number[15]) / 2);
                break;
            case 15:
                q2 = ((number[15] + number[16]) / 2);
                break;
            case 16:
                q2 = ((number[16] + number[17]) / 2);
                break;
            case 17:
                q2 = ((number[17] + number[18]) / 2);
                break;
            case 18:
                q2 = ((number[18] + number[19]) / 2);
                break;
            case 19:
                q2 = ((number[19] + number[20]) / 2);
                break;
            case 20:
                q2 = ((number[20] + number[21]) / 2);
                break;
            case 21:
                q2 = ((number[21] + number[22]) / 2);
                break;
            case 22:
                q2 = ((number[22] + number[23]) / 2);
                break;
            case 23:
                q2 = ((number[23] + number[24]) / 2);
                break;
            case 24:
                q2 = ((number[24] + number[25]) / 2);
                break;
            case 25:
                q2 = ((number[25] + number[26]) / 2);
                break;
            case 26:
                q2 = ((number[26] + number[27]) / 2);
                break;
            case 27:
                q2 = ((number[27] + number[28]) / 2);
                break;
            case 28:
                q2 = ((number[28] + number[29]) / 2);
                break;
            case 29:
                q2 = ((number[29] + number[30]) / 2);
                break;
            default:
                "Error"
        }
    }

    /*---Q3---*/
    var k3 = (0.75 * sums);
    var t = k3.toString();
    var patt = /\-?\d+\.\d+/;
	var q3;

    /*---Не е Цяло Число---*/

    if (t.match(patt)) {
        var k3 = Math.floor(k3);
        switch (k3) {
            case 0:
                q3 = number[0];
                break;
            case 1:
                q3 = number[1];
                break;
            case 2:
                q3 = number[2];
                break;
            case 3:
                q3 = number[3];
                break;
            case 4:
                q3 = number[4];
                break;
            case 5:
                q3 = number[5];
                break;
            case 6:
                q3 = number[6];
                break;
            case 7:
                q3 = number[7];
                break;
            case 8:
                q3 = number[8];
                break;
            case 9:
                q3 = number[9];
                break;
            case 10:
                q3 = number[10];
                break;
            case 11:
                q3 = number[11];
                break;
            case 12:
                q3 = number[12];
                break;
            case 13:
                q3 = number[13];
                break;
            case 14:
                q3 = number[14];
                break;
            case 15:
                q3 = number[15];
                break;
            case 16:
                q3 = number[16];
                break;
            case 17:
                q3 = number[17];
                break;
            case 18:
                q3 = number[18];
                break;
            case 19:
                q3 = number[19];
                break;
            case 20:
                q3 = number[20];
                break;
            case 21:
                q3 = number[21];
                break;
            case 22:
                q3 = number[22];
                break;
            case 23:
                q3 = number[23];
                break;
            case 24:
                q3 = number[24];
                break;
            case 25:
                q3 = number[25];
                break;
            case 26:
                q3 = number[26];
                break;
            case 27:
                q3 = number[27];
                break;
            case 28:
                q3 = number[28];
                break;
            case 29:
                q3 = number[29];
                break;
            default:
                "Error"
        }
    }

    /*---Цяло Число---*/
    else {
        k3 = k3 - 1;
        switch (k3) {
            case 0:

                q3 = ((number[0] + number[1]) / 2);
                break;
            case 1:
                q3 = ((number[1] + number[2]) / 2);
                break;
            case 2:
                q3 = ((number[2] + number[3]) / 2);
                break;
            case 3:
                q3 = ((number[3] + number[4]) / 2);
                break;
            case 4:
                q3 = ((number[4] + number[5]) / 2);
                break;
            case 5:
                q3 = ((number[5] + number[6]) / 2);
                break;
            case 6:
                q3 = ((number[6] + number[7]) / 2);
                break;
            case 7:
                q3 = ((number[7] + number[8]) / 2);
                break;
            case 8:
                q3 = ((number[8] + number[9]) / 2);
                break;
            case 9:
                q3 = ((number[9] + number[10]) / 2)
                break;
            case 10:
                q3 = ((number[10] + number[11]) / 2);
                break;
            case 11:
                q3 = ((number[11] + number[12]) / 2);
                break;
            case 12:
                q3 = ((number[12] + number[13]) / 2);
                break;
            case 13:
                q3 = ((number[13] + number[14]) / 2);
                break;
            case 14:
                q3 = ((number[14] + number[15]) / 2);
                break;
            case 15:
                q3 = ((number[15] + number[16]) / 2);;
                break;
            case 16:
                q3 = ((number[16] + number[17]) / 2);
                break;
            case 17:
                q3 = ((number[17] + number[18]) / 2);
                break;
            case 18:
                q3 = ((number[18] + number[19]) / 2);
                break;
            case 19:
                q3 = ((number[19] + number[20]) / 2);
                break;
            case 20:
                q3 = ((number[20] + number[21]) / 2);
                break;
            case 21:
                q3 = ((number[21] + number[22]) / 2);
                break;
            case 22:
                q3 = ((number[22] + number[23]) / 2);
                break;
            case 23:
                q3 = ((number[23] + number[24]) / 2);
                break;
            case 24:
                q3 = ((number[24] + number[25]) / 2);
                break;
            case 25:
                q3 = ((number[25] + number[26]) / 2);
                break;
            case 26:
                q3 = ((number[26] + number[27]) / 2);
                break;
            case 27:
                q3 = ((number[27] + number[28]) / 2);
                break;
            case 28:
                q3 = ((number[28] + number[29]) / 2);
                break;
            case 29:
                q3 = ((number[29] + number[30]) / 2);
                break;
            default:
                "Error"

        }

    }
    /*---IQR---*/

    var IQR = q3 - q1;

    /*---Мода---*/

    var modes = function mode(numbers) {
        var modes = [],

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

    var median = function median(numbers) {
        var median = 0,
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

    var txt;
    txt = "V = "+number.join(', ')+"<br>"+"Xe = " + Math.round(x * 1000) / 1000 + "<br>" + "Mo = " + (modes(number)).join(', ') + "<br>" + "Me = " + (median(number)) + "<br>" + "S2 = " + Math.round(s2 * 1000) / 1000 + "<br>" + "S = " + Math.round(s * 1000) / 1000 + "<br>" + "CV = " + Math.round(cv * 1000) / 1000 + " % " + "<br>" + "R = " + Math.round(razmah * 1000) / 1000 + "<br>" + "X min = " + Math.round(mina * 1000) / 1000 + "<br>" + "X max = " + Math.round(maxa * 1000) / 1000 + "<br>" + "Q1 = " + Math.round(q1 * 1000) / 1000 + "<br>" + "Q3 = " + Math.round(q3 * 1000) / 1000 + "<br>" + "IQR = " + Math.round(IQR * 1000) / 1000 + "<br>";

    document.getElementById("demo").innerHTML = txt;
}
