class Icon {
    constructor(champ, width, height) {
        this.champ = champ;
        this.ele = document.createElement("img");
        this.ele.setAttribute("class", `cost${champ.cost}`)
        this.ele.setAttribute("src", 
        `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/tft-hero-augment/${champ.icon}png`);
        if (this.champ.name === "Wukong") {
            this.ele.setAttribute("src", 
            `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/tft-hero-augment/TFT8_Wukong.TFT_Set8.png`)
        }
        this.ele.setAttribute('width', `${width}`)
        this.ele.setAttribute('height', `${height}`);
        this.handleClick = this.handleClick.bind(this);
        this.ele.addEventListener('click', this.handleClick);
    }

    handleClick(e) {
        e.preventDefault();
        this.champ.printData();
    }
}

export default Icon;