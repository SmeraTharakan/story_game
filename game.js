const storyText = document.getElementById("story-text");
const choiceContainer = document.getElementById("choice-container");
const gameContainer = document.getElementById("game-container");
const settingsIcon = document.getElementById("settings-icon");
const dropdownMenu = document.getElementById("dropdown-menu");


const gameData = {
    step1: {
        text: "Scrat spots an Acorn at the peak of an icy mountain. How should he reach it?",
        choices: {
            "Climb immediately": "step2A",
            "Look for another way": "step2B",
            "Catapult using a tree": "step2C"
        },
        background: "assets/nut2.jpg"
    },
    
    step2A: {
        text: "Scrat starts climbing, but the slope is slippery!",
        choices: {
            "Dig claws in for grip": "step3A1",
            "Dig into ice with teeth": "step3A1",
            "Slide down to another path": "step2B",
            "Call for help": "loseAvalanche" // Avalanche = Lose
        },
        background: "assets/climb.webp"
    },

    step3A1: {
        text: "The ice cracks beneath Scrat’s feet!",
        choices: {
            "Climb faster before it collapses": "step4A1", // Edge collapses, acorn falls
            "Stay still and hope for stability": "step2B1", // Ice collapses, falls into cave
            "Let go and slide down": "step1B", // New path
            "Call for help": "loseAvalanche" // Avalanche = Lose
        },
        background: "assets/crack.jpg"
    },

    step1B: {
        text: "Back to botton of mountain. What should he do?",
        choices: {
            "Climb immediately": "step2A",
            "Look for another way": "step2B",
            "Catapult using a tree": "step2C"
        },
        background: "assets/nut2.jpg"
    },

    step2B: {
        text: "Scrat finds a hidden cave entrance. What should he do?",
        choices: {
            "Keep going deeper": "step3B1",
            "Turn back": "step3D1",
            "Rub stones to make fire": "loseFire", // Burns himself
            "Follow glowing light": "step3B1"
        },
        background: "assets/cave1.jpg"
    },

    step2B1: {
        text: "Mountain collapses and he fell into hidden cave",
        choices: {
            "Keep going deeper": "step3B1",
            "Turn back": "step3D1",
            "Rub stones to make fire": "loseFire", // Burns himself
            "Follow glowing light": "step3B1"
        },
        background: "assets/cave1.jpg"
    },

    step4A1: {
        text: "Scrat scrambles up just in time! But... oh no! The acorn slips from his paws and rolls into a bird's nest on a high branch.",
        choices: {
            "Climb the tree carefully": "step5A1",  // Leads to next challenge
            "Jump for the acorn": "loseFly",  // Falls off the cliff
            "Fly into the nest using a leaf": "step5A2", 
        },
        background: "assets/nes7.webp"
    },
    

    step5A1: {
        text: "Scrat reaches the nest and sees the golden acorn! But… uh-oh! A baby bird is sitting on it! It lets out a loud chirp, and now Mama Bird is on her way!",
        choices: {
            "Grab the acorn and run": "loseBird", 
            "Offer a trade": "winBird", // Maybe the baby will accept?
            "Pretend to be a baby bird": "loseBird", // Confuse the mother bird?
            "Push the baby aside": "loseBird", // Baby cries, Mama goes full attack mode
        },
        background: "assets/nest2.jpg"
    },
    
    step5A2: {
        text: "Scrat uses a leaf to glide into the nest! But… uh-oh! A baby bird is sitting on it! It lets out a loud chirp, and now Mama Bird is on her way!",
        choices: {
            "Grab the acorn and run": "loseBird", 
            "Offer a trade": "winBird", // Maybe the baby will accept?
            "Pretend to be a baby bird": "loseBird", // Confuse the mother bird?
            "Push the baby aside": "loseBird", // Baby cries, Mama goes full attack mode
        },
        background: "assets/helmet.jpg"
    },

    step3B1: {
        text: "Scrat ventures further into the cave, hearing eerie echoes. A faint glow appears ahead.",
        choices: {
            "Investigate the glow": "step4B1",
            "Go through a separate path": "step4B2",
        },
        background: "assets/cave.jpg"
    },

    step3C1: {
        text: "Scrat is falling fast! Where should he aim?",
        choices: {
            "Aim for a tree branch": "step4C1",
            "Tuck into a ball": "step4C2",
            "Try to grab an eagle’s leg": "step4C3",
            "Accept fate and hope for the best": "step4C4"
        },
        background: "assets/fall1.jpg"
    },

    step3D1: {
        text: "Scrat hesitates, then decides to turn back... CRASH! A sudden tremor shakes the cave, and massive ice stones collapse, blocking the way out! Scrat is trapped inside! No choice go forward",
        choices: {
            "Keep going deeper": "step3B1",
            "Rub stones to make fire": "loseFire", 
            "Follow glowing light": "step3B1"
        },
        background: "assets/ice1.jpg"
    },

    step2C: {
        text: "Scrat flings himself into the air, soaring toward the peak! But uh-oh… he’s going too fast!",
        choices: {
            "Aim for the tree branches": "step4C1",
            "Try to grab onto the cliffside": "step2A",
            "Flap arms wildly": "loseFly",
            "Tuck into a ball for impact": "loseRiver"
        },
        background: "assets/fly2.jpg"
    },

    step4C1: {
        text: "Scrat crashes through a tree, he falls into a birds nest.. A baby bird is sitting on it!",
        choices: {
            "Grab the acorn and run": "loseBird", 
            "Offer a trade": "winBird", // Maybe the baby will accept?
            "Pretend to be a baby bird": "loseBird", // Confuse the mother bird?
            "Push the baby aside": "loseBird", // Baby cries, Mama goes full attack mode
        },
        background: "assets/nest2.jpg"
    },

    step4B1: {
        text: "Scrat follows the strange light deeper into the cave. He finds a hidden chamber!",
        choices: {
            "Open the chamber": "winCave", 
            "Turn Back and go to the other path": "step4B2", 
        },
        background: "assets/cave2.jpg"
    },
    step4B2: {
        text: " Scrat moves deeper into the cave and suddenly reaches a fork in the path.To the left, the path is narrow with massive ice spikes sticking out from the ground.To the right, there's a steep ice slide leading into the unknown.",
        choices: {
            "Take the Ice Spike Path": "step5B2A", 
            "Slide down the icy slope!": "step5B2B", 
        },
        background: "assets/cave1.jpg"
    },
    step5B2A: {
        text: " Scrat cautiously enters the narrow path. The ice spikes jutting from the ground make it difficult to walk. Suddenly, some spikes begin to shake...!",
        choices: {
            "Run as fast as possible!": "loseIce", 
            "Jump between safe spots": "loseTrap", 
            "Turn back and try the slide": "step5B2B"
        },
        background: "assets/cave2.jpg"
    },
    step6B2A: {
        text: " Scrat panics and sprints as fast as he can, dodging between the ice spikes! CRACK! The entire ceiling starts shaking. Too late! A massive ice spike falls from above, smashing down directly on Scrat!",
        choices: {
            "Run as fast as possible!": "loseIce", 
            "Jump between safe spots": "loseTrap", 
            "Turn back and try the slide": "step5B2B"
        },
        background: "assets/cave2.jpg"
    },
    step5B2B: {
        text: "Scrat grins and jumps onto the ice slide! He zooms down at lightning speed, twisting and turning through the cave! At the very end, he sees it... THE ACORN!",
        choices: {
            "Grab It!": "losePiranha",
        },
        background: "assets/slide.jpg"
    },

};

