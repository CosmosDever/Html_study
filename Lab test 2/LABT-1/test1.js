document.addEventListener('DOMContentLoaded', function () {
    // Function to change color to green
    function changeColor(element) {
        element.style.backgroundColor = 'green';
    }

    // Function to handle click on Inner circle
    function changeColor1(event) {
        changeColor(event.currentTarget);
        event.stopPropagation();
    }

    // Function to handle click on Middle circle
    function changeColor2(event) {
        changeColor(event.currentTarget);
        event.stopPropagation();
    }

    // Function to handle click on Outer circle
    function changeColor3(event) {
        changeColor(event.currentTarget);
        event.stopPropagation();
    }

    // Function to reset the page
    function resetPage() {
        location.reload();
    }

    // Event listener for the reset button
    document.querySelector('.resetbttn button').addEventListener('click', resetPage);

    // Event listener for the checkbox
    document.getElementById('check').addEventListener('click', function (event) {
        event.stopPropagation();
    });
    
    // Event listeners for circles
    document.querySelector('.circleInner').addEventListener('click', changeColor1);
    document.querySelector('.circleMiddle').addEventListener('click', changeColor2);
    document.querySelector('.circleOuter').addEventListener('click', changeColor3);
});
