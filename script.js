// page load event

let page_load = document.querySelector(".page_load");

        window.addEventListener('DOMContentLoaded', function(){
            page_load.style.opacity = "1";
        });
        window.addEventListener('load', function(){
            page_load.style.opacity = "0";
        });

// header social icon pop up

function pop_social_icons() {
    let header_social = document.getElementById("show_social_box");
    let header_social_icon = document.querySelectorAll(".header_social li");

    header_social.classList.toggle("show_header_social");

    header_social_icon.forEach(social => {
        social.classList.toggle("show_header_social_icon");
    });
    document.getElementById("header_share_icon").classList.toggle("share_icon");
}



// form submit condition


let form_container = document.querySelector(".form_container");
let input_text = document.getElementById("input_text");
let input_label = document.querySelector(".input_user label");
let err_msg = document.querySelector(".input_user p");
let new_year_massege_text = document.querySelector(".new_year_message h1");
let user_name = document.querySelectorAll(".user_name");
let new_year_massege = document.querySelector(".new_year_massege");
let myVideo = document.getElementById("bg_video2");


input_text.addEventListener("focus", function () {
    input_label.style.cssText = "opacity: 0;"
    input_text.classList.remove("error");
    err_msg.innerHTML = "";
});

input_text.addEventListener("blur", function () {
    if (input_text.value.length === 0) {
        input_label.style.cssText = "opacity: 1;"
        input_text.classList.add("error");
        err_msg.innerHTML = "The text field is required";
    }

    else if (input_text.value.length < 5) {
        err_msg.innerHTML = "Enter minimum 5 character";
        input_text.classList.add("error");
    }

});

input_text.addEventListener("input", function () {

    if (input_text.value.length > 1 && !isNaN(input_text.value)) {
        err_msg.innerHTML = "Numbers are not Allowed";
        input_text.classList.add("error");
    }
    else if (isNaN(input_text.value)) {
        err_msg.innerHTML = "";
        input_text.classList.remove("error");
    }
});

function validateForm() {
    let isValid = true;

    

    if (input_text.value.length > 1 && input_text.value.length < 5) {
        err_msg.innerHTML = "Enter minimum 5 character";
        input_text.classList.add("error");
        isValid = false;
    }

    if (!isNaN(input_text.value)) {
        err_msg.innerHTML = "Numbers are not Allowed";
        input_text.classList.add("error");
        isValid = false;
    }

    if (input_text.value.length === 0) {
        input_label.style.cssText = "opacity: 1;"
        input_text.classList.add("error");
        err_msg.innerHTML = "The text field is required";
        isValid = false;
    }

    if (input_text.value.length >= 5 && isNaN(input_text.value)) {
        document.getElementById("bg_video1").style.cssText = "opacity: 0;"
        // Function to toggle play/pause
        if (myVideo.paused) {
            myVideo.play();
        } else {
            myVideo.pause();
        }

        document.getElementById("bg_video2").classList.add("show_video");
        document.getElementById("bg_video2").classList.remove("hide_video");
        document.querySelector(".fire_crakers").style.cssText = "opacity: 1;";

        new_year_massege_text.style.cssText = "opacity: 1;";
        form_container.style.cssText = "display: none;";


        user_name.forEach(name => {
            name.innerHTML = input_text.value;
        })

        const myTimeout = setTimeout(myGreeting, 2000);
        function myGreeting() {
            document.querySelector(".sec_message").classList.add("show_sec_massege");
        }

        isValid = false;
    }

    return isValid;
}



