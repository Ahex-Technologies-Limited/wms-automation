import { expect, browser } from '@wdio/globals';
import CreateAccountPage from '../pageobjects/create-account.page';
import { create } from 'domain';


    describe('Create Account Functionality', function () {
        beforeEach(async function () {
            await CreateAccountPage.open();
        });

        afterEach(async function () {
            await browser.deleteCookies();
        });

        it('TC001 Verify that the Create Account form should display with all the fields', async function () {
            await expect(await CreateAccountPage.fullNameField.waitForDisplayed({ timeout: 60000 })).toBe(true);
            await expect(await CreateAccountPage.companyNameField.waitForDisplayed({ timeout: 60000 })).toBe(true);
            await expect(await CreateAccountPage.emailAddressField.waitForDisplayed({ timeout: 60000 })).toBe(true);
            await expect(await CreateAccountPage.phoneNumberField.waitForDisplayed({ timeout: 60000 })).toBe(true);
            await expect(await CreateAccountPage.domainNameField.waitForDisplayed({ timeout: 60000 })).toBe(true);
            await expect(await CreateAccountPage.passwordField.waitForDisplayed({ timeout: 60000 })).toBe(true);
            await expect(await CreateAccountPage.confirmPasswordField.waitForDisplayed({ timeout: 60000 })).toBe(true);
            await expect(await CreateAccountPage.signUpButton.waitForDisplayed({ timeout: 60000 })).toBe(true);
        });

        it('TC002 Verify the SignUp functionality with valid credentials', async function () {
            await CreateAccountPage.register(
                'John Doe',
                'TechCompany',
                'john.doe@example.com',
                '2345678912',
                'domainName',
                'Password@123',
                'Password@123'
            );
            await CreateAccountPage.selectModuleTitle. waitForDisplayed({
                timeout: 10000, 
                timeoutMsg: 'Element was not visible after 5 seconds'
            });
           
            // Validate successful form submission
            await expect(await CreateAccountPage.selectModuleTitle.isDisplayed()).toBe(true);
        });

        it('TC003 Verify that an error message should display for invalid email format', async function () {
            await CreateAccountPage.emailInput.setValue("invalid-email");

            // Validate that email format error message is displayed
            await expect(await CreateAccountPage.emailAddressError.isDisplayed()).toBe(true);
            await expect(await CreateAccountPage.emailAddressError.getText()).toContain('Please enter a valid email address');
        });

        it('TC004 Verify that an error message should display for short password', async function () {
            await CreateAccountPage.passwordInput.setValue('short');
             
           

            const passwordError = await $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(6) > app-validation-error > div > small');
            await expect(await passwordError.isDisplayed()).toBe(true);
            await expect(await CreateAccountPage.passwordError.getText()).toContain('Please ensure your password is at least 8 characters long and includes an uppercase letter, a lowercase letter, a number, and a special character');
        });

       
        it('TC005 Verify that an error message should display for empty fields', async function () {
            await CreateAccountPage.register(
                '',
                '',
                '',
                '',
                '',
                '',
                ''
            );

            // Validate that error messages are displayed for required fields
           // const fullnameError = await $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(1) > app-validation-error > div > small'); 
            const companyNameError = await $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(2) > app-validation-error > div > small'); 
            const emailAddressError = await $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(3) > app-validation-error > div > small');
            const phoneNumberError = await $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(4) > app-validation-error > div > small');
            const domainNameError = await $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(5) > app-validation-error > div > small'); 
            const passwordError = await $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(6) > app-validation-error > div > small'); 
            const confirmPasswordError = await $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(7) > div.error_message.ng-star-inserted > div'); 
            // await   createAccountPage.fullnameError.waitForDisplayed({
            //     timeout: 10000, 
            //     timeoutMsg: 'Element was not visible after 5 seconds'
            // });
            // await expect(await fullnameError.isDisplayed()).toBe(true);
            

            await expect(await companyNameError.isDisplayed()).toBe(true);
            await expect(await emailAddressError.isDisplayed()).toBe(true);
            await expect(await phoneNumberError.isDisplayed()).toBe(true);
            await expect(await domainNameError.isDisplayed()).toBe(true);
            await expect(await passwordError.isDisplayed()).toBe(true);
            await expect(await confirmPasswordError.isDisplayed()).toBe(true);
        });

        it('TC006 Verify that it should show an error message for mismatched passwords', async function () {
           
            await CreateAccountPage.passwordInput.setValue("password12");
            // Validate that password mismatch error message is displayed
            await expect(await CreateAccountPage.passwordError.isDisplayed()).toBeTruthy();
            await expect(await CreateAccountPage.passwordError.getText()).toContain('Please ensure your password is at least 8 characters long and includes an uppercase letter, a lowercase letter, a number, and a special character');
        });

        it('TC007 Verify it should show an error message for invalid phone number', async function () {
            await CreateAccountPage.phoneInput.setValue("invalid-phone"
                
            );

            // Validate that phone number error message is displayed
            const phoneError = await $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(4) > app-validation-error > div > small');
            expect(await phoneError.isDisplayed()).toBe(true);
            expect(await phoneError.getText()).toContain('Please enter a valid phone number');
        });

        it('TC008 Verify it should show an error message for already registered email', async function () {
            await CreateAccountPage.register(
                'John Doe',
                'TechCompany',
                'supriyasahoo1399@gmail.com',
                '2345678912',
                'domainNameabc',
                'Password@123',
                'Password@123'
            );
            await   CreateAccountPage.emailError.waitForDisplayed({
                timeout: 20000, 
                timeoutMsg: 'Element was not visible after 5 seconds'
            });
            // Validate that already registered email error message is displayed
            const emailError = await $('//p-toast-detail');
           await  expect(await emailError.isDisplayed()).toBe(true);
          await   expect(await emailError.getText()).toContain('Email already exists');
        });

        it('TC009 Verify that the form should reset after successful submission', async function () {
            await CreateAccountPage.register(
                'John Doe',
                'TechCompany',
                'john.doe@example.com',
                '+1234567890',
                'techcomp',
                'Password@123!',
                'Password@123!'
            );

            // Validate successful form submission
            await expect(await CreateAccountPage.successMessage.isDisplayed()).toBe(true);

            // Validate that the form fields are reset
            await expect(await CreateAccountPage.fullNameField.getValue()).toBe('');
            await expect(await CreateAccountPage.companyNameField.getValue()).toBe('');
            await expect(await CreateAccountPage.emailAddressField.getValue()).toBe('');
            await expect(await CreateAccountPage.phoneNumberField.getValue()).toBe('');
            await expect(await CreateAccountPage.domainNameField.getValue()).toBe('');
            await expect(await CreateAccountPage.passwordField.getValue()).toBe('');
            await expect(await CreateAccountPage.confirmPasswordField.getValue()).toBe('');
        });

        it('TC010 Verify that the form should not submit with invalid domain name', async function () {
            await CreateAccountPage.domainNameInput.setValue('invalid domain name'
            );

            // Validate that domain name error message is displayed
            const domainError = await $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(5) > app-validation-error > div > small');
            expect(await domainError.isDisplayed()).toBe(true);
            expect(await domainError.getText()).toContain('Please enter a valid domain name');
        });
    });
