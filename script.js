//hide and show team member description
let descriptions = Array.from(document.querySelectorAll('p'));
let buttons = Array.from(document.querySelectorAll('button'));
let descStates = [true, true, true, true];

buttons.forEach((buttonElement) => {
    buttonElement.addEventListener('click', (event) => {
        let buttonIndex = buttons.indexOf(event.target);
        descriptions.forEach((descElement) => {
            let descIndex = descriptions.indexOf(descElement);
            if (buttonIndex == descIndex) {
                if (descStates[descIndex]) {
                    descElement.style.visibility = 'visible';
                    descStates[descIndex] = false;
                }
                else {
                    descElement.style.visibility = 'hidden';
                    descStates[descIndex] = true;
                }
            };
        });
    });
});

//a fully functioning clock
function startTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('clockSpan').innerHTML =  `${hours}:${minutes}:${seconds}`;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = `0${i}`};
    return i;
}

startTime();

//a wonderful slideshow
let startButton = document.getElementById('start');
let currentImage = document.getElementById('image');
let counter = 0;

startButton.addEventListener('click', () => {
    if (counter >= 0) {
        if (counter > 4) {
            currentImage.style.visibility = 'hidden';
            counter = 0;
        }
        else {
            currentImage.src = `img${counter}.webp`;
            currentImage.style.visibility = 'visible';
            counter++;
        }
    }
});