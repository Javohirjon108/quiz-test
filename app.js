let quiz = ["HTML nima ?", "HTML hujjati qaysi teg bilan boshlanadi ?", "Veb sahifaning asosiy qismi qaysi tegda yoziladi ?"];
let answers = ["Veb sahifalarni tuzish uchun markup (belgilash) tili", "<!DOCTYPE html>", "app.js", "<body>"];
let savol = document.querySelector(".yozuv");
let rand = Math.trunc(Math.random() * quiz.length);
savol.value = quiz[rand]
let test = [
    '<div class="test"></div>',
    '<div class="test"></div>',
    '<div class="test"></div>',
    '<div class="test"></div>'
]
document.body.addEventListener("keydown", (e) => {
    if (e.key === "r" || e.key === "R") { window.location.reload() };
});
document.querySelector(".wrapper").innerHTML += test.join("")