const balance = document.getElementById(
    "balance"
);

const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById("list");
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
  {id: 1, text: "flower", amount: -20},  
  {id: 2, text: "salary", amount: -20},  
  {id: 3, text: "Book", amount: -20},  
  {id: 4, text: "camera", amount: -20},  
];

let Transactions = dummyTransactions;


//Add transactions



function addTransactionDOM(transaction){
    const sign = transaction[0].amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    item.classList.add(
        transaction[0].amount < 0 ? "minus" : "plus"
    )

    item.innerHTML =`
    ${transaction[0].text}<span>${sign}${Math.abs(transaction[0].amount)}</span>
    <button class = "delete-btn" onClick = "">X</button>
    `;

    list.appendChild(item);
}

//update updateValues

function updateValues(){
    const amount = Transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc,item) => (acc += item),0).toFixed(2);
    const income = amount.filter(item => item > 0).reduce((acc,item => (acc += item),0).toFixed(2));
    const expense = (
        amount.filter(item => item < 0).reduce((acc, item) => (acc += item),0)* -1
    ).toFixed(2);

    balance.innerText=`$${total}`;
    money_plus.innerText=`$${income}`;
    money_minus.innerText=`$${expense}`;
}


//Init app
function Init(){
    list.innerHTML="";
    Transactions.forEach(addTransactionDOM);
    updateValues();
}

addTransactionDOM(Transactions);