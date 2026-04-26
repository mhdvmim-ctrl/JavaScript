document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

alert('siz MHDV saytidasiz bu yerda JavaScript haqida malumotlarni bor 💻')

function no() {
    alert('kechirasiz lekin hozirda bu bolimda malumot mavjud emas keyinroq yana tekshirib koring 🙏')
}

function telegram(){
    alert('MHDV telegrami')
}
function js(){
    alert('JavaScriptning rasmiy saifasi')
}