class ElementTable {


    constructor(options){
        this.elem = options.elem;
        this.input = options.input;
      this.render(boardsArray);
    }



    elementChange(){
        debugger;
        var intputString = this.input.value.toLowerCase();
        let newArray = boardsArray.filter(function(item){
            return ((~item.name.toLowerCase().indexOf(intputString)) ||
                (~item.des.cpu.toLowerCase().indexOf(intputString)) ||
                (~item.des.lan.toLowerCase().indexOf(intputString)) ||
                (~item.des.emmc.toLowerCase().indexOf(intputString)) ||
                (~item.des.cpu.toLowerCase().indexOf(intputString)) ||
                (~item.des.ram.toLowerCase().indexOf(intputString)));
        });

        this.render(newArray);
    }

    render(items){
        let result = '';
        items.forEach((item) => (result += this.renderViewItems(item)));

        this.elem.innerHTML = result;
    }

    renderViewItems(itemData) {
        return `
            <div data-content="select" class="container workElement">
        <div data-content="selectTab" class="elementTable">
            <div class="img_element">
                <img data-content="selectImg" src="${itemData.stringSrc}">
            </div>
            <div class="des_element">
                <h3 data-content="name">${itemData.name}</h3>
                <ul class="description">
                    <li data-content="cpu">CPU: ${itemData.des.cpu}</li>
                    <li data-content="wifi">WIFI: ${itemData.des.wifi?'yes':'no'}</li>
                    <li data-content="lan">LAN: ${itemData.des.lan}</li>
                    <li data-content="sata">SATA: ${itemData.des.sata?'yes':'no'}</li>
                    <li data-content="emmc">EMMC: ${itemData.des.emmc}</li>
                    <li data-content="ram">RAM: ${itemData.des.ram}</li>
                </ul>
            </div>
        </div>
    </div>
        `;
    }

    updateItemAfterSelect(item){
        let result = '';
        result += this.renderOneItem(item);
        this.elem.innerHTML = result;
    }

    renderOneItem(itemData) {
        return `<div class="modal container">
    <div class="des_element">
        <h3 data-content="name">${itemData.name}</h3>
        <ul class="description">
            <li data-content="cpu">CPU: ${itemData.des.cpu}</li>
            <li data-content="wifi">WIFI: ${itemData.des.wifi?'yes':'no'}</li>
            <li data-content="lan">LAN: ${itemData.des.lan}</li>
            <li data-content="sata">SATA: ${itemData.des.sata?'yes':'no'}</li>
            <li data-content="emmc">EMMC: ${itemData.des.emmc}</li>
            <li data-content="ram">RAM: ${itemData.des.ram}</li>
        </ul>
    </div>
    
    <div class="img_element">
        <img data-content="selectImg" src="${itemData.stringSrc}">
    </div>
</div>`
    }

}