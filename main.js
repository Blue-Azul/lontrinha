let day = new Date();
const image = (day.getDate() * day.getMonth()) % 21;
const imgElem = document.createElement("img");

imgElem.src = "./Lontrinhas/" + image + ".jpg";
document.body.appendChild(imgElem);
