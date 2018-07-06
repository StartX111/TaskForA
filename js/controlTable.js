class ControlTable {

    constructor(options){
        this.el = options.el;

        this.tableElement = new ElementTable({
            elem: this.el.querySelector('[data-content="select"]'),
            input: this.el.querySelector('[data-content="input"]'),
        });

        this.el.querySelector(".header_input").addEventListener('input', this.changeTable.bind(this));
    }

    changeTable(){
        this.tableElement.elementChange();
    }

}