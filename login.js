document.addEventListener("DOMContentLoaded", function () {
  function saveUser () {
  let fullName = document.getElementById("full_name")
  let emailAddress = document.getElementById("email_address")
  let userName = document.getElementById("user_name")
  let phoneNumber = document.getElementById("phone_number")
  let address = document.getElementById("present_address")
  let password = document.getElementById("password")


      localStorage.setItem("Full Name", fullName.value)
      localStorage.setItem("Email Address", emailAddress.value)
      localStorage.setItem("User Name", userName.value)
      localStorage.setItem("Phone Number", phoneNumber.value)
      localStorage.setItem("Address", address.value)
      localStorage.setItem("Password", password.value)

      if (fullName && userName && emailAddress && phoneNumber && password) {
        alert("Thanks for Joining!")
      }


}

function welcome () {
  let confirm = document.querySelector(".form-confirm")
  let user = localStorage.getItem("Full Name")
  }
document.querySelector(".my-form").addEventListener("submit", function (event) {
  event.preventDefault()
  saveUser()
  welcome()
}, false )
}) //DOMContent End
