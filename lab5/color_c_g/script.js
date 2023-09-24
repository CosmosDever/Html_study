document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".inbox");
    const inboxBlack = document.querySelector(".inboxblack");
    const inboxBlack2 = document.querySelector(".inboxblack2");

    let isSwapped = false;

    box.addEventListener("click", function () {
        if (isSwapped) {
            inboxBlack.style.marginTop = "5px";
            inboxBlack2.style.marginTop = "242.5px";
        } else {
            inboxBlack.style.marginTop = "242.5px";
            inboxBlack2.style.marginTop = "5px";
        }
        isSwapped = !isSwapped;
    });
});
