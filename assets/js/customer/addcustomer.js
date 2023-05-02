const form = document.getElementById("add_customer");
const customer_name = document.getElementById("customer_name");
const customer_phone = document.getElementById("customer_phone");
const customer_id = document.getElementById("customer_id");
const customer_email = document.getElementById("customer_email");
const customer_address = document.getElementById("customer_address");
const uuid = uuidv4();

const customerDetails =
  JSON.parse(localStorage.getItem("customerDetails")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    customerDetails.some(
      (record) => record.customer_phone === customer_phone.value
    )
  ) {
    alert("Customer Phone Number is already exists! ");
  } else {
    const newCustomer = {
      customer_name: customer_name.value,
      customer_phone: customer_phone.value,
      customer_id: customer_id.value,
      customer_email: customer_email.value,
      customer_address: customer_address.value,
      unique: uuid,
    };

    customerDetails.push(newCustomer);
    localStorage.setItem("customerDetails", JSON.stringify(customerDetails));
    localStorage.setItem("customer_phone", customer_phone.value);
    alert("Customer Sucessfully Created");
    window.location.href = "./customer.html";
    event.preventDefault();
  }
});
