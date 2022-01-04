import { MarkownDocument } from "./MarkdownDoc.js";
import { HtmlHandler } from './HtmlHandler.js'
import { TagToHtml } from './TagToHtml.js';

class Parser {
    public parsed: string = "";
    private tagEngine = new TagToHtml();

    public init(): void {
        console.log({ HtmlHandler });
    }

    public parse(line: string): string {
        // arg line 
        // '## example'
        //  '#example'
        //  'example'

        let parsed = ""
        let lineArr = line.split(" ");
        let type = this.tagEngine.tagChainHandler(lineArr[0]);
        let open = this.tagEngine.openTag(type);
        let close = this.tagEngine.closeTag(type);

        if (type === 0) {
            parsed += open + line + close;

        } else {
            lineArr[ 1 ] ? lineArr[ 1 ] = lineArr.slice( 1 ).join(" ") : lineArr[ 1 ] = "";
            parsed += open + lineArr[1] + close;
        }

        return parsed;
    }

}




export { Parser } 