const day = `monday`;
switch (day) {
  case `monday`:
    console.log(`have maths class`);
    console.log(`go to coding meet up`);
    break;
  case `tuesday`:
    console.log(`have science class`);
    break;
  case `wednesday`:
  case `thursday`:
    console.log(`ur fkin free`);
    break;
  default:
    console.log(`not a valid day`);
}

if (day === `monday`) {
  console.log(`have maths class`);
  console.log(`go to coding meet up`);
} else if (day === `tuesday`) {
  console.log(`have science class`);
} else if (day === `thursday` || day === `wednesday`) {
  console.log(`ur fkin free`);
} else {
  console.log(`not a valid day`);
}
