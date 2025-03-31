let heading = document.querySelector("div")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")

let printname = function(){
    let newDiv = document.createElement("div")
    let random = Math.random() *10+1
    let randomid = Math.random()*10+1

    newDiv.id = "mydiv"
    if (random<5) {
        newDiv.innerText = "red color wins -------------and the id of the winners -------------"+  random.toPrecision(1)*100 + `**a** ${randomid.toPrecision(1)*100}`
    }else if(random<10){
        newDiv.innerText = "blue color wins------------- and  the id of the winners -------------"+  random.toPrecision(1)*100 + `*n*** ${randomid.toPrecision(1)*100}`
    }else if(random<20){
        newDiv.innerText = "yellow color wins------------- and the id of the winners -------------"+  random.toPrecision(1)*100 + `**k** ${randomid.toPrecision(1)*100}`
    }
     
    document.body.append(newDiv)

}

let intervalid = ""

start.addEventListener("click", function(){
    if (!intervalid){
    intervalid =  setInterval(printname, 1000);}
})

stop.addEventListener("click", function(){
    console.log("stop clicked");
    if(intervalid)
    clearInterval(intervalid)

    intervalid = null;
})
