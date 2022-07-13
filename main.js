const imagem = Math.floor(Math.random() * 11);
const imagemElem = document.createElement("img");
imagemElem.src = "./Lontrinhas/" + imagem + ".jpg";
document.body.appendChild(imagemElem);
