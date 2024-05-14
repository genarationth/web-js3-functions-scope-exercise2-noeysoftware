let checkEvenNum = (num) => {
  if (!Number.isInteger(num)) {
    console.log("This is not an integer");
  } else if (num % 2 === 0) {
    console.log("This is an even number");
  } else {
    console.log("This is an odd number");
  }
};

checkEvenNum(0.5);
checkEvenNum(1);
checkEvenNum(2);
