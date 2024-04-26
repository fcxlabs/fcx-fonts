  // interface FcxProps {

import { collection } from './collections/collection';
import { primitive } from './collections/primitives';

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



  
export const groupsprimitive = {
  fontFamily:{
    Barlow: primitive.fontFamily.barlow.value,
    Inter: primitive.fontFamily.inter.value,
    Chivo: primitive.fontFamily.chivo.value,
  },
  fontStyle:{
    regular: primitive.fontStyle.regular.value,
    italic: primitive.fontStyle.italic.value,
  },
  fontSize:{
    "10": primitive.fontSize[10].value,
    "12": primitive.fontSize[12].value,
    "14": primitive.fontSize[14].value,
    "16": primitive.fontSize[16].value,
    "18": primitive.fontSize[18].value,
    "20": primitive.fontSize[20].value,
    "24": primitive.fontSize[24].value,
    "28": primitive.fontSize[28].value,
    "32": primitive.fontSize[32].value,
    "36": primitive.fontSize[36].value,
    "42": primitive.fontSize[42].value,
    "48": primitive.fontSize[48].value,
    "54": parseInt(primitive.fontSize[54].value.slice(0, -2)),
  }
}


// redua: 'replace(/.*\./, "").replace("{","").replace("}",""',
// redud: 'replace(/\..*/, "").replace("{","").replace("}","")',



