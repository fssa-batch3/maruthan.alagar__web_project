let usersRecords;
let productDetails;
let stockDetails;
let customerDetails;


if(JSON.parse(localStorage.getItem("userRecords"))){
   
}
else{
   usersRecords = [
    {address: "Freshworks 40 MGR Main Road Kodandarama Nagar Perungudi",
gstn_number: "asdfg",licence_number: "787878728HGFHJVJ098",nameforprint: "MARUTHANALAGAR",
new_pw: "Acdm@123",phone_number: "7810061572",pw: "Acdm@123",shop_name: "MAMshop",
unique: "ca5ffcaa-e9f8-42dd-bf9e-5fe617f665d3",
user_email: "maruthan@fssa.freshworks.com"},
{address: "12.Malampatty.Viralimalai.Pudukkottai",
gstn_number: "GST456GHT56",licence_number: "LICE4FGC098",nameforprint: "NAMMAKADAI",
new_pw: "Maha@123",phone_number: "9878675464" ,pw: "Maha@123",shop_name: "MahalakshmiMALIGAI",
user_email: "mahamaligai@gmail.com"},
{address: "12.Perungudi.Chennail",
gstn_number: "GSTGHGV7HT56",licence_number: "LICE654FYGC098",nameforprint: "KANNANSTORES",
new_pw: "Kanna@123",phone_number: "9878675464",pw: "Kanna@123",shop_name: "KANNANSTORES",
user_email: "kannanstores@gmail.com"}
]
localStorage.setItem("userRecords", JSON.stringify(usersRecords));

}

if(JSON.parse(localStorage.getItem(productDetails))){
    console.log("product records")
}
else{
    productDetails=[
        {discount: "1",mrp: "20",price: "18",product_id: "S0098",product_name: "Sugar",
quantity: "2",type:"kgs",radioValue: "in stock",special_name: "Sarkkarai",tax: "2",unique: "dd876553-0cff-4339-8843-252573e0ab75"
},
{discount: "12",mrp: "2300",price: "2200",product_id: "R0097",
product_name: "Rice",quantity: "2",radioValue: "in stock",
special_name: "PulungalArisi",tax: "2",type:"kgs",unique: "93a93b51-9191-4c0a-8748-a65c9f8da478"}




]
localStorage.setItem("productDetails", JSON.stringify(productDetails));
}



if(JSON.parse(localStorage.getItem(stockDetails))){
    console.log("stock records")
    
}
else{
    stockDetails=[{

agency_details: "Theradi Veethi,Pudukkottai",agency_id: "AG8890",
brand_name: "Sri Kirushna",date: "2023-03-30",discount: "1",
mrp: "2300",price: "2200",quantity: "30",stock_name: "Rice",tax: "2",unique: "22e607c2-06fd-4455-8b4c-5647bfe47ef1"},

{agency_details: "Pudukkottai",agency_id: "AG8890",
brand_name: "Aandaal",date: "2023-03-31",
discount: "1",mrp: "20",price: "18",quantity: "10",stock_name: "Sugar",tax: "2",
unique: "46b4511c-5a87-4b67-ac54-788d80284dfb"}


]
localStorage.setItem("stockDetails", JSON.stringify(stockDetails));
}


if(JSON.parse(localStorage.getItem(customerDetails))){
    console.log("customer records")
   
}
else{
    customerDetails = [
        {customer_address: "Chennai",
    customer_email: "maruthan@gmail.com",
    customer_id: "A0098",
    customer_name: "MARUTHANALAGAR",
    customer_phone: "7810061572",
    unique: "b335ee47-fe9a-4f62-9699-7280008150e2"},
{
    customer_address: "vadapalani",
    customer_email: "tamil@gmail.com",
    customer_id: "A8890",
    customer_name: "Tamil",
    customer_phone: "8762346987",
    unique: "8c2903c3-0b4d-46c8-b8db-662fa4592446"}
]
localStorage.setItem("customerDetails", JSON.stringify(customerDetails));
}