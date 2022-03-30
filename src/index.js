import _ from 'lodash';
import appName from './app';
import './css/common.scss';

console.log(appName);

console.log(5 + 6);

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
