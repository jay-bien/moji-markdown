"use strict";
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
