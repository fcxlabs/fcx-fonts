import * as js from '../tokens/fcx.json';
const fs = require('fs');
const filePath = './src/tokens/fcx.json';

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
  //console.error('Erro ao ler o arquivo JSON:', error);
}

const _data = {
  primitive: js['_Primitive/Mode 1'],
  semantic: js['Semantic/Mode 1'],
  tokens: js['tokens/value'],
};

export const collection = _data;
