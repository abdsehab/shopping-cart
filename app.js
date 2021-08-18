function ItemCalculation(WhichAmount,isAdd, ProductCost,SellPrice) {
    const Amount = document.getElementById(WhichAmount);
    let AmountValue = Amount.value;
    if (isAdd == true) {
        AmountValue = parseInt(AmountValue) + 1;
    }

    else if(AmountValue>0) {
       AmountValue = parseInt(AmountValue) - 1; 
    }

    Amount.value = AmountValue;

    const Price = document.getElementById(ProductCost);
    const priceValue = Price.innerText;
    Price.innerText = parseInt(AmountValue) * SellPrice;
    // Total Without Tex
    const TotalSellInput = document.getElementById('totalsell');
    const TotalSell = TotalSellInput.innerText;
    const Cost = TotalCost('case-amount', 59) + TotalCost('phone-amount', 1219);
    TotalSellInput.innerText = Cost;

    // const Cost = TotalCost('case-amount', 59) + TotalCost('phone-amount' ,1219);
    // TEx Calculate
    const TexInput = document.getElementById('tax')
    const Tex = TexInput.innerText;
    TexInput.innerText = Math.round(Cost * .15);

    // Total With Tex

    const TotalWithTexInout = document.getElementById('totalwithtex');
    const TotalWithTex = TotalWithTexInout.innerText;
    TotalWithTexInout.innerText = parseInt(TexInput.innerText) + parseInt(TotalSellInput.innerText);


    console.log(Cost);
}


document.getElementById('case-add').addEventListener('click', function () {
    ItemCalculation('case-amount',true,'case-price', 59);

})

document.getElementById('case-minus').addEventListener('click', function () {
    ItemCalculation('case-amount',false,'case-price', 59)
})

document.getElementById('phone-add').addEventListener('click', function () {
    ItemCalculation('phone-amount',true,'phone-price',1219 )
})

document.getElementById('phone-minus').addEventListener('click', function () {
    ItemCalculation('phone-amount',false,'phone-price',1219 )
})

function TotalCost(ProductAmount , price) {
    const Input = document.getElementById(ProductAmount);
    const Number = parseInt(Input.value);
    const total = Number * price;

    return total;
}



