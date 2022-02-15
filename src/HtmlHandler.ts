class HtmlHandler {


    public markdownArray: string[] = [];
    public parsedMarkdown: string = "";


    public TextChangeHandler( id: string, output: string, parser:any ): void{

        const markdown = <HTMLTextAreaElement>document.getElementById( id );
        const markdownOutput = <HTMLLabelElement>document.getElementById( output );

        if( markdown !== null ){
            
            markdown.onkeyup = e => {
                if( markdown.value ){
                    this.markdownArray = markdown.value.split( String.fromCharCode( 10 ) );
                    let parsed = "";
                    let arr = this.markdownArray;
                    console.log({ arr });
                    for( let line of this.markdownArray ){
                        parsed += parser.parse( line );
                    }
                    markdownOutput.innerHTML = parsed;
                    console.log({ parsed })
                } else {
                    markdownOutput.innerHTML = ""
                }
            }
            markdown.onpaste = e => {
                console.log(" On paste");
                console.log({ e });
                let value = markdown.value;
                console.log({ value });

            } 
        };
    }

    private handleMarkdownChange = ( e: ClipboardEvent ) => {
        console.log({ e });
    }

    public setParsedMarkdown( content: string ): void {
        this.parsedMarkdown = content;
    }

    public getParsedMarkdown( content: string ): string {
        return this.parsedMarkdown
    }

}




export { HtmlHandler }