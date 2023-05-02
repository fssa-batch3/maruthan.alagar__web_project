const stockDetails = JSON.parse(localStorage.getItem("stockDetails"));

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
table_coloumn.innerText = "Brand Name";
table_row.append(table_coloumn);

// table coloumn_3
table_coloumn = document.createElement("th");
table_coloumn.setAttribute("class", "forres");
table_coloumn.innerText = "Quantity(in box / pack)";
table_row.append(table_coloumn);

// table coloumn_4
table_coloumn = document.createElement("th");
table_coloumn.innerText = "Date";
table_row.append(table_coloumn);

// table coloumn_5
table_coloumn = document.createElement("th");
table_coloumn.innerText = "View";
table_row.append(table_coloumn);

for (i = 0; i < stockDetails.length; i++) {
  // table row
  table_row_1 = document.createElement("tr");
  table_row_1.setAttribute("class", "tb1");
  // label_name.innerText = register_shop[i]["name"];
  main_table.append(table_row_1);

  // table coloumn_1
  table_coloumn_1 = document.createElement("td");
  table_coloumn_1.innerText = stockDetails[i].stock_name;
  table_row_1.append(table_coloumn_1);
  // table coloumn_1
  table_coloumn_1 = document.createElement("td");
  table_coloumn_1.innerText = stockDetails[i].brand_name;
  table_row_1.append(table_coloumn_1);
  // table coloumn_1
  table_coloumn_1 = document.createElement("td");
  table_coloumn_1.setAttribute("class", "forres");
  table_coloumn_1.innerText = stockDetails[i].quantity;
  table_row_1.append(table_coloumn_1);
  // table coloumn_1
  table_coloumn_1 = document.createElement("td");
  table_coloumn_1.setAttribute("type", "date");
  table_coloumn_1.innerText = stockDetails[i].date;

  table_row_1.append(table_coloumn_1);
  // table coloumn_1
  table_coloumn_1_arrow = document.createElement("td");

  table_row_1.append(table_coloumn_1_arrow);

  const nameValue = stockDetails[i].stock_name;
  // Set the value as a parameter in a URL
  //    const url = "http://127.0.0.1:5500/pages/stock/viewstock.html?stock_name=" + encodeURIComponent(nameValue);
  const url = `./viewstock.html?stock_name=${encodeURIComponent(nameValue)}`;

  // anchor
  a_tag = document.createElement("a");
  a_tag.setAttribute("class", "arrow");
  a_tag.innerText = "→";
  a_tag.setAttribute("href", url);
  table_coloumn_1_arrow.append(a_tag);
}
document.querySelector("main").append(main_table);
