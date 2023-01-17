import Unit from './unit';
import Icon from './icon';
import Chart from 'chart.js/auto'

class MyChart{
    constructor(units){
        this.units = units;
        this.filterChamps();
        this.ele = document.getElementById('chart');
        this.showChart();
        this.dropdown = document.querySelector("#dropdown")
        this.costdropdown = document.querySelector("#cost-dropdown");
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleCost = this.handleCost.bind(this);
        this.dropdown.addEventListener('change', this.handleDropdown);
        this.costdropdown.addEventListener('change', this.handleCost);
    }

    handleCost(e){
        e.preventDefault();
        this.filterChamps([parseInt(this.costdropdown.options[this.costdropdown.selectedIndex].value)]);
        this.sort(this.dropdown.options[this.dropdown.selectedIndex].value);
        this.showChart(this.dropdown.options[this.dropdown.selectedIndex].value);
    }

    handleDropdown(e){
        e.preventDefault();
        this.sort(this.dropdown.options[this.dropdown.selectedIndex].value);
        this.ele.style.visibility = "visible";
        this.showChart(this.dropdown.options[this.dropdown.selectedIndex].value)
    }

    filterChamps(costs=[1,2,3,4,5]){
        if (!costs[0]) costs = [1,2,3,4,5];
        const invalidUnits = ["Volcanic Sol", "Giant Crabgot", "Hackerim", "Mutant Zac"];
        this.champs = [];
        for(let i = 0; i<this.units.length; i++) {
            const champ = new Unit(this.units[i]);
            if(!invalidUnits.includes(champ.name) && (costs.includes(champ.cost))){
                this.champs.push(champ);
            }
        }
    }

    makeLabels(){
        const labels = {};
        labels.icons = [];
        labels.names = [];
        for(let i = 0; i<this.champs.length; i++){
            const unitIcon = new Icon(this.champs[i], 1, 1);
            labels.icons.push(unitIcon.ele);
            labels.names.push(unitIcon.champ.name);
        }
        return labels;
    }

    showChart(stat){
        if (this.chart) this.chart.destroy();
        if (stat === "HP") this.hpChart();
        if (stat === "Armor") this.armorChart();
        if (stat === "Magic Resist") this.mrChart();
        if (stat === "Attack Damage") this.adChart();
        if (stat === "Attack Speed") this.asChart();
        if (stat === "Attack Range") this.rangeChart();
        const labels = this.makeLabels();
        this.ele.height = labels.names.length *15;
        console.log(labels.icons);
        this.chart = new Chart(this.ele.getContext('2d'), {
            type: 'bar',
            plugins: [{
                afterDraw: function(chart) {
                    const ctx = chart.ctx;
                    const xAxis = chart.scales.x;
                    const yAxis = chart.scales.y;
                    yAxis.ticks.forEach((value, index) => {
                        const x = xAxis.left;
                        const y = yAxis.getPixelForTick(index);
                        const width = 35;
                        const height = 35;
                        ctx.drawImage(labels.icons[index], x-40, y-18, width, height);
                    });
                }
            }],
            data: {
                labels: labels.names,
                datasets:[{
                    label: stat,
                    categoryPercentage: 1,
                    hoverBackgroundColor: 'red',
                    hoverBorderColor: 'goldenrod',
                    borderWidth: 5,
                    data: this.data,
                    backgroundColor: 'blue',
                }]    
            },
            options: {
                indexAxis: 'y',
                scales: {
                    alignToPixels: true,
                    y:{
                        gridLines: {
                            drawBorder: false,
                            tickMarkLength: 20,
                            lineWidth: 20
                        },
                        ticks:{
                            // labelOffset: -25,
                            maxTicksLimit: 59,
                            autoSkip: false,
                            padding: 30
                        },
                        grid: {
                            tickLength: 20
                        }
                    },
                },
            }
        });
    }


    hpChart(){
        this.data = [];
        this.champs.forEach(element => {
            this.data.push(element.hp);
        });
    }

    armorChart(){
        this.data = [];
        this.champs.forEach(element => {
            this.data.push(element.armor);
        });
    }

    mrChart(){
        this.data = [];
        this.champs.forEach(element => {
            this.data.push(element.magicresist);
        });
    }

    adChart(){
        this.data = [];
        this.champs.forEach(element => {
            this.data.push(element.attackdamage);
        });
    }

    asChart(){
        this.data = [];
        this.champs.forEach(element => {
            this.data.push(element.attackspeed);
        });
    }

    rangeChart(){
        this.data = [];
        this.champs.forEach(element => {
            this.data.push(element.range);
        });
    }



    sort(stat){
        if (stat === "HP") this.sortbyHP();
        if (stat === "Armor") this.sortbyArmor();
        if (stat === "Magic Resist") this.sortbyMR();
        if (stat === "Attack Damage") this.sortbyAD();
        if (stat === "Attack Speed") this.sortbyAS();
        if (stat === "Attack Range") this.sortbyRange();
    }

    sortbyHP(){
        this.champs = this.champs.sort(function(x,y) {
            if (x.hp < y.hp) return 1;
            return -1;
        });
    }

    sortbyArmor(){
        this.champs = this.champs.sort(function(x,y) {
            if (x.armor < y.armor) return 1;
            return -1;
        });
    }

    sortbyMR(){
        this.champs = this.champs.sort(function(x,y) {
            if (x.magicresist < y.magicresist) return 1;
            return -1;
        });
    }

    sortbyAD(){
        this.champs = this.champs.sort(function(x,y) {
            if (x.attackdamage < y.attackdamage) return 1;
            return -1;
        });
    }

    sortbyAS(){
        this.champs = this.champs.sort(function(x,y) {
            if (x.attackspeed < y.attackspeed) return 1;
            return -1;
        });
    }

    sortbyRange(){
        this.champs = this.champs.sort(function(x,y) {
            if (x.range < y.range) return 1;
            return -1;
        });
    }

}

export default MyChart; 