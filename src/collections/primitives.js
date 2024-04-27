// interface FcxProps {

import { number } from 'yargs';
import { collection } from './collection';

// console.log(js)

//   text: any

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

export const primitive = {
  fontFamily: {
    Barlow: collection.primitive.fontFamily.barlow.value,
    Inter: collection.primitive.fontFamily.inter.value,
    Chivo: collection.primitive.fontFamily.chivo.value,
  },
  fontStyle: {
    regular: collection.primitive.fontStyle.regular.value,
    italic: collection.primitive.fontStyle.italic.value,
  },
  fontSize: {
    10: parseInt(collection.primitive.fontSize[10].value.slice(0, -2), number),
    12: parseInt(collection.primitive.fontSize[12].value.slice(0, -2), number),
    14: parseInt(collection.primitive.fontSize[14].value.slice(0, -2), number),
    16: parseInt(collection.primitive.fontSize[16].value.slice(0, -2), number),
    18: parseInt(collection.primitive.fontSize[18].value.slice(0, -2), number),
    20: parseInt(collection.primitive.fontSize[20].value.slice(0, -2), number),
    24: parseInt(collection.primitive.fontSize[24].value.slice(0, -2), number),
    28: parseInt(collection.primitive.fontSize[28].value.slice(0, -2), number),
    32: parseInt(collection.primitive.fontSize[32].value.slice(0, -2), number),
    36: parseInt(collection.primitive.fontSize[36].value.slice(0, -2), number),
    42: parseInt(collection.primitive.fontSize[42].value.slice(0, -2), number),
    48: parseInt(collection.primitive.fontSize[48].value.slice(0, -2), number),
    54: parseInt(collection.primitive.fontSize[54].value.slice(0, -2), number),
  },
  lineHeight: {
    16: parseInt(collection.primitive.lineHeight[16].value.slice(0, -2), number),
    20: parseInt(collection.primitive.lineHeight[20].value.slice(0, -2), number),
    24: parseInt(collection.primitive.lineHeight[24].value.slice(0, -2), number),
    28: parseInt(collection.primitive.lineHeight[28].value.slice(0, -2), number),
    32: parseInt(collection.primitive.lineHeight[32].value.slice(0, -2), number),
    40: parseInt(collection.primitive.lineHeight[40].value.slice(0, -2), number),
    44: parseInt(collection.primitive.lineHeight[44].value.slice(0, -2), number),
    48: parseInt(collection.primitive.lineHeight[48].value.slice(0, -2), number),
    56: parseInt(collection.primitive.lineHeight[56].value.slice(0, -2), number),
    64: parseInt(collection.primitive.lineHeight[64].value.slice(0, -2), number),
    72: parseInt(collection.primitive.lineHeight[72].value.slice(0, -2), number),
  },
  letterspacing: {
    0: parseInt(collection.primitive.letterSpacing[0].value.slice(0, -2), number),
    '-0,5': parseInt(collection.primitive.letterSpacing['-0,5'].value.slice(0, -2), number),
    '0,5': parseInt(collection.primitive.letterSpacing['0,5'].value.slice(0, -2), number),
  },
  paragraphSpacing: {
    0: parseInt(collection.primitive.paragraphSpacing[0].value.slice(0, -2), number),
    4: parseInt(collection.primitive.paragraphSpacing[4].value.slice(0, -2), number),
    8: parseInt(collection.primitive.paragraphSpacing[8].value.slice(0, -2), number),
    12: parseInt(collection.primitive.paragraphSpacing[12].value.slice(0, -2), number),
    16: parseInt(collection.primitive.paragraphSpacing[16].value.slice(0, -2), number),
    20: parseInt(collection.primitive.paragraphSpacing[20].value.slice(0, -2), number),
    24: parseInt(collection.primitive.paragraphSpacing[24].value.slice(0, -2), number),
  },
  fontWeight: {
    100: parseInt(collection.primitive.fontWeight[100].value.slice(0, -2), number),
    200: parseInt(collection.primitive.fontWeight[200].value.slice(0, -2), number),
    300: parseInt(collection.primitive.fontWeight[300].value.slice(0, -2), number),
    400: parseInt(collection.primitive.fontWeight[400].value.slice(0, -2), number),
    500: parseInt(collection.primitive.fontWeight[500].value.slice(0, -2), number),
    600: parseInt(collection.primitive.fontWeight[600].value.slice(0, -2), number),
    700: parseInt(collection.primitive.fontWeight[700].value.slice(0, -2), number),
    800: parseInt(collection.primitive.fontWeight[800].value.slice(0, -2), number),
    900: parseInt(collection.primitive.fontWeight[900].value.slice(0, -2), number),
  },
};

// redua: 'replace(/.*\./, "").replace("{","").replace("}",""',
// redud: 'replace(/\..*/, "").replace("{","").replace("}","")',
