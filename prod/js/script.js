$(document).ready(function () {	 	
	var date = new Date();
	$('#showCurrentDateTime').html(date.toDateString());
	 
});
$(document).ready(function () {	 	
	$('#btnSend').click(function(e) {
		
		var isValid = true;
		
		if($('#exampleInputEmail1').val() === '' )
		{
			isValid = false;
			alert('Please enter e-mail!');
		}
		
		if($('#exampleInputEmail1').val() === '' )
		{
			isValid = false;
			alert('Please enter password!');
		}		
		
		if(!isValid)
		{
			e.preventDefault();
		}
	});
});