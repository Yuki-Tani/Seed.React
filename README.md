# Seed.React

## Getting Started

### update package.json
`package.json` is Configuration file of Node.js. Need to update followings:

- "name" : name of this node module
- "homepage" : root path where this one page app is hosted.
  - '/aaa' : this page is hosted in https://xxx.com/aaa.
  - '/' : this page is hosted in https://xxx.com/.
  - '.' : this page can be hosted anywhere. Path will be relative from index.html. HistoryAPI::pushState or client side routing is not available.

### update public/index.html
`index.html` is root point of web app. Need to udpate followings:

- "title", "description"
- Prepare font/icon css and load here.

### update favicon and icons
Replace `favicon.ico` and `icon-xxx.png` in public directory.
- you can create them easily in https://ao-system.net/favicongenerator/

## Build
- (only for the first time) Run `npm install` to install node module dependencies.
- `npm start` for development inner loop. Open http://localhost:3000 to view the page.
- For confirming the real product output, `npm run build`.

## Test
1. Implement unit test in XXX.spec.ts file.
1. `npm run test` for running test.

## Optional setup

### azure-pipeline.yml
(CI/CD only) Configuration file for CI/CD on Azure DevOps to deploy Azure Blob

1. Create Azure Service Connection in Azure DevOps. https://docs.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure?view=azure-devops
1. Update this yml file
1. Open Azure DevOps Repository of this app, go Pipeline page
1. Select 'New Pipeline' and select this yml file

### eject

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `npm run eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Note
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Trouble shooting
### VSCode lint shows error in the html part of tsx file
Correct the version VSCode Typescript lint specified.
1. Open TSX file on VSCode, Ctrl + Shift + P, type TypeScript
1. Select 'Select version of typescript'
1. Select 'User Workspace Version'
