$(document).ready(function()
{
$('#dropdown_selector').change(function () {
 		var option = $(this).find('option:selected').val();
if (option == 'content1')
            { 
            
             $.ajax({ url: "/data/content1.html", success: function (result) {
                $("#contentarea").html(result);
              }});
           }
       else   if (option == 'content2')
            { 
            $.ajax({url: "/data/content2.html", success: function (result) {
                $("#contentarea").html(result);
              }});
           }
        

                 else  if (option == 'content3')
                 { 
             $.ajax({ url: "/data/content3.html", success: function (result)    {
                $("#contentarea").html(result);
              }});
         	  }   
            	});
 	    	});

