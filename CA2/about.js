
$(function() {

  $("#contact").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      issue: "required",

      message: {
        required: "true",
        maxlength: 150,
      },

      check: "required",

    },
    
    messages: {
        name: "you must enter a name",
        email: "provide an email",
      issue: "please select your issue",

      message: {
        required: "please enter a message",
        maxlength: "Your message is too long",
      },

      check: {
        required: "please tick the box"
      }
    },

    submitHandler: function(form) {
      form.submit();
    }
  });
});

