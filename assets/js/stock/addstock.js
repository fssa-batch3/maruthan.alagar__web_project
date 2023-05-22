const form = document.getElementById("addstock_form");
const stock_name = document.getElementById("stock_name");
const quantity = document.getElementById("quantity");
const mrp = document.getElementById("mrp");
const price = document.getElementById("price");
const tax = document.getElementById("tax");
const discount = document.getElementById("discount");
const agency_id = document.getElementById("agency_id");
const agency_details = document.getElementById("agency_details");
const brand_name = document.getElementById("brand_name");
const date = document.getElementById("date");

const uuid = uuidv4();

const stockDetails = JSON.parse(localStorage.getItem("stockDetails")) || [];


document.getElementById("tax").addEventListener("input", checkTax);
document.getElementById("discount").addEventListener("input", checkDis);
document.getElementById("quantity").addEventListener("input", checkQuan);
document.getElementById("mrp").addEventListener("input", checkMrp);
document.getElementById("price").addEventListener("input", checkPrice);
document.getElementById("agency_id").addEventListener("input", checkId);


form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (stockDetails.some((record) => record.stock_name === stock_name.value && record.date === date.value && record.brand_name === brand_name.value && record.agency_id === agency_id.value )) {
    alert("Stock is already exists! ");
  } else {
    const newStock = {
      stock_name: stock_name.value,
      quantity: quantity.value,
      mrp: mrp.value,
      price: price.value,
      tax: tax.value,
      discount: discount.value,
      agency_id: agency_id.value,
      agency_details: agency_details.value,
      brand_name: brand_name.value,
      date: date.value,
      unique: uuid,
    };

    stockDetails.push(newStock);
    localStorage.setItem("stockDetails", JSON.stringify(stockDetails));
    localStorage.setItem("stock_name", stock_name.value);
    alert("Stock is Sucessfully Created");
    window.location.href = "./stock.html";
    
  }
});

function checkDis() {
  if (discount.value.length > 2) {
    alert("Discount should be between 0 % - 99 %");
    document.getElementById("discount").value = "";
  }
  else if (discount.value < 0){
    alert("Value should not be negative");
    document.getElementById("discount").value = "";
  }
}

function checkTax() {
  if (tax.value.length > 2) {
    alert("Tax should be between 0 % - 99 %");
    document.getElementById("tax").value = "";
  }
  else if (tax.value < 0){
    alert("Value should not be negative");
    document.getElementById("tax").value = "";
  }
}

function checkQuan() {
  if (quantity.value.length > 3) {
    alert("Quantity should be between 0 - 999");
    document.getElementById("quantity").value = "";
  }
  else if (quantity.value < 0){
    alert("Value should not be negative");
    document.getElementById("quantity").value = "";
  }
}

function checkPrice() {
  if (price.value > 25000) {
    alert("Price should be between 0 - 25000");
    document.getElementById("price").value = "";
  }
  else if (price.value < 0){
    alert("Value should not be negative");
    document.getElementById("price").value = "";
  }
}

function checkMrp() {
  if (mrp.value > 25000) {
    alert("MRP should be between 0 - 25000");
    document.getElementById("mrp").value = "";
  }
  else if (mrp.value < 0){
    alert("Value should not be negative");
    document.getElementById("mrp").value = "";
  }
}
function checkId() {
  if (agency_id.value.length > 9) {
    alert("Agency ID should be 9 characters long");
    document.getElementById("agency_id").value = "";
  }
 else if (agency_id.value.length < 4) {
    alert("Agency ID should be 4 to 9 characters long");
    document.getElementById("agency_id").value = "";
  }

}


