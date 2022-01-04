class HtmlHandler {
    constructor() {
        this.markdownArray = [];
        this.parsedMarkdown = "";
    }
    TextChangeHandler(id, output, parser) {
        const markdown = document.getElementById(id);
        const markdownOutput = document.getElementById(output);
        if (markdown !== null) {
            markdown.onkeyup = e => {
                if (markdown.value) {
                    markdownOutput.innerHTML = markdown.value;
                    this.markdownArray = markdown.value.split('/\n/');
                    let parsed = parser.parse("# test sttrin");
                    console.log({ parsed });
                }
                else {
                    markdownOutput.innerHTML = "";
                }
            };
        }
    }
    setParsedMarkdown(content) {
        this.parsedMarkdown = content;
    }
    getParsedMarkdown(content) {
        return this.parsedMarkdown;
    }
}
export { HtmlHandler };
