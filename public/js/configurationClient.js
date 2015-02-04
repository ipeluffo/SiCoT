$('#configurationFormSubmitButton').click( function () {
	$.post(location.href + "/save", $('#configurationForm').serialize())
	.done(function (data) {
		alert(data.message);
	});
});
