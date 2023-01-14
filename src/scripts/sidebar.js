import Unit from './unit';
import Icon from './icon';

class Sidebar{
    constructor(units){
        const invalidUnits = ["Volcanic Sol", "Giant Crabgot", "Hackerim", "Mutant Zac"];
        this.champs = [];
        this.ele = document.querySelector("#sidebar");
        for(let i = 0; i<units.length; i++) {
            const champ = new Unit(units[i]);
            // console.log(champ);
            if(!invalidUnits.includes(champ.name)){
                this.champs.push(champ);
                const unitIcon = new Icon(champ, 50, 50);
                this.ele.append(unitIcon.ele);
            }

        }        
        console.log(this.champs);
    }
    sort(){ //override sort algorithm
    }
}

export default Sidebar;