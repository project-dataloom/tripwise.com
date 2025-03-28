$(document).ready(function () {


 // Show login overlay when clicking login button


   
    $("#loginBtn").click(function () {
        if ($(this).text() === "Login") {
            $("#loginOverlay").fadeIn();
        } else {
            $(this).text("Login");
        }
    });

    // Login functionality
    $("#submitLogin").click(function () {
        let username = $("#username").val();
        let password = $("#password").val();
        if (username === "dinesh" && password === "dinesh") {
            $("#loginOverlay").fadeOut();
            $("#loginBtn").text("Logout");
        } else {
            alert("Invalid credentials! Use admin/password.");
        }
    });



    // Navbar active state
    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });



    // Box selection
    $(document).ready(function(){
        let selectedLink = "";
        
        $(".box").click(function(){
            $(".box").removeClass("selected");
            $(this).addClass("selected");
            selectedLink = $(this).data("link");
            $("#readMoreBtn").prop("disabled", false).addClass("enabled");
        });

        $("#readMoreBtn").click(function(){
            if (selectedLink) {
                window.location.href = selectedLink;
            }
        });
    });
    
        // Scroll Reveal Effect
        // ScrollReveal().reveal('.box', {
        //     duration: 1000,
        //     origin: 'bottom',
        //     distance: '50px',
        //     easing: 'ease-in-out',
        //     interval: 200
        // });


    

    // Scroll Reveal Effect
    // ScrollReveal().reveal('.header, .box,.home-section,.image-conten','.footer-links',{
    //     duration: 1000,
    //     origin: 'bottom',
    //     distance: '50px',
    //     easing: 'ease-in-out',
    //     interval: 200
    // });
});
