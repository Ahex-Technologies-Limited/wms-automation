import Page from './page';
import { $ } from '@wdio/globals'
/**
 * Sub page containing specific selectors and methods for the registration page
 */
class createaccount  extends Page {

    
    /**
     * Define selectors using getter methods
     */
    public get fullNameField() {
        return $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(1) > div > input'); 
    }
    public get companyNameField() {
        return $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(2) > div > input'); 
    }
    public get emailAddressField() {
        return $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(3) > div > input'); 
    }
    public get phoneNumberField() {
        return $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(4) > div > div > input'); 
    }
    public get domainNameField() {
        return $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(5) > div > input'); 
    }
    public get passwordField() {
        return $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(6) > div > input'); 
    }
    public get confirmPasswordField() {
        return $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(7) > div.card.flex > input'); 
    }

    public get successMessage() {
        return $('body > app-root > p-toast > div > p-toastitem > div > div > div > div.p-toast-detail.ng-tns-c3576075022-34'); 
    }
    public get emailError() {
        return $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(3) > app-validation-error > div > small'); 
    }
    public get passwordError() {
        return $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(6) > app-validation-error > div > small'); 
    }
    public get confirmPasswordError() {
        return $('#email'); 
    }

      

    public get fullNameInput() {
        return $('//input[ @formcontrolname="fullName" ]');
    
    }

    public get companyNameInput() {
        return $('//input[ @formcontrolname="companyName" ]');
    }

    public get emailInput() {
        return $('//input[ @formcontrolname="email" ]');
    }

    public get phoneInput() {
        return $('//input[@formcontrolname="phoneNumber" and @placeholder="Enter phone number"]');
    }

    public get domainNameInput() {
        return $('//input[@formcontrolname="domainName" and @placeholder="Enter domain name"]');
    }
    public get passwordInput() {
        return $('//input[@formcontrolname="password" and @placeholder="Enter your password"]');
    
    }

    public get confirmPasswordInput() {
        return $('//input[@formcontrolname="confirmPassword" and @placeholder="Confirm your password"]');
    
    }

    
    public get selectModulepage() {
        return $('body > app-root');
    }   

    public get signUpButton() {
      
        return $('//div[@class="field col-12"]//button[@type="submit" and contains(@class, "button_add")]');
    
    }
    
    public get fullnameError() {
        return $('');  
    }
    public get companyNameError() {
        return $('/html/body/app-root/app-register/div/div[2]/div/form/div[1]/app-validation-error/div/small'); 
    }
    public get emailAddressError() {
        return $('//div[contains(@class, "error_message")]'); 
    }
    public get phoneNumberError() {
        return $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(4) > app-validation-error > div > small');  
    }
    public get domainNameError() {
        return $('body > app-root > app-register > div > div.register-right.relative > div > form > div:nth-child(5) > app-validation-error > div > small');  // Assuming this is the class for reCAPTCHA error message
    }
    public get selectModuleTitle() {
        return $('//h2[text()="Select a Module"]');
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
        await this.signUpButton.waitForDisplayed({
            timeout: 10000, 
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
        
        // await (await this.fullNameInput).isDisplayed();
        // await (await this.companyNameInput).isDisplayed();
        // await (await this.emailInput).isDisplayed();
        // await (await this.phoneInput).isDisplayed();
        // await (await this.domainNameInput).isDisplayed();
        // await (await this.passwordInput).isDisplayed();
        // await (await this.confirmPasswordInput).isDisplayed();
        // await this.fullNameInput.clearValue();
        // await this.companyNameInput.clearValue();
        // await this.emailInput.clearValue();
        // await this.phoneInput.clearValue();
        // await this.domainNameInput.clearValue();
        // await this.passwordInput.clearValue();
        // await this.confirmPasswordInput.clearValue();
       // await this.signUpButton.click();
       // await this.fullnameError.isDisplayed();
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
//     public async open() {
//         await super.open('/#/auth/register');
//     }
async open(): Promise<void> {
    await browser.url(`http://143.244.132.143:8200/#/auth/register`);
}
 }

export default new createaccount();

