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
