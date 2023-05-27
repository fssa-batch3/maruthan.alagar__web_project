
document.getElementById("add_group").addEventListener("click",addNewGroup)
let Groups = JSON.parse(localStorage.getItem("Groups")) || []

function addNewGroup() {
  let newGroupInput = document.getElementById('newGroupInput');
  let groupSelect = document.getElementById('group');
  let newGroup = newGroupInput.value;

  if (newGroup.trim() !== '') {
    var option = document.createElement('option');
    option.value = newGroup;
    option.text = newGroup;
    groupSelect.add(option);
    Groups.push(newGroup); 
    localStorage.setItem("Groups", JSON.stringify(Groups));
    alert("Group Successfully Added");
    newGroupInput.value = '';
    let div=document.getElementById("add_group_div_none")
  div.style.display="none"; 
  }
}

var selectElement = document.getElementById("group"); // Select element

// Add new options
Groups.forEach(function(optionText) {
  var option = document.createElement("option");
  option.text = optionText;
  selectElement.appendChild(option);
});




document.getElementById("plus_button").addEventListener("click", showDiv)

function showDiv(){
  let div=document.getElementById("add_group_div_none")

  if(div.style.display==="none"){
  div.style.display="block"
}else{
  div.style.display="none"
}
}



const productDetails = JSON.parse(localStorage.getItem("productDetails"));
const order_products = JSON.parse(localStorage.getItem("order_products"));

const product_id = localStorage.getItem("product_id");

const url = window.location.href;
const params = new URLSearchParams(window.location.search);
const myParamValue = params.get("product_id");

document.getElementById("tax").addEventListener("input", checkTax);
document.getElementById("discount").addEventListener("input", checkDis);
document.getElementById("quantity").addEventListener("input", checkQuan);
document.getElementById("price").addEventListener("input", checkPrice);
document.getElementById("mrp").addEventListener("input", checkMrp);
document.getElementById("total_quantity").addEventListener("input", checkTotal);

const sumbit = document.getElementById("edit_item");
sumbit.addEventListener("submit", update);

const back = document.querySelector(".button_1");
back.addEventListener("click", backbutton);

function findDetail(e) {
  return e.product_id === myParamValue;
}
const product_records = productDetails.find(findDetail);






function update(event) {
  event.preventDefault();
  const product_name = document.getElementById("product_name").value;
  const quantity = document.getElementById("quantity").value;
  const total_quantity = document.getElementById("total_quantity").value;
  const type = document.getElementById("type").value;
  const group = document.getElementById("group").value;
  const mrp = document.getElementById("mrp").value;
  const price = document.getElementById("price").value;
  const tax = document.getElementById("tax").value;
  const discount = document.getElementById("discount").value;
  const id_number = document.getElementById("product_id").value;
  const special_name = document.getElementById("special_name").value;
  const checkBoxes = document.querySelectorAll('input[name="stock"]');

  let selectedValue;

  for (let i = 0; i < checkBoxes.length; i++) {
    const element = checkBoxes[i];

    if (element.checked === true) {
      selectedValue = element.value;
      break;
    }
  }

  // paste the updated data to the correct object

  product_records.product_name = product_name;
  product_records.quantity = quantity;
  product_records.total_quantity = total_quantity;
  product_records.type = type;
  product_records.group = group;
  product_records.mrp = mrp;
  product_records.price = price;
  product_records.tax = tax;
  product_records.discount = discount;
  product_records.product_id = id_number;
  product_records.special_name = special_name;
  product_records.radioValue = selectedValue;

  localStorage.setItem("productDetails", JSON.stringify(productDetails));
  alert("Product Details Successfully Updated");
  window.location.href = "../item.html";
}

function backbutton() {
  alert("Are You Sure Discard Changes!");
  window.location.href = "../item.html";
}




document.getElementById("product_name").value = product_records.product_name;
document.getElementById("quantity").value = product_records.quantity;
document.getElementById("total_quantity").value =product_records.total_quantity;
document.getElementById("type").value = product_records.type;
document.getElementById("group").value = product_records.group;
document.getElementById("mrp").value = product_records.mrp;
document.getElementById("price").value = product_records.price;
document.getElementById("tax").value = product_records.tax;
document.getElementById("discount").value = product_records.discount;
document.getElementById("product_id").value = product_records.product_id;
document.getElementById("special_name").value = product_records.special_name;

for (let i = 0; i < productDetails.length; i++) {
  if (product_records.radioValue === "in stock") {
    document.getElementById("instock").setAttribute("checked", "checked");
    break;
  }
  else if (product_records.total_quantity <= 0 ) {
    document.getElementById("outofstock").setAttribute("checked", "checked");
  }
  else if (product_records.radioValue === "out of stock") {
    document.getElementById("outofstock").setAttribute("checked", "checked");
  }
}






document.getElementById("product_id").addEventListener("click", giveNo);


function checkDis() {
  if (discount.value.length > 2) {
    alert("Discount should be between 0 % - 99 %");
    document.getElementById("discount").value =product_records.discount;
  }
  else if (discount.value < 0){
    alert("Value should not be negative");
    document.getElementById("discount").value = product_records.discount;
  }
}

function checkTax() {
  if (tax.value.length > 2) {
    alert("Tax should be between 0 % - 99 %");
    document.getElementById("tax").value = product_records.tax;
  }
  else if (tax.value < 0){
    alert("Value should not be negative");
    document.getElementById("tax").value = product_records.tax;
  }
}

function checkQuan() {
  if (quantity.value.length > 3) {
    alert("Quantity should be between 0 - 999");
    document.getElementById("quantity").value = product_records.quantity;
  }
  else if (quantity.value < 0){
    alert("Value should not be negative");
    document.getElementById("quantity").value = product_records.quantity;
  }
}

function checkPrice() {
  if (price.value > 2500) {
    alert("Price should be between 0 - 2500");
    document.getElementById("price").value = product_records.price;
  }
  else if (price.value < 0){
    alert("Value should not be negative");
    document.getElementById("price").value = product_records.price;
  }
}

function checkMrp() {
  if (mrp.value > 2500) {
    alert("MRP should be between 0 - 2500");
    document.getElementById("mrp").value = product_records.mrp;
  }
  else if (mrp.value < 0){
    alert("Value should not be negative");
    document.getElementById("mrp").value = product_records.mrp;
  }
}
function checkTotal() {
  if (total_quantity.value > 2500) {
    alert("Total Quantity should be between 0 - 2500");
    document.getElementById("total_quantity").value = product_records.total_quantity;
  }
  else if (total_quantity.value < 0){
    alert("Value should not be negative");
    document.getElementById("total_quantity").value = product_records.total_quantity;
  }
}



function giveNo() {
  alert("This is not Editable or Can't be Change");
}



