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