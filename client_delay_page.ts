import {Page, Locator} from '@playwright/test'

export class clientdelay{
        readonly page: Page;
        readonly client_delay_button: Locator;

    constructor(page: Page){
        this.page = page;
        this.client_delay_button = this.page.getByRole('button',{name : 'Button Triggering Client Side Logic'})

    }

    async click_wait_for_delayed_response(){
        await this.client_delay_button.click()
    }
}