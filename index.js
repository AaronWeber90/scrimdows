import {giveTime, giveDate} from "./scripts/clock-date.js"
import {programmsData} from "./scripts/programms-data.js"
import menuData from "./scripts/menu-data.js"
import {themeChange} from "./scripts/theme-change.js"
// import {renderBattery} from "./scripts/battery.js"

// TIME RENDER
const timeEl = document.querySelector(".time")

function renderTime() {
    timeEl.innerHTML = giveTime()
}

const clockInterval = setInterval(renderTime, 1000)


// DATE RENDER
const dateEl = document.querySelector(".date")

function renderDate() {
    dateEl.innerHTML = giveDate()
}

const dateInterval = setInterval(renderDate(), 60000)


// GREETING
const greetingTextEl = document.querySelector(".user-welcome__text")
let greetingTextVar = ""
if (giveTime() > "05:00" && giveTime() < "12:00") {
    greetingTextVar = "Morning"
} else if (giveTime() > "12:00" && giveTime() < "17:00") {
    greetingTextVar = "Afternoon"
} else if (giveTime() > "17:00" && giveTime() < "21:00") {
    greetingTextVar = "Evening"
} else if (giveTime() > "21:00") {
    greetingTextVar = "Night"
} else {
    greetingTextVar = "Day"
}

greetingTextEl.innerHTML = `Have a good ${greetingTextVar}.`


// PROGRAMMS LOGIC
const desktopEl = document.querySelector(".desktop")

function renderProgramms() {
let programms = ""
for (let i = 0; i < programmsData.length; i++) {
    programms += `
    <div class="programm">
        <div class="programm__img">${programmsData[i].img}</div>
        <div class="programm__text"><span>${programmsData[i].text}</span></div>
    </div>
    `
}
    desktopEl.innerHTML = programms
}
renderProgramms()

function makeProgrammsLinks() {
    const programm = document.getElementsByClassName("programm")
    for (let i = 0; i < programmsData.length; i++) {
        programm[i].addEventListener("click", () => openProgramm(programmsData[i].url))
    }
}
makeProgrammsLinks()


// IFRAME
const iFrameEl = document.querySelector(".iframe-container")
const iFrame = document.querySelector(".iframe")

function openProgramm(url) {
    iFrameEl.style.display = "flex"
    iFrame.src = url
}

function closeProgramm() {
    iFrameEl.style.display = "none"
    iFrame.src = ""
}

function maxProgramm() {
    window.open(iFrame.src, "_blank").focus()
}

function minProgramm() {
    console.log("Minimize tab")
    // TODO
    // html2canvas?
    // console.log(document.getElementsByClassName("task-bar"))
    // iFrameEl.style.top = "100%"
}

function iframeResize() {
    iFrameEl.classList.toggle("iframe-container-mobile")
    if (iFrameEl.classList.contains("iframe-container-mobile")) {
        iframeResizeBtn.innerHTML = `<i class="fas fa-expand-arrows-alt"></i>`
    } else {
        iframeResizeBtn.innerHTML = `<i class="fas fa-compress-arrows-alt"></i>`
    }
}

const iframeCloseBtn = document.querySelector(".iframe-close-btn")
iframeCloseBtn.addEventListener("click", closeProgramm)

const iframeMaxBtn = document.querySelector(".iframe-max-btn")
iframeMaxBtn.addEventListener("click", maxProgramm)

const iframeMinBtn = document.querySelector(".iframe-min-btn")
iframeMinBtn.addEventListener("click", minProgramm)

const iframeResizeBtn = document.querySelector(".iframe-resize-btn")
iframeResizeBtn.addEventListener("click", iframeResize)


//MENU
const menuBtn = document.querySelector(".logo-container")
const menuContainer = document.querySelector(".menu-container")
const menuList = document.querySelector(".menu-list")

function renderMenu() {
    const menuListData = menuData.map(item => {
       return `<li class="menu-item-${item.isActive ? "active" : "inactive"}">${item.category}</li>`
    }).join("")
    menuList.innerHTML += menuListData
}
renderMenu()

function toggleMenu() {
    menuBtn.addEventListener("click", () => {
        menuContainer.classList.toggle("menu-active")
    })
}
toggleMenu()

function closeMenuNoFocus() {
    desktopEl.addEventListener("click", () => {
        menuContainer.classList.remove("menu-active") 
})}
closeMenuNoFocus()


// SUBMENU




// THEME CHANGE
themeChange("theme-ubuntu")


// RENDER BATTERY
const batteryContainer = document.querySelector(".battery-container")
const battery = document.querySelector(".battery")
const batteryEnergy = document.querySelector(".battery-energy")
function renderBattery() {
        //logic here
}
renderBattery()

let batterLvl = 100

function batteryEnergyDrop() {
    batterLvl -= 10
    console.log(batterLvl)
    

    if (batterLvl === 10) {
        clearInterval(batteryDischarge)
        batteryContainer.classList.add("battery-low")
    }

    batteryEnergy.style.height = `${batterLvl}%`
}

batteryEnergyDrop()

function chargeBattery() {
    if(batterLvl === 10) {
        console.log("hi")
    }
}

batteryContainer.addEventListener("click", chargeBattery)
const batteryDischarge = setInterval(batteryEnergyDrop, 500)