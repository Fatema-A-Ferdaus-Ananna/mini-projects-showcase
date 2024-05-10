var project_1 = document.querySelector("#p1");



function explorePriject(url){
    location.assign(url);
    //location.assign("slideShows/slideShow_1/slideShow.html");
}



//user preference

const bg_preference = document.querySelector("#selectBgColor");
const reset_preference = document.querySelector(".preference-reset");
const background = document.querySelector(".container");


//load localstorage value
const default_bg_color = () =>{
    const localBGcolor = localStorage.getItem("bg_color");

    if(localBGcolor){
        // bg_preference.value = localBGcolor;
        // background.style.backgroundColor = localBGcolor;
        setValue(localBGcolor);
    }

    if(!localBGcolor){
        // bg_preference.value = "#003C43";
        // background.style.backgroundColor = bg_preference.value;
        setValue("#003C43");
    }
}

const setValue = (localBGcolor) =>{
    bg_preference.value = localBGcolor;
    background.style.backgroundColor = localBGcolor;  
}


//add event listener

bg_preference.addEventListener('change', (event)=>{
    const selected_BG_color = event.target.value;
    background.style.backgroundColor = selected_BG_color;
    localStorage.setItem("bg_color", selected_BG_color);
});

// function changeBgColor(event){
//     background.style.backgroundColor = event.target.value;
// }

reset_preference.addEventListener('click', ()=>{
    localStorage.removeItem("bg_color");
    // bg_preference.value = "#003C43";
    // background.style.backgroundColor = "#003C43";
    setValue("#003C43");
})

default_bg_color();
