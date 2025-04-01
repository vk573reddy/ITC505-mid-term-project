const story = {
    start: {
        text: "You find yourself in a dark forest. Two paths lie ahead.",
        choices: ["Take the left path", "Take the right path"],
        consequence: ["leftPath", "rightPath"],
        image: "Dark_forest.jpg"
    },
    leftPath: {
        text: "You encounter a mysterious hut. Do you enter?",
        choices: ["Enter the hut", "Walk past it"],
        consequence: ["hut", "pastHut"],
        image: "Hut_in_forest.jpg"
    },
    rightPath: {
        text: "You reach a river. Do you swim across or follow the bank?",
        choices: ["Swim across", "Follow the bank"],
        consequence: ["swim", "followBank"],
        image: "River_forest.jpg"
    },
    hut: {
        text: "A wizard offers you a potion. Do you drink it?",
        choices: ["Drink", "Decline"],
        consequence: ["potion", "noPotion"],
        image: "Wizard.jpg"
    },
    pastHut: {
        text: "You safely pass the hut and find a treasure chest!",
        choices: [],
        consequence: [],
        image: "Treasure_chest.jpg"
    },
    swim: {
        text: "You got swept away! The game ends.",
        choices: [],
        consequence: [],
        image: "Waterfall.jpg"
    },
    followBank: {
        text: "You find a bridge and cross safely. You win!",
        choices: [],
        consequence: [],
        image: "Wooden_bridge.jpg"
    },
    potion: {
        text: "The potion gives you super strength! You win!",
        choices: [],
        consequence: [],
        image: "Superhero_pose.jpg"
    },
    noPotion: {
        text: "The wizard curses you. You lose.",
        choices: [],
        consequence: [],
        image: "Wizard_curse.jpg"
    }
};

function startGame() {
    currentStage = "start";
    document.getElementById("restart").style.display = "none";
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    document.getElementById("story").textContent = stage.text;
    document.getElementById("story-image").src = stage.image;
    document.getElementById("choices").innerHTML = "";
    
    if (stage.choices.length > 0) {
        stage.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.onclick = () => {
                currentStage = stage.consequence[index];
                updatePage();
            };
            document.getElementById("choices").appendChild(button);
        });
    } else {
        document.getElementById("restart").style.display = "block";
    }
}

document.getElementById("restart").addEventListener("click", startGame);
let currentStage = "start";
startGame();
