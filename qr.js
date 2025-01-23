const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function generateQR() {
    const text = qrText.value.trim();
    if (text) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
        imgBox.classList.add("show-img");
    } else {
        alert("Please enter text or URL!");
    }
}

function resetQR() {
    qrText.value = "";
    qrImage.src = "";
    imgBox.classList.remove("show-img");
}