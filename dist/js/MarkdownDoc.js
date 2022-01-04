class MarkownDocument {
    constructor() {
        this.content = "";
    }
    add(...content) {
        content.forEach(el => this.content += el);
    }
    get() {
        return this.content;
    }
}
export { MarkownDocument };
