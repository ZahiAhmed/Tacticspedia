import Unit from './unit';
import Icon from './icon';

class ScrollBar{
    constructor(units){
        this.units = units
        this.ele = document.querySelector("#champ_list")
        this.units
        this.listIcons();
        this.search = document.getElementById("searchChamp");
        this.handleSearch = this.handleSearch.bind(this);
        this.search.addEventListener("keyup", this.handleSearch)
    }

    handleSearch(e){
        e.preventDefault();
        this.listIcons(this.search.value.toLowerCase());
    }

    listIcons(str=""){
        const invalidUnits = ["Volcanic Sol", "Giant Crabgot", "Hackerim", "Mutant Zac"];
        this.champs = [];
        this.ele.innerHTML = "";
        for(let i = 0; i<this.units.length; i++) {
            const champ = new Unit(this.units[i]);
            if(!invalidUnits.includes(champ.name) && (champ.name.toLowerCase().includes(str))){
                this.champs.push(champ);
            }
        }
        this.sort();
    }

    sort(){
        this.champs.sort(function(x,y) {
            if (x.name < y.name) return -1;
            return 1;
        });
        for(let i = 0; i<this.champs.length; i++) {
            const unitIcon = new Icon(this.champs[i], 50, 50);
            this.ele.append(unitIcon.ele);
        }
    }
}

export default ScrollBar;