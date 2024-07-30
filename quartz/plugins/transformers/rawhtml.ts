
import rehypeRaw from 'rehype-raw';
import { QuartzTransformerPlugin } from '../types';

export const RawHtml: QuartzTransformerPlugin = () =>  {
  return {
    name: "RawHtml",
    htmlPlugins(){
      return [rehypeRaw]
    },
  }
 
};

export default RawHtml;

