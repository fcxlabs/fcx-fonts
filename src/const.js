  // interface FcxProps {
import { collection } from './collections/collection';


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

  //   tokens: object;
    
  // }

  // const a = js['_Primitive/Mode 1'];
  // const b = js['Semantic/Mode 1'];
  // const c = js['tokens/value'];
  
//const objs = primitives[tokens.type[key]]

// const regd = replace(/\..*/, "").replace("{","").replace("}","");
// const rega = replace(/.*\./, "").replace("{","").replace("}","");
const _variables = collection.tokens;
const _dataone = collection.primitive;

export const fcx = {
  text: {
    body: {
      fontFamily: _dataone.fontFamily.barlow.value,
      fontStyle: _dataone['fontStyle']['value'],
      fontSize: _dataone['fontSize']['value'],
      lineHeight: _dataone['lineHeight']['value'],
      letterSpacing: _dataone['letterSpacing']['value'],
      paragraphSpacing: _dataone['paragraphSpacing']['value'],
      fontWeight: _dataone.fontWeight[100].value,
    }
  }
}


  // tokens: {
  //   body: {
  //     // fontFamily: dataWithoutKeys['tokens/value']['body']['fontFamily'].value,
  //     fontFamily: dataWithoutKeys['_Primitive/Mode 1'][dataWithoutKeys['tokens/value']['body']['fontFamily']['value'].rega][dataWithoutKeys['tokens/value']['body']['fontFamily']['value'].regd]['value'],
  //     fontStyle: js['tokens/value'].body.fontStyle.value,
  //     lineHeight: js['tokens/value'].body.lineHeight.value,
  //     fontSize: js['tokens/value'].body.fontSize.value,
  //     fontWeight: js['tokens/value'].body.fontWeight.value,
  //     // lineHeight: tokens.body.lineHeight.value,
  //     // fontSize: tokens.body.fontSize.value,
  //     // fontWeight: tokens.body.fontWeight.value,
  //   },
  // },


