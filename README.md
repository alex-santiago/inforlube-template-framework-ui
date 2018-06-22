# inforlube-new-template-ui

## Folder Structure

![Image of Directory Tree](/support/tree.png)

## Folders Detailed

### ROOT

This is the root directory of the website. It contains the basic files needed to run the website. Description of the files in the root directory:

* index.html - website initial page responsible for configuring and loading the application
* LICENSE - MIT License for this website and its contents
* README.md - this document file
* update-site.sh - bash script file to automate the process to update another website with the newest files in the framework-template

### CSS

This folder contains the main css files used by the framework to override Bootstrap styles, as well add new styles to the framework. The main file **styles.css** is a compilation of other css files using a Sass compiler. The main file **\_styles.scss** is divided in separate section files with its own purpose. Custom styles that do not belong to the framework or that alters the framework behaviour should be added to a file called **custom.css**.

Only the compiled **styles.css** file and the **custom.css** should be referenced in a new project.

**\_styles.css Content:**

* \_alert-message.scss - customization to the alert message toast
* \_button-link.scss - customization to the buttons
* \_cards.scss - customization to the cards objects
* \_colors.scss - declaration of color variables overrides
* \_error-message.scss - error message customization
* \_form-button-actions.scss - customization for toolbar action buttons
* \_forms.scss - customization to form fields
* \_indicator-component.scss - indicator-component configurations
* \_main.scss - customizations applied to main elements of the framework
* \_sidebar.scss - customization of the sidebar items
* \_switch.scss - styles for the switch control object

### images

This folder contains all the image files used by the framework.

### JS

This folder contains the JavaScript necessary to configure and run the application. All the configurations for the application are stored in files inside the configuration subfolder. This means that the other files do not need to be modified to configure an new application.

Other than that the language subfolder contains files to provide dictionary and language localization support. They should be updated directly through the template files instead of each application.

**Configuration Directory Contents:**

* **controllers.js** - Api controllers definitions
* **host.js** - Api host address
* **language-config.js** - Language settings
* **menu-items.js** - Menu items specification
* **routes.js** - Api routes definition
* **session-config.js** - Session Object initialization
* **test-variables.js** - Configurations to test the application and debug information

**Language Directory Contents:**

* **dictionary.js** - Dictionary to translate words to pt-br
* **language.en.us.js** - Language pack for en-us localization
* **language.es.es.js** - Language pack for es-es localization
* **language.pt.br.js** - Language pack for pt-br localization

**Main Files**

* **ajax.js** - methods to process ajax api calls
* **app.js** - initializes the riot application
* **breadcrumb.js** - controls the behaviour of the breadcrumb control
* **charts.js** - controls charts control update
* **formvalidation.js** - form validation logic
* **globals.js** - global functions
* **menu.js** - menu logic
* **messages.js** - messages control logic
* **session.js** - session object

### PLUGINS

This folder contains all third-party software used by the framework. Each folder is organized in the following structure when possible:

``plugin-provider-name\plugin-version\plugin-files``

**Current Plugins:**

* **Bootstrap** - Css framework
* **Charts.js** - JavaScript library to create charts
* **DataTables** - Provides styling and functionality to display data using HTML tables
* **Font-awesome** - Font and icon toolkit based on CSS and LESS
* **JQuery** - jquery library
* **JQuery-Easing** - jquery library for easing JavaScript animations
* **Moment** - JavaScript library to manipulate date and time data
* **Morris.js** - JavaScript library to create charts
* **Raphael.js** - JavaScript library to support drawing of charts. Required by morris.js chart plugin
* **Riot** - JavaScript library used to create HTML components for the application
* **Spinjs** - JavaScript libary to create spining wheels when ajax calls are executing

### SUPPORT

This folder contains the framework documentation.

### TAGS

This folder contains the riot components created to run the application and the framework. The components folder contains reusable tags.

**Components:**

- modal: Modal window component. Look into modals.js how to use it

## How To

* [How to configure a Menu for the application](support/menu-config.md)
* [How to configure Form Validation](support/form-validation-config.md)
* How to display messages
