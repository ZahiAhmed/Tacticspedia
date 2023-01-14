class Unit{
    constructor(data){
        this.ability = data.ability.desc;
        this.cost = data.cost;
        this.icon = data.icon.slice(31,-3);
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
        document.querySelector(`#name`).innerText = `${this.name}`;
        document.querySelector(`#ability`).innerText = `${this.ability}`;
        document.querySelector(`#traits`).innerText = `${this.traits}`;
        document.querySelector('#hp').innerText = `${this.hp}`;
        document.querySelector('#armor').innerText = `${this.armor}`;
        document.querySelector(`#magic_resist`).innerText = `${this.magicresist}`;
        document.querySelector(`#mana`).innerText = `${this.startingmana}/${this.totalmana}`;
        document.querySelector(`#ad`).innerText = `${this.attackdamage}`;
        document.querySelector(`#as`).innerText = `${this.attackspeed}`;
        document.querySelector(`#range`).innerText = `${this.range}`;
        document.querySelector(`#cost`).innerText = `${this.cost}`;
    }
}
export default Unit;