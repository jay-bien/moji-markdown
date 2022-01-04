interface IMarkdownDoc {

    add( ...content: string[]): void;
    get(): string;
}

class MarkownDocument implements IMarkdownDoc {

    private content: string = "";

    add( ...content: string[] ): void {
        content.forEach( el => this.content += el )
    }
    get(): string{
        return this.content
    }

}

export { MarkownDocument }