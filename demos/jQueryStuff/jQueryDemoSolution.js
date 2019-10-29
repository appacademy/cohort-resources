// document.addEventListener("DOMContentLoaded", function () {
// $(document).on("ready", function () {
$(function() {
  $(".to-learn-list").on("click", "li", function(e) {
    const $li = $(e.currentTarget);
    $li.toggleClass("complete");
  });

  $(".to-learn-form").on("submit", function(e) {
    e.preventDefault();
    let $form = $(e.currentTarget);
    let $input = $form.find("#to-learn-text");
    let inputText = $input.val();
    $("<li>")
      .text(inputText)
      .appendTo($(".to-learn-list"));
    $input.val("");
  });

  $("#complete-all").on("click", function(e) {
    Array.from($("li")).forEach( li => {
      $(li).addClass("complete");
    });
  });
});