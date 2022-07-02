import _ from 'lodash';
import CSVData from './data.csv';
import JSONData from './data.json';
import XMLData from './data.xml';
import Icon from './icon.png';
import './style.css';

function component() {
    const element = document.createElement('div');

    // lodash imported above
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // add image
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(CSVData, XMLData, JSONData);

    return element;
}

document.body.appendChild(component());