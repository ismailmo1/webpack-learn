import _ from 'lodash';
import '../another-module';
import './style.css';

console.log(_.join(["loadash", "module", "loaded!"], " "));

console.log("calling from page1");
console.log(document.getElementsByTagName("h1"));