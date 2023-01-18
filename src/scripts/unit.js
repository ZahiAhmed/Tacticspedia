import { Chart } from "chart.js";

class Unit{
    constructor(data){
        this.ability = data.ability; //abilities have variables & icon too
        // this.parseAbility();
        this.cost = data.cost;
        this.icon = `${data.icon.slice(31,-3)}png`;
        this.name = data.name;
        this.hp = data.stats.hp;
        this.armor = data.stats.armor;
        this.magicresist = data.stats.magicResist;
        this.attackspeed = Math.round(100*data.stats.attackSpeed)/100;
        this.attackdamage = data.stats.damage;
        this.startingmana = data.stats.initialMana;
        this.totalmana = data.stats.mana;
        this.range = data.stats.range;
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
        const that = this;
        canvas.chart = new Chart(canvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ["HP", "Armor", "MR", "AD", "AS", "Range"],
                datasets: [{
                    data: [
                        this.hp/334.25, 
                        this.armor/17.5,
                        this.magicresist/17.5, 
                        this.attackdamage/22.5, 
                        this.attackspeed*4, 
                        this.range
                    ],
                    backgroundColor: ['green', 'orange', 'purple', 'red', 'yellow', 'blue']
                }]
            },
            options: {
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                if (context.parsed.x === 0) return that.hp;
                                if (context.parsed.x === 1) return that.armor;
                                if (context.parsed.x === 2)return that.magicresist;
                                if (context.parsed.x === 3)return that.attackdamage;
                                if (context.parsed.x === 4)return that.attackspeed;
                                if (context.parsed.x === 5)return that.range;
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y:{
                        ticks: {
                            beginAtZero: true,
                            display: false,
                            stepSize: 4
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

    // parseAbility(){
    //     const desc = this.ability.desc.split("@");
    //     const values = this.ability.variables;
    //     desc.forEach(str => {
    //         debugger
    //         str = str.split("*");
    //         for(let i = 0; i<values.length; i++) {
    //             if(str[0] === values[i].name || str[0]==='Modified'+values[i].name)
    //                 str = values[i].value.join("/");
    //         }
    //     });
    //     console.log(desc.join(""));
    // }

}
export default Unit;