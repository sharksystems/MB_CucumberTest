import BasePage from './basepage.js';

class LoginPage extends BasePage {

    get usernameInput() {
        return $('#user-name');
    }
    get passwordInput() {
        return $('#password');
    }
    get loginSubmitBtn() {
        return $('#login-button');
    }
    loginErrorMsgContaining(errorMsg) {
        return $(`//div[@class='error-message-container error' and contains(.,${errorMsg})]`);
    }

    async clickLoginSubmitBtn() {
        await this.loginSubmitBtn.click();
    }

    open () {
        return super.open('');
    }
}
export default LoginPage;
