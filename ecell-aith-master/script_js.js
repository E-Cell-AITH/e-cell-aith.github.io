$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


Array.from(document.querySelectorAll(".switch-button")).forEach((item) => {
    item.onclick = () => {
        item.parentElement.classList.toggle("change");
    };
});