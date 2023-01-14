import Example from './scripts/example';
import Unit from './scripts/unit';
import Icon from './scripts/icon'
document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('#root');
    new Example(root);
    fetch(
        "https://raw.communitydragon.org/13.1/cdragon/tft/en_us.json"   
    )
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const units = data.sets[8].champions.slice(0,-4);
        console.log(data);
        for(let i = 0; i<units.length; i++) {
            const champ = new Unit(units[i]);
            console.log(champ);
            if(champ.name !== "Volcanic Sol" && 
            champ.name !== "Giant Crabgot" && 
            champ.name !== "Hackerim" &&
            champ.name !== "Mutant Zac"){
                const unitIcon = new Icon(champ, 50, 50);
                root.append(unitIcon.ele);
            }
        }
    })
})

