import { Page, Locator } from '@playwright/test'

export class homepage{
    page: Page;
    click_link: Locator;
    text_input: Locator;
    client_delay: Locator;
    File_upload: Locator;
    alerts : Locator;
    sample_app : Locator;
    visibility : Locator;

    constructor(page: Page){
        this.page = page;
        this.click_link = this.page.getByRole('link', {name:'Click' , exact: true});
        this.text_input = this.page.getByRole('link', {name:'Text Input',exact: true});
        this.client_delay = this.page.getByRole('link', {name:'Client Side Delay', exact: true});
        this.File_upload = this.page.getByRole('link',{ name: 'File Upload', exact: true});
        this.alerts = this.page.getByRole('link',{name: "Alerts", exact: true})
        this.sample_app = this.page.getByRole('link',{name: 'Sample App', exact: true})
        this.visibility = this.page.getByRole('link', {name : 'Visibility', exact: true})
    }

    async open(){
        await this.page.goto("http://www.uitestingplayground.com/")
    
    }
// THIS IS THE LINK FOR THE CLICK PAGE FROM HOME PAGE //
    async open_clickpage(){
        this.click_link.click()
    }
// THIS IS THE LINK FOR THE TEXT INPUT PAGE FROM HOME PAGE //
    async open_textlinkpage(){
        this.text_input.click()
    }
// THIS IS THE LINK FOR DELAYED RESPONSE GENERAL PAGE //
    async open_clinet_delay_page(){
        this.client_delay.click()
    }
    async open_file_upload_page(){
        await this.File_upload.click()
    }

    async open_alerts_page(){
        await this.alerts.click()
    }

    async open_sample_app(){
        await this.sample_app.click()
    }

    async open_visibility(){
        await this.visibility.click()
    }
       
}