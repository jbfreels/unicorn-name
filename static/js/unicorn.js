function getUniName () {
  $('#user-name').text($('#name').val().replace(/[aeiou]/ig,'inkle'));
}