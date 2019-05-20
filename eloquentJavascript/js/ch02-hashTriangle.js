var hash = "#";
for(i=0; i<=6; i++) {
  console.log(hash);
  hash += "#";
}
//Given Solution:

for (var line = "#"; line.length < 8; line += "#")
  console.log(line);