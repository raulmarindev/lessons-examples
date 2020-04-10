// ===== E1 =====

const homoSapiens = {
    reino: 'Animales',
    clase: 'Mamiferos',
    familia: 'Hominidos',
    genero: 'Homo',
    especie: 'Homo sapiens'
};

const familiaHomoSapiens = homoSapiens.familia;

for(const p in homoSapiens) {
    homoSapiens.hasOwnProperty()
}

console.log(homoSapiens);

const familiaConValorPorDefecto = homoSapiens.familia || '';

const { familia = '' } = homoSapiens;
const { familia: familiaDeHomoSapiens = '' } = homoSapiens;

console.log(familia);
console.log(familiaDeHomoSapiens);

// ========= E2 ===========
function logEspecieInfo({ especie = '', reino = '', clase = '' }) {
    console.log(`La especie ${especie} pertenece al reino ${reino} y la clase ${clase}.`);
}

logEspecieInfo(homoSapiens);