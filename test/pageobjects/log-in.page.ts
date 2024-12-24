import Page from './page';
import { $ } from '@wdio/globals';

class LoginPage extends Page {
    public get emailField() {
        return $('#email'); 
    }

    public get passwordField() {
        return $('body > app-root > app-login > div > div.login-right.relative > div > form > div:nth-child(2) > div > input');
    }

    public get loginButton() {
        return $('body > app-root > app-login > div > div.login-right.relative > div > form > div.field.col-12'); 
    }

    public get forgotPasswordLink() {
        return $('/html/body/app-root/app-login/div/div[2]/div/form/div[2]/a'); 
    }

    public get createAccountLink() {
        return $('/html/body/app-root/app-login/div/div[2]/div/div/a');
    }
    public get selectWarehousePage() {
        return $('body > app-root > app-secondlayout > app-warehouse > div > div > div > div > div > button');
    }
    public get addWarehouseButton() {
        return  $('body > app-root > app-secondlayout > app-warehouse > div > div > div > div > div > button');
    }
    public async open() {
        await browser.url('/'); 
        await browser.url('/#/auth/login'); 
    }

    public async login(email: string, password: string) {
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();