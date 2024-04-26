  // interface FcxProps {

import { collection } from '../collection';
import { primitive } from './primitives';

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
    "10": parseInt(primitive.fontSize[10].value.slice(0, -2)),
    "12": parseInt(primitive.fontSize[12].value.slice(0, -2)),
    "14": parseInt(primitive.fontSize[14].value.slice(0, -2)),
    "16": parseInt(primitive.fontSize[16].value.slice(0, -2)),
    "18": parseInt(primitive.fontSize[18].value.slice(0, -2)),
    "20": parseInt(primitive.fontSize[20].value.slice(0, -2)),
    "24": parseInt(primitive.fontSize[24].value.slice(0, -2)),
    "28": parseInt(primitive.fontSize[28].value.slice(0, -2)),
    "32": parseInt(primitive.fontSize[32].value.slice(0, -2)),
    "36": parseInt(primitive.fontSize[36].value.slice(0, -2)),
    "42": parseInt(primitive.fontSize[42].value.slice(0, -2)),
    "48": parseInt(primitive.fontSize[48].value.slice(0, -2)),
    "54": parseInt(primitive.fontSize[54].value.slice(0, -2))
  },
  lineHeight:{
    "16": parseInt(primitive.lineHeight[16].value.slice(0, -2)),
    "20": parseInt(primitive.lineHeight[20].value.slice(0, -2)),
    "24": parseInt(primitive.lineHeight[28].value.slice(0, -2)),
    "32": parseInt(primitive.lineHeight[32].value.slice(0, -2)),
    "40": parseInt(primitive.lineHeight[40].value.slice(0, -2)),
    "44": parseInt(primitive.lineHeight[44].value.slice(0, -2)),
    "48": parseInt(primitive.lineHeight[48].value.slice(0, -2)),
    "56": parseInt(primitive.lineHeight[56].value.slice(0, -2)),
    "64": parseInt(primitive.lineHeight[64].value.slice(0, -2)),
    "72": parseInt(primitive.lineHeight[72].value.slice(0, -2))
  },
  letterspacing:{
    "0": parseInt(primitive.letterSpacing[0].value.slice(0, -2)),
    "-0,5": parseInt(primitive.letterSpacing['-0,5'].value.slice(0, -2)),
    "0,5": parseInt(primitive.letterSpacing['0,5'].value.slice(0, -2))
  },
  paragraphSpacing:{
    "0": parseInt(primitive.paragraphSpacing[0].value.slice(0, -2)),
    "4": parseInt(primitive.paragraphSpacing[4].value.slice(0, -2)),
    "8": parseInt(primitive.paragraphSpacing[8].value.slice(0, -2)),
    "12": parseInt(primitive.paragraphSpacing[12].value.slice(0, -2)),
    "16": parseInt(primitive.paragraphSpacing[16].value.slice(0, -2)),
    "20": parseInt(primitive.paragraphSpacing[20].value.slice(0, -2)),
    "24": parseInt(primitive.paragraphSpacing[24].value.slice(0, -2)),
  },
  fontWeight:{
    "100": parseInt(primitive.fontWeight[100].value.slice(0, -2)),
    "200": parseInt(primitive.fontWeight[200].value.slice(0, -2)),
    "300": parseInt(primitive.fontWeight[300].value.slice(0, -2)),
    "400": parseInt(primitive.fontWeight[400].value.slice(0, -2)),
    "500": parseInt(primitive.fontWeight[500].value.slice(0, -2)),
    "600": parseInt(primitive.fontWeight[600].value.slice(0, -2)),
    "700": parseInt(primitive.fontWeight[700].value.slice(0, -2)),
    "800": parseInt(primitive.fontWeight[800].value.slice(0, -2)),
    "900": parseInt(primitive.fontWeight[900].value.slice(0, -2))
  },
  
}


// redua: 'replace(/.*\./, "").replace("{","").replace("}",""',
// redud: 'replace(/\..*/, "").replace("{","").replace("}","")',



