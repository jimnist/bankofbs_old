// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
document.observe('dom:loaded', function() {
  // Field observers
  $('pledge_form_submit').observe('click', submit_pledge_form);
  $('pledge_name').observe('keyup', form_on_change);
  $('pledge_email').observe('keyup', form_on_change);
  $('pledge_amount').observe('keyup', form_on_change);
});

form_on_change = function(event) {
  if (validate_form())
  {
    $('pledge_form_submit').disabled = false;
  }
  else
  {
    $('pledge_form_submit').disabled = true;
  }
}

validate_form = function() {
  valid = false;
  if($('pledge_name').value != '' &&
    $('pledge_email').value != '' &&
    $('pledge_state').value != '' &&
    $('pledge_amount').value != '')
  {
    valid = true;
  }

  return valid;
}

clear_form = function() {
  $('pledge_name').value = '';
  $('pledge_email').value = '';
  $('pledge_amount').value = '';
  $('pledge_form_submit').disabled = true;
}

submit_pledge_form = function(event) {
  var element = event.element();
  element.addClassName('active');

  name = $('pledge_name').value;
  email = $('pledge_email').value;
  state = $('pledge_state').value;
  amount = $('pledge_amount').value;

  new Ajax.Request('http://localhost:3000/pledge/' + escape(name) + '/' + escape(email).replace('@', '%40').replace('.', '%23') + '/' + escape(state) + '/' + escape(amount), {
        method:'get',
        requestHeaders: {Accept: 'application/json'},
        onSuccess: function(transport){
          var json = transport.responseText.evalJSON();
          clear_form();

          $('summary_info').innerHTML = "<h2>" + json.count + " people have pledged to stop feeding the pig</h2>";
        }
      });
}