// ==UserScript==
// @name          StronaGrzegorz
// @namespace     http://tampermonkey.net/
// @version       1
// @description   Przyciski
// @match         https://edu.gplweb.pl/*
// @grant         none
// ==/UserScript==

(function() {
    'use strict';

document.querySelectorAll('.gDesk').forEach(function(element) {
  element.style.fontFamily = "'Helvetica Neue', sans-serif";
});

const innSpace = document.querySelector('.gtkBox.ver.innSpace');
const listBox = innSpace.querySelector('.gtkListBox');

if (listBox !== null) {
  innSpace.classList.add('flex');
}


const style = document.createElement('style');

style.innerHTML =`
#hiBar{
display:none;
}
header {
    margin-top: 0rem;
}
.blueBubble.wide {
  font-family: 'Helvetica', 'Arial', sans-serif;
  display: inline-block;
  font-size: 0.5em;
  padding: 0.5em 2em;
  background-color: rgb(199 0 207);
  -webkit-appearance: none;
  appearance: none;
  color: #fff;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  position: relative;
  margin: 0.1rem 0.15rem;
}



 .gtkBox.ver, .gtkBox.ttb{
  align-items: center;
}

 .gtkLabel {
  width: 190px;
  height: 254px;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;

}
 .gtkLabelCateg {
text-align: center;
min-width: 720px;
  background-image: radial-gradient(circle, #7707bd, #ff0000);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
 Z-INDEX: 1;
}

.gtkListBox > ul li:hover, .gtkListBox > ul li:focus,
.gtkListBox + ul li:hover, .gtkListBox + ul li:focus,
ul.gtkListBox li:hover, ul.gtkListBox li:focus,
.gtkSideBar > ul li > a:hover, .gtkSideBar .sideBar > li >a :hover, .gtkSideBar .sideBar > ul li > a:hover,
.gtkTreeView ul li:hover, .gtkTreeView ul li:focus,
table.gtkTreeView tr:hover, table.gtkTreeView tr:focus,
.gtkNotebook .gtkListBox li:hover, .gtkNotebook .gtkListBox li:focus {
	background-color: #c0a9c1;
    border-radius: 30px;
    margin: 0px 0px 0px 0px;
}

 .gtkBox.ver.innSpace {
display: none;
}


 .gtkListBox {
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;
  width: 100%;
  color: #000000;
}

 .gtkListBox.bubblesInside.wide [data-units="1td,1tf"], [data-units="2td,2tf"], [data-units="4dt5"], [data-units="3tp,3tr"], [data-units="3tp,3tr"],
 [data-units="2tf"], [data-units="3tp,4pt5"], [data-units="4pt4"], [data-units="4pt4,4pt5"],
 [data-units="4dt4"], [data-units="1td"],
 [data-units="2tf,2tp,3tp"], [data-units="3tp,3tr,4pt5,4et5"], [data-units="3tp,3tr,4pt4,4pt5"],
 [data-units="2st,2ns"], [data-units="zai3"]{
 margin: 0px 0px 0px 20px;
 }

 .gtkWindow > *:last-child  {
 justify-content: center;
 }
 .putLeft, .putLeft > *, .putRight, .putRight > *{
  display: none;
 }

 .gtkBtn.btnBack{
 display: flex;
 flex-direction: column;
 padding: 1em 2em;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
 }
section > div > div.gtkBox.ver.outSpace > div > div:nth-child(2) > p.gtkLabelLine{
display: inline;
}
 section > div > div.gtkBox.ver.outSpace > div > div:nth-child(2) > label{
text-align: left;
}

 .gtkInfoBar {
padding: 1px 1px 1px;
}
.gtkLabel.txtRight.disabled{
height: 0px;
width: var(--width-lbls, 100%);
    border-radius: 0px;
    background-color: var(--bg-gray-light);
    box-shadow: 0px 0px 0px;
}

.gtkLabel.infoTx{
height: 0px;
width: var(--width-lbls, 100%);
    border-radius: 30px;
    background-color: var(--bg-gray-light);
    box-shadow: 0px 0px 0px;
}

.gtkLabel.txtCenter{
height: 0px;
width: var(--width-lbls, 100%);
    border-radius: 0px;
    background-color: var(--bg-gray-light);
    box-shadow: 0px 0px 0px;
}

section > div > div.gtkBox.ver.outSpace > div > div:nth-child(2) > div{
border-bottom: 0px solid #a7aba7;
background-color: var(--bg-gray-light);
}

.gtkBox.ver.innSpace > .gtkListBox{
  display: flex;
}
.gtkBox.ver.innSpace.flex{
display: flex;
}

.gtkBox.ver.innSpace.sticky.bgGray.gtkReveal.hide.fromLeft.rgtBoxWidth100.flex > .gtkListBox {
display: block;
box-shadow: 0px 0px 0px;
}


`;

document.head.appendChild(style);




})();



