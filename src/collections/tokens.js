import { collection } from './collection';
const fs = require('fs');
  const filePath = './src/tokens/fcx.json'
  
  try {
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(jsonString);
    const dataWithoutKeys = {};
  
    for (const key in jsonData) {
      if (jsonData.hasOwnProperty(key)) {
        dataWithoutKeys[key] = jsonData[key];
      }
    }
  
    //console.log('Dados JSON:', jsonData);
   // console.log('Dados sem chaves:', dataWithoutKeys);
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
  }

  const _dataone = collection.tokens;

export const tokenconfig = { 
  name: _dataone[key],
  fontFamily: _dataone[key]['fontFamily']['value'],
  fontStyle: _dataone[key]['fontStyle']['value'],
  fontSize: _dataone[key]['fontSize']['value'],
  lineHeight: _dataone[key]['lineHeight']['value'],
  letterSpacing: _dataone[key]['letterSpacing']['value'],
  paragraphSpacing: _dataone[key]['paragraphSpacing']['value'],
  fontWeight: _dataone[key]['fontWeight']['value'],

};



