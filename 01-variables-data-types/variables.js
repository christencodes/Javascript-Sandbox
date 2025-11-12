console.log(100);
// Console is an object
// An Object has Methods

//String - 'hello' / "world"
console.log("Hello World");

//variables
// const variable called 'x' ; assigned the value 100
const x = 100;
console.log(x);

//Console Alerts
// red
console.error("Alert");
// yellow
console.warn("Warning");

//Console Tables
//takes objects (key/value pairs and prints them in table format to the console)
console.table({ name: "Chris", email: "Chris@chris.com" });

//console group
//creates a group of logs
console.group("Test Logs");
console.log(x);
console.warn("Warning");
console.error("Alert");

//Ends Previous Group so that the new group isn't appended as a child
console.groupEnd();

//Creates a group that's collapsed in the console
console.groupCollapsed("Test 2");
console.log("a");
console.log("b");
console.log("c");
console.groupEnd();

//Styles can be inserted into strings and assigned to variables
const styles = "padding: 10px; background-color: white ; color: green";

//The styles can be applied to console logs by using the console.log(%c'Data', stylesVariable)
console.log("%cHello World", styles);
