window.addEventListener("load", function () {
    document.querySelectorAll(".bar").forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
    });
});
