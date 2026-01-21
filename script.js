const pairs = [
    {
        logo: document.getElementById("main1"),
        cert: document.getElementById("certificate1"),
        box: document.getElementById("div1")
    },
    {
        logo: document.getElementById("main2"),
        cert: document.getElementById("certificate2"),
        box: document.getElementById("div2")
    },
    {
        logo: document.getElementById("main3"),
        cert: document.getElementById("certificate3"),
        box: document.getElementById("div3")
    },
    {
        logo: document.getElementById("main4"),
        cert: document.getElementById("certificate4"),
        box: document.getElementById("div4")
    },
    {
        logo: document.getElementById("main5"),
        cert: document.getElementById("certificate5"),
        box: document.getElementById("div5")
    },
    {
        logo: document.getElementById("main6"),
        cert: document.getElementById("certificate6"),
        box: document.getElementById("div6")
    }
];

pairs.forEach(({ logo, cert, box }) => {
    cert.style.display = "none";

    box.addEventListener("click", () => {
        const showCert = cert.style.display === "none";
        cert.style.display = showCert ? "block" : "none";
        logo.style.display = showCert ? "none" : "block";
    });
});
const btn = document.getElementById("btn");
function scrolldown() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    }

    )
}
const MobView = document.getElementById("mob-view")
MobView.style.display = "none"


function showMenu() {
    MobView.style.display = MobView.style.display === "none" ? 'block' : 'none'
}