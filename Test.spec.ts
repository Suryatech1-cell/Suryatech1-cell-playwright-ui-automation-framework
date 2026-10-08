import {expect, Page, test} from '@playwright/test'
import { homepage } from './Homepage';
import { clickpage } from './Clickpage';
import { textinputpage } from './textinputpage';
import { clientdelay } from './client_delay_page';
import { fileupload } from './Fileupload_page';
import { alerts_class } from './Alertspage';
import { sample_app_class } from './sampleapp';
import { visibility_class } from './Visibilitypage';

test('should perform basic button click successfully', async ({ page }) => {

    const home = new homepage(page);
    const click_page = new clickpage(page)
    await home.open()
    await home.open_clickpage()
    await expect(page).toHaveURL("http://www.uitestingplayground.com/click")
    await click_page.Perform_click_operation()
 
 });

test('should update button text based on input value', async ({ page }) => {

    const home = new homepage(page);
    const text_inputpage = new textinputpage(page);
    await home.open()
    await home.open_textlinkpage()
    await expect(page).toHaveURL('http://www.uitestingplayground.com/textinput')
    await text_inputpage.fill_and_click()
    await expect(text_inputpage.changingbutton).toHaveText(text_inputpage.val)
})

test('Should wait for the delayed response', async ({page}) => {

    const home= new homepage(page);
    const click_delay = new clientdelay(page);
    await home.open()
    await home.open_clinet_delay_page()
    await click_delay.click_wait_for_delayed_response()
    await expect(page).toHaveURL('http://www.uitestingplayground.com/clientdelay')
    await expect(page.getByText('Data calculated on the client side.')).toBeVisible({timeout:150000})
})

test('Should check fileupload is success', async ({ page }) => {

    const home = new homepage(page)
    const file_upload = new fileupload(page)
    const filepath = 'C:\\MSC_CYBERSECURITY\\Python_for_JOB\\typescript\\Resume.pdf'

    await home.open()
    await home.open_file_upload_page()
    await file_upload.uploadfileaction(filepath)
    await expect(page.frameLocator('iframe[src="/static/upload.html"]').getByText('Resume')).toBeVisible({timeout:15000})
})

test('Should check fileupload using event Listener', async ({ page }) => {
     const home = new homepage(page)
     const file_upload = new fileupload(page)
     const filepath = 'C:\\MSC_CYBERSECURITY\\Python_for_JOB\\typescript\\Resume.pdf'

     await home.open()
     await home.open_file_upload_page()
     const file_eventlistener = page.waitForEvent('filechooser');
     await file_upload.browserfileaction();
     const eventresult = await file_eventlistener;
     await eventresult.setFiles(filepath)
     await expect(page.frameLocator('iframe[src="/static/upload.html"]').getByText('Resume')).toBeVisible({timeout:15000})
})

test('should display and accept a simple alert', async ({ page }) => {
    const home = new homepage(page)
    const alert = new alerts_class(page)
    await home.open()
    await home.open_alerts_page()
    await expect(page).toHaveURL('http://www.uitestingplayground.com/alerts')
    page.once('dialog', async dialog =>{
        await expect(dialog.message()).toBe('Today is a working day.\nOr less likely a holiday.')
        await dialog.accept()
    })
    await alert.alertaction()

})

test('should handle consecutive confirmation dialogs', async ({ page }) => {
    const home = new homepage(page)
    const alert = new alerts_class(page)
    let dialog_count = 0

    await home.open()
    await home.open_alerts_page()
    page.on('dialog', async dialog =>{
    dialog_count++

        if (dialog_count === 1){
            console.log('First dialog Message - ', dialog.message())
             expect(dialog.message()).toBe('Today is Friday.\nDo you agree?')
            await dialog.accept()
        }

        else if(dialog_count === 2){
            console.log('Second dialog message -', dialog.message())
            expect(dialog.message()).toBe('Yes')
            await dialog.accept()
        }
    })
    await alert.confirmaction()
    await expect.poll(()=> dialog_count).toBe(2)
})

test('should enter a value and handle consecutive prompt dialogs', async ({ page }) => {
    const home = new homepage(page)
    const alert = new alerts_class(page)
    await home.open()
    await home.open_alerts_page()
    expect(page).toHaveURL('http://www.uitestingplayground.com/alerts')
    let dialog_count = 0
    page.on('dialog', async dialog => {
    dialog_count++
        if (dialog_count == 1){
            console.log(dialog.message())
            dialog.accept('cats')
        }
        else if (dialog_count == 2 ){
            expect(dialog.message()).toBe('User value: cats')
            dialog.accept()
        }
    })
    await alert.promptaction()
    await expect.poll(() => dialog_count).toBe(2)

})

test('should login successfully with valid credentials', async ({page}) => {
    const home = new homepage(page)
    const sample_app = new sample_app_class(page)
    await home.open()
    await home.open_sample_app()
    await expect(page).toHaveURL('http://www.uitestingplayground.com/sampleapp')
    await sample_app.fill_credentials('user1','pwd')
    await sample_app.submit()
    await expect(page.getByText('Welcome, user1!')).toBeVisible({timeout: 15000})
})

test('should validate element visibility after clicking Hide', async ({page}) => {
    const home = new homepage(page)
    const visibility = new visibility_class(page)
    await home.open()
    await home.open_visibility()
    await expect(page).toHaveURL('http://www.uitestingplayground.com/visibility')
    await expect(visibility.visibility_hidden).toBeVisible()
    await expect(visibility.opacity).toBeVisible()
    await expect(visibility.displaynone).toBeVisible()
    await expect(visibility.removed).toBeVisible()
    await expect(visibility.zerowidth).toBeVisible()
    await expect(visibility.overlapped).toBeVisible()
    
// Hide Action triggered
    await visibility.hide_action()
    await expect(visibility.visibility_hidden).toBeHidden()
    await expect(visibility.opacity).toHaveCSS('opacity','0')
    await expect(visibility.displaynone).toBeHidden()
    await expect(visibility.removed).toBeHidden()
    await expect(visibility.zerowidth).toBeHidden()
    let error = true
    try {
        await visibility.overlapped.click({trial: true, timeout: 2000})
    } catch {
        error = false
    }
        expect(error).toBe(false)

} )