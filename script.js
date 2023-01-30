const mainCard = document.querySelector('.card');
const cardThankYou = document.querySelector('.card-thank-you');
const raitingElements = document.querySelectorAll('.card li');
const buttonSubmit = document.querySelector('.card__button-submit');
const cardSelection = document.querySelector('.card-thank-you__selection');

let selectedValue = '';

buttonSubmit.addEventListener('click', function () {
    cardThankYou.classList.remove('hasHidden');
    mainCard.classList.toggle('hasHidden');

    cardSelection.innerText = `You selected ${selectedValue} out of ${raitingElements.length}`;
});

raitingElements.forEach(function (raitingElement) {
    buttonSubmit.setAttribute('disabled', '');

    raitingElement.addEventListener('click', function (event) {
        clickedOnAnotherElement();

        selectedValue = event.target.innerText;
        buttonSubmit.removeAttribute('disabled');

        event.target.classList.toggle('hasFocused');
    });
});

function clickedOnAnotherElement() {
    raitingElements.forEach(function (raitingElement) {
        raitingElement.classList.remove('hasFocused');
    });
}
