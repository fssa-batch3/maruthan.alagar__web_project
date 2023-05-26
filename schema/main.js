let usersRecords;
let productDetails;
let stockDetails;
let customerDetails;
let order_bill;
let orders;
let order_products;
let Groups;

if (JSON.parse(localStorage.getItem("userRecords"))) {
  console.log("userRecords");
} else {
  usersRecords = [
    {
      address: "Freshworks 40 MGR Main Road Kodandarama Nagar Perungudi",
      gstn_number: "33AAACH7409R1Z8",
      licence_number: "LICE4FGC09898GO",
      nameforprint: "MARUTHAN ALAGAR",
      new_pw: "Acdm@123",
      phone_number: "7810061573",
      pw: "Acdm@123",
      shop_name: "MAM shop",
      unique: "ca5ffcaa-e9f8-42dd-bf9e-5fe617f665d3",
      user_email: "maruthan@fssa.freshworks.com",
    },
    {
      address: "12.Malampatty.Viralimalai.Pudukkottai",
      gstn_number: "33AAACH7409R1Z8",
      licence_number: "LICE4FGC09898GO",
      nameforprint: "NAMMAKADAI",
      new_pw: "Maha@123",
      phone_number: "9878675464",
      pw: "Maha@123",
      shop_name: "Mahalakshmi MALIGAI",
      user_email: "mahamaligai@gmail.com",
    },
    {
      address: "12.Perungudi.Chennail",
      gstn_number: "33AAACH7409R1Z8",
      licence_number: "LICE4FGC09898GO",
      nameforprint: "KANNAN STORES",
      new_pw: "Kanna@123",
      phone_number: "9878675464",
      pw: "Kanna@123",
      shop_name: "KANNAN STORES",
      user_email: "kannanstores@gmail.com",
    },
  ];
  localStorage.setItem("userRecords", JSON.stringify(usersRecords));
}

if (JSON.parse(localStorage.getItem(productDetails))) {
  console.log("product records");
} else {
  productDetails = [
    {
      discount: "1",
      mrp: "20",
      price: "18",
      product_id: "S0098",
      product_name: "Sugar",
      quantity: "2",
      type: "kgs",
      group: "Groceries",
      radioValue: "in stock",
      special_name: "Sarkkarai",
      tax: "2",
      unique: "dd876553-0cff-4339-8843-252573e0ab75",
    },
    {
      discount: "12",
      mrp: "2300",
      price: "2200",
      product_id: "R0097",
      product_name: "Rice",
      quantity: "2",
      radioValue: "in stock",
      special_name: "Pulungal Arisi",
      tax: "2",
      type: "kgs",
      group: "Groceries",
      unique: "93a93b51-9191-4c0a-8748-a65c9f8da478",
    },
  ];
  localStorage.setItem("productDetails", JSON.stringify(productDetails));
}

if (JSON.parse(localStorage.getItem(stockDetails))) {
  console.log("stock records");
} else {
  stockDetails = [
    {
      agency_details: "Theradi Veethi,Pudukkottai",
      invoice_gst: "33AAACH7409R1Z8",
      brand_name: "Sri Kirushna",
      type: "kgs",
      date: "2023-03-30",
      discount: "1",
      total_quantity: "2300",
      price: "2200",
      quantity: "30",
      stock_name: "Rice",
      tax: "2",
      unique: "22e607c2-06fd-4455-8b4c-5647bfe47ef1",
    },

    {
      agency_details: "Pudukkottai",
      invoice_gst: "33AAACI7409R1Z8",
      brand_name: "Aandaal",
      date: "2023-03-31",
      discount: "1",
      total_quantity: "20",
      type: "kgs",
      price: "18",
      quantity: "10",
      stock_name: "Sugar",
      tax: "2",
      unique: "46b4511c-5a87-4b67-ac54-788d80284dfb",
    },
  ];
  localStorage.setItem("stockDetails", JSON.stringify(stockDetails));
}

if (JSON.parse(localStorage.getItem(customerDetails))) {
  console.log("customer records");
} else {
  customerDetails = [
    {
      customer_address: "Chennai",
      customer_email: "maruthan@gmail.com",
      customer_id: "A0098",
      customer_name: "MARUTHAN ALAGAR",
      customer_phone: "7810061572",
      unique: "b335ee47-fe9a-4f62-9699-7280008150e2",
    },
    {
      customer_address: "vadapalani",
      customer_email: "rahu@gmail.com",
      customer_id: "A8890",
      customer_name: "Rahu Raman",
      customer_phone: "8762346987",
      unique: "8c2903c3-0b4d-46c8-b8db-662fa4592446",
    },
  ];
  localStorage.setItem("customerDetails", JSON.stringify(customerDetails));
}


if (JSON.parse(localStorage.getItem(order_bill))) {
  console.log("order_bill");
} else {
  order_bill = [
    {
      bill_date: "2023-05-22",
      bill_no: "B1",
      order_id: "1ac5744e-f61d-49ef-827f-89335565b76d",
      payment_method: "cash",
      total_amount: 190,
      total_discount: 1,
      total_mrp: 20,
      total_price: 18,
      total_quantity: 10,
      total_tax: 2,
      transaction_id: "T2362863"
    }
  ];
  localStorage.setItem("order_bill", JSON.stringify(order_bill));

}


if (JSON.parse(localStorage.getItem(order_products))) {
  console.log("order_products");
} else {
  order_products = [
    {
      amount:
        190,
      discount
        :
        1,
      mrp
        :
        "20",
      order_id
        :
        "1ac5744e-f61d-49ef-827f-89335565b76d",
      price
        :
        18,
      product_id
        :
        "S0098",
      product_name
        :
        "Sugar",
      quantity
        :
        10,
      tax
        :
        2
    }
  ];
  localStorage.setItem("order_products", JSON.stringify(order_products));

}


if (JSON.parse(localStorage.getItem(orders))) {
  console.log("orders");
} else {
  orders = [
    {
      customer_id
        :
        "A0098",
      order_id
        :
        "1ac5744e-f61d-49ef-827f-89335565b76d"
    }
  ];
  localStorage.setItem("orders", JSON.stringify(orders));

}
if (JSON.parse(localStorage.getItem(Groups))) {
  console.log("Groups");
} else {
  Groups = [
    "Groceries"
    
  ];
  localStorage.setItem("Groups", JSON.stringify(Groups));

}