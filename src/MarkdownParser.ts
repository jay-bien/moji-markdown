class HtmlHandler {

    public TextChangeHandler( id: string, output: string ): void{

        const markdown = <HTMLTextAreaElement>document.getElementById( id );
        const markdownOutput = <HTMLLabelElement>document.getElementById( output );
       
        if( markdown !== null ){
            markdown.onkeyup = e => {

                if( markdown.value ){
                    markdownOutput.innerHTML = markdown.value;
                } else {
                    markdownOutput.innerHTML = ""
                }
            }
        }

    }
}

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

}


export { HtmlHandler }