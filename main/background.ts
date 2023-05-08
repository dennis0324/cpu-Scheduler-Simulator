import { app, contextBridge, dialog, ipcRenderer } from 'electron';
import serve from 'electron-serve';
import { ipcMain } from 'electron';
import { createWindow } from './helpers';
import fs from 'fs'

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1200,
    height: 600,
  });
  mainWindow.setMinimumSize(1200,600)

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
    mainWindow.removeMenu()
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
  ipcMain.handle('error', async (event, someArgument) => {
    const result = await dialog.showErrorBox("NOTE", someArgument)
    return result
  })

  
  ipcMain.on('open-file-dialog', function (event) {
    dialog.showOpenDialog({
      properties: ['openFile'],
      filters:[{ name: 'All Files', extensions: ['*'] }]
    }).then(async file => {
      console.log(file)
      const returnValue = {}
      const result = fs.readFileSync(file.filePaths[0],{encoding:'utf-8'})
  
  
      if(!result){
        event.sender.send('error', "file can not be read")
      }
      else{
        const process = result.split('\n')
        if(process[0] === '') return
  
        const jsonArray = process.splice(1,Number(process[0])).map((item,index) => {
          let tempJson = {}
          item.split(',').forEach((item) => {
            const tempItem = item.split(':')
            tempJson[tempItem[0]] = tempItem[1]
          })
          tempJson['index'] = index
          return tempJson
        })
        
        const timeQuantum = process.find(item => item.indexOf("timeQuantum") >= 0)
        console.log(timeQuantum)
        if(timeQuantum){
          const timeQuantumValue = timeQuantum.split(':')[1]
          returnValue['timeQuantum'] = timeQuantumValue
        }
        returnValue['processes'] = jsonArray
      }
        
      if (!file.canceled){
        event.sender.send('selected-file', returnValue)
      }
    })
  })

})();


app.on('window-all-closed', () => {
  app.quit();
});