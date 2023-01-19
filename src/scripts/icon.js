class Icon {
    constructor(champ, width, height) {
        this.champ = champ;
        
        this.span = document.createElement('span');
        this.span.setAttribute('title', `${this.champ.name}`)

        this.ele = document.createElement("img");
        this.handleClick = this.handleClick.bind(this);
        this.ele.addEventListener('click', this.handleClick);
        
        this.ele.setAttribute("class", `cost${champ.cost}`)
        this.ele.setAttribute("src", 
        `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/tft-hero-augment/${champ.icon}`);
        if (this.champ.name === "Wukong") {
            this.ele.setAttribute("src", 
            `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/tft-hero-augment/TFT8_Wukong.TFT_Set8.png`)
        }
        this.ele.setAttribute('width', `${width}`)
        this.ele.setAttribute('height', `${height}`);
        this.span.append(this.ele);
    }

    handleClick(e) {
        e.preventDefault();
        this.champ.printData();
    }

}

export default Icon;