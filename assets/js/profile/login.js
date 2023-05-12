function saveData(event) {
  event.preventDefault();
  let user_email;
  let pw;
  user_email = document.getElementById("user_email").value;
  pw = document.getElementById("password").value;
  let user_details = new Array();
  user_details = JSON.parse(localStorage.getItem("userRecords"))
    ? JSON.parse(localStorage.getItem("userRecords"))
    : [];
  if (
    user_details.some((v) => {
      return v.user_email == user_email && v.pw == pw;
    })
  ) {
    const current_user = user_details.filter((v) => {
      return v.user_email == user_email && v.pw == pw;
    })[0];
    window.location.href = "../homepage/homepage.html";
    alert("Successfully Logined ");
    localStorage.setItem("unique", current_user.user_email);
  } else {
    alert("Please Check your details");
  }
  
}

const sumbit = document.getElementById("login_form");
sumbit.addEventListener("submit", saveData);

const forget = document.querySelector("#forgot");
forget.addEventListener("click", forgot);

function forgot() {
  window.location.href = "./username.html";
}
