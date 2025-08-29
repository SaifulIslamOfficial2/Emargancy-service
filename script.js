
//  Clicking on the 💗 heart icon of any card will increase and decres the count in the Navbar=====
const fvbtn = document.querySelectorAll(".fvbtn")
const fvCount = document.getElementById("fa-heart")
let count = 0;

fvbtn.forEach(fv =>{
fv.addEventListener("click", function(){
  
     this.classList.toggle("fa-solid");
    this.classList.toggle("fa-regular");
    if(this.classList.contains("fa-solid")){
         this.classList.add("text-red-500"); 
        this.classList.remove("text-black");

        count++
    }else{
       this.classList.add("text-black");    
        this.classList.remove("text-red-500");
    count--;
    }

    fvCount.textContent = count;

})
})

// On clicking the Copy button, show an alert and increase the copy count (3 Marks)=======

const copyBtn = document.querySelectorAll(".copyBtn");
const hotLine = document.querySelectorAll(".hotLine");
const copyCount = document.getElementById("copyCount")


let copyCountNumber = 0;


copyBtn.forEach((btn,index)=>{
    btn.addEventListener("click", function(){

         const number = hotLine[index].textContent;
       navigator.clipboard.writeText(number)
       .then( ()=> {
        
        alert("copy this number" + number)
       copyCountNumber++;
        copyCount.textContent = copyCountNumber;

    })
    })
})

// On clicking a card's Call Button, following actions will happen: ===============
let coin = 100;
const coinCount = document.getElementById("coinCount");
const callHistory = document.getElementById("callHistory")
const callHistoryItem = `<i class="fa-solid fa-phone"></i>`

const callbtn = document.querySelectorAll(".callBtn");

const clearbtn  = document.querySelector(".clearbtn")
callbtn.forEach((btn)=> {
    btn.addEventListener("click",function(){

        const card = this.closest(".card");
         const serviceName =  card.querySelector(".serviceName").textContent;
        const serviceNumber = card.querySelector(".serviceNumber").textContent;

        if(coin < 10){
            alert("Ato samanno coin diye call kora jabe na ")
            return;
        }

        coin -= 10;
        coinCount.textContent = coin;

        alert(`📞 Calling ${serviceName} - ${serviceNumber}.......`);
        const timeStr = new Date().toLocaleTimeString();
        const li = document.createElement("li")
     

        li.textContent  = `${serviceName}-${serviceNumber}- Time ${timeStr}`
        callHistory.appendChild(li)
      

    })
})

//  clear button
clearbtn.addEventListener("click", function () {
    if(callHistory.innerHTML === ""){
        alert("No call history to delete");
    } else {
        callHistory.innerHTML = ""; 
        alert("Call history Delete");
    }
});
