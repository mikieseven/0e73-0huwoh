const electron = require('electron');
const {app, BrowserWindow, Menu } = electron;
const menuTemplate = require('./elec-menuitemz')
let mainWindow, childWind = null;

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
      modal: false,
      useContentSize: true,
      width: 600,
      height: 600,
      minWidth: 200,
      minHeight: 200,
      minimizable: true,
      resizeable: true,
      moveable: true,
      closeable: true,
      alwaysOnTop: false,
    });

    childWind = new BrowserWindow(
      {
        webPreferences:{
          nodeIntegration : false,
        },
        title: 'deviant art',
        parent: mainWindow,
        modal: false,
        useContentSize: true,
        zoomFactor: 3.0,
        x: 0,
        y: 0,
        width: 600,
        height: 600,
        minWidth: 200,
        minHeight: 200,
        minimizable: true,
        resizeable: true,
        moveable: true,
        closeable: true,
        alwaysOnTop: false,
      });

  // cleanup & quit after window closed
  mainWindow.on('closed', () => { mainWindow = null });
  childWind.on('closed', () => { mainWindow = null });
  
  mainWindow.loadURL(`file://${__dirname}/main.html`);
  childWind.loadURL(`https://www.deviantart.com/gashi-gashi/art/2017-Summer-movie-727160570`)

  mainWindow.webContents.openDevTools() // dev tools 

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);

  // Quit when all windows are closed.
  app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

});

// https://electronjs.org/docs/api/menu - resources for the osx sys-menu defs

