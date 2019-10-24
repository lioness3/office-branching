$(document).ready(function() {

 var advice = $('#advice:checked').val();
 var rules = $('#rules:checked').val();
 var offended = $('#offended:checked').val();
 var wellmeaning = $('#wellmeaning:checked').val();
 var offensive = $('#offensive:checked').val();
 var lazy = $('#lazy:checked').val();
var unorganized = $('#unorganized:checked').val();

  if (advice) {
    $(".dwight").show();
  } else if (rules && offended) {
    $(".angela").show();
  } else if (wellmeaning && rules) {
    $(".pam").show();
  } else if (wellmeaning && offensive) {
    $(".michael").show();
  } else if (lazy || unorganized) {
    $(".kevin").show();
  } else {
    alert("I told you to choose two!")
  };






});
