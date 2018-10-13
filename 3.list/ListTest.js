var List = require('./List');
var ArrayList = require('./ArrayList');
//import "./List";


console.log('ArrayList prototype : ');
console.log(List.prototype);//undefined

var names = new ArrayList();
console.log(names);

names.append("yjs");
names.append("bkk");
names.append("yks");
names.append("kse");

console.log(names.toString);
