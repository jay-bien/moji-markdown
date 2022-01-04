import { HtmlHandler } from './HtmlHandler.js';
import { Parser } from './MarkdownParser.js'

console.log("ind");

   const handler =  new HtmlHandler();
   const parser = new Parser();
   handler.TextChangeHandler("Markdown", "MarkdownOutput", parser );

   console.log({ parser });

    const markdownArray = []

console.log( new Parser().parse(" test string") );
console.log("Index file script2");


