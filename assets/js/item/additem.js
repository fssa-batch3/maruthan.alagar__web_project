const form = document.getElementById("additem_form");
const product_name = document.getElementById("product_name");
const quantity = document.getElementById("quantity");
const type = document.getElementById("type");
const mrp = document.getElementById("mrp");
const price = document.getElementById("price");
const tax = document.getElementById("tax");
const discount = document.getElementById("discount");
const product_id = document.getElementById("product_id");
const special_name = document.getElementById("special_name");
const uuid = uuidv4();

const productDetails = JSON.parse(localStorage.getItem("productDetails")) || [];

document.getElementById("tax").addEventListener("input", checkTax);
document.getElementById("discount").addEventListener("input", checkDis);
document.getElementById("quantity").addEventListener("input", checkQuan);
document.getElementById("price").addEventListener("input", checkPrice);
document.getElementById("mrp").addEventListener("input", checkMrp);
document.getElementById("product_id").addEventListener("input", checkId);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    productDetails.some((record) => record.product_name === product_name.value)
  ) {
    alert("Product is already exists! ");
  } else if (
    productDetails.some((record) => record.product_id === product_id.value)
  ) {
    alert("ID Number is already exists!");
  } else if (
    productDetails.some((record) => record.special_name === special_name.value)
  ) {
    alert("Special Name is already exists!");
  }

  //  else if (userRecords.some(record => record.email === email.value)) {
  //     alert("Email already exists");
  //     return;
  //   }
  else {
    const newProduct = {
      product_name: product_name.value,
      quantity: quantity.value,
      mrp: mrp.value,
      price: price.value,
      tax: tax.value,
      discount: discount.value,
      product_id: product_id.value,
      special_name: special_name.value,
      type: type.value,
      radioValue: "in stock",
      unique: uuid,
    };

    productDetails.push(newProduct);
    localStorage.setItem("productDetails", JSON.stringify(productDetails));
    localStorage.setItem("product_id", product_id.value);
    alert("Product is Sucessfully Created");
    window.location.href = "./item.html";
    
    
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
  if (price.value > 2500) {
    alert("Price should be between 0 - 2500");
    document.getElementById("price").value = "";
  }
  else if (price.value < 0){
    alert("Value should not be negative");
    document.getElementById("price").value = "";
  }
}

function checkMrp() {
  if (mrp.value > 2500) {
    alert("MRP should be between 0 - 2500");
    document.getElementById("mrp").value = "";
  }
  else if (mrp.value < 0){
    alert("Value should not be negative");
    document.getElementById("mrp").value = "";
  }
}
function checkId() {
  if (product_id.value.length > 7) {
    alert("Product ID should be 7 characters long");
    document.getElementById("product_id").value = "";
  }

}





