function greetMessage(str) {
  console.log("Good Morning,", str);
}

greetMessage("John"); // print "Good Morning, John"

function greetUsers(arr, cb) {
  arr.forEach((item) => {
    // console.log(item);
    cb(item);
  });
}

greetUsers(["John", "Peter", "Mark"], greetMessage);
// "Good Morning, John"
// "Good Morning, Peter"
// "Good Morning, Mark"
