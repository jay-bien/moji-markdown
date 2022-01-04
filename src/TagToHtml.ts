enum TagType {
    Header1,
    Header2,
    Header3,
    Paragraph
}


class TagToHtml{

    private readonly tagType: Map< TagType, string > = new Map< TagType, string >();

    constructor() {
        this.tagType.set(TagType.Header1, "h1");
        this.tagType.set(TagType.Header2, "h2");
        this.tagType.set(TagType.Header3, "h3");
        this.tagType.set(TagType.Paragraph, "p");
    }

    public openTag(tagType : TagType) : string {
        return this.getTag(tagType, `<`);
    }
    
    public closeTag(tagType : TagType) : string {
        return this.getTag(tagType, `</`);
    }

    public tagChainHandler( key: string ): TagType{
        switch( key ){
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


    private getTag(tagType : TagType, openingTagPattern : string) : string {
        let tag = this.tagType.get(tagType);
        if (tag !== null) {
            return `${openingTagPattern}${tag}>`;
        }
        return `${openingTagPattern}p>`;
    }
   
}

export { TagToHtml, TagType }