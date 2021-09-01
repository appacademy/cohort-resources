// Ready stye

// jQuery(() => alert("DOM is fully loaded"));
// jQuery(() => alert("DOm is fully loaded and ready to go"));

// jQuery(() => alert("dom is fully loaded and ready to go"));

// $(()=> alert("dom is fully loaded and I used a $ sign"))
// vs
// window.addEventListener("DomContentLoaded", () => {
//     alert("the dom is ready ")
// })










// SELECTOR STYLE
// document.getElementById("hidden").style.color = "pink"
// --------------VS-----------------
// $("#hidden").css("color", "blue");

$(".square").css({"width": "100vw"});
// document.querySelectorAll(".square").forEach(()=>{})
$(".square").css({ "background-color": "blue", "border": "5px solid yellow" });










// wrapper-style 
const circle = document.getElementById("circle");

$(circle).css("background", "green");


console.log($(circle).attr("id"))













// HTML STYLE
// $(".container").append($('<div class="item"></div>').css('background', "pink"));
$(".container").append($('<div class="item"></div>'));




// {username: demoUser-1 }

// <h1><%= @user.username %></h1>




// Ajax Requests








// Prefix Method 
// users POST /users => users#create

 $.ajax({
    url: '/users',
    method: 'Post',
    data: {
        user: {
            username: "demo_user",
            political_affiliation:"Javascript"
        }
    },
    dataType: 'JSON'
 }).then((result) => {
    alert(result)
 }).then(() => {
     
 }).catch(() => {
     const emailInput = document.getElementById("email-input")
    emailInput.style.color = "red"
 })
  


// def create
// user = User.new(user_params)
// if user.save
//     render JSON: user
// else
//   render error ['failed to create'], status: 422
// end 
//   end 

// will return a promise


 






