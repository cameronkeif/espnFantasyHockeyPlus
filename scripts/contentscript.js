$(document).ready(function () {
    addDobberLinks();
});

function addDobberLinks() {
    $('.playertablePlayerName').children(':first-child').each(function () {
        $(this).parent().append("<a href='" + formatDobberProfileLinkFromPlayerNameText($(this).text()) + "' target='_blank'>go</a>");
    });
}

function formatDobberProfileLinkFromPlayerNameText(playerFirstAndLastName)
{
	var splitName = playerFirstAndLastName.split(" ");
	var firstName = splitName[0];
	var lastName = splitName[1];

    return "http://dobberhockey.com/players/" + firstName + "-" + lastName;
}