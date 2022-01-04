import { HtmlHandler } from './HtmlHandler.js';
import { Parser } from './MarkdownParser.js';
const handler = new HtmlHandler();
const parser = new Parser();
handler.TextChangeHandler("Markdown", "MarkdownOutput", parser);
