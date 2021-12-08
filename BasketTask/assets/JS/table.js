// let storageData=localStorage.getItem("basket");
// console.log(storageData);

// let noorder=document.querySelector("#noorder");
// let table=document.querySelector("table");
// console.log(basketnumber);
// if (basketnumber==0) {
//     noorder.style.display="block";
// }
// else{
//     table.style.visibility="visible";
//     let tbody=document.createElement("tbody");
//     tbody.appendChild(table);
//     let trow=document.createElement("tr");
//     trow.appendChild(tbody);

// }
let eye=document.querySelector(".fa-eye");
eye.addEventListener("click",function(e){
    e.preventDefault();
    let basketnumber=document.querySelector("#basketCount").innerText;
    let table=document.getElementById('myTable');
    let tbody=document.createElement("tbody");
    tbody.appendChild(table);
    console.log(table);
    // for (let i = 1; i <= basketnumber; i++) {
    //     let trow=document.createElement("tr");
    //     trow.appendChild(tbody);

        
    // }
})
