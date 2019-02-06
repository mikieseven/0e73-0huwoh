const electron = require('electron');
const {app, BrowserWindow, Menu } = electron;
let mainWindow;
app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  mainWindow.on('closed', () => { mainWindow = null; app.quit() });
  mainWindow.loadURL(`file://${__dirname}/main.html`);
  mainWindow.webContents.openDevTools()
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  {label: 'Lick Me Mac OSX'},
  {
    label: 'File',
    submenu: [
      { label: 'New ToDo' }
    ]
  }
];
