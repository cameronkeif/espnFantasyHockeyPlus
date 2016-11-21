$(document).ready(function () {
    addDobberLinks();
});

function addDobberLinks() {
    $('.playertablePlayerName').children(':first-child').each(function () {
        $(this).parent().append("<a href='http://dobberhockey.com/players/Andrei-Vasilevskiy' target='_blank'>go</a>");
    });
}