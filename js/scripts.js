$(document).ready(function() {


$("#checkbox").submit(function(event) {


 var advice = $('#advice[type=checkbox]').prop('checked');
 var rules = $('#rules[type=checkbox]').prop('checked');
 var wellmeaning = $('#wellmeaning[type=checkbox]').prop('checked');
 var offensive = $('#offensive[type=checkbox]').prop('checked');
 var lazy = $('#lazy[type=checkbox]').prop('checked');
 var unorganized = $('#unorganized[type=checkbox]').prop('checked');

  if (advice) {
    $(".dwight").show();
  } else if (rules && offensive) {
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
  event.preventDefault();
});



});
