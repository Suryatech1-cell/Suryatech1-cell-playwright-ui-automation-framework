import {Locator, Page} from '@playwright/test'

export class fileupload {
        readonly page: Page;
        readonly filelocator: Locator;
        readonly browsefiles: Locator;

        constructor(page: Page ){
            this.page = page;
            this.filelocator = this.page.frameLocator('iframe[src="/static/upload.html"]').locator('input[type="file"]');
            this.browsefiles = this.page.frameLocator('iframe[src="/static/upload.html"]').getByText('Browse files');
        }

        async uploadfileaction(filename: string){
            this.filelocator.setInputFiles(filename)
        }

        async browserfileaction(){
            await this.browsefiles.click()
        }

}