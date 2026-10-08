import {Page, Locator} from '@playwright/test'
export class visibility_class{
    readonly page:Page;
    readonly Hide: Locator;
    readonly visibility_hidden: Locator;
    readonly opacity: Locator;
    readonly displaynone: Locator;
    readonly removed: Locator;
    readonly zerowidth: Locator;
    readonly overlapped: Locator;
    readonly overlapping_element: Locator;
    
    constructor(page:Page){
        this.page = page
        this.Hide = this.page.getByRole('button',{name : 'Hide', exact: true} )
        this.visibility_hidden = this.page.getByRole('button',{name: 'Visibility Hidden',exact: true})
        this.opacity = this.page.getByRole('button',{name : 'Opacity 0', exact: true})
        this.displaynone = this.page.getByRole('button' ,{name: 'Display None', exact :true})
        this.removed = this.page.getByRole('button' ,{name: 'Removed', exact :true})
        this.zerowidth = this.page.getByRole('button' ,{name: 'Zero Width', exact :true})
        this.overlapped = this.page.getByRole('button' ,{name: 'Overlapped', exact :true})
        this.overlapping_element = this.page.locator('#hidingLayer')
    }

    async hide_action(){
        this.Hide.click()
    }
}