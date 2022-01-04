import { MarkownDocument } from "./MarkdownDoc.js";
import { HtmlHandler} from './HtmlHandler.js'
import { TagToHtml } from './TagToHtml.js';

class Parser {
    public parsed: string = "";
    private tagEngine = new TagToHtml();

    public init(): void{
        console.log({ HtmlHandler });
    }

    public parse( line: string ): string{
        // '## example'
        //  '#example'
        //  'example'

        let parsed = ""
        let lineArr = line.split(" ");
        let type = this.tagEngine.tagChainHandler( lineArr[ 0 ] );
        let open = this.tagEngine.openTag( type );
        let close = this.tagEngine.closeTag( type );
        console.log({ type })
        console.log({ open })
        console.log({ close })
        parsed += open + lineArr[ 1 ] + close;

        return parsed;
    }

}




export { Parser } 