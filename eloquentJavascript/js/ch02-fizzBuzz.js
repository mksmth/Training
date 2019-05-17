for(i=1; i<=100; i++) {
  if (i % 3 !== 0 && i % 5 !== 0){
    console.log(i);
  }
  if (i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
  }
  else  if (i % 3 == 0) {
    console.log("Fizz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
}

//Given Solution:

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}