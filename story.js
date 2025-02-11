
const storyData = {
    "1": {
        description: "Scrat spots the Golden Acorn at the peak of an icy mountain. His heart races—this might be his chance! But the climb looks steep and treacherous.",
        question: "What should Scrat do?",
        choices: {
            "2A": "Climb immediately",
            "2B": "Look for another way",
            "2C": "Catapult using a tree",
            "2D": "Sniff for danger"
        }
    },
    "2A": {
        description: "Scrat starts climbing, but the slope is slippery. He struggles to stay on his feet!",
        question: "How should Scrat react?",
        choices: {
            "3A1": "Dig claws in for grip",
            "3A2": "Slide down to another path",
            "3A3": "Call for help",
            "3A4": "Jump to a ledge"
        }
    },
    "2B": {
        description: "Scrat finds a hidden cave entrance. It looks dark and mysterious.",
        question: "What should Scrat do?",
        choices: {
            "3B1": "Keep going deeper",
            "3B2": "Turn back",
            "3B3": "Use tail as a torch",
            "3B4": "Follow glowing light"
        }
    },
    "2C": {
        description: "Scrat catapults himself using a tree... but it’s completely out of control!",
        question: "What should Scrat do mid-air?",
        choices: {
            "3C1": "Flap arms! (Useless)",
            "3C2": "Aim for a soft landing",
            "3C3": "Grab a branch",
            "3C4": "Close eyes and hope"
        }
    },
    "2D": {
        description: "Scrat sniffs the air... a predator is nearby!",
        question: "How should Scrat react?",
        choices: {
            "3D1": "Run like crazy!",
            "3D2": "Hide behind a rock",
            "3D3": "Use an acorn decoy",
            "3D4": "Play dead"
        }
    }
};


function chooseOption(nextStep) {
    const story = storyData[nextStep];

    if (story) {
        document.getElementById("story-description").innerText = story.description;
        document.getElementById("question").innerText = story.question;

       
        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = "";

        for (const [key, value] of Object.entries(story.choices)) {
            const button = document.createElement("button");
            button.innerText = value;
            button.onclick = () => chooseOption(key);
            choicesContainer.appendChild(button);
        }
    } else {
        console.error("Invalid story step:", nextStep);
    }
}
