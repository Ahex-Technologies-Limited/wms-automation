import { expect } from '@wdio/globals';
import createaccount from '../pageobjects/create-account.page';



describe('Create-account Regression', () => {
    it.only('TC001 Verify ', async () => {
        // Open the registration page
        await createaccount.open();
        // Fill in the registration form
        await createaccount.register(
            'John Doe',
            'TechCompany',
            'john.doe@example.com',
            '+1234567890',
            'techcompany.com',
            'Password123!',
            'Password123!'
        );

        // Validate that reCAPTCHA error message is displayed
        await expect(createaccount.recaptchaError).toBeDisplayed(), { timeout: 5000 };
        await expect(createaccount.recaptchaError).toHaveTextContaining('Invalid domain for site key');
    })



})
