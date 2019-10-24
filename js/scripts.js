$(document).ready(function() {

  if (advice) {
    (".dwight").show();
  } else if (rules && offended) {
    (".angela").show();
  } else if (wellmeaning && rules) {
    (".pam").show();
  } else if (wellmeaning && offensive) {
    (".michael").show();
  } else if (lazy || unorganized) {
    (".kevin").show();
  } else {
    alert("I told you to choose two!")
  };





});
