let cheese = 0;
let cheesePerSec =0;
let howmanyclick = 0;
let howmanyauto = 0;
let costclick = 0;
let costauto = 0;
let isCheeseIntervalRunning = false;



let clickUpgrades = {}
clickUpgrades ={
    pickaxes: {
        price: 5,
        quantity: 0,
        multiplier:1,
        upgradePriceIncermenter:5,

    }
}
 

let automaticUpgrades = {}
automaticUpgrades = {
    rover: {
        price: 5,
        quantity: 0,
        multiplier:2
    }
}



function mine(){
    cheese += 1;
    for(let key in clickUpgrades){
        let upgrade = clickUpgrades[key]
        let total = upgrade.quantity*upgrade.multiplier
        cheese += total
    }
    document.getElementById('cheese').innerHTML = cheese.toString()

}
function buyPickAxe(str){
    howmanyclick ++
    document.getElementById('howmanyclick').innerText = howmanyclick.toString()
    clickUpgrades[str].quantity++
    clickUpgrades[str].multiplier*clickUpgrades[str].quantity
    
    
    let costclick = Math.floor(clickUpgrades[str].price*clickUpgrades[str].upgradePriceIncermenter*clickUpgrades[str].quantity)
    document.getElementById('costclick').innerText = costclick.toString() 
        
    cheese -= Math.floor(clickUpgrades[str].price*clickUpgrades[str].upgradePriceIncermenter*clickUpgrades[str].quantity)
    
    
         
    update()
}
function buyAutoUpgrade(str){
    howmanyauto++
    document.getElementById('howmanyauto').innerText = howmanyauto.toString()
    automaticUpgrades[str].quantity++
    cheese -= automaticUpgrades[str].price
    automaticUpgrades[str].multiplier*automaticUpgrades[str].quantity    
    costauto += automaticUpgrades[str].price*automaticUpgrades[str].quantity
    document.getElementById('costauto').innerText = costauto.toString()

    update()
}

function useAutoUpgrade(){
   
    for(let key in automaticUpgrades){
        let upgrade = automaticUpgrades[key]
        let total = upgrade.quantity*upgrade.multiplier
        cheese += total
        }    
    document.getElementById('cheese').innerText = cheese.toString()    
    update()
}


function cheeseInterval(){
    if(isCheeseIntervalRunning == false){
        setInterval(useAutoUpgrade, 3000)
    }else{
        
    }
    
}
function update(){    
    document.getElementById('cheese').innerText = cheese.toString();
}



update()
cheeseInterval()

