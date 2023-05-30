
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
            
            fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
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
                title: 'Price' // Set the maximum value for the x-axis here
              },
            y: {
                beginAtZero: true,
                label: {
                    display: true,
                    text: 'date'
                    // Label for y-axis
                }
            }
        }
    }
});

const hasAlertBeenShown = localStorage.getItem('profileAlertShown');

if (!hasAlertBeenShown) {
  // Show the alert
  
  confirm('Please Complete your profile');
  
  // Set the flag to indicate the alert has been shown
  localStorage.setItem('profileAlertShown', true);
  
  // Redirect to the profile page
  window.location.href = '../profile/viewprofile.html';
}


