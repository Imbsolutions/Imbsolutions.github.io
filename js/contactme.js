function sendEmail() {
    Email.send({
        SecureToken: "2621ee67-7617-4ac6-be31-a5ee73a7d570",
        To: "imballesteros19@gmail.com",
        From: 'info@alpine-codetech.space',
        Subject: "[WEB INQUIRY] from:" + document.getElementById("name").value,
        Body: document.getElementById("message").value + " sender email: " + document.getElementById("email").value
    }).then(
        message => { 
            if (message === "OK") alert("Your message has been sent successfully! Thank you for reaching us."); 
            else alert("Error sending email! Please try again later.")
        }
    );
}