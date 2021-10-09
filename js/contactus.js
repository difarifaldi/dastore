$(document).ready(function()
{
$("input").focus(function(){
    $(this).css("background-color","#cccccc");
     $(this).css("color","#000");
  });
    $("input").blur(function(){
    $(this).css("background-color","#ffffff");
    $(this).css("color"," #4f4f4f"); 
  });

$("#message").focus(function(){
    $(this).css("background-color","#cccccc");
     $(this).css("color","#000");
  });
      $("#message").blur(function(){
    $(this).css("background-color","#ffffff");
    $(this).css("color"," #4f4f4f"); 
});
/* change text to upper case*/
$('input').keyup(function(){
    this.value = this.value.toUpperCase();
});
$('input[id="#contact-name"]').keypress(function(e)
{
    var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    var code;
    if (window.event)
        code = e.keyCode;
    else
        code = e.which;
    var char = keychar = String.fromCharCode(code);
    if (arr.indexOf(char) == -1)
        return false;
});

    /* bind event with button*/

    $("#regis").bind("click", function ()
     {

        var fname = $("#contact-name").val();
        var email = $("#contact-email").val();
        var message = $("#message").val();
          if (fname == ''  ||  email == '' || message == '') 
           {
  $('input[type="text"],input[type="email"]').css("border", "2px solid red");
  $('input[type="text"],input[type="email"]').css("box-shadow", "0 0 3px red");
  $('#message').css("border", "2px solid red");
  $('#message').css("box-shadow", "0 0 3px red");
  alert("Please fill all fields...!!!!!!");
        }
        else if (!/^[\w.+-]+@[\w-]+\.[\w-.]+$/.test($("#contact-email").val()))
         {
            alert("Your email format is not valid.");
 
        }
        
        else if ($("#message").val().replace(/\s/g, "").length < 10)
         {
            alert("Message is too short. Minimum 10 characters required");
 
        }

        else {
             alert("Thanks to contact us!!!! "+fname);
            $('#contact-name').val('');
            $('#contact-email').val('');
            $('#message').val('');
        }
    });
 });
