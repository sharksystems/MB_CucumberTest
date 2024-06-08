import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^User is located on the (\w+) page of the saucedemo website$/, async function(page) {
    await this[`${page}Page`].open();
});

When(/^User clicks on the "Login" Button$/, async function() {
    await this.loginPage.clickLoginSubmitBtn();
});

Then(/^User should see the (.*) error message$/, async function(message) {
    await expect(this.loginPage.loginErrorMsgContaining(message)).toBeDisplayed();
});