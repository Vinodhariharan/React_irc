//iterate through an array of names and performing a specific operation for each element

//using for loop
const names = ["Alice", "Bob", "Charlie", "David"];

for (let i = 0; i < names.length; i++) {
  console.log("Hello, " + names[i] + "!");
}

//using for each loop

names.forEach(function(name) {
  console.log("Hello, " + name + "!");
});