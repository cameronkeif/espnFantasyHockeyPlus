$(document).ready(function () {
    addDobberLinks();
});

function addDobberLinks() {
    $('.playertablePlayerName').children(':first-child').each(function () {
        $(this).parent().append("<a href='" + formatDobberProfileLinkFromPlayerNameText($(this).text()) + "' target='_blank'><img style='margin: 0 6px;' border='0' alt='Dobber Hockey' width='16px' height='16px' src='http://www.dobberhockey.com/wp-content/themes/sports/images/favicon.png' /></a>");
    });
}

function formatDobberProfileLinkFromPlayerNameText(playerFirstAndLastName)
{
	var splitName = playerFirstAndLastName.split(" ");
	var firstName = splitName[0];
	var lastName = splitName[1];

    return "http://dobberhockey.com/players/" + firstName + "-" + lastName;
}