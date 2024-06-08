import { setWorldConstructor } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';

class CustomWorld {

    constructor() {
        this.loginPage = new LoginPage();
    }
}
setWorldConstructor(CustomWorld);