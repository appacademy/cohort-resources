// let $li = $("<li></li>");
// $li.text("happy wednesday");
// $("ul").append($li);

// $(document).ready(function(){
//   let $li = $("<li></li>");
//   $li.text("happy wednesday");
//   $("ul").append($li);
// })

$( () => {
  let $li = $("<li></li>");
  $li.text("happy wednesday");
  $("ul").append($li);

  // $("li").eq(3).on('click', function () {
  //   $("li").eq(3).toggleClass("complete");
  // }); //this applies to one li 

  // $("li").on("click", function(event){
  //   // debugger
  //   $(event.target).toggleClass("complete");

  // })
  const $inputEl = $("#add-bucket-text");
  const $pEl = $("form p")

  $inputEl.on("input", (event) => {
    // debugger
    const val = $inputEl.val();
    $pEl.text(val.split("").reverse().join(""));
  })

  $(".bucket-list").on("click", "li", function(event){
    // debugger
    //event.currentTarget === bucket-list;
    //event.target === is the li we actually clicked on 
    // $(event.target).css("font-size", 65);
    $(event.target).toggleClass("complete");
  })

  //form submit to give me new bucket item 
  //1. select the form 
  //2. attach a listener 
  //3. create a new li with the input val; 
  //4. append the new li 

  $(".add-bucket-form").on("submit", function(event){
    event.preventDefault();
    let $li = $("<li></li>"); 
    $li.text($inputEl.val());
    let $ul = $(".bucket-list");
    $ul.append($li);
  })

})