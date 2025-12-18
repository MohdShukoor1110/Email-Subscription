const scriptURL = 'https://script.google.com/macros/s/AKfycbxwF9_VxTo_eQGaiDxupD82mdRpqt3RtBybMt2i2Pkzd4mTYQb-fWHEMCbrWZF2E3QPtA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Subscription successful!"
        msg.style.color = "#61b752";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => {
        console.error('Error!', error.message);
        msg.innerHTML = "Subscription failed!";
        msg.style.color = "#a54055";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
})