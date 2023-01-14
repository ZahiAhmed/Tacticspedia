import Unit from './unit';
import Icon from './icon';

class Sidebar{
    constructor(units){
        this.champs = [];
        this.ele = document.querySelector("#sidebar");
        for(let i = 0; i<units.length; i++) {
            const champ = new Unit(units[i]);
            // console.log(champ);
            if(champ.name !== "Volcanic Sol" && 
            champ.name !== "Giant Crabgot" && 
            champ.name !== "Hackerim" &&
            champ.name !== "Mutant Zac"){
                this.champs.push(champ);
                const unitIcon = new Icon(champ, 50, 50);
                this.ele.append(unitIcon.ele);
            }    

        }

        
        console.log(this.champs);
    }

    sort(){

    }
}

export default Sidebar;