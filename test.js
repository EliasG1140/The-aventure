let a = {
  id: "1",
  historia:
    "Un día como cualquiera te vas a dormir, lo siguiente que sabes es que te despertas en el medio de un bosque.",
  opciones: {
    a: "Pedir ayuda a los gritos.",
    b: "Mirar a mi alrededor.",
  },
};

console.log(Object.entries(a.opciones)[0][0]);