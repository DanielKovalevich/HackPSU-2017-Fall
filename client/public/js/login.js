$(document).ready(function() {
  console.log('here');
  $('.log').click(function() {
    var username = $('.username').val();
    console.log(username);
  });
});