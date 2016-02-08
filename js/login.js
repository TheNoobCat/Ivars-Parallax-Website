$('#submit-button').click(function() {
	console.log('usgsd')
	var fname = $('#fname').val();
	var lname = $('#lname').val();
	var email = $('#email').val();
	var message = $('#message').val();

	if (fname == "" || lname == "" || email == "" || message == "") {
		alert('cannot be empty');
	}

	else {
		console.log('pussy')
		var url = "http://localhost:3000/request"
		var postData = JSON.stringify({fname: fname, lname: lname, email: email, message: message});

		$.ajax({
			url:url,
			type:"POST",
			data:postData,
			contentType:"application/json; charset=utf-8",
			dataType:"json",
			success: function(data) {
				if (data.error){
					// What to do if error
					alert(data.error);
				}

				else{
					//success
					alert(data.message);
				}
			}
		});
	}
});
