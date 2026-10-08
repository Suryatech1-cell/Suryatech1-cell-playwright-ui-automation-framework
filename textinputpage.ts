import { Locator, Page } from '@playwright/test'

export class textinputpage{
        readonly page: Page
        readonly textfield: Locator
        readonly changingbutton: Locator 
        readonly val: string = 'reboot'

    constructor (page: Page){
        this.page = page;
        this.textfield = this.page.getByPlaceholder('MyButton')
        this.changingbutton = this.page.locator('#updatingButton')
    }

    async fill_and_click(){
        
        await this.textfield.fill(this.val);
        await this.changingbutton.click()

    }

}