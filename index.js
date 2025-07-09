const btn = document.querySelector("#modeBtn");
const body = document.body;
btn.addEventListener("click" , () => {
    body.classList.toggle("bg-black");
    body.classList.toggle("text-white");
    btn.classList.add("back");
    
});

const h1 = document.getElementById("h1");
const colors = ["text-cyan-400" , "text-amber-500" , "text-indigo-400" , "text-emerald-400" , "text-fuchsia-400" , "text-slate-400" ];
let i = 0;
setInterval(() => {
    h1.classList.remove(colors[i % colors.length]);
    i++;
    h1.classList.add(colors[i % colors.length]);
} , 1000); 

const h3 = document.getElementById("h3");
const color = ["text-cyan-400" , "text-amber-500" , "text-indigo-400" , "text-emerald-400" , "text-fuchsia-400", "text-slate-400"];
let count = 0;
setInterval(() => {
    h3.classList.remove(color[count % color.length]);
    count++;
    h3.classList.add(color[count % color.length]);
} , 1000);

