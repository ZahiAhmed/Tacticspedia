import Example from './scripts/example';
import ScrollBar from './scripts/scrollbar';
import MyChart from './scripts/my_chart';
// import Sidebar from './scrips/Sidebar'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('#tab_bar');
    new Example(root);
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
        // const Sidebar(traits); // make sidebar
    })
})

