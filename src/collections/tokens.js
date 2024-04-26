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
const _names = dataWithoutKeys['tokens/value']['body'];
console.log(_names)
const _body = collection.tokens
const _arg1 = dataWithoutKeys['tokens/value'][key]
const _arg2 = dataWithoutKeys['tokens'].replace(/.*\./, "").replace("{","").replace("}","")
export const tokenconfig = { 
  fontFamily: collection.primitive[_arg1.replace(/\..*/, "").replace("{","").replace("}","")][_arg2]['value'], 
  // fontStyle: _dataone[_names]['fontStyle']['value'],
  // fontSize: _dataone[_names]['fontSize']['value'],
  // lineHeight: _dataone[_names]['lineHeight']['value'],
  // letterSpacing: _dataone[_names]['letterSpacing']['value'],
  // paragraphSpacing: _dataone[_names]['paragraphSpacing']['value'],
  // fontWeight: _dataone[_names]['fontWeight']['value'],
  // test: collection.primitive[tokenconfig.name]

};



