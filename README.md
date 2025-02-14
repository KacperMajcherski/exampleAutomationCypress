This is a Cypress test automation framework used to run automated tests for automationexercise.com site.

The project is made with the use of the Page Object Model. 
All objects are being kept in concrete page classes, to ensure their reusability in different tests and the possibility to easily modify them.

How to use:

    1. Installation:
        1) First, download and install VisualStudioCode and Git. -> https://code.visualstudio.com/ , https://git-scm.com/
        2) Then, open it and install node.js. -> https://docs.cypress.io/app/get-started/install-cypress#Installing-Nodejs
        3) After that, install Cypress. -> In VSCode, open the Terminal and run the command: npm install cypress --save-dev
        4) Install other libraries used in the project. -> npm install cypress-wait-until --save-dev , npm install cypress-iframe --save-dev

    2. Cloning the Project from the remote repository to your local machine:
        1) Open VSCode
        2) In the VSCode Terminal, run the command: git clone https://github.com/KacperMajcherski/exampleAutomationCypress.git

    3. Using the Project:
        1) In the VSCode Terminal, run the command: npx cypress open -> this will initialize Cypress
        2) In order to run all the tests at once, run the command: npx cypress run
        3) In order to select which specific test to run, run the command: npx cypress open. Then, select "E2E Testing" and select the browser.
        4) Click on the test (so-called "spec") you want to run and enjoy.

        Running tests using the "npx cypress run" command is configured so all tests are run within a specific order. More info: cypress.config.js

    4. Making changes to the Project:
        1) After cloning the Project, make sure you are currently on the "main" branch, then create a new branch using the command: git checkout -b <NEW_BRANCH_NAME>
        2) Make the changes you wish to make on the new local branch. Stick to the Page Object Model rules, use reusable methods and elements.
        3) TEST THE CHANGES! Fix your code if you get any errors.
        4) Save all changes using File -> Save All.
        5) Run the commands: git add . , git commit (then, in the notepad file that pops up, enter the commit name), git push --set-upstream <NEW_BRANCH_NAME> 
        6) Open the Porject in bitbucket and create a Pull Request from your branch to "main".
        7) Wait for some responsible person to review your code and merge it into the "main" branch. :)

In case of any questions, feel free to contact Kacper Majcherski.