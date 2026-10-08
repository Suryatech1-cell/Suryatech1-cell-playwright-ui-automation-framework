import {Page, Locator} from '@playwright/test'

export class alerts_class{
    readonly page: Page;
    readonly alertbutton: Locator;
    readonly confirmbutton: Locator;
    readonly promptbutton: Locator;

    constructor(page : Page){
        this.page = page;
        this.alertbutton = this.page.getByRole('button',{name: 'Alert'})
        this.confirmbutton = this.page.getByRole('button',{name: 'Confirm '})
        this.promptbutton = this.page.getByRole('button', {name: 'Prompt'})
    }

    async alertaction(){
        await this.alertbutton.click()
    }

    async confirmaction(){
        await this.confirmbutton.click()
    }
    async promptaction(){
        await this.promptbutton.click()
    }

}