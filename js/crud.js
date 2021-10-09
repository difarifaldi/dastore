var database = firebase.database();
  var autokey = "123"+ Math.floor((Math.random() * 123));

  var subjectemail = "Verification Booking Service Fotomotoweb";
var bodyemail = "Thank You for trusting us!"+
"Hello "+
"Your booking accepted by us, you need to verify that this is your email address with ScreenShoot our mail and whatsapp us by clicking link on below"+
"https://api.whatsapp.com/send?phone=6285945195103"+
"Kind Regards, Fotomoto";

  //current date
  var dt = new Date();
  var current_date = (("0"+dt.getDate()).slice(-2)) +"-"+ (("0"+(dt.getMonth()+1)).slice(-2)) +"-"+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));  


  database.ref('pesan').on('value', function(snapshot) {
   var count = 0;
   if(snapshot.exists()){
    $("#tbl_list_user tbody").remove(); 
    var content = '<tbody>';
    snapshot.forEach(function(data) {
     count+=1;
     var val = data.val();
                 content +='<tr>';
                 content += '<td>' + count + '</td>';
          
                 content += '<td>' + val.cust_name + '</td>';
                 content += '<td>' + val.cust_email + '</td>';
                 content += '<td>' + val.cust_message + '</td>';
                 content += '<td>' + val.cust_reply + '</td>';
              
                 
                 content += '<td> <button class="btn btn-primary tampilModalUbah" onclick="setData('+ data.key +')" data-toggle="modal" data-target="#exampleModal">Reply</button></td>';
                 content += '<td> <button class="btn btn-danger" onclick="hapusData(' + data.key + ')"> Remove </button></td';
                 content +='</tr>';
                 key = parseInt(data.key, 10);
    });

    content += '</tbody>';
    $('#tbl_list_user').append(content);
   }else{
    $("#tbl_list_user tbody").remove(); 
   }  
  });


  function tambahData(){

    database.ref('pesan/' + autokey).set({
     cust_name : $('#name').val(),
     cust_email   : $('#email').val(),
     cust_message : $('#message').val(),

     date_submit : current_date
    });

    alert("Thanks for your advice");

    //clear data
    $('#name').val("");
    $('#email').val("");
    $('#message').val("");
   
    
   }

   function setData(id){
     var key_id = id;
    database.ref('pesan/').child(key_id).once('value').then( function(snap) {
        const user = snap.val()
        $('#id').val(key_id);
        $('#name').val(user.cust_name);
        $('#email').val(user.cust_email);
        $('#message').val(user.cust_message);
        $('#reply').val(user.cust_reply);
     
    });
   }
  
  function editdata(){
        database.ref('pesan/' + $('#id').val()).update({
          cust_name : $('#name').val(),
          cust_email   : $('#email').val(),
          cust_message : $('#message').val(),
          cust_reply : $('#reply').val(),
 
       });
       alert("Data Update Success!");

        //clear data
    $('#name').val("");
    $('#email').val("");
    $('#message').val("");
    $('#reply').val("");
  
  }


  function hapusData(id){
   var answer = confirm("Are You Sure To Delete?");
   if (answer) {
       database.ref('pesan/' + id).remove();
       alert("Data Remove Success!");
   }
  } 


  

