const ipc = require('ipc');
const BrowserWindow = require('browser-window');
const menubar = require('menubar');

const mb = menubar({ preloadWindow: true });
const templateMenu = require('electron-template-menu');

mb.on('ready', ()=> {
  templateMenu();

  ipc.on('emit-slack-token', (event, token)=> {
    console.log('token recieved in main process.');
    mb.window.webContents.send('publish-token', 'from mb.window.webContents.send');
    event.sender.send('publish-token', token);
  });

  ipc.on('create-auth-renderer', ()=> {
    console.log('create-auth-renderer!');

    // authRenderer
    const authWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: true,
    });
    authWindow.loadUrl('http://localhost:9000/auth/callback');
    authWindow.on('closed', ()=> {
      console.log('closed');
    });
  });
});
