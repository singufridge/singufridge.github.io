// document.querySelector("p").innerHTML = "this reading was cool";

// document.getElementById("header-2").addEventListener("click", myFirstFunction);

// function myFirstFunction() {    
//     document.getElementById("header-2").innerText = "this is a test";
// }

document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    console.log(`Key code: ${event.code}`);
});

const el = document.getElementById("keyCodes");
const held = new Set();
let combo = [];

function next() { 
    combo = Array.from({ length: 3 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26)), );
    
    el.innerHTML = `Hold: ${combo.join(" + ")}`; 
};

window.onkeydown = (e) => { 
    held.add(e.key.toLowerCase());

    if (held.has(combo[0]) && held.has(combo[1]) && held.has(combo[2])) { 
        const score = combo .join("") .split("") .reduce((sum, c) => sum + c.charCodeAt(0), 0);
        document.body.style.backgroundColor = `hsl(${(score * 35) % 360}, 70%, 70%)`;
        held.clear();
        next(); 
    } 
};

window.onkeyup = (e) => held.delete(e.key.toLowerCase());

next();
