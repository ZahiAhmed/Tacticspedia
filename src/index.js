import Example from './scripts/example';
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
        let units = data.sets[8].champions.slice(0,-4);
        console.log(units);
        units = units.sort((a,b) => {
            if(a.name<b.name) return -1
            return 1;
        });
        // units = units.sort();
        for(let i = 0; i<units.length; i++) {
            const li = document.createElement('li');
            const icon = document.createElement("img");
            icon.setAttribute  ("src", `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/tft-hero-augment/${units[i].icon.slice(31,-3)}png`);
            li.innerHTML = `<a> ${units[i].name} </a>`
            li.append(icon);
            root.append(li);
        }
    });
})

