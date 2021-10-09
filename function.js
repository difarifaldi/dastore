const contactname = document.getElementById('contactname');
const contactnumber = document.getElementById('contactnumber');
const contactcard = document.getElementById('contactpost');
const contactemail = document.getElementById('contactemail');
const typepayment = document.getElementById('bc1');
const regis = document.getElementById('regis');
const upd = document.getElementById('upd');
const del = document.getElementById('del');



const database = firebase.database();



regis.addEventListener('click', e => {
    e.preventDefault();
    database.ref("/customers/"+contactcard.value).set({
        contactnumber: contactnumber.value,
        contactname: contactname.value,
        contactemail: contactemail.value,
        typepayment: typepayment.value
    });
});
upd.addEventListener('click', e => {
    e.preventDefault();
    const newData = {
        contactnumber: contactnumber.value,
        contactname: contactname.value,
        contactemail: contactemail.value,
        typepayment: typepayment.value
    };
    const updates = {};
    updates ['/customers/' + contactcard.value] = newData;
    updates ['/super-customers' + contactcard.value] = newData;
    database.ref().update(updates);
});

del.addEventListener('click', e => {  
    e.preventDefault();
    database.ref("/customers/"+contactcard.value).remove()
    .then(() => {
        window.alert('customers removed from database !');
    })
    .catch(error => {
        console.error(error);
    });
});





