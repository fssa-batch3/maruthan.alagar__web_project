const customerDetails = JSON.parse(localStorage.getItem("customerDetails"));
const orders = JSON.parse(localStorage.getItem("orders"));
const order_bill = JSON.parse(localStorage.getItem("order_bill"));





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
table_coloumn.innerText = " Customer Name";
table_row.append(table_coloumn);


// table coloumn_3
table_coloumn = document.createElement("th");
table_coloumn.setAttribute("class", "forres");
table_coloumn.innerText = "Customer ID";
table_row.append(table_coloumn);


table_coloumn = document.createElement("th");
table_coloumn.innerText = "Date";
table_row.append(table_coloumn);



table_coloumn = document.createElement("th");
table_coloumn.innerText = "Amount";
table_row.append(table_coloumn);


// table coloumn_5
table_coloumn = document.createElement("th");
table_coloumn.innerText = "View";
table_row.append(table_coloumn);



for (let i = 0; i < orders.length; i++) {
    
let cus_id = orders[i].customer_id



const customer_records = customerDetails.filter(data => data.customer_id === cus_id);
console.log(customer_records);

const cus_name =  customer_records[0].customer_name;


    // table row
    table_row_1 = document.createElement("tr");
    table_row_1.setAttribute("class", "tb1");
    // label_name.innerText = register_shop[i]["name"];
    main_table.append(table_row_1);

    // table coloumn_1
    table_coloumn_1 = document.createElement("td");
    table_coloumn_1.innerText = cus_name ;
    table_row_1.append(table_coloumn_1);
    // table coloumn_2
    table_coloumn_1 = document.createElement("td");
    table_coloumn_1.innerText = orders[i].customer_id;
    table_row_1.append(table_coloumn_1);
    // table coloumn_3
    table_coloumn_1 = document.createElement("td");
    table_coloumn_1.setAttribute("class", "forres");
    table_coloumn_1.innerText = order_bill[i].bill_date;
    table_row_1.append(table_coloumn_1);


    table_coloumn_1 = document.createElement("td");
    table_coloumn_1.innerText = order_bill[i].total_amount + "/-";
    table_row_1.append(table_coloumn_1);

    // table coloumn_4
    table_coloumn_1_arrow = document.createElement("td");

    table_row_1.append(table_coloumn_1_arrow);

    const nameValue = orders[i].order_id;
    // Set the value as a parameter in a URL
    //    const url = "http://127.0.0.1:5500/pages/stock/viewstock.html?stock_name=" + encodeURIComponent(nameValue);
    const url = `./purchasedetails.html?order_id=${nameValue}&customer_id=${cus_id}`

    // anchor
    a_tag = document.createElement("a");
    a_tag.setAttribute("class", "arrow");
    a_tag.innerText = "→";
    a_tag.setAttribute("href", url);
    table_coloumn_1_arrow.append(a_tag);
}
document.querySelector("main").append(main_table);

// checking
