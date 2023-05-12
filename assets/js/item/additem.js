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
    window.location.href = "./item.html";
    alert("Product is Sucessfully Created");
    
  }
});

function checkDis() {
  if (discount.value.length > 2) {
    alert("Discount should be between 0 % - 100 %");
    document.getElementById("discount").value = "";
  }
}

function checkTax() {
  if (tax.value.length > 2) {
    alert("Tax should be between 0 % - 100 %");
    document.getElementById("tax").value = "";
  }
}

function checkQuan() {
  if (quantity.value.length > 3) {
    alert("Quantity should be between 0 - 1000");
    document.getElementById("quantity").value = "";
  }
}
