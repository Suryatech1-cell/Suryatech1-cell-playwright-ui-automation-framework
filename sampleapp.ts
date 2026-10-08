import {Page, Locator} from '@playwright/test' 
export class sample_app_class{
    readonly page: Page;
    readonly username_field : Locator;
    readonly password_field : Locator;
    readonly login: Locator;

    constructor(page: Page){
        this.page = page
        this.username_field = this.page.getByPlaceholder('User name')
        this.password_field = this.page.getByPlaceholder('********')
        this.login = this.page.getByRole('button', {name: 'Log In'})
    }

    async fill_credentials(uname : string,password : string){
        await this.username_field.fill(uname);
        await this.password_field.fill(password);
    }
    async submit(){
        await this.login.click()
    }
}