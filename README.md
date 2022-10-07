# ICRON Electron Demo
Welcome to the ICRON_Electron_Demo repo. This repo contains a sample project for cross-platform desktop application of [ICRON WFM website](https://test.icronwfm.com/login?returnUrl=%2F). It is based on Node.js and Chromium.
## Installation
To install the application, use Setup.exe file under the latest release - [releases](https://github.com/0xtaylant/ICRON_Electron_Demo/releases).
## Auto Update

To use auto update feature, 
- Clone the repo to your local machine.
- Use npm install.
- Change the repo variable in the code snippet(index.js) shown below to your new repo. 
```
require('update-electron-app')({
    repo: '0xtaylant/ICRON_Electron_Demo',
    updateInterval: '5 minutes',
    notifyUser: true
})
```
- Change the owner and name variables in the code snippet(package.json) shown below to your github username and repo. 
```
"publishers": [
  {
    "name": "@electron-forge/publisher-github",
    "config": {
      "repository": {
        "owner": "0xtaylant",
        "name": "ICRON_Electron_Demo"
      }
    }
  }
]
```
- Change the version variable under package.json.
- Run ```npm run publish``` command. 
- Push updated version to the projects repo.
- Release the draft of the new version from releases section.
- Update automatically will take place.
## Change the content
- In order to change the content of the application, either update the dist file with the new dist file of the new build or change the path variable in index.js file which is shown below:
```
 mainWindow.loadFile(path.join(__dirname, './dist/icron-wfm-web/index.html'));
```
## Further information
- [Publishers](https://www.electronforge.io/config/publishers)
- [Makers](https://www.electronforge.io/config/makers)
- [Auto Update](https://www.electronforge.io/advanced/auto-update)
- [Electron](https://www.electronjs.org/docs/latest)
- [Electron-builder](https://www.electron.build/)
