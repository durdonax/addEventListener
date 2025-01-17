let send = document.getElementById(`btn1`);
let num_in = document.getElementById(`num`);
let h3 = document.querySelector(`h3`);
let count = 0;
send.addEventListener("click", ()=> {
    count = num_in.value
    h3.innerHTML = num_in.value
});
let plus = document.getElementById(`plus`);
plus.addEventListener(`click`, ()=>{
    count++;
    h3.innerHTML = count;
});
let minus = document.getElementById(`minus`)
minus.addEventListener(`click`, ()=> {
    count--;
    h3.innerHTML = count;
})


let color = document.getElementById(`color`)
color.addEventListener(`change`, ()=> {
    h3.style.color = color.value
})