// Losing Endings
const loseData = {
    loseAvalanche: {
        text: "Scrat's scream echoes through the mountains... triggering an avalanche! ⛄ He gets trapped in a giant snowball and rolls into the abyss.",
        background: "assets/avalanche.png"
    },
    loseFire: {
        text: "Scrat tries to make fire... but accidentally sets his fur on fire! 🔥 He runs around in panic before jumping into icy water.",
        background: "assets/fire.jpg"
    },
    loseFly: {
        text: "He plummets screaming, arms flailing—SPLAT! He crashes into the snow, leaving a squirrel-shaped hole. His tail twitches once… then stills.",
        background: "assets/falll.jpg"
    },
    loseBird: {
        text: "Mama bird arrives, screeches in fury, and throws Scrat out of the tree! He spirals down, screaming!",
        background: "assets/nest3.jpg"
    },
    loseLeaf: {
        text: "Scrat uses a leaf to glide into the nest! But due to wind reaches elsewhere",
        background: "assets/fly6.jpg"
    },
    loseRiver: {
        text: "Scrat sails over the mountain, landing perfectly on the acorn! 🎉 But… the momentum carries him forward! He tumbles down and SPLASH! Into a river filled with hungry piranhas! 🐟🦷",
        background: "assets/piranha.jpg"
    },
    losePiranha: {
        text: "He flies off the slide and lands straight into an underground river! PIRANHAS jump out, surrounding him!",
        background: "assets/piranha.jpg"
    },
    loseIce: {
        text:"Scrat panics and sprints as fast as he can, dodging between the ice spikes! CRACK! The entire ceiling starts shaking. Too late! A massive ice spike falls from above, smashing down directly on Scrat!",
        background: "assets/fall6.jpg"
    },
    loseTrap: {
        text:"Scrat carefully leaps from one safe spot to another, avoiding the shifting spikes. But suddenly… CRACK! The ice around him completely seals off! He's now trapped in a tight icy chamber with no way out… Scrat scratches at the walls, but there's no escape…",
        background: "ice1.jpg"
    }

    
};

