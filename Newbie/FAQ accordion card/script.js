let title1 = document.getElementById("question-1")
let title2 = document.getElementById("question-2")
let title3 = document.getElementById("question-3")
let title4 = document.getElementById("question-4")
let title5 = document.getElementById("question-5")
let arrow1 = document.getElementById("arrow1")
let arrow2 = document.getElementById("arrow2")
let arrow3 = document.getElementById("arrow3")
let arrow4 = document.getElementById("arrow4")
let arrow5 = document.getElementById("arrow5")
let answer1 = document.getElementById("answer-1")
let answer2 = document.getElementById("answer-2")
let answer3 = document.getElementById("answer-3")
let answer4 = document.getElementById("answer-4")
let answer5 = document.getElementById("answer-5")


answer1.style.display = "none"
answer2.style.display = "none"
answer3.style.display = "none"
answer4.style.display = "none"
answer5.style.display = "none"

function mostrar(arrow, answer, question) {
    if (answer.style.display == "none") {
        answer.style.display = "block"
        question.style.color = "var(--Very-dark-desaturated-blue)"
        arrow.style.transform = "rotate(180deg)"
    } else {
        answer.style.display = "none"
        question.style.color = "var(--Text-Dark-grayish-blue)"
        arrow.style.transform = "rotate(0deg)"
    }
}

function esconder1() {

    title2.style.color = "var(--Text-Dark-grayish-blue)"
    title3.style.color = "var(--Text-Dark-grayish-blue)"
    title4.style.color = "var(--Text-Dark-grayish-blue)"
    title5.style.color = "var(--Text-Dark-grayish-blue)"
    answer2.style.display = "none"
    arrow2.style.transform = "rotate(0deg)"
    answer3.style.display = "none"
    arrow3.style.transform = "rotate(0deg)"
    answer4.style.display = "none"
    arrow4.style.transform = "rotate(0deg)"
    answer5.style.display = "none"
    arrow5.style.transform = "rotate(0deg)"
}

function esconder2() {
    
    title1.style.color = "var(--Text-Dark-grayish-blue)"
    title3.style.color = "var(--Text-Dark-grayish-blue)"
    title4.style.color = "var(--Text-Dark-grayish-blue)"
    title5.style.color = "var(--Text-Dark-grayish-blue)"
    answer1.style.display = "none"
    arrow1.style.transform = "rotate(0deg)"
    answer3.style.display = "none"
    arrow3.style.transform = "rotate(0deg)"
    answer4.style.display = "none"
    arrow4.style.transform = "rotate(0deg)"
    answer5.style.display = "none"
    arrow5.style.transform = "rotate(0deg)"
}

function esconder3() {

    title1.style.color = "var(--Text-Dark-grayish-blue)"
    title2.style.color = "var(--Text-Dark-grayish-blue)"
    title4.style.color = "var(--Text-Dark-grayish-blue)"
    title5.style.color = "var(--Text-Dark-grayish-blue)"
    answer1.style.display = "none"
    arrow1.style.transform = "rotate(0deg)"
    answer2.style.display = "none"
    arrow2.style.transform = "rotate(0deg)"
    answer4.style.display = "none"
    arrow4.style.transform = "rotate(0deg)"
    answer5.style.display = "none"
    arrow5.style.transform = "rotate(0deg)"
}

function esconder4() {
    title1.style.color = "var(--Text-Dark-grayish-blue)"
    title2.style.color = "var(--Text-Dark-grayish-blue)"
    title3.style.color = "var(--Text-Dark-grayish-blue)"
    title5.style.color = "var(--Text-Dark-grayish-blue)"
    answer1.style.display = "none"
    arrow1.style.transform = "rotate(0deg)"
    answer2.style.display = "none"
    arrow2.style.transform = "rotate(0deg)"
    answer3.style.display = "none"
    arrow3.style.transform = "rotate(0deg)"
    answer5.style.display = "none"
    arrow5.style.transform = "rotate(0deg)"
}

function esconder5() {
    title1.style.color = "var(--Text-Dark-grayish-blue)"
    title2.style.color = "var(--Text-Dark-grayish-blue)"
    title3.style.color = "var(--Text-Dark-grayish-blue)"
    title4.style.color = "var(--Text-Dark-grayish-blue)"
    answer1.style.display = "none"
    arrow1.style.transform = "rotate(0deg)"
    answer2.style.display = "none"
    arrow2.style.transform = "rotate(0deg)"
    answer3.style.display = "none"
    arrow3.style.transform = "rotate(0deg)"
    answer4.style.display = "none"
    arrow4.style.transform = "rotate(0deg)"
}

let titulos = document.querySelectorAll("h5")

function entrar1(){
    if(answer1.style.display !== 'block'){
    titulos[0].style.color ="var(--Soft-red)"}
}
function sair1(){
    if(answer1.style.display !== 'block'){
    titulos[0].style.color = "var(--Text-Dark-grayish-blue)"}
}

titulos[0].addEventListener('mouseenter', entrar1)
titulos[0].addEventListener('mouseleave', sair1)

function entrar2(){
    if(answer2.style.display !== 'block'){
    titulos[1].style.color ="var(--Soft-red)"}
}
function sair2(){
    if(answer2.style.display !== 'block'){
    titulos[1].style.color = "var(--Text-Dark-grayish-blue)"}
}

titulos[1].addEventListener('mouseenter', entrar2)
titulos[1].addEventListener('mouseleave', sair2)

function entrar3(){
    if(answer3.style.display !== 'block'){
    titulos[2].style.color ="var(--Soft-red)"}
}
function sair3(){
    if(answer3.style.display !== 'block'){
    titulos[2].style.color = "var(--Text-Dark-grayish-blue)"}
}

titulos[2].addEventListener('mouseenter', entrar3)
titulos[2].addEventListener('mouseleave', sair3)

function entrar4(){
    if(answer4.style.display !== 'block'){
    titulos[3].style.color ="var(--Soft-red)"}
}
function sair4(){
    if(answer4.style.display !== 'block'){
    titulos[3].style.color = "var(--Text-Dark-grayish-blue)"}
}

titulos[3].addEventListener('mouseenter', entrar4)
titulos[3].addEventListener('mouseleave', sair4)

function entrar5(){
    if(answer5.style.display !== 'block'){
    titulos[4].style.color ="var(--Soft-red)"}
}
function sair5(){
    if(answer5.style.display !== 'block'){
    titulos[4].style.color = "var(--Text-Dark-grayish-blue)"}
}

titulos[4].addEventListener('mouseenter', entrar5)
titulos[4].addEventListener('mouseleave', sair5)
