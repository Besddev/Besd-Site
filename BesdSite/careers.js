const container = document.querySelector(".container");

const careers = ['programmer', 'full-stack developer', 'music enjoyer'];

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

    // Switch to deleting mode when the word is fully typed
    if (characterIndex === currentCareer.length) {
        isDeleting = true;
    }

    // Switch to typing mode for the next word when the word is fully deleted
    if (characterIndex === 0) {
        isDeleting = false;
        careerIndex = (careerIndex + 1) % careers.length; // Move to the next career
    }

    // Adjust speed: Typing is faster, deleting is slower
    const delay = isDeleting ? 100 : 200;
    setTimeout(updateText, delay);
}

updateText();