const winData ={
    winBird :{
        text:"Allows you to take acorn ",
        background:"assets/won.avif"
    },
    winCave :{
        text:"Scrat finds a glowing object inside and he carefully carries the glowing object outside… It’s a GIANT acorn! The ancient cave spirits reward him for his bravery. Scrat dances in victory as golden light sparkles around him!",
        background:"assets/won.avif"
    },
}

function startStory(step) {
    // Remove lose screen if it exists
    const existingLoseContainer = document.querySelector(".lose-container");
    if (existingLoseContainer) {
        existingLoseContainer.remove();
    }

    if (loseData[step]) {
        loseGame(step);
        return;
    }

    if (winData[step]) {
        winGame(step);
        return;
    }

    document.body.style.backgroundImage = `url('${gameData[step].background}')`;
    storyText.innerText = gameData[step].text;
    choiceContainer.innerHTML = "";

    Object.keys(gameData[step].choices).forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.classList.add("choice-btn");
        button.onclick = () => startStory(gameData[step].choices[choice]);
        choiceContainer.appendChild(button);
    });
}


function loseGame(step) {
    // Set background and text immediately
    document.body.style.backgroundImage = `url('${loseData[step].background}')`;
    storyText.innerText = loseData[step].text;
    choiceContainer.innerHTML = "";

    // Delay for 3 seconds before showing the lose screen
    setTimeout(() => {
        // Create a container for the lose screen
        const loseContainer = document.createElement("div");
        loseContainer.classList.add("lose-container");

        // Create a video element
        const video = document.createElement("video");
        video.src = "assets/lose1.mp4"; // Replace with your actual video file
        video.autoplay = true;
        video.classList.add("lose-video");

        // Create "You Lose!" text
        const loseText = document.createElement("h2");
        loseText.innerText = "You Lose!";
        loseText.classList.add("lose-text");

        // Create Play Again button
        const restartButton = document.createElement("button");
        restartButton.innerText = "Play Again";
        restartButton.classList.add("choice-btn");
        restartButton.onclick = () => startStory("step1");

        // Append elements to the lose container
        loseContainer.appendChild(video);
        loseContainer.appendChild(loseText);
        loseContainer.appendChild(restartButton);

        // Append lose container to the game container
        gameContainer.appendChild(loseContainer);
    }, 3000);
}


function winGame(step) {
    // Set background and text immediately
    document.body.style.backgroundImage = `url('${winData[step].background}')`;
    storyText.innerText = winData[step].text;
    choiceContainer.innerHTML = "";

    // Delay for 3 seconds before showing the win screen
    setTimeout(() => {
        // Create a container for the win screen (same as lose container)
        const winContainer = document.createElement("div");
        winContainer.classList.add("lose-container"); // Reusing the same class for full-screen effect

        // Create a video element
        const video = document.createElement("video");
        video.src = "assets/win.mp4"; // Replace with your actual win video file
        video.autoplay = true;
        video.classList.add("lose-video");

        // Create "You Win!" text
        const winText = document.createElement("h2");
        winText.innerText = "You Win!";
        winText.classList.add("lose-text");

        // Create Play Again button
        const restartButton = document.createElement("button");
        restartButton.innerText = "Play Again";
        restartButton.classList.add("choice-btn");
        restartButton.onclick = () => startStory("step1");

        // Append elements to the win container
        winContainer.appendChild(video);
        winContainer.appendChild(winText);
        winContainer.appendChild(restartButton);

        // Append win container to the game container
        gameContainer.appendChild(winContainer);
    }, 3000);
}

settingsIcon.addEventListener("click", () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Hide dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!settingsIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
    }
});

// Start the game
startStory("step1");
