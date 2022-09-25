//Checks for dev mode
function isPageDev() {
if (localStorage.getItem("dev")) {
return "dev"
} else {
return "";
}
}

function isButtonDev() {
if (!localStorage.getItem("dev")) {
return "unchecked"
} else {
return "";
}
}

//Set base page code
document.documentElement.innerHTML = `<html><head><link rel="icon" href="data:image/svg+xml,<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'><path fill='white' d='M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z'></path></svg>">
<title>Ingot</title>
</head>
<body ` + isPageDev() + `>
<div class="nav">
<div class="nav-left">
<div class="nav-title">Ingot</div>
<div class="nav-right">
<div class="nav-dev">Developer mode</div>
<div ` + isButtonDev() + ` class="item-toggle item-toggle-dev" id="toggle" onclick="toggle(this);devMode()" onmousedown="togglePress(this, 'down')" onmouseup="togglePress(this, 'up')">
<div class="item-bar"></div>
<div class="item-knob">
<div class="item-ripple">
<div class="ripple"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="items-main">
<div class="items" id="items">
<div class="patched">Error: This may have been patched</div>
<div class="wrongpage">You are not on the correct page.<br>To use Ingot click the button below to redirect and run the bookmarklet again.<div class="item-left-buttons" style="justify-content: center; margin: 20px;">
<div class="item-left-button" onclick="window.location='https://chrome.google.com/webstorex'">Redirect</div>
</div></div>
</div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

* {
	font-family: "Roboto";
}

:root {
	color-scheme: dark;
}

body {
	background: #202124;
	margin: 0;
	padding: 0;
}

.nav {
	width: 100%;
	height: 55px;
	background: #292a2d;
	border-bottom: 1px solid rgba(255, 255, 255, .1);
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 9;
}

.nav-left {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	padding-inline-start: calc(12px + 6px);
	height: 55px;
}

.nav-right {
	position: absolute;
	right: 0;
	left: 0;
	display: flex;
	justify-content: flex-end;
}

.nav-dev {
	color: rgb(154, 160, 166);
	font-size: 13px;
	margin-inline-end: calc(16px + 30px);
	margin-bottom: 3px;
}

.item-toggle-dev {
	transform: translateX(-30px);
}

.nav-title {
	color: rgb(232, 234, 237);
	font-size: 22px;
	letter-spacing: .25px;
	line-height: normal;
	margin-inline-start: 6px;
	padding-inline-end: 12px;
	font-weight: 500;
}

.items-main {
	min-width: 400px;
	padding: 24px 60px 64px;
	margin-top: 57px;
}

.items {
	display: grid;
	grid-column-gap: 12px;
	grid-row-gap: 12px;
	grid-template-columns: repeat(auto-fill,400px);
	justify-content: center;
	margin: auto;
/*max-width: calc(400px * 3 + 12pz * 3);*/;
}

.item {
	height: 160px;
	width: 400px;
	background: #292a2d;
	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, .3) 0 1px 2px 0, rgba(0, 0, 0, .15) 0 2px 6px 2px;
/*transition: height .3s cubic-bezier(.25,.1,.25,1);*/;
}

.item-main {
	display: flex;
	flex: 1;
	min-height: 0;
	padding: 16px 20px;
	height: 80px;
}

.item-img-wrapper {
	align-self: flex-start;
	display: flex;
	padding: 6px;
	position: relative;
}

.item-img {
	height: 36px;
	width: 36px;
	border-radius: 6px;
	background: #202124;
	text-indent: -10000px;
}

.item-img-source {
	align-items: center;
	background: #f1592b;
	border-radius: 50%;
	box-shadow: 0 1px 1px 0 rgb(0 0 0 / 22%), 0 2px 2px 0 rgb(0 0 0 / 12%);
	display: flex;
	height: 22px;
	justify-content: center;
	width: 22px;
	margin-inline-start: 24px;
	margin-top: 24px;
	position: absolute;
	display: none;
}

.item[managed] .item-img-source {
	display: flex;
}

.item-img-source-icon {
	pointer-events: none;
	display: block;
	height: 16px;
	width: 16px;
	color: white;
}

.item-content {
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-inline-start: 24px;
	width: 288px;
	overflow: hidden;
}

.item-title-and-version {
	display: flex;
	align-items: center;
	flex-direction: row;
}

.item-title {
	margin-inline-end: 8px;
	color: rgb(232, 234, 237);
	white-space: nowrap;
	margin-bottom: 4px;
	font-size: 13px;
	margin-top: 2px;
	text-overflow: ellipsis;
	overflow: hidden;
}

.item-version {
	color: rgb(154, 160, 166);
	font-size: 13px;
	margin-bottom: 4px;
	display: none;
}

.item-description-overflow {
	height: 84px;
	overflow: hidden;
}

.item-description {
	color: rgb(154, 160, 166);
	overflow: hidden;
	text-overflow: ellipsis;
	flex: 1;
	font-size: 13px;
	line-height: 20.02px;
	margin-top: 3px;
}

.item-id {
	color: rgb(154, 160, 166);
	font-size: 13px;
	margin-top: 5px;
	display: none;
}

.item-buttons {
	height: 48px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	padding-right: 38px;
	padding-bottom: 8px;
	padding-top: 8px;
	box-sizing: border-box;
}

.item-left-buttons {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex: 1;
	flex-basis: 1e-9px;
}

.item-left-button {
	border: 1px solid rgb(95, 99, 104);
	align-items: center;
	border-radius: 4px;
	box-sizing: border-box;
	color: rgb(138, 180, 248);
	cursor: pointer;
	display: inline-flex;
	font-weight: 500;
	height: 32px;
	justify-content: center;
	min-width: 5.14em;
	overflow: hidden;
	padding: 8px 16px;
	user-select: none;
	margin-inline-start: 8px;
	font-size: 13px;
	line-height: 20.02px;
}

.item-left-button:hover {
	background: rgba(138, 180, 248, 0.08);
}

.item-left-button:active {
	background: rgba(138, 180, 248, 0.25);
}

.item-toggle {
	position: relative;
	cursor: pointer;
}

.item-toggle[unchecked] .item-bar {
	background: rgb(154, 160, 166);
	opacity: 1;
}

.item-toggle[unchecked] .item-knob {
	background: rgb(218, 220, 224);
	transform: initial;
}

.item-bar {
	background: rgb(138, 180, 248);
	border-radius: 8px;
	height: 12px;
	left: 3px;
	position: absolute;
	top: 2px;
	transition: background-color linear 80ms;
	width: 28px;
	opacity: 0.5;
}

.item-knob {
	background: rgb(138, 180, 248);
	transform: translate3d(18px, 0, 0);
	border-radius: 50%;
	display: block;
	height: 16px;
	position: relative;
	transition: transform linear 80ms, background-color linear 80ms;
	width: 16px;
	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 40%);
}

.item-ripple {
	color: rgb(218, 220, 224);
	height: 40px;
	left: 50%;
	outline: none;
	pointer-events: none;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	transition: color linear 80ms;
	width: 40px;
}

.ripple {
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: currentcolor;
	left: 0;
	opacity: 0.25;
	pointer-events: none;
	position: absolute;
	will-change: height, transform, width;
	transform: scaleX(0) scaleY(0);
	transition: transform linear 80ms;
}

.ripple[open] {
	transform: initial;
}

body[dev] .item {
	height: 208px;
}

body[dev] .item-main {
	height: 125px;
}

body[dev] .item-version, body[dev] .item-id {
	display: initial;
}

.patched, .wrongpage {
	color: rgb(154, 160, 166);
	font-size: 15.99px;
	font-weight: 500;
	margin-top: 80px;
	text-align: center;
	display: none;
}

.items[patched], .items[wrongpage] {
	grid-template-columns: initial;
}

.items[patched] .patched {
	display: initial;
}

.items[wrongpage] .wrongpage {
	display: flow-root;
}
</style>
</body>
</html>`

