var TagType;
(function (TagType) {
    TagType[TagType["Paragraph"] = 0] = "Paragraph";
    TagType[TagType["Header1"] = 1] = "Header1";
    TagType[TagType["Header2"] = 2] = "Header2";
    TagType[TagType["Header3"] = 3] = "Header3";
})(TagType || (TagType = {}));
class TagToHtml {
    constructor() {
        this.tagType = new Map();
        this.tagType.set(TagType.Header1, "h1");
        this.tagType.set(TagType.Header2, "h2");
        this.tagType.set(TagType.Header3, "h3");
        this.tagType.set(TagType.Paragraph, "p");
    }
    openTag(tagType) {
        return this.getTag(tagType, `<`);
    }
    closeTag(tagType) {
        return this.getTag(tagType, `</`);
    }
    tagChainHandler(key) {
        switch (key) {
            case "#":
                return TagType.Header1;
            case "##":
                return TagType.Header2;
            case "###":
                return TagType.Header3;
            default:
                return TagType.Paragraph;
        }
    }
    getTag(tagType, openingTagPattern) {
        let tag = this.tagType.get(tagType);
        if (tag !== null) {
            return `${openingTagPattern}${tag}>`;
        }
        return `${openingTagPattern}p>`;
    }
}
export { TagToHtml, TagType };
