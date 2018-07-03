class ControlTable {

    constructor(options){
        this.el = options.el;

        this.tableElement = new ElementTable({
            elem: this.el.querySelector('[data-content="select"]'),
            input: this.el.querySelector('.header_input'),
        });

        this.el.querySelector(".header_input").addEventListener('textInput', this.changeTable.bind(this));
    }

    changeTable(){
        this.tableElement.elementChange();
    }

}