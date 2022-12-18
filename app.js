const diplayMinutos = document.querySelector('.minutos');
const displaySegundos = document.querySelector('.segundos')

let minutos;
let pausaTimer;

const botaPlay = document.querySelector('.play');
const botaoPausa = document.querySelector('.pausa');
const botaoStop = document.querySelector('.stop');
const botaoRelogio = document.querySelector('.tempo')
const botaoDesligarSom = document.querySelector('.desligar-som')
const ligarSom = document.querySelector('audio')


function startRelogio() {
    pausaTimer = setTimeout(function () {
        let contSegundos = Number(displaySegundos.textContent);
        let contMinutos = Number(diplayMinutos.textContent);

        displaySegundos.textContent = String(contSegundos - 1).padStart(2, '0');

        if (contMinutos <= 0) {
            return;
        }

        if (contSegundos <= 0) {
            contSegundos = 60;

            diplayMinutos.textContent = String(contMinutos - 1).padStart(2, '0');
        }

        displaySegundos.textContent = String(contSegundos - 1).padStart(2, '0');


        ligarSom.play();
        startRelogio();

    }, 1000)
}

botaoRelogio.addEventListener('click', function () {
    minutos = prompt('Quantos minutos?');
    diplayMinutos.textContent = String(minutos).padStart(2, '0');
})

botaPlay.addEventListener('click', function () {
    startRelogio()
}
)

botaoPausa.addEventListener('click', function () {
    clearTimeout(pausaTimer);
})

botaoStop.addEventListener('click', function () {
    diplayMinutos.textContent = '00';
    displaySegundos.textContent = '00'
    ligarSom.pause();
})

