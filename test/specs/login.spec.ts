import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/log-in.page';
import { waitElementIsVisible, waitPageToLoad } from '../helpers/web';
// import { describe, it } from 'mocha';


describe('Login Functionality', function () {
    beforeEach(async function () {
        await LoginPage.open();
    });
    afterEach(async function () {
        await browser.deleteCookies();

    });

    it('TC001 Verify it should display the login form', async function () {
        await LoginPage.emailField.waitForDisplayed({ timeout: 5000 });
        await LoginPage.passwordField.waitForDisplayed({ timeout: 5000 });
        await LoginPage.loginButton.waitForDisplayed({ timeout: 5000 });
        await LoginPage.forgotPasswordLink.waitForDisplayed({ timeout: 5000 });
        await LoginPage.createAccountLink.waitForDisplayed({ timeout: 5000 });

        // await expect(await LoginPage.emailField.isDisplayed()).toBeTruthy();
        // await expect(await LoginPage.passwordField.isDisplayed()).toBeTruthy();
        // await expect(await LoginPage.loginButton.isDisplayed()).toBeTruthy();
        // await expect(await LoginPage.forgotPasswordLink.isDisplayed()).toBeTruthy();
        // await expect(await LoginPage.createAccountLink.isDisplayed()).toBeTruthy();
    });

    it('TC002 Verify it should login with valid credentials', async function () {
        await LoginPage.login('supriyasahoo1399@gmail.com', 'Supriya@12');
        //await waitElementIsVisible(await LoginPage.addWarehouseButton);

        await LoginPage.addWarehouseButton.waitForDisplayed({
            timeout: 10000,
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
        //await waitPageToLoad();
        await expect(await LoginPage.addWarehouseButton.isDisplayed()).toBeTruthy();
    });
    it('TC003 Verify it should show an error message for invalid email format', async function () {
        await LoginPage.login('invalid-email', 'Supriya@12');


        const emailError = await $('body > app-root > app-login > div > div.login-right.relative > div > form > div:nth-child(1) > app-validation-error > div > small'); // Replace with actual selector for email error message
        await expect(await emailError.isDisplayed()).toBeTruthy();
        await expect(await emailError.getText()).toContain('Please enter a valid email address');
    });

    it('TC004 Verify it should show an error message for incorrect password', async function () {
        await LoginPage.login('supriyasahoo1399@gmail.com', 'wrongpassword');



        const passwordError = await $('body > app-root > app-login > p-toast > div > p-toastitem > div > div'); // Replace with actual selector for password error message
        await passwordError.waitForDisplayed({
            timeout: 10000,
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
        await expect(await passwordError.isDisplayed()).toBeTruthy();
        await expect(await passwordError.getText()).toContain('Error: Invalid credentials.');
    });

    it('TC005 Verify it should navigate to create account page when create account link is clicked', async function () {
        await LoginPage.createAccountLink.click();

        const createAccountPageName = await $('body > app-root > app-register > div > div.register-right.relative > div > h2'); // Replace with actual selector for create account page
        await expect(await createAccountPageName.isDisplayed()).toBeTruthy();
    });

    it('TC006 verify it should show an error message for empty email and password fields', async function () {
        await LoginPage.login('', '');


        const emailError = await $('body > app-root > app-login > div > div.login-right.relative > div > form > div:nth-child(1) > app-validation-error > div > small');
        const passwordError = await $('body > app-root > app-login > div > div.login-right.relative > div > form > div:nth-child(2) > app-validation-error > div > small');
        await expect(await emailError.isDisplayed()).toBeTruthy();
        await expect(await emailError.getText()).toContain('Please enter email address');
        await expect(await passwordError.isDisplayed()).toBeTruthy();
        await expect(await passwordError.getText()).toContain('Please enter password');
    });
    it('TC007 Verify it should show an error message for unregistered email', async function () {
        await LoginPage.login('unregistered@example.com', 'Supriya@12');

        const unregisteredEmailError = await $('//p-toast');
        await unregisteredEmailError.waitForDisplayed({
            timeout: 10000,
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
        await expect(await unregisteredEmailError.isDisplayed()).toBeTruthy();
        await expect(await unregisteredEmailError.getText()).toContain('Invalid credentials');
    });

});