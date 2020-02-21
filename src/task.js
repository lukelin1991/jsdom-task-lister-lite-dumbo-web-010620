class Task {
    constructor(input){
        this.input = input;
    }

    render(){
        return `
            <li>${this.input}<button data-description="${this.input}">X</button></li>
        `;
    }
}