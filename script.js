// (function($) {
//     "use strict";

//     $('body').scrollspy({
//         target: '.navbar-fixed-top',
//         offset: 60
//     });

//     $('#topNav').affix({
//         offset: {
//             top: 200
//         }
//     });

//     new WOW().init();

//     $('a.page-scroll').bind('click', function(event) {
//         var $ele = $(this);
//         $('html, body').stop().animate({
//             scrollTop: ($($ele.attr('href')).offset().top - 60)
//         }, 1450, 'easeInOutExpo');
//         event.preventDefault();
//     });

//     $('.navbar-collapse ul li a').click(function() {
//         /* always close responsive nav after click */
//         $('.navbar-toggle:visible').click();
//     });

//     $('#galleryModal').on('show.bs.modal', function(e) {
//         $('#galleryImage').attr("src", $(e.relatedTarget).data("src"));
//     });

//})(jQuery);

const questions = document.getElementsByClassName('accordion-title') //Gets all the questions (plus icon)

for (const question of questions) {
    const answer = question.parentElement.querySelector('.accordion-content')
    const remove = question.parentElement.querySelector(".remove")
    const add = question.parentElement.querySelector(".add")
    let open = false //Variable to check if the answer is visible or not

    function openAnswer() {
        if (open == true) { //If you click the question while the answer is visible it will stop being visible and open will change it's value to false
            add.style.display = "block";
            remove.style.display = "none";
            answer.style.overflow = "hidden";
            answer.style.maxHeight = '0';
            open = false;
        } else { //If you click the question while the answer is not visible it will start being visible and open will change it's value to true
            add.style.display = "none";
            remove.style.display = "block";
            answer.style.maxHeight = "300px";
            answer.style.overflow = "visible";
            open = true;
        }
    }

    question.addEventListener('click', openAnswer)
}

