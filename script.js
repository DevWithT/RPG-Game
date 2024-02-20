let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
let currentOres = 0;
let currentLogs = 0;

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const slimeImage = document.getElementById("slime");
const logs = [
{ name: "Log", value: 10 },
{ name: "Maple", value: 50 },
{ name: "RedWood", value: 300 },
{ name: "Divine Willow", value: 500 },
{ name: "Holy Oak", value: 1000000 },
];
const ores = [
{ name: "Copper", value: 10 },
{ name: "Tin", value: 20 },
{ name: "Iron", value: 50 },
{ name: "Coal", value: 100 },
{ name: "Gold", value: 1000 },
{ name: "Diamond", value: 10000 }
];
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
]
const locations = [
  {
    name: "town square loc 0",
    "button text": ["Go to store", "Go to cave", "Explore"],
    "button functions": [goStore, goCave, goExplore],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store loc 1",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square", "Sell Things"],
    "button functions": [buyHealth, buyWeapon, goTown, goSell],
    text: "You enter the store."
  },
  {
    name: "cave loc 2",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "fight loc 3",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster loc 4",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },
  {
    name: "lose loc 5",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. ☠️"
  },
  { 
    name: "win loc 6", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeat the dragon! YOU WIN THE GAME! 🎉" 
  },
  {
    name: "easter egg loc 7",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  },
  {
    name: "explore loc 8",
    "button text": ["Woods", "Old Mine", "Go to town square?"],
    "button functions": [goWoods, goMine, goTown],
    text: "You step out of the town gates and you see a forked road. Where do you want to go from here?"
  },
  {
    name: "Woods loc 9",
    "button text": ["Chop Trees", "Follow the path", "Head Back"],
    "button functions": [chopLog, deeperWoods, goExplore],
    text: "As you step into the woods you can hear the wind howl. The trees move in a mesmorizing way. Do not get distracted!"
  },
  {
    name: "Mines loc 10",
    "button text": ["Mine", "Look for a Fight", "Leave Mines"],
    "button functions": [goWoods, goMine, goExplore],
    text: "You enter a dark mine. It is very gloomy and you can feel something staring at you. What do you want to do?"
  },
  {
    name: "Sell Items loc 11",
    "button text": ["Sell Weapon", "Sell Wood", "Leave Shop"],
    "button functions": [sellWeapon, sellLog, goTown],
    text: "What would you like to sell?"
    },
    {
        name: "Deeper Woods loc 12",
        "button text": ["Chop Maples", "Keep Going", "Head Back"],
        "button functions": [chopMaple, woodPath, goWoods],
        text: "You step further into the woods, it gets darker. It's definitely much creepier. You hear sounds all around you. What do you want to do?"
    },
    {
        name: "Wooded Path loc 13",
        "button text": ["Go Left", "Go Right", "Head Back"],
        "button functions": [leftPath, rightPath, goWoods],
        text: "There is a fork in the road. A path to the left and a path to the right. Be careful what you choose."
    },
    {
        name: "Left Path loc 14",
        "button text": ["Go Left", "Go Right", "Head Back"],
        "button functions": [chopMaple, deeperWoods, goWoods],
        text: "You head left, the path seemed to have went on forever. You come to a tine cabin. Something feels off."
    },
    {
        name: "Right Path loc 15",
        "button text": ["Chop Red Wood", "Continue on", "Head Back"],
        "button functions": [chopRedwood, deeperWoods, goWoods],
        text: "As you go down the right path the creepiness has subsided and it looks completely different. It is so full of life. You have found some nice looking Redwood Trees. These would be handy! What do you want to do?"
    },
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = goExplore;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button4.innerText = location["button text"][3];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  button4.onclick = location["button functions"][3];
  text.innerText = location.text;
}

function goExplore(){
  update(locations[8]);
}

function goWoods(){
  update(locations[9]);
}

function goMine(){
  update(locations[10]);
}

function deeperWoods() {
    update(locations[12]);
}

function woodPath() {
    update(locations[13]);
}

function leftPath() {
    update(locations[14]);
}

function rightPath() {
    update(locations[15]);
}

