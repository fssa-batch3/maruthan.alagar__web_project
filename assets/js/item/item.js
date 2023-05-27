// Get the "Add Item" button and the search elements
var addItemButton = document.getElementById('additem_button');
var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');

// Hide the search input initially
searchInput.style.display = 'none';

// Add click event listener to the search button
searchButton.addEventListener('click', function () {
  // Toggle the visibility of the elements
  if (searchInput.style.display === 'none') {
    searchInput.style.display = 'block';
    addItemButton.style.display = 'none';
  } else {
    searchInput.style.display = 'none';
    addItemButton.style.display = 'block';
    location.reload();
  }
});


























const order_products = JSON.parse(localStorage.getItem("order_products"));

const productDetails = JSON.parse(localStorage.getItem("productDetails"));

// main table
main_table = document.createElement("table");
main_table.setAttribute("id", "tableBody");
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
table_coloumn.innerText = "Product ID";
table_row.append(table_coloumn);

table_coloumn = document.createElement("th");
table_coloumn.innerText = "Product Group";
table_row.append(table_coloumn);

table_coloumn = document.createElement("th");
table_coloumn.innerText = "Current Quantity";
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



  if (productDetails[i].radioValue == "out of stock" || productDetails[i].total_quantity <= 0) {

    const table_column_1 = document.createElement("td");

    const outOfStockSpan = document.createElement("span");
    outOfStockSpan.innerText = "Out of stock";
    outOfStockSpan.classList.add("highlight");

    table_column_1.innerText = productDetails[i].product_name + " ";
    table_column_1.append(outOfStockSpan);

    table_row_1.append(table_column_1);

  }
  else if (productDetails[i].total_quantity < 5 && productDetails[i].total_quantity > 0) {

    const table_column_1 = document.createElement("td");

    const outOfStockSpan = document.createElement("span");
    outOfStockSpan.innerText = "Only few stock Left";
    outOfStockSpan.classList.add("highlight_warning");

    table_column_1.innerText = productDetails[i].product_name + " ";
    table_column_1.append(outOfStockSpan);

    table_row_1.append(table_column_1);




  } else {

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
  table_coloumn_1.innerText = productDetails[i].group;
  table_row_1.append(table_coloumn_1)



  let filterData = order_products.filter(
    (detail) => detail.product_id === productDetails[i].product_id
  );


  table_coloumn_1 = document.createElement("td");
  table_coloumn_1.innerText = productDetails[i].total_quantity;
  table_row_1.append(table_coloumn_1)






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











// Get the search input element
var searchInput = document.getElementById('searchInput');

// Get the table body element
let tableBody = document.getElementById('tableBody');

// Add event listener to the search input
searchInput.addEventListener('keyup', function () {
  let searchValue = searchInput.value.toLowerCase();
  let rows = tableBody.getElementsByTagName('tr');

  // Loop through all rows of the table
  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName('td');
    let matchFound = false;

    // Loop through all cells of the current row
    for (let j = 0; j < cells.length; j++) {
      let cellText = cells[j].textContent.toLowerCase();

      // Check if the cell text starts with the search value
      if (cellText.startsWith(searchValue)) {
        matchFound = true;
        break;
      }
    }

    // Show/hide the row based on the match
    if (matchFound) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none';
    }
  }
});
