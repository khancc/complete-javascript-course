"use strict";
// // function esspression
// const calcAge1 = function (birthyear) {
//   return 2024 - birthyear;
// };
// const Age1 = calcAge1(2004);
// console.log(Age1);
// // function declaration
// const age2 = calcAge2(2001);
// function calcAge2(birthyear) {
//   return 2024 - birthyear;
// }
// console.log(age2);
// //arrow function
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const Age3 = calcAge3(1999);
// console.log(` tao da ${Age3} tuoi roi`);

const calcyearsHaveWorked = function (birthYear) {
  if (birthYear > 18) {
    const yearsWorked = 2024 - birthYear - 18;
    return yearsWorked;
  } else {
    return false;
  }
};

const yearsUntilRetirement = (birthYear, firstname) => {
  const yearsWorked = calcyearsHaveWorked(birthYear);
  const age = 2024 - birthYear;
  const retirement = 60 - age;
  return `${firstname} retires in ${retirement} years after, ${firstname} have worked for ${yearsWorked} years`;
};
console.log(yearsUntilRetirement(2004, `khanc`));
