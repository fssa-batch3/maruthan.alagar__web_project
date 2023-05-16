const stockDetails = JSON.parse(localStorage.getItem("stockDetails"));
const stock_name = localStorage.getItem("stock_name");

const url = window.location.href;
const params = new URLSearchParams(window.location.search);
const myParamValue = params.get("stock_name");

function findDetail(e) {
  return e.stock_name === myParamValue;
}
const stock_records = stockDetails.find(findDetail);

document.getElementById("edit_form").addEventListener("submit", function () {
  update();
});

document.getElementById("backbutton").addEventListener("click", function () {
  backbutton();
});


document.getElementById("tax").addEventListener("input", checkTax);
document.getElementById("discount").addEventListener("input", checkDis);
document.getElementById("quantity").addEventListener("input", checkQuan);

function update(event) {
  event.preventDefault();
  //
  const stock_name = document.getElementById("stock_name").value;
  const quantity = document.getElementById("quantity").value;
  const mrp = document.getElementById("mrp").value;
  const price = document.getElementById("price").value;
  const tax = document.getElementById("tax").value;
  const discount = document.getElementById("discount").value;
  const agency_id = document.getElementById("agency_id").value;
  const agency_details = document.getElementById("agency_details").value;
  const date = document.getElementById("date").value;

  // paste the updated data to the correct object

  stock_records.stock_name = stock_name;
  stock_records.quantity = quantity;
  stock_records.mrp = mrp;
  stock_records.price = price;
  stock_records.tax = tax;
  stock_records.discount = discount;
  stock_records.agency_id = agency_id;
  stock_records.agency_details = agency_details;
  stock_records.date = date;

  // again paste it to the
  localStorage.setItem("stockDetails", JSON.stringify(stockDetails));
  alert("Stock Details Successfully Updated");
  window.location.href = "./stock.html";
  

  
}

function backbutton() {
  confirm("Are You Sure Discard Changes!");
  window.location.href = "./stock.html";
}
document.getElementById("stock_name").value = stock_records.stock_name;
document.getElementById("quantity").value = stock_records.quantity;
document.getElementById("mrp").value = stock_records.mrp;
document.getElementById("price").value = stock_records.price;
document.getElementById("tax").value = stock_records.tax;
document.getElementById("discount").value = stock_records.discount;
document.getElementById("agency_id").value = stock_records.agency_id;
document.getElementById("agency_details").value = stock_records.agency_details;
document.getElementById("brand_name").value = stock_records.brand_name;
document.getElementById("date").value = stock_records.date;

function checkDis() {
  if (discount.value.length > 2) {
    alert("Discount should be between 0 % - 100 %");
    document.getElementById("discount").value = stock_records.discount;
  }
}

function checkTax() {
  if (tax.value.length > 2) {
    alert("Tax should be between 0 % - 100 %");
    document.getElementById("tax").value = stock_records.tax;
  }
}

function checkQuan() {
  if (quantity.value.length > 4) {
    alert("Quantity should be between 0 - 10000");
    document.getElementById("quantity").value =stock_records.quantity;
  }
}

