import { collection } from '../collection';
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

  const _data = collection.primitive;

export const primitive = _data;



