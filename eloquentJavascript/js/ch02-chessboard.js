var size = 8;

for (y=1; y<=size; y++) {
  var square;
  var line = "";
for (x=1; x<=size; x++) {
    if (x % 2 == 0 && y % 2 !== 0 || y % 2 == 0 && x % 2 !== 0) {
      square = "#";
    } else {
      square = " ";
    }
line += square;
 }
 console.log(line + "\n");
}


var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);