const btn = document.querySelector(".add");

const firend = document.querySelector("#card h3");


let check = 0;

btn.addEventListener("click",()=> {

    if (check == 0) {
        firend.innerHTML = "Firends";
    firend.style.color = "green";
    btn.innerHTML = "Remove";
    check = 1;
    } else {
        firend.innerHTML = "Stranger";
        firend.style.color = "red";
        btn.innerHTML = "Add Friend"
        check = 0;
    }

});
