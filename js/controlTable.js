class ControlTable {

    constructor(options){

        this.el = options.el;

        this.tableElement = new ElementTable({
            elem: this.el.querySelector('[data-content="select"]'),
            input: this.el.querySelector('[data-content="input"]'),
        });

        this.el.querySelector(".header_input").addEventListener('input', this.changeTable.bind(this));
        this.el.addEventListener('click',this.openElement.bind(this));
        window.addEventListener("popstate", function(e) {
            // swapPhoto(location.pathname);
            location.reload(true);
            // alert("come back");
        }, false)

        let user = {
            speck: function () {

            },
            read: function () {

            }
        }

    }

    changeTable(){
        this.tableElement.elementChange();
    }

    openElement(){
        let targetElem = event.target;
        let stringItemElement;
        var resultItem;
        if (targetElem.getAttribute('data-content') === "selectImg"){
            stringItemElement = targetElem.getAttribute('src');
            resultItem = boardsArray.find( function(item){
                return (item.stringSrc === stringItemElement);
            });


            // console.log(resultItem);
            // console.log(Object.getOwnPropertyNames(resultItem));
            // alert(Object.getOwnPropertyNames(resultItem));
            // debugger;
            this.tableElement.updateItemAfterSelect(resultItem);
            window.history.pushState(null, null, resultItem.name.toString());
        }

        function getSelectElement(list, hendler){
            for (let i = 0; i < list.length; i++) {
                if (hendler(list[i]) === true){
                    return list[i];
                }
            }
            return null;
        }
    }

}