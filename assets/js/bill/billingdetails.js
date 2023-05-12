

const customerDetails = JSON.parse(localStorage.getItem("customerDetails"));
const orders = JSON.parse(localStorage.getItem("orders"));
const order_bill = JSON.parse(localStorage.getItem("order_bill"));
const order_products = JSON.parse(localStorage.getItem("order_products"));


const params = new URLSearchParams(window.location.search);
const myParamValue = params.get("order_id");

const param= new URLSearchParams(window.location.search);
const ParamValue = params.get("customer_id");



var customer_records = customerDetails.find(e => e.customer_id === ParamValue );
var bill_records = order_bill.find(e => e.order_id === myParamValue );
// var product_records = order_products.filter(e => e.order_id === myParamValue );
const product_records = order_products.filter((data) => data.order_id == myParamValue);


document.getElementById("customer_name").value = customer_records.customer_name;
document.getElementById("customer_id").value = customer_records.customer_id;
document.getElementById("amount").value = bill_records.total_amount +"/-";
document.getElementById("bill_date").value = bill_records.bill_date;








// main table
main_table = document.createElement("table");
main_table.setAttribute("class", "table");

// table row
table_row = document.createElement("tr");
table_row.setAttribute("class", "tb1");
// label_name.innerText = register_shop[i]["name"];
main_table.append(table_row);

// table coloumn_1
table_coloumn = document.createElement("th");
table_coloumn.innerText = "Item Name ";
table_row.append(table_coloumn);
// table coloumn_2

table_coloumn = document.createElement("th");
table_coloumn.innerText = "Quantity";
table_row.append(table_coloumn);

table_coloumn = document.createElement("th");
table_coloumn.innerText = "Price";
table_row.append(table_coloumn);


table_coloumn = document.createElement("th");
table_coloumn.innerText = "Tax";
table_row.append(table_coloumn);

table_coloumn = document.createElement("th");
table_coloumn.innerText = "Discount";
table_row.append(table_coloumn);
// table coloumn_4


table_coloumn = document.createElement("th");
table_coloumn.innerText = "Total Amount";
table_row.append(table_coloumn);

console.log(product_records)
















for (let i = 0; i < product_records.length; i++) {
    // table row
    table_row_1 = document.createElement("tr");
    table_row_1.setAttribute("class", "tb1");
    // label_name.innerText = register_shop[i]["name"];
    main_table.append(table_row_1);

    // table coloumn_1
    table_coloumn_1 = document.createElement("td");
    table_coloumn_1.innerText = product_records[i].product_name;
    table_row_1.append(table_coloumn_1);
    // table coloumn_3
    table_coloumn_1 = document.createElement("td");
    table_coloumn_1.innerText = product_records[i].quantity;
    table_row_1.append(table_coloumn_1);

    table_coloumn_1 = document.createElement("td");
    table_coloumn_1.innerText =product_records[i].price+"/-";
    table_row_1.append(table_coloumn_1);

    table_coloumn_1 = document.createElement("td");
    table_coloumn_1.innerText =product_records[i].tax+"/-";
    table_row_1.append(table_coloumn_1);

    table_coloumn_1 = document.createElement("td");
    table_coloumn_1.innerText =product_records[i].discount+"/-";
    table_row_1.append(table_coloumn_1);

    
    
    table_coloumn_1 = document.createElement("td");
    table_coloumn_1.innerText =product_records[i].amount +"/-";
    table_row_1.append(table_coloumn_1);

//     // table coloumn_1
}
document.querySelector("section").prepend(main_table);
