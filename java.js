function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
  }
  $(document).ready(function () {
  $("#searchBar").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".card").filter(function () {
      $(this).toggle($(this).attr("data-name").toLowerCase().includes(value));
    });
  });
});

$("#loginBtn").click(function () {
  let email = $("#loginEmail").val();
  let password = $("#loginPassword").val();

  if (email === "" || password === "") {
    $("#loginMessage").text("All fields are required!").css("color", "red");
  } 
  else if (!email.includes("@")) {
    $("#loginMessage").text("Enter a valid email address!").css("color", "red");
  } 
  else {
    $("#loginMessage").text("Login Successful!").css("color", "green");
  }
});


let container = document.querySelector(".slider-container");
let scrollAmount = 0;


if (container) {
    setInterval(() => {
        container.scrollBy({ left: 250, behavior: "smooth" });

        scrollAmount += 250;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            container.scrollTo({ left: 0, behavior: "smooth" });
            scrollAmount = 0;
        }
    }, 2000); 
}




