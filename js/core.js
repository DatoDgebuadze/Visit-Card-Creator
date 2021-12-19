// setting up logo

const uploadBtn = document.querySelector('#upload')
const logo = document.querySelector('.logo')


uploadBtn.addEventListener('change', () => {
    if(uploadBtn.files && uploadBtn.files[0]){
        let reader = new FileReader();

        reader.addEventListener('load', () => {
            //reader gamoitans shedegs src's atvirtuli filisas
            logo.style.backgroundImage = `url('${reader.result}')`;
        })
        reader.readAsDataURL(uploadBtn.files[0]);
    }
})

//background

const bgs = document.querySelectorAll('.background img');
const barati = document.querySelector('.barati');
let activeBg = 0;

bgs.forEach((item, i) => {
    item.addEventListener('click', () =>{
        bgs[activeBg].classList.remove('active');
        item.classList.add('active');
        barati.style.backgroundImage = `url('${item.src}')`;
        activeBg = i;
    })
})

//gadmowera

let downloadBtn = document.querySelector('.download-btn');

let exportCard = () => {
    html2canvas(barati)
    .then(canvas => {
        let link = document.getElementById('link');
        link.href = canvas.toDataURL();
        link.click();
    })
}

downloadBtn.addEventListener('click', () => {
    exportCard();
})