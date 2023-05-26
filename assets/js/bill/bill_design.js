const orders = JSON.parse(localStorage.getItem("orders"));
const order_bill = JSON.parse(localStorage.getItem("order_bill"));
const order_products = JSON.parse(localStorage.getItem("order_products"));
const shop_details = JSON.parse(localStorage.getItem("userRecords"));
const customer_records = JSON.parse(localStorage.getItem("customerDetails"));




const params = new URLSearchParams(window.location.search);
const myParamValue = params.get("order_id");

function findDetail(e) {
  return e.order_id === myParamValue;
}
const order_records = order_bill.find(findDetail);

function findOrder(e) {
  return e.order_id === myParamValue;
}
const orders_detail = orders.find(findOrder);

let cus_id = orders_detail.customer_id




function findCustomer(e) {
  return e.customer_id === cus_id;
}
const customer_detail = customer_records.find(findCustomer);



const product_records = order_products.filter((data) => data.order_id == myParamValue);

const shop_email = localStorage.getItem("unique");


function findemail(e) {
  return e.user_email === shop_email;
}
const shop_records = shop_details.find(findemail);



document.getElementById("shop_name").innerText = shop_records.shop_name
document.getElementById("phone_number").innerText = "Ph No: "+shop_records.phone_number
document.getElementById("Adress").innerText = shop_records.address
document.getElementById("cus_name").innerText = "Customer Name: "+customer_detail.customer_name
document.getElementById("bill_no").innerText = "Bill No: "+order_records.bill_no
document.getElementById("date").innerText = "Date: "+order_records.bill_date
document.getElementById("payment").innerText = "Payment Method: "+order_records.payment_method
document.getElementById("sub_total").innerText = order_records.total_amount +"/-";
document.getElementById("total_amount").innerText =order_records.total_amount+"/-"


function openPrintWindow() {
  // Convert the bill-container div to an image
  html2canvas(document.querySelector(".bill-container")).then(function(canvas) {
    // Create an image from the canvas
    var imgData = canvas.toDataURL();

    // Create a new window to open the print popup
    var printWindow = window.open('', '_blank');

    // Write the image data to the new window
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<img src="' + imgData + '" />');
    printWindow.document.write('</body</html>');
    printWindow.document.close();

    // Wait for the print window to finish loading
    printWindow.onload = function() {
      // Print the new window
      printWindow.print();

      // Detect if the user clicked "Cancel" in the print window
      setTimeout(function() {
        if (!printWindow.self) {
          // User clicked "Cancel"
          alert("Print cancelled");
        }
      }, 1000);
    };
  });
}




const productTable = document.createElement('table');
productTable.setAttribute('id', 'bill_table');

const tableHead = document.createElement('thead');

const tableHeadRow = document.createElement('tr');

const productNameHeading = document.createElement('th');
productNameHeading.textContent = 'Product Name';

const priceHeading = document.createElement('th');
priceHeading.textContent = 'Price';

const quantityHeading = document.createElement('th');
quantityHeading.textContent = 'Quantity';

const totalHeading = document.createElement('th');
totalHeading.textContent = 'Total';

const tableBody = document.createElement('tbody');

for(let i = 0; i <product_records.length; i++) {



const productRow1 = document.createElement('tr');

const product1Name = document.createElement('td');
product1Name.textContent = product_records[i].product_name;

const product1Price = document.createElement('td');
product1Price.textContent = product_records[i].price +"/-";

const product1Quantity = document.createElement('td');
product1Quantity.textContent = product_records[i].quantity;

const product1Total = document.createElement('td');
product1Total.textContent = product_records[i].amount + "/-";

tableBody.appendChild(productRow1);
productRow1.appendChild(product1Name);
productRow1.appendChild(product1Price);
productRow1.appendChild(product1Quantity);
productRow1.appendChild(product1Total);


}


// Append the elements to their appropriate parent elements


const productDetailsDiv = document.getElementById("bill_table_div")

productDetailsDiv.appendChild(productTable);
productTable.appendChild(tableHead);
tableHead.appendChild(tableHeadRow);
tableHeadRow.appendChild(productNameHeading);
tableHeadRow.appendChild(priceHeading);
tableHeadRow.appendChild(quantityHeading);
tableHeadRow.appendChild(totalHeading);
productTable.appendChild(tableBody);




openPrintWindow();