document.addEventListener("DOMContentLoaded", () => {
    let getStarted = document.getElementById('get-started')
    let algoritm = document.getElementById('algoritm')
    let loader = document.getElementById('loader')
    let algoritmSection = document.getElementById('algoritmSection')

    loader.style.display = 'none'

    getStarted.onclick = () => {
        getStarted.style.animation = 'started .4s linear forwards'
        algoritm.style.animation = 'starte .4s linear forwards'
        setTimeout(() => {
            loader.style.display = 'flex'

            setTimeout(() => {
                loader.style.display = 'none'
                algoritm.style.display = 'none'
                getStarted.style.display = 'none'
                algoritmSection.style.display = 'block'
            }, 4000);
        }, 100);
    }
});

// /////////////////////////////////////////////////////////////////////////
let tryAgainButton = document.getElementById('try');
let btns = document.querySelectorAll('.btn');
let messageElement = document.getElementById('algoritmSlogan');

// Խաղի վիճակը պահելու համար
let secretNumber, gameOver;

const initGame = () => {
    secretNumber = Math.floor(Math.random() * 99) + 1;  // Պատահական թիվը
    console.log("Նշված թիվը (ձեզ համար միայն): " + secretNumber);
    gameOver = false;  // Խաղը դեռ չի ավարտվել
    tryAgainButton.style.display = 'none';  // "Try Again" կոճակը թաքցնում ենք սկզբում

    // Կոճակների տեսքը վերադառնում է սկզբնական վիճակին
    btns.forEach(button => {
        button.style.backgroundColor = 'rgb(255, 255, 255)';
        button.style.color = 'black';
    });

    // Գործողության ցուցումը կարգավորում է հաղորդագրությունը
};

// Հաղորդագրությունների ցուցադրումը
const displayMessage = (message) => {
    messageElement.innerHTML = message;
};

// Կոճակի սեղմման լիսթեները
const handleButtonClick = (button) => {
    if (gameOver) return; // Եթե խաղը ավարտվել է, կոճակները չեն աշխատում

    const userGuess = parseInt(button.textContent);

    if (userGuess < secretNumber) {
        displayMessage("Your number is smaller than<br>the memorized number.");
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
    } else if (userGuess > secretNumber) {
        displayMessage("Your number is greater than<br>the memorized number.");
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
    } else {
        displayMessage("Your number matches.<br>You won!");
        button.style.backgroundColor = 'rgb(0, 210, 0)';
        button.style.color = 'white';
        tryAgainButton.style.display = 'flex';  // "Try Again" կոճակը դարձնում է տեսանելի
        gameOver = true;  // Խաղը ավարտվեց
    }
};

// Try Again կոճակի սեղմման գործառույթը
tryAgainButton.onclick = () => {
    initGame();  // Նոր խաղի սկիզբ
};

// Կոճակների վրա լսողներ ավելացնում ենք
btns.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button));
});

// Սկզբնական խաղը սկսվում է
initGame();
