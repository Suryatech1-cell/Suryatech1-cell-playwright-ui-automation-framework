# Playwright UI Automation Framework

A practical UI automation project built with **Playwright and TypeScript** using the **Page Object Model (POM)** design pattern.

The project uses **UI Testing Playground** to automate common and challenging browser scenarios such as dynamic UI interactions, delayed responses, file uploads, JavaScript dialogs, login flows, and different element visibility states.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

## Test Coverage

The current test suite covers:

- **Button Click** – validates a browser-level click on a button designed to ignore DOM click events.
- **Text Input** – enters a value and verifies that the button text changes accordingly.
- **Client-Side Delay** – waits for dynamically generated content and validates the delayed response.
- **File Upload** – tests file upload using both `setInputFiles()` and the `filechooser` event.
- **JavaScript Alerts** – handles and validates a simple alert.
- **Confirmation Dialogs** – handles consecutive confirmation dialogs and validates their messages.
- **Prompt Dialogs** – enters a value into a prompt and validates the following dialog.
- **Sample App Login** – performs a successful login using valid credentials and validates the welcome message.
- **Element Visibility** – validates multiple hidden states including `visibility: hidden`, `display: none`, removed elements, zero-width elements, `opacity: 0`, and an overlapped/non-actionable element.

## Project Structure

```text
playwright-ui-automation-framework/
│
├── Homepage.ts
├── Clickpage.ts
├── textinputpage.ts
├── client_delay_page.ts
├── Fileupload_page.ts
├── Alertspage.ts
├── sampleapp.ts
├── Visibilitypage.ts
├── Test.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

Each page class contains the locators and reusable actions for its corresponding UI Testing Playground page, while `Test.spec.ts` contains the test scenarios and assertions.

## Key Playwright Concepts Demonstrated

- Page Object Model
- Role-based and CSS locators
- Web-first assertions
- Playwright auto-waiting
- Custom assertion timeouts
- iframe interaction with `frameLocator`
- File upload handling
- File chooser event handling
- JavaScript alert, confirm, and prompt dialogs
- Consecutive dialog handling
- `expect.poll()` for asynchronous state validation
- CSS property validation
- Element visibility assertions
- Actionability checks with trial clicks
- Login form automation

## Prerequisites

Install:

- Node.js
- npm
- Playwright

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd playwright-ui-automation-framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run in debug mode:

```bash
npx playwright test --debug
```

Run a specific test file:

```bash
npx playwright test Test.spec.ts
```

## HTML Report

Open the Playwright HTML report after execution:

```bash
npx playwright show-report
```

## Application Under Test

The automation scenarios use **UI Testing Playground**, a website designed for practicing UI automation challenges.

`http://www.uitestingplayground.com/`

## Design Approach

The framework separates page interaction logic from test validation by using Page Object Model classes.

For example:

```text
Test.spec.ts
     ↓
Page Object
     ↓
Locators and Actions
     ↓
UI Testing Playground
```

This keeps test scenarios easier to read and makes page interactions reusable across tests.

## Learning Objectives

This project was created to strengthen practical Playwright and TypeScript automation skills, with particular focus on:

- Building maintainable Page Objects
- Choosing stable locators
- Handling asynchronous UI behaviour
- Working with dialogs and browser events
- Testing if elements are visible, hidden, transparent, removed, or overlapped
- Using Playwright assertions instead of unnecessary hard-coded waits

## Future Enhancements

Planned improvements include:

- Additional UI Testing Playground scenarios
- Cross-browser execution
- Test data separation
- Custom fixtures
- CI/CD integration
- Screenshots and traces on failure
- Improved reporting
- Parallel execution

## Author

Created as a practical Playwright + TypeScript UI automation project for hands-on QA automation learning and framework development.