//Remove extension
function removeExtension(extensionId) {
chrome.management.uninstall(extensionId)
}

//Simple function to make image to data url
function blobToDataURL(blob) {
return new Promise((resolve, reject) => {
var reader = new FileReader();
reader.onload = function(e) {
resolve(e.target.result)
}
reader.onerror = function(e) {
reject(reader.error)
}
reader.onabort = function(e) {
reject(new Error("Read aborted"))
}
reader.readAsDataURL(blob);
})
}

//Gets the icon from extensions
async function getIconFromExtension(extensionID) {
if (!extensionID) return "";

var extensionPage = await fetch("https://chrome.google.com/webstore/detail/" + extensionID)
var extensionPageCode = await extensionPage.text()
var dom = new DOMParser().parseFromString(extensionPageCode, "text/html")
if (!dom.querySelector("img.e-f-s[src]")) return "";
var extensionImage = dom.querySelector("img.e-f-s[src]").src;
var getImage = await fetch(extensionImage);
return await blobToDataURL(await getImage.blob());
}

//Toggle extensions
function toggleExtension(e, extensionId) {
if (e.hasAttribute("unchecked")) {
chrome.management.setEnabled(extensionId, true)
} else {
chrome.management.setEnabled(extensionId, false)
}
}

//Toggle the toggle
function toggle(e) {
if (e.hasAttribute("unchecked")) {
e.removeAttribute("unchecked")
} else {
e.setAttribute("unchecked", "")
}
}

//Toggle animation
function togglePress(e, dir) {
if (dir == "down") {
e.children[1].children[0].children[0].setAttribute("open", "")
} else {
setTimeout(function() {
e.children[1].children[0].children[0].style.display = "none"
e.children[1].children[0].children[0].removeAttribute("open")
e.children[1].children[0].children[0].style.display = "initial"
}, 80)
}
}

