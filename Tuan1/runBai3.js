"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bai3_1 = require("./bai3");
var acc1 = new bai3_1.default(72345, "Ted Murphy", 120000);
var acc2 = new bai3_1.default(69713, "Jane Smith", 50000);
var acc3 = new bai3_1.default(93757, "Edward Demsey", 800000);
acc3.transfer(acc1, 100000);
acc3.transfer(acc2, 500000);
acc3.addInterest();
console.log(acc1.toString());
console.log(acc2.toString());
console.log(acc3.toString());
acc2.transfer(acc1, 100000);
console.log(acc1.toString());
console.log(acc2.toString());
