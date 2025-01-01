// console.log(hasDriversLicense && hasGoodVision); // true
// console.log(hasDriversLicense || hasGoodVision); // true
// console.log(!hasGoodVision); // false
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins team win with the result of ${scoreDolphins}`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log(`Koalas team won with the result of ${scoreKoalas}`);
} else if (
  scoreKoalas === scoreDolphins &&
  scoreKoalas >= 100 &&
  scoreDolphins >= 100
) {
  console.log(`no team won the trophy`);
}
