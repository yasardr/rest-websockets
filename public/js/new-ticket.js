const labelElem = document.getElementById('lbl-new-ticket');
const buttonElem = document.querySelector('button');

const getLastTicket = async () => {
    const lastTicket = await fetch('/api/ticket/last')
        .then(resp => resp.json());
    labelElem.innerHTML = lastTicket;
}

const createTicket = async () => {
    const newTicket = await fetch('/api/ticket', {
        method: 'POST'
    }).then(resp => resp.json());

    labelElem.innerHTML = newTicket.number;
}

buttonElem.addEventListener('click', createTicket );

getLastTicket();