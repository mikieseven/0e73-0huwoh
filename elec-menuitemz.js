// https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f
// explore exports which don't seem to work in Electron - whuffo?
// mjp 6-Feb-2019
const { app } = require('electron')

const menuTemplate = [
  {
    label: 'Lick Me Mac',
    submenu: [
      { 
        label: 'Gashi-Gashi Art', 
        click () { require('electron').shell.openExternal('https://www.deviantart.com/gashi-gashi/gallery/') }
      },
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteandmatchstyle' },
      { role: 'delete' },
      { role: 'selectall' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  },
]
if (process.platform === 'darwin') {
  menuTemplate.unshift({
    label: app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  })

  // Edit menu
  menuTemplate[1].submenu.push(
    { type: 'separator' },
    {
      label: 'Speech',
      submenu: [
        { role: 'startspeaking' },
        { role: 'stopspeaking' }
      ]
    }
  )

  // Window menu
  menuTemplate[3].submenu = [
    { role: 'close' },
    { role: 'minimize' },
    { role: 'zoom' },
    { type: 'separator' },
    { role: 'front' }
  ]
}
module.exports = menuTemplate

// require( 'elec-menuitemz.js') - require by calling file
// Use the following to establish the menu in the calling module
// const menu = Menu.buildFromTemplate(template)
// Menu.setApplicationMenu(menu)
//const { app, Menu } = require('electron')



//const menu = Menu.buildFromTemplate(template)
//Menu.setApplicationMenu(menu)

/* const menuTemplate = [
  {
    label: 'Lick Me Mac OSX',
    submenu: [
      { 
        label: 'Gashi-Gashi Art', 
        click () { require('electron').shell.openExternal('https://www.deviantart.com/gashi-gashi/gallery/') }
      },
    ]
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  }
]; */

//const { app, Menu } = require('electron')