function goTown() {
  update(locations[0]);
  slimeMonster.style.display = "none";
  fangedBeastMonster.style.display = "none";
  dragonMonster.style.display = "none";
}

function goStore() {
  update(locations[1]);
  button4.style.display = "block";
}

function goCave() {
  update(locations[2]);
}

function goSell() {
  update(locations[11]);
  button4.style.display = "none";
}

function sellLog() {
  if (inventory.indexOf("Log") > -1) {
    gold += 10;
    goldText.innerText = gold;
    let currentLogs = inventory.pop(inventory.indexOf("Log"));
    text.innerText = "You sold a " + currentLogs + ".";
    text.innerText += " In your inventory you have: " + inventory + ", ";
  } else if (inventory.indexOf("Maple") > -1) {
      gold += 50;
      goldText.innerText = gold;
      let currentLogs = inventory.pop(inventory.indexOf("Maple"));
      text.innerText = "You sold a " + currentLogs + ".";
      text.innerText += " In your inventory you have: " + inventory + ", ";
    } else if (inventory.indexOf("RedWood") > -1) {
      gold += 300;
      goldText.innerText = gold;
      let currentLogs = inventory.pop(inventory.indexOf("RedWood"));
      text.innerText = "You sold a " + currentLogs + ".";
      text.innerText += " In your inventory you have: " + inventory + ", ";
    } else if (inventory.indexOf("Divine Willow") > -1) {
      gold += 500;
      goldText.innerText = gold;
      let currentLogs = inventory.pop(inventory.indexOf("Divine Willow"));
      text.innerText = "You sold a " + currentLogs + ".";
      text.innerText += " In your inventory you have: " + inventory + ", ";
    } else if (inventory.indexOf("Holy Oak") > -1) {
      gold += 1000000;
      goldText.innerText = gold;
      let currentLogs = inventory.pop(inventory.indexOf("Holy Oak"));
      text.innerText = "You sold a " + currentLogs + ".";
      text.innerText += " In your inventory you have: " + inventory + ", ";
    }

  else {
    text.innerText = "You have no more wood in your Inventory";
  }
}

async function chopLog(){
    if (chopLogChance()) {
        text.innerText = "You swing your axe, but did not get any logs";
    } else {
        if (currentLogs < logs.length - 1) {
            text.innerText = "Swinging Axe..."
            await sleep(2000);
            let newLog = logs[currentLogs].name;
            text.innerText = "You have chopped " + newLog + ".";
            inventory.push(newLog);
            text.innerText += " You have added " + newLog + " to your inventory!"
            text.innerText += " In your inventory you now have: " + inventory + ", ";
            if (randomFight()) {
                fightSlime();
            }
        }
    } 
}

async function chopMaple() {
    if (chopLogChance()) {
        text.innerText = "These maple trees are tough, you didn't get any logs";
    } else {
        if (currentLogs < logs.length - 1) {
            text.innerText = "Swinging Axe..."
            await sleep(4000);
            let mapleLog = logs[1].name;
            text.innerText = "You have chopped " + mapleLog + ".";
            inventory.push(mapleLog);
            text.innerText += " You have added " + mapleLog + " to your inventory!"
            text.innerText += " In your inventory you now have: " + inventory + ", ";
        }
    }
}

function chopRedwood() {
    if (currentLogs < logs.length - 1) {
        let redwoodLog = logs[2].name;
        text.innerText = "You have chopped " + redwoodLog + ".";
        inventory.push(redwoodLog);
        text.innerText += " You have added " + redwoodLog + " to your inventory!"
        text.innerText += " In your inventory you now have: " + inventory + ", ";
    }
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory + ", ";
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.indexOf(weapons) > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory + ", ";
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  slimeMonster.style.display = "block";
  fighting = 0;
  goFight();
}

function fightBeast() {
  fangedBeastMonster.style.display = "block";
  fighting = 1;
  goFight();
}

function fightDragon() {
  dragonMonster.style.display = "block";
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

function chopLogChance() {
    return Math.random() > .3;
}
function randomFight() {
    return Math.random() < .05;
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}