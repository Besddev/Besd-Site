const container = document.querySelector(".container")

const careers = ['programmer', 'full-stack developer', 'music enjoyer']

let careerindex = 0;

let characterindex = 0;

updateText()

function updateText() {
    characterindex++
    //container.innerHTML = `<h1>I am a${careers[careerindex].slice(0,characterindex)}</h1>`

    if(characterindex === careers[careerindex].length) {
        careerindex++
        characterindex = 0
    }

    if(careerindex === careers.length) {
        careerindex = 0;
    }

    setTimeout(updateText, 500);
}