import { Page, Locator } from '@playwright/test'

export class clickpage {
    readonly page: Page;
    readonly click_button: Locator;

    constructor (page : Page) {
        this.page = page;
        this.click_button = this.page.getByRole('button', { name: 'Button That Ignores DOM Click Event'})
    }

    async Perform_click_operation() {
        await this.click_button.click()
    }

}