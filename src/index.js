import ScrollBar from './scripts/scrollbar';
import MyChart from './scripts/my_chart';
import Sidebar from './scripts/sidebar'
document.addEventListener("DOMContentLoaded", () => {
    fetch(
        "https://raw.communitydragon.org/13.1/cdragon/tft/en_us.json"   
    )
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        const units = data.sets[8].champions.slice(0,-4);
        const traits = data.sets[8].traits;
        console.log(data);
        new ScrollBar(units);
        new MyChart(units);
        new Sidebar(traits, units);
    })
})

