import { Chart } from "chart.js";

class Unit{
    constructor(data){
        this.ability = data.ability; //abilities have name & icon too
        this.cost = data.cost;
        this.icon = `${data.icon.slice(31,-3)}png`;
        this.name = data.name;
        this.hp = data.stats.hp;
        this.armor = Math.round(100*data.stats.armor)/100;
        this.magicresist = Math.round(100*data.stats.magicResist)/100;
        this.attackspeed = Math.round(100*data.stats.attackSpeed)/100;
        this.critchance = Math.round(100*data.stats.critChance)/100;
        this.attackdamage = Math.round(100*data.stats.damage)/100;
        this.startingmana = Math.round(100*data.stats.initialMana)/100;
        this.totalmana = Math.round(100*data.stats.mana)/100;
        this.range = Math.round(100*data.stats.range)/100;
        this.traits = data.traits;
    }
    printData(){
        document.querySelector(`#splash`).innerHTML = `<img class="cost${this.cost}" src="https://ddragon.leagueoflegends.com/cdn/13.1.1/img/tft-champion/${this.icon}">`;
        document.querySelector(`#name`).innerText = `${this.name}`;
        document.querySelector(`#ability`).innerText = `${this.ability.name}`;
        document.querySelector(`#ability-desc`).innerText = `${this.ability.desc}`;
        document.querySelector(`#traits`).innerText = `${this.traits.join(", ")}`;
        document.querySelector('#hp').innerText = `HP: ${this.hp}`;
        document.querySelector('#armor').innerText = `Armor: ${this.armor}`;
        document.querySelector(`#magic_resist`).innerText = `Magic Resist: ${this.magicresist}`;
        document.querySelector(`#mana`).innerText = `Mana: ${this.startingmana}/${this.totalmana}`;
        document.querySelector(`#ad`).innerText = `AD: ${this.attackdamage}`;
        document.querySelector(`#as`).innerText = `AS: ${this.attackspeed}`;
        document.querySelector(`#range`).innerText = `Attack Range: ${this.range}`;
        document.querySelector(`#cost`).innerText = `Cost: ${this.cost}`;
        this.printGraph(document.querySelector('#info-graph'));
    }

    printGraph(canvas){
        if (canvas.chart) canvas.chart.destroy();
        canvas.chart = new Chart(canvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ["HP", "Armor", "MR", "AD", "AS", "Range"],

                datasets: [{
                    data: [Math.round(this.hp/334.25), Math.round(this.armor/17.5), Math.round(this.magicresist/17.5), Math.round(this.attackdamage/22.5), Math.round(this.attackspeed*4), this.range],
                    backgroundColor: ['green', 'orange', 'purple', 'red', 'yellow', 'blue']
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y:{
                        ticks: {
                            beginAtZero: true,
                            display: false,
                            stepSize: 1,
                        },
                        gridLines: {
                            drawBorder: false,
                        },
                        grid: {
                            tickLength: 0,
                        }
                    }
                }
            }
        })
    }

}
export default Unit;