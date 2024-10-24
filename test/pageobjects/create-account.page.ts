import Page from './page';
import { $ } from '@wdio/globals'
/**
 * Sub page containing specific selectors and methods for the registration page
 */
class createaccount  extends Page {
    /**
     * Define selectors using getter methods
     */
    public get fullNameInput() {
        return $('input[formcontrolname="fullName"]');
    
    }

    public get companyNameInput() {
        return $('input[formcontrolname="companyName"]');
    }

    public get emailInput() {
        return $('input[formcontrolname="email"]');
    }

    public get phoneInput() {
        return $('input[formcontrolname="phoneNumber"]');
    }

    public get domainNameInput() {
        return $('input[formcontrolname="domainName"]');
    }

    public get passwordInput() {
        return $('input[formcontrolname="password"]');
    }

    public get confirmPasswordInput() {
        return $('input[formcontrolname="confirmPassword"]');
    }

    public get recaptchaError() {
        return $('.rc-anchor-center-item.rc-anchor-error-message');  // Assuming this is the class for reCAPTCHA error message
    }

    public get signUpButton() {
        return $('input[type="submit"]');
    }

    /**
     * A method to encapsulate form filling action
     */
    public async register(
        fullName: string,
        companyName: string,
        email: string,
        phone: string,
        domain: string,
        password: string,
        confirmPassword: string
    ) {
        
        await this.fullNameInput.setValue(fullName);
        await this.companyNameInput.setValue(companyName);
        await this.emailInput.setValue(email);
        await this.phoneInput.setValue(phone);
        await this.domainNameInput.setValue(domain);
        await this.passwordInput.setValue(password);
        await this.confirmPasswordInput.setValue(confirmPassword);
        await this.signUpButton.click();
    }

    /**
     * Override the open method to point to the registration page
     */
    public open() {
        return super.open('/#/auth/register');
    }
}

export default new createaccount();

