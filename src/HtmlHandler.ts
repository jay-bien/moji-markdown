class HtmlHandler {


    public markdownArray: string[] = [];
    public parsedMarkdown: string = "";


    public TextChangeHandler( id: string, output: string, parser:any ): void{

        const markdown = <HTMLTextAreaElement>document.getElementById( id );
        const markdownOutput = <HTMLLabelElement>document.getElementById( output );

        if( markdown !== null ){
            markdown.onkeyup = e => {
                if( markdown.value ){
                    markdownOutput.innerHTML = markdown.value;
                    this.markdownArray = markdown.value.split('/\n/');
                    let parsed = parser.parse( "# test sttrin" );
                    console.log({ parsed })
                } else {
                    markdownOutput.innerHTML = ""
                }
            }
        }
    }

    public setParsedMarkdown( content: string ): void {
        this.parsedMarkdown = content;
    }

    public getParsedMarkdown( content: string ): string {
        return this.parsedMarkdown
    }

}




export { HtmlHandler }