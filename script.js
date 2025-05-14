const qrText = document.querySelector('#qr-text');
const sizes = document.querySelector('#sizes');
const generateBtn = document.querySelector('.genBtn');
const downlaodBtn = document.querySelector('.dowBtn');

const qrContainer = document.querySelector('.qr-body');

function defaultQR(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text: "https://github.com/SomPNG",
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
}

document.addEventListener('DOMContentLoaded', () => {
    defaultQR();
});


generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(qrText.value){
        generateQR();
    }
});

document.addEventListener('keydown',(e)=>{
    if(e.key=="Enter" && qrText.value){
        generateQR();
    }
})


let size = sizes.value;
sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    if(qrText.value){
        generateQR();
    }
    else{
        defaultQR();
    }
})

function generateQR(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text: qrText.value,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
}

downlaodBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    
    if(!img){
        let imgAttr = img.getAttribute('src');
        downlaodBtn.setAttribute("href",imgAttr);
    }
    else{
        downlaodBtn.setAttribute("href", document.querySelector('canvas').toDataURL());
    }
})

