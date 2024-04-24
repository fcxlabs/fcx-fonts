
import { tokens } from '../tokens/fcx.json';

interface FcxProps{
  body: {
  fontFamily: string
  fontStyle: string
  lineHeight: string; 
  fontSize: string;
  fontWeight: string;
  }
}
const Primitive = {tokens}
export const fcx: FcxProps = {

  body: {
    fontFamily: tokens.body.fontFamily.value,
    fontStyle: tokens.body.fontStyle.value,
    lineHeight: tokens.body.lineHeight.value,
    fontSize: tokens.body.fontSize.value,
    fontWeight: tokens.body.fontWeight.value,
  },
};