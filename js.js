function encriptar(text) {
  textarr = Array.from(text);
  console.log(textarr);
  textarr.forEach((letter, index) => {
    if (letter == "e") {
      console.log(letter);
      textarr[index] = "enter";
    }
    if (letter == "i") {
      console.log(letter);
      textarr[index] = "imes";
    }
    if (letter == "a") {
      console.log(letter);
      textarr[index] = "ai";
    }
    if (letter == "o") {
      console.log(letter);
      textarr[index] = "ober";
    }
    if (letter == "u") {
      console.log(letter);
      textarr[index] = "ufat";
    }
  });
  return textarr.join("");
}
function desencriptar(text) {
  textarr = Array.from(text);
  textarr.forEach((letter, index) => {
    if (letter == "a" && textarr[index + 1] == "i") {
      textarr.splice(index + 1, 1);
    } else if (
      letter == "e" &&
      textarr[index + 1] == "n" &&
      textarr[index + 2] == "t" &&
      textarr[index + 3] == "e" &&
      textarr[index + 4] == "r"
    ) {
      textarr.splice(index + 1, 4);
    } else if (
      letter == "i" &&
      textarr[index + 1] == "m" &&
      textarr[index + 2] == "e" &&
      textarr[index + 3] == "s"
    ) {
      textarr.splice(index + 1, 3);
    } else if (
      letter == "o" &&
      textarr[index + 1] == "b" &&
      textarr[index + 2] == "e" &&
      textarr[index + 3] == "r"
    ) {
      textarr.splice(index + 1, 3);
    } else if (
      letter == "u" &&
      textarr[index + 1] == "f" &&
      textarr[index + 2] == "a" &&
      textarr[index + 3] == "t"
    ) {
      textarr.splice(index + 1, 3);
    }
  });
  return textarr.join("");
}

const textarea = document.querySelector("textarea");
const encriptarbtn = document.querySelector("#encriptar");
const contenidobox = document.querySelector("#encriptado-box");
const desencriptarbtn = document.querySelector("#desencriptar");
const copiarbtn = document.createElement("button");
let textcontent = document.createElement("div");
textcontent.classList.add("textcontentdiv");
copiarbtn.textContent = "Copiar";
copiarbtn.classList.add("copiar");
let contenido = document.querySelector("#contenido");

encriptarbtn.addEventListener("click", () => {
  contenido.style.display = "none";
  textcontent.textContent = encriptar(textarea.value);
  contenidobox.appendChild(textcontent);

  contenidobox.appendChild(copiarbtn);
});

desencriptarbtn.addEventListener("click", () => {
  contenido.style.display = "none";
  textcontent.textContent = desencriptar(textarea.value);
  contenidobox.appendChild(textcontent);

  contenidobox.appendChild(copiarbtn);
});

copiarbtn.addEventListener("click", () => {
  navigator.clipboard.writeText(textcontent.textContent);
});
