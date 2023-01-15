import Unit from './unit';
import Icon from './icon';

class Sidebar{
    constructor(units){
        this.units = units;
        this.ele = document.querySelector("#champ_list")
        this.listIcons();
        this.search = document.getElementById("searchChamp");
        this.handleSearch = this.handleSearch.bind(this);
        this.search.addEventListener("keyup", this.handleSearch)
    }

    handleSearch(e){
        e.preventDefault();
        this.listIcons(this.search.value.toLowerCase());
    }

    sort(){
    }

    listIcons(str=""){
        const invalidUnits = ["Volcanic Sol", "Giant Crabgot", "Hackerim", "Mutant Zac"];
        this.champs = [];
        this.ele.innerHTML = "";
        for(let i = 0; i<this.units.length; i++) {
            const champ = new Unit(this.units[i]);
            if(!invalidUnits.includes(champ.name) && (champ.name.toLowerCase().includes(str))){
                this.champs.push(champ);
                const unitIcon = new Icon(champ, 50, 50);
                this.ele.append(unitIcon.ele);
            }
        }

    }
}

export default Sidebar;