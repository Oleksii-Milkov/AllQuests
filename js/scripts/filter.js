function Quest(name, countMin, countMax, genre, age, days, time, priority) {

    let _name = name;
    let _countMin = countMin;
    let _countMax = countMax;
    let _genre = genre;
    let _age = age;
    let _days = days;
    let _time = time;
    let _priority = priority;

    this.getName = function () {
        return _name;
    }
    this.getCountMin = function () {
        return _countMin;
    }
    this.getCountMax = function () {
        return _countMax;
    }
    this.getGenre = function () {
        return _genre;
    }
    this.getAge = function () {
        return _age;
    }
    this.getDays = function () {
        return _days;
    }
    this.getTime = function () {
        return _time;
    }
    this.getPriority = function () {
        return _priority;
    }
    this.setPriority = function (priority) {
        return _priority = priority;
    }
}

let card = [];
let questArray = [];

for (let i = 0; i < document.getElementsByClassName('card').length; i++) {
    card[i] = document.getElementsByClassName('card')[i];
    let genre = card[i].dataset.genre;
    let name = card[i].getElementsByClassName('card-header')[0].getElementsByClassName('card-title')[0].textContent;
    let countMin = card[i].dataset.min;
    let countMax = card[i].dataset.max;
    let age = card[i].dataset.age;
    let days = card[i].dataset.days;
    let time = card[i].dataset.time;
    let priority = card[i].dataset.priority;
    questArray[i] = new Quest(name, countMin, countMax, genre, age, days, time, priority);
}

btn.addEventListener('click', function (e) {
    e.preventDefault();

    let trueCards = [];

    for (let i = 0; i < card.length; i++) {
        card[i].style.display = 'none';
    }

    for (let i = 0; i < document.getElementsByClassName('input-group').length; i++) {
        switch (document.getElementsByClassName('input-group')[i].getElementsByTagName('select')[0].getAttribute('id')) {
            case 'genreSelect':
                for (let i = 0; i < questArray.length; i++) {
                    if (genreSelect.value == questArray[i].getGenre()) {
                        insert(card[i]);  
                    }
                }
                genreSelect.options[0].selected=true;
                break;

            case 'countPlayersSelect':
                if (Number(countPlayersSelect.value) == 3) {
                    for (let i = 0; i < questArray.length; i++) {
                        if (Number(countPlayersSelect.value) >= questArray[i].getCountMin()) {
                            insert(card[i]);
                        }
                    }
                }
                else if (Number(countPlayersSelect.value) == 5) {
                    for (let i = 0; i < questArray.length; i++) {
                        if (Number(countPlayersSelect.value) <= questArray[i].getCountMin() || Number(countPlayersSelect.value) <= questArray[i].getCountMax()) {
                            insert(card[i]);
                        }
                    }
                }
                countPlayersSelect.options[0].selected=true;
                break;

            case 'ageSelect':
                for (let i = 0; i < questArray.length; i++) {
                    if (ageSelect.value == questArray[i].getAge()) {
                        insert(card[i]);
                    }
                }
                ageSelect.options[0].selected=true;
                break;

            case 'daySelect':
                for (let i = 0; i < questArray.length; i++) {
                    if (daySelect.value == questArray[i].getDays()) {
                        insert(card[i]);
                    }
                }
                daySelect.options[0].selected=true;
                break;

            case 'timeSelect':
                for (let i = 0; i < questArray.length; i++) {
                    if (timeSelect.value == questArray[i].getTime()) {
                        insert(card[i]);
                    }
                }
                timeSelect.options[0].selected=true;
                break;
        }
    }

    function insert(card) {
        if (!trueCards.includes(card)) {
            trueCards.push(card);
        } else {
            card.dataset.priority = Number(card.dataset.priority) + 1;
            
        }
    }

    for (let i = 0; i < trueCards.length; i++) {
        trueCards[i].style.display = ''
    }

})