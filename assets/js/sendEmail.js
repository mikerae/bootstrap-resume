function sendMail(contactForm) {
    emailjs.send("service_5a8rbzg", "template_vnm4chg", {
            project_request: contactForm.projectsummary.value,
            from_name: contactForm.fullname.value,
            from_email: contactForm.emailaddress.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To Block from loading a new page
}