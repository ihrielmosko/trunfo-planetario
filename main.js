let cartas = ["sol", "mercúrio", "venus", "terra", "marte", "júpiter", "saturno", "urano", "netuno"];

let planeta;

function Sorteio() {
    let numero = parseInt(Math.random() * 9);
    planeta = cartas[numero];
    alert(planeta);
};
