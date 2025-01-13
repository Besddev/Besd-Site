const container = document.querySelector(".container");

const careers = [
    'programmer', 
    'full-stack developer', 
    'music enjoyer', 
    'debugger of my own mistakes', 
    'semi-professional bug hunter', 
    'keyboard ninja', 
    'code wizard (without the wand)', 
    'listener of epic playlists',
    'best friend of c++ bugs'
];

let careerIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function updateText() {
    const currentCareer = careers[careerIndex];

    if (!isDeleting) {
        // Typing phase Add one character
        characterIndex++;
    } else {
        // Deleting phase Remove one character
        characterIndex--;
    }

    // Update the text in the container
    container.innerHTML = `<h1>I am a ${currentCareer.slice(0, characterIndex)}</h1>`;

    // When the word is fully typed, add a pause before deletion
    if (characterIndex === currentCareer.length && !isDeleting) {
        setTimeout(() => {
            isDeleting = true; // Start deleting after the pause
            updateText();
        }, 400); // Pause for 400ms
        return; // Exit to avoid calling the next `setTimeout` immediately
    }

    // Switch to typing mode for the next word when the word is fully deleted
    if (characterIndex === 0) {
        isDeleting = false;
        careerIndex = (careerIndex + 1); // Move to the next career
    }

    // Adjust speed: Typing is faster, deleting is slower
    const delay = isDeleting ? 100 : 200;
    setTimeout(updateText, delay);
}

updateText();