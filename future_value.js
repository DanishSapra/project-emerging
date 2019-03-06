"use strict";
var $=function (id){
return document.getElementById(id);
}

function Calculator(investment, discount){
	var totalPrice = investment;
	{
		totalPrice = investment - (investment * discount/100);
	}
	totalPrice = totalPrice.toFixed(2);
	return totalPrice;
}

function calculatemoney(investment,discount) {
	var discountmoney;
	{
	discountmoney = investment- (investment - (investment * discount/100));
	}
	discountmoney = discountmoney.toFixed(2);
	return discountmoney;
}

function backgroundProcess() {
	var investment = parseFloat ($ ("investment").value);
	var discount = parseFloat ($ ("discount").value);
	var textLine;
	if (isNaN(investment) || isNaN(discount)){
		textLine = "please enter a value"
		alert("please enter a value");
	}
	else if (0 < investment && investment > 999){
		textLine = "Price must be greater than 0 or less than 1000";
	}
	else if (0 < discount && discount > 69){
		textLine = "Discount must be greater than 0 or less than 70"
	}
	else{
			textLine = "Check price"
	$("discount_amt").value = calculatemoney(investment,discount);
	$("net_amt").value = Calculator(investment, discount);
	}
	
	
}


window.onload=function(){
	$("calculate").onclick=backgroundProcess;
	

}