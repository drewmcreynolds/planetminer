let cheese = 0;
let cheesePerSec =0;
let howmanyclick = 0;
let howmanyautorover = 0;
let howmanyautoshuttle = 0;
let costclick = 0;
let costauto = 0;
let costauto2 = 0;
let isCheeseIntervalRunning = false;
let enablepickaxe = true;





let clickUpgrades = {}
clickUpgrades ={
    pickaxes: {
        price: 5,
        quantity: 0,
        multiplier: 5,
        upgradePriceIncermenter:5,
        

    }
}
 

let automaticUpgrades = {}
automaticUpgrades = {
    rover: {
        price: 250,
        quantity: 0,
        multiplier: 10,
        upgradePriceIncermenter: 1,        
    },
    shuttle: {
        price: 1500,
        quantity: 0,
        multiplier: 25,
        upgradePriceIncermenter: 1,
    }
}

 function preventContext(){
     console.log('no!')
     event.preventDefault()
 }

 

function mine(){
    cheese += 1;
    for(let key in clickUpgrades){
        let upgrade = clickUpgrades[key]
        let total = upgrade.quantity*upgrade.multiplier
        cheese += total
    }
    document.getElementById('cheese').innerText = cheese.toString()

}




function buyPickAxe(str){
    if(cheese >=Math.floor(clickUpgrades[str].price*clickUpgrades[str].upgradePriceIncermenter*clickUpgrades[str].quantity)+25 ){
    howmanyclick++
    document.getElementById('howmanyclick').innerText = howmanyclick.toString()
    clickUpgrades[str].quantity++
    clickUpgrades[str].multiplier*clickUpgrades[str].quantity    
    let costclick = Math.floor(clickUpgrades[str].price*clickUpgrades[str].upgradePriceIncermenter*clickUpgrades[str].quantity)+25
    document.getElementById('costclick').innerText = costclick.toString() 
    cheese -= Math.floor(clickUpgrades[str].price*clickUpgrades[str].upgradePriceIncermenter*clickUpgrades[str].quantity)}
    else{}
    update()
}
function buyAutoUpgradeRover(str){
    howmanyautorover++
    document.getElementById('howmanyautorover').innerText = howmanyautorover.toString()
    automaticUpgrades[str].quantity++
    automaticUpgrades[str].multiplier*automaticUpgrades[str].quantity    
    let costauto = Math.floor(automaticUpgrades[str].price*automaticUpgrades[str].quantity*automaticUpgrades[str].upgradePriceIncermenter)+250
    document.getElementById('costauto').innerText = costauto.toString()
    cheese -= Math.floor(automaticUpgrades[str].price*automaticUpgrades[str].quantity*automaticUpgrades[str].upgradePriceIncermenter)
    update()
}

function buyAutoUpgradeShuttle(str){
    howmanyautoshuttle++
    document.getElementById('howmanyautoshuttle').innerText = howmanyautoshuttle.toString()
    automaticUpgrades[str].quantity++
    automaticUpgrades[str].multiplier*automaticUpgrades[str].quantity    
    let costauto2 = Math.floor(automaticUpgrades[str].price*automaticUpgrades[str].quantity*automaticUpgrades[str].upgradePriceIncermenter)+1500
    document.getElementById('costauto2').innerText = costauto2.toString()
    cheese -= Math.floor(automaticUpgrades[str].price*automaticUpgrades[str].quantity*automaticUpgrades[str].upgradePriceIncermenter)

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
    }else{}    
}
function update(){    
    document.getElementById('cheese').innerText = cheese.toString();
}





update()
cheeseInterval()

