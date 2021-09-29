//* NODE USES COMMANJS BEHIND THE SCENES *//
//In CommanJS every file is a module by default
//Modules ==> encapsulated code (only share minimum)
const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-syntax");
require("./mind-grenade");

//sayHi("Alexis");
//sayHi(names.tarun);
//sayHi(names.varun);
