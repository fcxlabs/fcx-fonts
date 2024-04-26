  // interface FcxProps {

import { collection } from './collections/collection';

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
  const _dataprimitive = collection.primitive;
  const _datasemantic = collection.semantic;
  const _datatokens = collection.tokens;
  const _variables = collection.primitive.fontFamily.barlow;



  
export const groups = _datatokens[key]
// redua: 'replace(/.*\./, "").replace("{","").replace("}",""',
// redud: 'replace(/\..*/, "").replace("{","").replace("}","")',



