/* ===== Particles.js Config ===== */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 },
    "color": { "value": "#00bfa5" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#00bfa5", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" } }
  },
  "retina_detect": true
});

/* ===== Scroll Animation ===== */
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  sections.forEach((section, i) => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      setTimeout(() => { section.classList.add('visible'); }, i*150); // stagger
    }
  });
});

/* ===== Floating Point ===== */
function floatingAdd(){
  const num1 = parseFloat(document.getElementById('fp1').value) || 0;
  const num2 = parseFloat(document.getElementById('fp2').value) || 0;
  const result = num1 + num2;
  document.getElementById('fpResult').innerText = `Addition Result: ${result}`;
  showFloatingBinary(num1, num2, result);
}

function floatingSub(){
  const num1 = parseFloat(document.getElementById('fp1').value) || 0;
  const num2 = parseFloat(document.getElementById('fp2').value) || 0;
  const result = num1 - num2;
  document.getElementById('fpResult').innerText = `Subtraction Result: ${result}`;
  showFloatingBinary(num1, num2, result);
}

function showFloatingBinary(num1, num2, result){
  const binary1 = num1.toString(2);
  const binary2 = num2.toString(2);
  const binaryRes = result.toString(2);
  document.getElementById('fpBinary').innerText = `Binary: ${binary1} , ${binary2} => ${binaryRes}`;
  // Rounding error example
  const sumCheck = num1 + num2;
  if(sumCheck !== result){
    document.getElementById('fpRounding').innerText = `⚠ Rounding Error detected!`;
  } else {
    document.getElementById('fpRounding').innerText = ``;
  }
}

/* ===== Bitwise ===== */
function bitwiseAND(){
  const [n1,n2] = getBitwiseInputs();
  const res = n1 & n2;
  showBitwiseResult("AND", n1, n2, res);
}

function bitwiseOR(){
  const [n1,n2] = getBitwiseInputs();
  const res = n1 | n2;
  showBitwiseResult("OR", n1, n2, res);
}

function bitwiseXOR(){
  const [n1,n2] = getBitwiseInputs();
  const res = n1 ^ n2;
  showBitwiseResult("XOR", n1, n2, res);
}

function bitwiseNOT(){
  const n1 = parseInt(document.getElementById('bw1').value) || 0;
  const res = ~n1;
  document.getElementById('bitwiseResult').innerText = `NOT ${n1} = ${res}`;
  document.getElementById('bitwiseBinary').innerText = `Binary: ${n1.toString(2)} => ${res.toString(2)}`;
}

function bitwiseShiftLeft(){
  const n1 = parseInt(document.getElementById('bw1').value) || 0;
  const res = n1 << 1;
  document.getElementById('bitwiseResult').innerText = `${n1} << 1 = ${res}`;
  document.getElementById('bitwiseBinary').innerText = `Binary: ${n1.toString(2)} => ${res.toString(2)}`;
}

function bitwiseShiftRight(){
  const n1 = parseInt(document.getElementById('bw1').value) || 0;
  const res = n1 >> 1;
  document.getElementById('bitwiseResult').innerText = `${n1} >> 1 = ${res}`;
  document.getElementById('bitwiseBinary').innerText = `Binary: ${n1.toString(2)} => ${res.toString(2)}`;
}

function getBitwiseInputs(){
  const n1 = parseInt(document.getElementById('bw1').value) || 0;
  const n2 = parseInt(document.getElementById('bw2').value) || 0;
  return [n1,n2];
}

function showBitwiseResult(op,n1,n2,res){
  document.getElementById('bitwiseResult').innerText = `${n1} ${op} ${n2} = ${res}`;
  document.getElementById('bitwiseBinary').innerText = `Binary: ${n1.toString(2)} ${op} ${n2.toString(2)} = ${res.toString(2)}`;
}
