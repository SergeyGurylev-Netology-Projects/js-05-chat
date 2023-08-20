const chatWidgetSideElement = document.querySelector('.chat-widget__side');
const chatWidgetElement = document.querySelector('.chat-widget');
const chatWidgetContainerElement = document.querySelector('.chat-widget__messages-container');
const messages = document.getElementById('chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
intervalId = -1;

const botCollocations = [
    'Простите за несделанное зло',
    'Каменное сердце – не самое плохое. Хуже – потекший мозг',
    'Найди свое место в жизни и постарайся занять его первым',
    'Если упасть духом, и расшибиться недолго',
    'Не трать себя не на тех, не на то',
    'Главное – не впадать в отчаянье',
    'Смешное высказывание и дело не опасно',
    'То, что твое, останется твоим',
    'Одиночество возникает там, где строят стены, а не мосты',
    'Свобода – путь к счастливой жизни'
];

const botQuestions = [
    'Какую самую последнюю глупость вы совершили?',
    'Если бы вы были чем-то знамениты, что бы это было?',
    'Что тебя останавливает?',
    'Какой твой любимый распорядок дня?',
    'Что ты умеешь делать такого бесполезного?'
];

chatWidgetSideElement.onclick = () => {
    chatWidgetElement.classList.add('chat-widget_active');
    addBotMessage(false);
}

chatWidgetInput.onchange = (e) => {
    const inputValue = e.currentTarget.value.trim();
    if (!inputValue) return;

    addClientMessage(inputValue);
    addBotMessage(false);

    e.currentTarget.value = '';
}

function getCurrentTimeString() {
    const now = new Date(),
        hour = now.getHours(),
        minute = now.getMinutes();

    return `${hour}:${minute}`;
}

function addBotMessage(isQuestion) {
    let mes;
    if (isQuestion === true) {
        mes = botQuestions[Math.floor(Math.random()*5)];
    } else {
        mes = botCollocations[Math.floor(Math.random()*10)];
    }

    messages.innerHTML += `
          <div class="message">
            <div class="message__time">${getCurrentTimeString()}</div>
            <div class="message__text">${mes}</div>
          </div>
        `;

    chatWidgetContainerElement.scrollTop = messages.lastElementChild.offsetTop;

    if (intervalId >= 0) clearInterval(intervalId);
    intervalId = setInterval(() => addBotMessage(true), 30000);
}

function addClientMessage(message) {
    messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${getCurrentTimeString()}</div>
            <div class="message__text">${message}</div>
        </div>`;

    chatWidgetContainerElement.scrollTop = messages.lastElementChild.offsetTop;
}
