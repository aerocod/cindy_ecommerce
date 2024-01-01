//Handler Buat Set Email + Password di Login Page
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); //Prevent the form from submitting normally

        //Ambil value dari email + password di form login
        var email = document.getElementById('buyma_global_user_forms_login_form_email').value;
        var password = document.getElementById('buyma_global_user_forms_login_form_password').value;

        //Custom disini yaa buat email or pw nya
        if (email === 'admin@admin.com' && password === 'admin') {
            //If correct dia ke home page
            window.location.href = '/home.html';
        } else {
            //If incorrect dia muncul pop up
            alert('Incorrect email or password');
        }
    });
});
