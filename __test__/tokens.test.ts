import { tokensindex } from '../src/collections/tokens.js';
import { fcx } from '../src/const.js';

  test("Primitive Tokens", () => {
    expect(fcx.primitive.fontSize[54]).toBe(54);
    }
  );

  test("Tokens", () => {
    expect(fcx.tokens['(16)body'].fontFamily).toBe("Inter");
    expect(fcx.tokens['(18)paragraph'].fontStyle).toBe("Regular");
    expect(fcx.tokens['(24)title(default)'].fontSize).toBe(24);
    }
  );

  console.log(tokensindex);
