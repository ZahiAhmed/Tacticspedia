import Unit from './unit';
import Icon from './icon';
import Chart from 'chart.js/auto'

class MyChart{
    constructor(units){
        this.units = units;
        this.filterChamps();
        this.ele = document.getElementById('chart');
        this.dropdown = document.querySelector("#dropdown")
        this.handleDropdown = this.handleDropdown.bind(this);
        this.dropdown.addEventListener('change', this.handleDropdown);
    }

    handleDropdown(e){
        e.preventDefault();
        this.sort(this.dropdown.options[this.dropdown.selectedIndex].value);
        this.showChart(this.dropdown.options[this.dropdown.selectedIndex].value)
    }

    filterChamps(){
        const invalidUnits = ["Volcanic Sol", "Giant Crabgot", "Hackerim", "Mutant Zac"];
        this.champs = [];
        for(let i = 0; i<this.units.length; i++) {
            const champ = new Unit(this.units[i]);
            if(!invalidUnits.includes(champ.name)){
                this.champs.push(champ);
            }
        }
    }

    makeIcons(){
        const labels = {};
        const icons = [];
        const names = [];
        labels.icons = icons;
        labels.names = names;
        for(let i = 0; i<this.champs.length; i++){
            const unitIcon = new Icon(this.champs[i], 25, 25);
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
        const labels = this.makeIcons();
        this.chart = new Chart(this.ele.getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels.names,
                datasets:[{
                    data: this.data,
                    backgroundColor: new Array(59).fill('blue'),
                }]    
            },
            options: {
                indexAxis: 'y',
                elements: {
                    bar: {
                      borderWidth: 0,
                      borderColor: 'blue'
                    }
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