const text =
  "La palabra 'te adoro' es algo... inusual, me explico. Es el intermedio entre 'te quiero' y 'te amo'. El 'te adoro' es perfecto para nuestro tipo de relación, pues si yo le dijera a usted que la quiero, sería porque la veo como un objeto que debe ser poseído. O si le dijera 'te amo', sería porque la conozco desde su pasado hasta su futuro, y no es así. La adoro de una forma en la que estoy dispuesto a conocerla más. Ah, sí, usted vino por respuestas, y la verdad es simple o quizás no tanto. La adoro lo suficiente como para saber algunos de sus gustos, para que me cause gracia cómo se enoja cuando su maquillaje no le sale bien. La adoro lo suficiente para entenderla, para llegar al punto en que su sufrimiento me afecta profundamente, lo suficiente para preguntarme: '¿Por qué una persona tan maravillosa tiene tanto tormento?'. Y sobre todo, la adoro lo suficiente para no poder mantener contacto visual. Es simple, solo la adoro y ya.";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();