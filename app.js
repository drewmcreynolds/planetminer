var cheese = 0;

var howmanyclick = 0;

var howmanyauto = 0;

let clickUpgrades = {
    pickaxes: {
        price: 5,
        quantity: 0,
        multiplier:1
    },
    drills: {
        price: 5,
        quantity: 0,
        multiplier:2
    },
    lasers: {
        price: 6,
        quantity: 0,
        multiplier:3
    }
}

let automaticUpgrades = {
    rover: {
        price: 5,
        quantity: 0,
        multiplier:200
    },
    shuttle: {
        price: 5,
        quantity: 0,
        multiplier:300
    },
    crusier:{
        price: 5,
        quantity: 0,
        multiplier:500
    }
}


function mine(){
    cheese += 1;
    for(let key in clickUpgrades){
        let upgrade = clickUpgrades[key]
        let total = upgrade.quantity*upgrade.multiplier
        cheese += total
    }
    document.getElementById('cheese').innerHTML = cheese.toString();
    
}






function buyPickAxe(str){
    howmanyclick ++
    document.getElementById('howmanyclick').innerText = howmanyclick.toString()

    clickUpgrades[str].quantity++
    cheese -= clickUpgrades[str].price
    clickUpgrades[str].multiplier*clickUpgrades[str].quantity

    
    update()
}

// Update Auto upgrade towards the button
function buyAutoUpgrade(str){
    howmanyauto++
    document.getElementById('howmanyauto').innerText = howmanyauto.toString()

    automaticUpgrades[str].quantity++
    cheese -= automaticUpgrades[str].price
    automaticUpgrades[str].multiplier*automaticUpgrades[str].quantity
    startInterval()
    update()
}
// use towards global cheese count
function useAutoUpgrade(){
    document.getElementById(`${}`).innerText = cheese.toString()
}
function startInterval(){
  let collectionInterval = setInterval(useAutoUpgrade, 3000)
}


function update(){
    
    document.getElementById('cheese').innerText = cheese.toString();
}



