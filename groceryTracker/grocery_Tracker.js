let First;
let Second;
let Third;
let Amount;

function calculateAmount() {
    First = parseFloat(document.getElementById('First').value);
    Second = parseFloat(document.getElementById('Second').value);
    Third = parseFloat(document.getElementById('Third').value);

    Amount = First + Second + Third;
    document.getElementById('Amount').innerText = `The total amount is: ${Amount}`;
    

    
}