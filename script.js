const rate_url = "https://open.er-api.com/v6/latest/INR"
const dropdown= document.querySelectorAll(".drop-down select");
const convbut = document.querySelector("form button");
const fromcurr = document.querySelector(".from select")
const tocurr = document.querySelector(".to select")
for(let select of dropdown){
      for(countcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = countcode;
         select.append(newoption);
      }
      select.addEventListener("change" , (evt)=>{ // evt is a parameter about the event happened here it is change, its a event object
   updateflage(evt.target);
})
}
const updateflage=(element)=>{
     let currcode = element.value;
     let contrycode = countryList[currcode];
     let newsrc = `https://flagsapi.com/${contrycode}/flat/64.png`
     let newimg = element.parentElement.querySelector("img");
     newimg.src = newsrc;
}

convbut.addEventListener("click" ,async (evt)=>{
evt.preventDefault();
   let amount = document.querySelector(".valueinput input");
let info = document.querySelector("#info");
let newurl = `https://open.er-api.com/v6/latest/${fromcurr.value}`
let response = await fetch(newurl);
let data = await response.json();
let finalrate = (amount.value)*data.rates[tocurr.value]
info.innerText=`${amount.value} ${fromcurr.value} = ${finalrate} ${tocurr.value}`
if(amount.value<1){
    info.innerText="Enter a valid number";
}
})
