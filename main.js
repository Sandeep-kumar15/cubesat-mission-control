const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1500, height: 950, backgroundColor: '#070a14',
    title: 'CubeSat Mission Control', autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (!BrowserWindow.getAllWindows().length) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
