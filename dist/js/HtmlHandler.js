class HtmlHandler {
    constructor() {
        this.markdownArray = [];
        this.parsedMarkdown = "";
        this.handleMarkdownChange = (e) => {
            console.log({ e });
        };
    }
    TextChangeHandler(id, output, parser) {
        const markdown = document.getElementById(id);
        const markdownOutput = document.getElementById(output);
        if (markdown !== null) {
            markdown.onkeyup = e => {
                if (markdown.value) {
                    this.markdownArray = markdown.value.split(String.fromCharCode(10));
                    let parsed = "";
                    let arr = this.markdownArray;
                    console.log({ arr });
                    for (let line of this.markdownArray) {
                        parsed += parser.parse(line);
                    }
                    markdownOutput.innerHTML = parsed;
                    console.log({ parsed });
                }
                else {
                    markdownOutput.innerHTML = "";
                }
            };
            markdown.onpaste = e => {
                console.log({ e });
            };
        }
        ;
    }
    setParsedMarkdown(content) {
        this.parsedMarkdown = content;
    }
    getParsedMarkdown(content) {
        return this.parsedMarkdown;
    }
}
export { HtmlHandler };
