
const orderBill = JSON.parse(localStorage.getItem('order_bill'));
const orders = JSON.parse(localStorage.getItem("orders"));
const productDetails = JSON.parse(localStorage.getItem("productDetails"));
const stockDetails = JSON.parse(localStorage.getItem("stockDetails"));
const customerDetails = JSON.parse(localStorage.getItem("customerDetails"));



document.getElementById('total_item_text').innerText=productDetails.length
document.getElementById('total_stock_text').innerText=stockDetails.length
document.getElementById('total_customer_text').innerText=customerDetails.length
document.getElementById('total_bill_text').innerText=orders.length


const priceSumByDate = {};

for (const order of orderBill) {
    const { total_amount, bill_date } = order;
    if (priceSumByDate[bill_date]) {
        priceSumByDate[bill_date] += total_amount;
    } else {
        priceSumByDate[bill_date] = total_amount;
    }
}


const dates = Object.keys(priceSumByDate);
const sumOfPrices = Object.values(priceSumByDate);

dates.sort((a, b) => new Date(a) - new Date(b));


const chartData = {
    labels: dates,
    datasets: [
        {
            label: 'Total Sales Amount',
            data: sumOfPrices,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', 
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
    ]
};


const ctx = document.getElementById('chart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        scales: {
            x: {
                max: 10,
                text: 'Price' // Set the maximum value for the x-axis here
              },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Price'
                    // Label for y-axis
                }
            }
        }
    }
});


