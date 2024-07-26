


// console.log(document.getElementsByClassName("plus")); // nadina plus
var plusBtns = document.getElementsByClassName("plus"); //sna3ena var mte3 btns

for (
  let i = 0;
  i < plusBtns.length;
  i++ // tableau lel btns +
) {
  plusBtns[i].addEventListener("click", inc);
}
function inc(e) {
  var btnPlus = e.target;

  // console.log(btnPlus)
  var divParent = btnPlus.parentElement;
  // console.log(divParent)
  var quantity = divParent.querySelector("p");
  // console.log(p)
  var quantityValue = Number(quantity.innerHTML); // bech ne7i il p twali nuber
  // console.log(value)
  quantityValue++;
  // console.log(value)
  quantity.innerHTML = quantityValue;
  var trParent=divParent.parentElement.parentElement
  var unitPrice=trParent.querySelector(".unitPrice")
  var price=trParent.querySelector(".price")
  var unitPrice_value=Number(unitPrice.innerHTML)
  var price_value=Number(price.innerHTML)
 price.innerHTML=unitPrice_value*quantityValue
 
 var total=document.querySelector("#total")
 var totalValue=Number(total.innerHTML)
 total.innerHTML=unitPrice_value + totalValue ;


}
// console.log(document.getElementsByClassName("plus")); // nadina plus
var minusBtns = document.getElementsByClassName("minus"); //sna3ena var mte3 btns
for (
  let i = 0;
  i < minusBtns.length;
  i++ // tableau lel btns +
) {
  minusBtns[i].addEventListener("click", dcr);
}
function dcr(e) {
  var btnMinus = e.target;

  // console.log(btnPlus)
  var divParent = btnMinus.parentElement;
  // console.log(divParent)
  var p = divParent.querySelector("p");
  // console.log(p)
  var value = Number(p.innerHTML); // bech ne7i il p twali nuber
  // console.log(value)
  value--;
  // console.log(value)


  if (value >= 0) {
    p.innerHTML = value;

    var trParent=divParent.parentElement.parentElement
  var unitPrice=trParent.querySelector(".unitPrice")
  var price=trParent.querySelector(".price")
  var unitPrice_value=Number(unitPrice.innerHTML)
  var price_value=Number(price.innerHTML)
  price.innerHTML=value*unitPrice_value
  var total=document.querySelector("#total")
 var totalValue=Number(total.innerHTML)
 total.innerHTML=totalValue-unitPrice_value;
  }
}

var delteBtns=document.querySelectorAll(".fa-trash-alt");
for (let i= 0; i  < delteBtns.length; i ++) {
delteBtns[i].addEventListener('click',deletefunc);
}
function deletefunc(event) {
var deleteBtn=event.target;
var wholecontainer=deleteBtn.parentElement.parentElement.parentElement.parentElement;
 wholecontainer.remove();
}
var like=document.querySelectorAll(".fa-heart");
for (let i= 0; i  < like.length; i ++) {
like[i].addEventListener('click',changeColor);
}
function changeColor(e) {
var like=e.target;
if (like.style.color=="red") {
    like.style.color= "#424242"
}
else
like.style.color="red"
}
var checkBoxes=document.querySelectorAll("input");
for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('click',selectFunc); 
}
function selectFunc(e){
    var selectedCheckBox=e.target;

   }