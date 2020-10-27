
let ccy = [];
let base_ccy= [];
let buy = [];
let sale = [];
let box = document.getElementById("Raits");

function CallAip() {

    let url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

    fetch(url)
        .then(resp => resp.json())
        .then(jsonObject => {

            let object = jsonObject;

            for (let i = 0; i < 4; i++) {

                ccy[i] = object[i].ccy;
                base_ccy[i] = object[i].base_ccy;
                buy[i] = object[i].buy;
                sale[i] = object[i].sale;
                PrintVale(i);
            }
        })
}


function PrintVale(pos){

let tr1 = document.createElement("tr");

    let First = document.createElement("td");
    First.innerHTML = base_ccy[pos];

    let Second = document.createElement("td");
    Second.innerHTML = ccy[pos];

    let Third = document.createElement("td");
    Third.innerHTML = buy[pos];

    let Forth = document.createElement("td");
    Forth.innerHTML = sale[pos];


    tr1.appendChild(First);
    tr1.appendChild(Second);
    tr1.appendChild(Third);
    tr1.appendChild(Forth);
    document.getElementById("table").appendChild(tr1);
}

function Convert(POS) {

    let Input = document.getElementById("TEXT").value;
    let Output ;
    switch (POS){

        case 1:
            Output = Input/sale[0];
            Output = Output.toFixed(2);
            break;
        case 2:
            Output = Input/sale[1];
            Output = Output.toFixed(2);
            break;
        case 3:
            Output = Input/sale[2];
            Output = Output.toFixed(2);
            break;

    }

    let p = document.getElementById("out");
    p.innerText = Output;

}