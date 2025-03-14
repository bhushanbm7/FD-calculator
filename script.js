function calculateMaturityAmount()
{
    //get input from elements
    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

//perform caluculation

const maturityAmount =principle + (principle* interestRate * tenure)/100;

//dispaly result

document.getElementById('result').innerText=`Maturity Amount :${maturityAmount.toFixed(2)}`;


}
//attach the lister to calculate button


document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);