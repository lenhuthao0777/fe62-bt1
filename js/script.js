let counter = 1;

// const img = document.querySelector(".slide img");
setInterval(()=>{
    const radio = document.querySelector("#radio" + counter);
    radio.checked = true;
    counter++;
    if(counter > 7){
        counter = 1;
    }
},5000);
