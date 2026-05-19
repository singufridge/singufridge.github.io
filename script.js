// document.querySelector("p").innerHTML = "this reading was cool";

// document.getElementById("header-2").addEventListener("click", myFirstFunction);

// function myFirstFunction() {    
//     document.getElementById("header-2").innerText = "this is a test";
// }

document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    console.log(`Key code: ${event.code}`);
});

// // Track which keys are currently held down
// const pressedKeys = {};

// document.addEventListener('keydown', (event) => {
//     // Add the pressed key to our tracker
//     pressedKeys[event.key] = true;

//     // Check if both 'g' and 'h' are pressed (change these to your preferred keys)
//     if (pressedKeys['c'] && pressedKeys['Enter']) {
//         // Generate a random hex colour
//         const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        
//         // Apply the colour to the page background
//         document.body.style.backgroundColor = randomColor;
//     }
// });

// document.addEventListener('keyup', (event) => {
//     // Remove the key when it is released so it doesn't trigger repeatedly
//     pressedKeys[event.key] = false;
// });

const el = document.getElementById("keyCodes");

const held = new Set();

let combo = [];

const next = () => { 
    combo = Array.from({ length: 2 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26)), );
    
    el.innerHTML = `Hold: ${combo.join(" + ")}`; 
};

window.onkeydown = (e) => { 
    held.add(e.key.toLowerCase());
    if (held.has(combo[0]) && held.has(combo[1])) { 
        const score = combo .join("") .split("") .reduce((sum, c) => sum + c.charCodeAt(0), 0);
        document.body.style.backgroundColor = `hsl(${(score * 35) % 360}, 70%, 70%)`;
        held.clear(); next(); 
    } 
};

window.onkeyup = (e) => held.delete(e.key.toLowerCase()); next();
