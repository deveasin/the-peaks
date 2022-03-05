# Live Demo Link
Demo Link: https://peaks.deveasin.com/

# Local Installation process
```
1. git clone https://github.com/deveasin/the-peaks.git
2. cd the-peaks
4. npm install
5. npm start or yarn start
```
# Some testing
1. **Enable PWA service worker:** Plese go to the utils/config.js file. then add **pwa** value true. then It will active the service worker for PWA offline access

2. **Unit Test** : `npm run test`

## About folder structure and a short note
### In the `src` directory:

> **assets** folder, We have all static images and global CSS

> **components** folder, we have all components, that are unit building blocks for our app. In the component folder, there are three files: **1.** index.js - for component, **2.** index.scss - for css, **3.** index.test.js - for unit test

> **layouts** folder, we have layouts/section components like header, footer, articles, etc, these are composite components for using them in the pages. there are three files: **1.** index.js - for component, **2.** index.scss - for CSS

> **pages** folder, we have all pages component, we will use them for several pages like homepage, single page, bookmark page, search page, etc. there are three files: **1.** index.js - for component, **2.** index.scss - for CSS

> **Hooks** folder, we have all custom hooks for better reusability and clean code, such as useApi, useSticky, useObserber, useObserver, etc. All are made in custom.

> **utils** folder, we have some mixed helper things. **1.** api-endpoints file, for listing all of our API endpoints, **2.** config file, for all general configuration. Like: serviceWorker on/off or apiKey info etc. **3.** helper file, we use this file for different custom helper functions. Like: dateFormatting function or htmlMarkup cleaner function etc.

> **PWA**, we have **serviceWorkerDev.js** file to initiate the SW. and the main service worker functionality like caching or fetching data has been written in the **public/service-worker.js** folder.
---
## Followed below instructions
&#9745; Started the a project from scratch.

&#9745; Did not use any UI library, Write scss by myself.

&#9745; This app is responsive.

&#9745; It's fully supported by Goolge Chrome Latest version.

&#9745; This is app is production ready.

## Bonus Point
&#9745; Added unit test.

&#9745; Supports PWA for offline access.

&#9745; Added sticky feature to header and added some nice hover effects and clean code.

---
## Contact
If you have any further query, please let me know: easin55474@gmail.com or deveasin@gmail.com