class ElementTable {


    constructor(options){
        this.elem = options.elem;
        this.input = options.input;
        this.boardsArray = [
            {name: "orange_pi_plus",
                status: true,
                stringSrc: "img/orange_pi_plus.jpg",
                des: {
                    cpu: "AllWinner H3",
                    wifi: true,
                    lan: "1 Гб/сек",
                    sata: true,
                    emmc: "8 Гб",
                    ram: "1 Гб"}
            },
            {name: "orange_pi_plus_2",
                status: true,
                stringSrc: "img/orange_pi_plus_2.png",
                des: {
                    cpu: "AllWinner H3",
                    wifi: true,
                    lan: "1 Гб/сек",
                    sata: true,
                    emmc: "8 Гб",
                    ram: "2 Гб"}
            },
            {name: "orange_pi_win_plus",
                status: true,
                stringSrc: "img/orange_pi_win_plus.jpg",
                des: {
                    cpu: "Allwinner A64",
                    wifi: true,
                    lan: "1 Гб/сек",
                    sata: false,
                    emmc: "",
                    ram: "2 Гб"}
            },
            {name: "orange_pi_zero_plus_2_h3",
                status: true,
                stringSrc: "img/orange_pi_zero_plus_2_h3.jpg",
                des: {
                    cpu: "Allwinner H3",
                    wifi: true,
                    lan: "",
                    sata: false,
                    emmc: "8 Гб",
                    ram: "512 Мб"}
            },
            {name: "orange_pi_zero_plus_2_h5",
                status: true,
                stringSrc: "img/orange_pi_zero_plus_2_h5.jpg",
                des: {
                    cpu: "Allwinner H5",
                    wifi: true,
                    lan: "",
                    sata: false,
                    emmc: "8 Гб",
                    ram: "512 Мб"}
            },
            {name: "orange_pi_one",
                status: true,
                stringSrc: "img/orange_pi_one.jpg",
                des: {
                    cpu: "Allwinner H3",
                    wifi: false,
                    lan: "100Мб/c",
                    sata: false,
                    emmc: "",
                    ram: "512 Мб"}
            },
            {name: "orange_pi_one_plus",
                status: true,
                stringSrc: "img/one_plus.jpg",
                des: {
                    cpu: "Allwinner H6",
                    wifi: false,
                    lan: "1Гб/c",
                    sata: false,
                    emmc: "",
                    ram: "1 Гб LPDDR3"}
            }
        ];
        this.render();
    }


    elementChange(){
        debugger;
        for (let count=0; count < this.boardsArray.length; count++){
            // this.boardsArray[3].status = false;
            // this.boardsArray[5].status = false;
        }
        this.render();
    }

    render(){
        for(let count=0; count < this.boardsArray.length ; count++){
            if (this.boardsArray[count].status){
                let temp = this.elem.cloneNode(true);
                temp.querySelector('[data-content="selectTab"]').style.visibility = "visible";
                temp.querySelector('ul').style.display = 'block';
                temp.querySelector('[data-content="selectImg"]').src = this.boardsArray[count].stringSrc;
                temp.querySelector('[data-content="name"]').innerHTML = this.boardsArray[count].name;
                temp.querySelector('[data-content="cpu"]').innerHTML = "CPU: " + this.boardsArray[count].des.cpu;
                temp.querySelector('[data-content="wifi"]').innerHTML = "WIFI: " + ((this.boardsArray[count].des.wifi)?'yes':'no');
                temp.querySelector('[data-content="lan"]').innerHTML = "LAN: " + ((this.boardsArray[count].des.lan)?(this.boardsArray[count].des.lan):'no');
                temp.querySelector('[data-content="sata"]').innerHTML = "SATA: " + ((this.boardsArray[count].des.sata)?'yes':'no');
                temp.querySelector('[data-content="emmc"]').innerHTML = "EMMC: " + ((this.boardsArray[count].des.emmc)?(this.boardsArray[count].des.emmc):'no');
                temp.querySelector('[data-content="ram"]').innerHTML = "RAM: " + ((this.boardsArray[count].des.ram)?(this.boardsArray[count].des.ram):'no');
                this.elem.parentNode.insertBefore(temp, this.elem.nextSibling);
            }
        }
    }

}