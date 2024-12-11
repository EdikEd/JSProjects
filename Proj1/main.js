let warriors = 0;

let warriorName = [
    'Shadowblade',
    'Ironfang',
    'Stormbreaker',
    'Bloodhawk',
    'Nightwolf'
]

let warriorsCount = 0;

const ul = document.getElementById('list-of-warriors');
let warriorsCountEl = document.getElementById('warriors-count');
warriorsCountEl.textContent =  warriorsCount;

function addWarrior() {
    warriorsCount += 1;
    warriorsCountEl.textContent = warriorsCount;
    let randomWarrior = warriorName[Math.floor(Math.random() * warriorName.length)];
    let li = document.createElement('li');
    li.textContent = randomWarrior;
    ul.append(li);
}

