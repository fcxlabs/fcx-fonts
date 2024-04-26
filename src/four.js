  // interface FcxProps {

import { two } from './collections/collection';
import { third } from './groups';

// console.log(js)

  //   text: any
    
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

  
  // const _data = dataWithoutKeys['tokens/value'];
  const _dataprimitive = third;
  const _datasemantic = two.semantic;
  const _datatokens = two.tokens;




  
export const third = {
primitive: _dataprimitive,
semantic: _datasemantic,
tokens: _datatokens
// redua: 'replace(/.*\./, "").replace("{","").replace("}",""',
// redud: 'replace(/\..*/, "").replace("{","").replace("}","")',
}


