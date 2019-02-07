const electron = require('electron');
const {app, BrowserWindow, Menu } = electron;
const menuTemplate = require('./elec-menuitemz')
let mainWindow;

app.on('ready', () => {
    // https://electronjs.org/docs/api/browser-window
    // https://electronjs.org/docs/api/browser-window#new-browserwindowoptions
    // SECURITY Practice executing web content - webPreferences: {nodeIntergration: false}
  mainWindow = new BrowserWindow(
    {
      webPreferences:{
        nodeIntegration : false,
      },
      title: 'gashi-gashi',
      width: 1200,
      height: 800,
      minWidth: 500,
      minHeight: 400,
      minimizable: true,
      resizeable: true,
      moveable: true,
      closeable: true,
      alwaysOnTop: false,
    });

  // cleanup & quit after window closed
  mainWindow.on('closed', () => { mainWindow = null; app.quit() });
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  mainWindow.webContents.openDevTools() // dev tools 

  const mainMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(mainMenu);
});

// https://electronjs.org/docs/api/menu - resources for the osx sys-menu defs

const template = [
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
  template.unshift({
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
  template[1].submenu.push(
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
  template[3].submenu = [
    { role: 'close' },
    { role: 'minimize' },
    { role: 'zoom' },
    { type: 'separator' },
    { role: 'front' }
  ]
}
