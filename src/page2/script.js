import _ from 'lodash';

console.log(_.join(["loadash", "module", "loaded!"], " "));

console.log("calling from page2");
console.log(document.getElementsByTagName("h1"));