//Sets dev mode
function devMode() {
if (document.body.hasAttribute("dev")) {
document.body.removeAttribute("dev")
localStorage.removeItem("dev")
} else {
document.body.setAttribute("dev", "")
localStorage.setItem("dev", "true")
}
}

//Creates extension element
function addExtension(data) {
var items = document.getElementById("items")

var item = document.createElement("div")
item.className = "item"
item.setAttribute("data-id", data.id)
if (data.managed) {
item.setAttribute("managed", "")
}

var itemMain = document.createElement("div")
itemMain.className = "item-main"

var itemImgWrapper = document.createElement("div")
itemImgWrapper.className = "item-img-wrapper"

var itemImg = document.createElement("img")
itemImg.className = "item-img"
itemImg.src = data.logo

var itemImgSource = document.createElement("div")
itemImgSource.className = "item-img-source"
itemImgSource.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" class="item-img-source-icon"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" style="fill: currentColor"></path></svg>`

itemImgWrapper.appendChild(itemImg)
itemImgWrapper.appendChild(itemImgSource)

itemMain.appendChild(itemImgWrapper)

var itemContent = document.createElement("div")
itemContent.className = "item-content"

var itemTitleAndVersion = document.createElement("div")
itemTitleAndVersion.className = "item-title-and-version"

var itemTitle = document.createElement("div")
itemTitle.className = "item-title"
itemTitle.innerText = data.title

var itemVersion = document.createElement("div")
itemVersion.className = "item-version"
itemVersion.innerText = data.version

itemTitleAndVersion.appendChild(itemTitle)
itemTitleAndVersion.appendChild(itemVersion)

itemContent.appendChild(itemTitleAndVersion)

var itemDescriptionOverflow = document.createElement("div")
itemDescriptionOverflow.className = "item-description-overflow"

var itemDescription = document.createElement("div")
itemDescription.className = "item-description"
itemDescription.innerText = data.description

itemDescriptionOverflow.appendChild(itemDescription)

itemContent.appendChild(itemDescriptionOverflow)

var itemId = document.createElement("div")
itemId.className = "item-id"
itemId.innerText = "ID: " + data.id

itemContent.appendChild(itemId)

itemMain.appendChild(itemContent)

item.appendChild(itemMain)

var itemButtons = document.createElement("div")
itemButtons.className = "item-buttons"

//Does not work on admin extensions
/*
var itemLeftButtons = document.createElement("div")
itemLeftButtons.className = "item-left-buttons"

var itemLeftButton = document.createElement("div")
itemLeftButton.className = "item-left-button"
itemLeftButton.innerText = "Remove"
itemLeftButton.setAttribute("onclick", "removeExtension('" + data.id + "')")
itemLeftButtons.appendChild(itemLeftButton)

itemButtons.appendChild(itemLeftButtons)
*/

var itemToggle = document.createElement("div")
itemToggle.className = "item-toggle"
itemToggle.setAttribute("onclick", "toggleExtension(this, '" + data.id + "');toggle(this)")
itemToggle.setAttribute("onmousedown", "togglePress(this, 'down')")
itemToggle.setAttribute("onmouseup", "togglePress(this, 'up')")
if (!data.enabled) {
itemToggle.setAttribute("unchecked", "")
}

var itemBar = document.createElement("div")
itemBar.className = "item-bar"

var itemKnob = document.createElement("div")
itemKnob.className = "item-knob"

var itemRipple = document.createElement("div")
itemRipple.className = "item-ripple"

var ripple = document.createElement("div")
ripple.className = "ripple"

itemRipple.appendChild(ripple)

itemKnob.appendChild(itemRipple)

itemToggle.appendChild(itemBar)

itemToggle.appendChild(itemKnob)

itemButtons.appendChild(itemToggle)

item.appendChild(itemButtons)

items.appendChild(item)
}

//Gets all extensions and adds them
async function getExtensions() {
chrome.management.getAll(async function(allExtensions) {
for (let anExtension in allExtensions)
if (!allExtensions[anExtension].isApp) {
addExtension({
title: allExtensions[anExtension].name,
version: allExtensions[anExtension].version,
description: allExtensions[anExtension].description,
id: allExtensions[anExtension].id,
logo: "",
managed: allExtensions[anExtension].installType == "admin" ? true : false,
enabled: allExtensions[anExtension].enabled,
})
}
})
setTimeout(function() {
setIcons()
}, 100)
}

async function setIcons() {
var items = document.querySelectorAll(".items .item")
for (let item in items) {
try {
items[item].querySelector(".item-main .item-img-wrapper .item-img").src = await getIconFromExtension(items[item].dataset.id)
} catch {
}
}
}

//Show wrong page popup
if (!window.location.toString().startsWith("https://chrome.google.com/webstore")) {
document.getElementById("items").setAttribute("wrongpage", "")
} else {
//Checks if it still works
if (chrome.management) {
getExtensions()
} else {
document.getElementById("items").setAttribute("patched", "")
}
}
