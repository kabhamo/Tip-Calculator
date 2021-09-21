var bill ;
var tipSelected;
var numberofPeople = 1;
var tipAmount;
var tipAmountPersone;
var totalAmount;

$('#bill-input').on("input", function() {
    bill = Number(this.value);
    if(tipSelected > 0 && bill > 0){ updateTotal();}
});
$('#people-input').on("input", function() {
    numberofPeople = Number(this.value);
    if(tipSelected > 0 && bill > 0){ updateTotal();}
});

  //##### Tip% #####
$(".tip-btn").click(function(data){ 
    var temp = this.innerHTML; //5%
    tipSelected = Number(temp.substring(0,temp.length-1))/100;
    if(tipSelected > 0 && bill > 0){ updateTotal();}
});


function updateTotal(){
    var bill_temp = bill;
    tipAmount = (tipSelected * bill_temp);
    bill_temp += tipAmount;
    tipAmountPersone = tipAmount/numberofPeople;
    totalAmount = bill_temp / numberofPeople;
    $("#tip_amount").html("$"  +parseFloat(tipAmountPersone).toFixed(2));
    $("#total").html("$"  + parseFloat(totalAmount).toFixed(2));
}

$('#reset-btn').click(function(){
    $("#tip_amount").html("$0.00");
    $("#total").html("$0.00");
    bill = 0 ;
    tipSelected = 0;
    numberofPeople = 1;
    tipAmount = 0;
    tipAmountPersone = 0;
    totalAmount = 0;
});


