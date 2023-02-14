import htmlToElement from '../utils/htmlToElement';

import Main from './index.html';
import './index.scss';
import MainWelcome from '../MainWelcome';

const main = htmlToElement(Main);
main.appendChild(MainWelcome);

export default main;