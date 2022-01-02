"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlHandler = void 0;
class HtmlHandler {
    TextChangeHandler(id, output) {
        const markdown = document.getElementById(id);
        const markdownOutput = document.getElementById(output);
        if (markdown !== null) {
            markdown.onkeyup = e => {
                if (markdown.value) {
                    markdownOutput.innerHTML = markdown.value;
                }
                else {
                    markdownOutput.innerHTML = "";
                }
            };
        }
    }
}
exports.HtmlHandler = HtmlHandler;
var TagType;
(function (TagType) {
    TagType[TagType["Header1"] = 0] = "Header1";
    TagType[TagType["Header2"] = 1] = "Header2";
    TagType[TagType["Header3"] = 2] = "Header3";
    TagType[TagType["Paragraph"] = 3] = "Paragraph";
})(TagType || (TagType = {}));
class TagToHtml {
    constructor() {
        this.tagType = new Map();
        this.tagType.set(TagType.Header1, "h1");
        this.tagType.set(TagType.Header2, "h2");
        this.tagType.set(TagType.Header3, "h3");
        this.tagType.set(TagType.Paragraph, "p");
    }
}
