import { tokensindex } from '../src/collections/tokens.js';
import { fcx } from '../src/const.js';


// const propertyObjects = Object.keys(collection.tokens.body).map(propertyName => {
//   return {
//     [propertyName]: 'collection.primitive.'+collection.tokens.body[propertyName]['value'].replace(/\..*/, "").replace("{","").replace("}","")+'[\''+collection.tokens.body[propertyName]['value'].replace(/.*\./, "").replace("{","").replace("}","")+'\']'
//   };
// });
//console.log(propertyObjects)
//console.log(Object.keys(collection.tokens.body.fontFamily) + ': ' + collection.tokens);

  test("Primitive Tokens", () => {
    expect(fcx.primitive.fontSize[54]).toBe(54);
    }
  );
  test("obj Tokens", () => {
    expect(fcx.tokens.body.fontFamily).toBe("Inter");
    }
  );



  

  console.log(tokensindex);
