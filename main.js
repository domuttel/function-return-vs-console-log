function gone() {
  console.log("Bye");
}

function here() {
  return "Hello";
}

if (gone() === undefined) {
  console.log("this is not a return because return always gives a value");
} else {
  console.log("this is return because return will never be undefined");
}

if (here() === undefined) {
  console.log("this is not a return because return always gives a value");
} else {
  console.log("this is return because return will never be undefined");
}
