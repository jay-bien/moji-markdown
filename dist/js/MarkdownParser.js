import { HtmlHandler } from './HtmlHandler.js';
import { TagToHtml } from './TagToHtml.js';
class Parser {
    constructor() {
        this.parsed = "";
        this.tagEngine = new TagToHtml();
    }
    init() {
        console.log({ HtmlHandler });
    }
    parse(line) {
        // '## example'
        //  '#example'
        //  'example'
        let parsed = "";
        let lineArr = line.split(" ");
        let type = this.tagEngine.tagChainHandler(lineArr[0]);
        let open = this.tagEngine.openTag(type);
        let close = this.tagEngine.closeTag(type);
        console.log({ type });
        console.log({ open });
        console.log({ close });
        parsed += open + lineArr[1] + close;
        return parsed;
    }
}
export { Parser };
