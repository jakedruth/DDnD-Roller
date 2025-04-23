const DICE = [
    new Die(6, "white"),
    new Die(2, "white"),
    new Die(5, "white"),
    new Die(4, "white"),
    new Die(5, "black"),
];

const P01 = new DicePair(DICE[0], DICE[1]);
const P02 = new DicePair(DICE[0], DICE[2]);
const P03 = new DicePair(DICE[0], DICE[3]);
const P04 = new DicePair(DICE[0], DICE[4]);
const P12 = new DicePair(DICE[1], DICE[2]);
const P13 = new DicePair(DICE[1], DICE[3]);
const P14 = new DicePair(DICE[1], DICE[4]);
const P23 = new DicePair(DICE[2], DICE[3]);
const P24 = new DicePair(DICE[2], DICE[4]);
const P34 = new DicePair(DICE[3], DICE[4]);

const PAIRS = [
    // Whtie Only
    [P01, P23],
    [P02, P13],
    [P03, P12],
    // 04
    [P04, P12],
    [P04, P13],
    [P04, P23],
    // 14
    [P14, P02],
    [P14, P03],
    [P14, P23],
    // 24
    [P24, P01],
    [P24, P03],
    [P24, P13],
    // 34
    [P34, P01],
    [P34, P02],
    [P34, P12],
];

const HOLDER = document.getElementById("dice-holder");
const DICE_ELEMENTS = HOLDER.children;
const RESULT_HOLDER = document.getElementById("results");
var inputIndex = 0;
var inputActive = false;

for (let i = 0; i < DICE_ELEMENTS.length; i++) {
    setDie(i, DICE[i].value);
}

document.addEventListener('keydown', function(event) {
    if (!inputActive) {
        if (event.key == 'Enter') {
            onDieClicked(inputIndex);
        }
        return;
    }

    switch (event.key) {
        case '1':
            setDie(inputIndex, 1);
            generatePairs();
            onDieClicked((inputIndex + 1) % 5);
            break;
        case '2':
            setDie(inputIndex, 2);
            generatePairs();
            onDieClicked((inputIndex + 1) % 5);
            break;
        case '3':
            setDie(inputIndex, 3);
            generatePairs();
            onDieClicked((inputIndex + 1) % 5);
            break;
        case '4':
            setDie(inputIndex, 4);
            generatePairs();
            onDieClicked((inputIndex + 1) % 5);
            break;
        case '5':
            setDie(inputIndex, 5);
            generatePairs();
            onDieClicked((inputIndex + 1) % 5);
            break;
        case '6':
            setDie(inputIndex, 6);
            generatePairs();
            onDieClicked((inputIndex + 1) % 5);
            break;
        case 'ArrowLeft':
            onDieClicked((inputIndex + 4) % 5);
            break;
        case 'ArrowRight':
            onDieClicked((inputIndex + 1) % 5);
            break;
        case 'Enter':
            inputActive = false;
            for (var i = 0; i < DICE.length; i++) {
                DICE_ELEMENTS[i].classList.remove("input");
            }
        default:
            break;
    }
});

function setDie(index, value) {
    DICE[index].value = value;
    const element = DICE_ELEMENTS[index];
    element.innerHTML = DICE[index].value;
}

function onDieClicked(index) {
    DICE_ELEMENTS[inputIndex].classList.remove("input");
    DICE_ELEMENTS[index].classList.add("input");
    inputIndex = index;
    inputActive = true;
}

// generatePairs();

function onRollButtonClicked() {
    console.log("Button pressed!");
    rollAllDice();
}

function rollAllDice() {
    inputActive = false;
    for (var i = 0; i < DICE.length; i++) {
        var child = DICE_ELEMENTS[i];
        child.classList.remove("input");
        startRoll(DICE[i], child);
    }
    setTimeout(generatePairs, 1100); // Wait for the rolling effect to finish before calculating the total
}

function startRoll(die, element) {
    element.classList.add("dice-rolling");
    element.innerHTML = "?";
    setTimeout(function() {
        element.classList.remove("dice-rolling");
        die.roll();
        element.innerHTML = die.toString();
    }, 1000); // 1 second delay for the rolling effect
}

function generatePairs() {
    RESULT_HOLDER.innerHTML = "";
    const PASSIVE = document.createElement("div");
    PASSIVE.innerText = 'Passive';
    PASSIVE.classList.add('passive');
    RESULT_HOLDER.appendChild(PASSIVE);

    const ACTIVE = document.createElement("div");
    ACTIVE.innerHTML = 'Active';
    ACTIVE.classList.add("active");
    for (let i = 0; i < PAIRS.length; i++) {
        const pair = PAIRS[i];
        if (i == 3) {
            RESULT_HOLDER.appendChild(ACTIVE); 
        }

        RESULT_HOLDER.appendChild(pairToElement(pair));
    }
}

function pairToElement(dicePair) {
    var result = document.createElement("div");
    result.classList.add('item');
    var p1 = dicePair[0];
    var p2 = dicePair[1];

    result.innerHTML = p1.sumToHTML() + ' & ' + p2.sumToHTML() + 
                    '<div>' + p1.diceToHTML() + ',' + p2.diceToHTML() + '</div>'

    // result.innerHTML = p1.toElement() + ', ' + p2.toElement();
    // result.innerHTML = p1.getSum() + ", " + p2.getSum() +
                        // '<div>' + p1.d1.toHTML() + p1.d2.toHTML() + ',' + p2.d1.toHTML() + p2.d2.toHTML() + '</div>';
    return result;
}