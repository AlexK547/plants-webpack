import htmlToElement from '../utils/htmlToElement';

import Main from './index.html';
import './index.scss';
import MainWelcome from '../MainWelcome';
import MainAbout from '../MainAbout';
import MainService from '../MainService';
import MainPrices from '../MainPrices';
import MainContacts from '../MainContacts';

const main = htmlToElement(Main);
main.appendChild(MainWelcome);
main.appendChild(MainAbout);
main.appendChild(MainService);
main.appendChild(MainPrices);
main.appendChild(MainContacts);

export default main;