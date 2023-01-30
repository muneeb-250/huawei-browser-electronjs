// Import the necessary modules
const { app, BrowserWindow, Menu } = require('electron');
// Create a new window
let win;

// Listen for the app to be ready
app.on('ready', function () {
    const searchEngines = [
        { label: 'Google', url: 'https://www.google.com' },
        { label: 'DuckDuckGo', url: 'https://www.duckduckgo.com' },
        { label: 'You', url: 'https://www.you.com' },
        { label: 'Yahoo', url: 'https://www.yahoo.com' },
    ]
    const utils = [
        { label: 'Photopea', url: 'https://www.Photopea.com' },
        { label: 'ChatGPT', url: 'https://chat.openai.com' },
        { label: 'Canva', url: 'https://www.Canva.com' },
        { label: 'PfPMaker', url: 'https://www.PfPMaker.com' },
        { label: 'Google Translator', url: 'https://translate.google.com' },
        { label: 'Messenger', url: 'https://web.messenger.com' },
    ]
    const enjoy = [
        { label: 'Youtube', url: 'https://www.youtube.com' },
        { label: 'TheFlixer', url: 'https://www.theflixer.tv/home' },
        { label: 'WatchCartoonOnline', url: 'https://www.wcofun.net' },
        { label: 'gogoanime', url: 'https://www.gogohd.net' },
        { label: 'Comics', url: 'https://www.readcomiconline.li' },
        { label: 'Manganato', url: 'https://www.manganato.com' },
    ]
    // Create a new window
    win = new BrowserWindow({ width: 800, height: 600, icon: __dirname + '/logo.png', hasShadow: true });
    // Load the index.html file in the window
    win.loadFile('./index.html')


    let menu = Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {
                    label: 'Home',
                    accelerator: 'Ctrl+h',
                    click() {
                        win.loadFile('./index.html')
                    }
                },
                {
                    label: 'Exit',
                    accelerator: 'Ctrl+w',
                    click() {
                        app.exit(0);
                    }
                },
            ]
        },

        {
            label: 'Go Back',
            accelerator: 'Alt+Left',
            click() {

                win.webContents.goBack();
            }
        },
        {
            label: 'Reload',
            accelerator: 'Ctrl+r',
            click() {
                win.reload();
            }
        },
        {
            label: 'Search Engines',
            submenu: searchEngines.map((engine) => {
                return {
                    label: engine.label,
                    click() {
                        win.loadURL(engine.url);
                    }
                }
            })
        },
        {
            label: 'Utils',
            submenu: utils.map((util) => {
                return {
                    label: util.label,
                    click() {
                        win.loadURL(util.url);
                    }
                }
            })
        },
        {
            label: 'Enjoy',
            submenu: enjoy.map((util) => {
                return {
                    label: util.label,
                    click() {
                        win.loadURL(util.url);
                    }
                }
            })
        },




        {
            label: 'About',
            click() {
                let aboutWin = new BrowserWindow({ width: 400, height: 400, icon: __dirname + '/logo.png', modal: true, parent: win, show: false, resizable: false, frame: false });
                aboutWin.loadFile('./about.html');
                aboutWin.once('ready-to-show', () => {
                    aboutWin.show();
                });
                setTimeout(() => {
                    aboutWin.close();
                }, 2000);
            }


        },
    ]);

    Menu.setApplicationMenu(menu);
});
