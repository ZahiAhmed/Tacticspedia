import Unit from './unit';
import Icon from './icon';
class Sidebar {
    constructor(traits, units){
        this.units = units;
        this.traits = traits.sort((x,y) => {
            if(x.name < y.name) return -1;
            return 1;
        })
        this.ele = document.getElementById('traits-bar')
        this.makeChamps();
        this.divs = {origins: document.querySelector('#origins'), classes: document.querySelector('#classes'), legendary: document.querySelector('#legendary')};
        this.synergies = { 
            origins: [
            "A.D.M.I.N.", 
            "Anima Squad",
            "Civilian",
            "Gadgeteen",
            "LaserCorps",
            "Mecha:PRIME",
            "Ox Force",       
            "Supers",
            "Star Guardian",
            "Threat",
            "Underground",
        ],
            classes: [
            "Ace",
            "Aegis",
            "Brawler",
            "Defender",
            "Duelist",            
            "Hacker",
            "Heart",
            "Mascot",
            "Prankster",
            "Recon",
            "Renegade",
            "Spellslinger",
            "Sureshot"
        ],
            legendary: [
                "Arsenal",
                "Corrupted",
                "Forecaster"
        ],
        }
        this.appendDivs();
        
        this.search = document.getElementById("searchTrait");
        this.handleSearch = this.handleSearch.bind(this);
        this.search.addEventListener("keyup", this.handleSearch)
        this.toggleButton = document.getElementById('show-hide-traits');
        this.togglePanel = this.togglePanel.bind(this);
        this.toggleButton.addEventListener('click', this.togglePanel);

    }

    togglePanel(e){
        e.preventDefault();
        if (this.ele.style.width === '' || this.ele.style.width === '0px') {
            this.ele.style.width = "400px";
            this.toggleButton.innerText = "Hide Traits";
        } else{
            this.ele.style.width = "0";
            this.toggleButton.innerText = "Show Traits";
        }
    }

    handleSearch(e){
        e.preventDefault();
        this.divs.origins.innerHTML = "<h2>Origins</h2>";
        this.divs.classes.innerHTML = "<h2>Classes</h2>";
        this.divs.legendary.innerHTML = "<h2>Legendary</h2>";
        this.appendDivs(this.search.value.toLowerCase());
    }

    appendDivs(str=""){
        this.traits.forEach(trait => {
            const div = document.createElement('div');
            div.setAttribute('id', `${trait.name}`);
            this.appendH3(div, trait);
            this.appendImg(div, trait);
            this.appendDesc(div, trait);
            if(this.synergies.origins.includes(trait.name) && trait.name.toLowerCase().includes(str)) this.divs.origins.append(div);
            if(this.synergies.classes.includes(trait.name) && trait.name.toLowerCase().includes(str)) this.divs.classes.append(div);
            if(this.synergies.legendary.includes(trait.name) && trait.name.toLowerCase().includes(str)) this.divs.legendary.append(div);
        })
    }

    appendH3(div, trait){
        const label = document.createElement('h3');
        label.innerHTML = `${trait.name}`
        div.append(label);
    }

    appendImg(div, trait){
        const p = document.createElement('p')
        this.champs.forEach(champ => {
            if (champ.traits.includes(trait.name)){
                const icon = new Icon(champ, 35, 35);
                p.append(icon.span);
            };
        })
        div.append(p);
    }

    appendDesc(div, trait){
        const p = document.createElement('p');
        p.innerHTML = trait.desc;
        div.append(p);
    }

    makeChamps(){
        const invalidUnits = ["Volcanic Sol", "Giant Crabgot", "Hackerim", "Mutant Zac"];
        this.champs = [];
        for(let i = 0; i<this.units.length; i++) {
            const champ = new Unit(this.units[i]);
            if(!invalidUnits.includes(champ.name)){
                this.champs.push(champ);
            }
        }
        this.champs.sort((x,y) => {
            if (x.cost < y.cost) return -1;
            return 1;
        });
    }
}

export default Sidebar;