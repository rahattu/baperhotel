document.getElementById('login').addEventListener
    ('click', function () {
        const emailfield = document.getElementById('email');
        const usereamil = emailfield.value;
        const passwordfield = document.getElementById('password');
        const userpassword = passwordfield.value;
        if (
            usereamil == "rizon@.com" && userpassword == "12345"

        ) {
            window.location.href = "bank.html";
        }

    })