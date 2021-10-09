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


/* change text to upper case*/
$('input').keyup(function(){
    this.value = this.value.toUpperCase();
});
$('input[id="#contactname"]').keypress(function(e)
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
$('#contactnumber').keydown(function (event) 
{
    // Allow special chars + arrows 
if (event.keyCode == 8 || event.keyCode == 13 || event.keyCode == 16 || (event.keyCode >= 35 && event.keyCode <= 39) || (event.keyCode == 46) || (event.keyCode == 9)) {
return;
} else {
// If it's not a number stop the keypress
if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && ('#cnum.val().length>11') )             {
           {
               event.preventDefault();
            }
        }
    }
}); 
$('#contactpost').keydown(function (event) 
{
    // Allow special chars + arrows 
if (event.keyCode == 8 || event.keyCode == 13 || event.keyCode == 16 || (event.keyCode >= 35 && event.keyCode <= 39) || (event.keyCode == 46) || (event.keyCode == 9)) {
return;
} else {
// If it's not a number stop the keypress
if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && ('#cnum.val().length>11') )             {
           {
               event.preventDefault();
            }
        }
    }
}); 

    /* bind event with button*/

    $("#regis").bind("click", function ()
     {

        var fname = $("#contactname").val();
        var email = $("#contactemail").val();
        var cnum = $("#contactnumber").val();
        var cpost = $("#contactpost").val();
       
        
          if (fname == ''  ||  email == '' || cnum == '' || cpost == '' ) 
           {
  $('input[type="text"],input[type="email"],input[type="password"]').css("border", "2px solid red");
  $('input[type="text"],input[type="email"],input[type="password"]').css("box-shadow", "0 0 3px red");
  $('#message').css("border", "2px solid red");
  $('#message').css("box-shadow", "0 0 3px red");
  alert("Please fill all fields...!!!!!!");
        }
        else if (!/^[\w.+-]+@[\w-]+\.[\w-.]+$/.test($("#contactemail").val()))
         {
            alert("Your email format is not valid.");
 
        }
        
        

        else {
             alert("Thanks For Buying!!!! "+"\n"+fname);
           
        }
    });
 });
