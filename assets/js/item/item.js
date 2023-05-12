const productDetails = JSON.parse(localStorage.getItem("productDetails"));

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
table_coloumn.innerText = "Name";
table_row.append(table_coloumn);
// table coloumn_2
table_coloumn = document.createElement("th");
table_coloumn.innerText = "Special Name";
table_row.append(table_coloumn);

// table coloumn_3
table_coloumn = document.createElement("th");
table_coloumn.innerText = "ID";
table_row.append(table_coloumn);

// table coloumn_4
table_coloumn = document.createElement("th");
table_coloumn.innerText = "Price";
table_row.append(table_coloumn);

// table coloumn_5
table_coloumn = document.createElement("th");
table_coloumn.innerText = "View";
table_row.append(table_coloumn);

for (i = 0; i < productDetails.length; i++) {
  // table row
  table_row_1 = document.createElement("tr");
  table_row_1.setAttribute("class", "tb1");
  // label_name.innerText = register_shop[i]["name"];
  main_table.append(table_row_1);



if( productDetails[i].radioValue == "out of stock"){

const table_column_1 = document.createElement("td");

const outOfStockSpan = document.createElement("span");
outOfStockSpan.innerText = "Out of stock";
outOfStockSpan.classList.add("highlight"); 

table_column_1.innerText = productDetails[i].product_name + " ";
table_column_1.append(outOfStockSpan);

table_row_1.append(table_column_1);


}else{

  table_coloumn_1 = document.createElement("td");
  table_coloumn_1.innerText = productDetails[i].product_name;
  table_row_1.append(table_coloumn_1);

}




 
  // table coloumn_1
  table_coloumn_1 = document.createElement("td");
  table_coloumn_1.innerText = productDetails[i].special_name;
  table_row_1.append(table_coloumn_1);
  // table coloumn_1
  table_coloumn_1 = document.createElement("td");
  table_coloumn_1.innerText = productDetails[i].product_id;
  table_row_1.append(table_coloumn_1);
  // table coloumn_1
  table_coloumn_1 = document.createElement("td");
  table_coloumn_1.innerText = productDetails[i].price;
  table_row_1.append(table_coloumn_1);
  // table coloumn_1
  table_coloumn_1_arrow = document.createElement("td");

  table_row_1.append(table_coloumn_1_arrow);

  const nameValue = productDetails[i].product_id;
  // Set the value as a parameter in a URL
  const url = `./viewitems/viewitem1.html?product_id=${encodeURIComponent(
    nameValue
  )}`;

  // anchor
  a_tag = document.createElement("a");
  a_tag.setAttribute("class", "arrow");
  a_tag.innerText = "→";
  a_tag.setAttribute("href", url);
  table_coloumn_1_arrow.append(a_tag);
}
document.querySelector("main").append(main_table);
