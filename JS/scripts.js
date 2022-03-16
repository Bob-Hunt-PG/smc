$(function() {
	$('#Password').on('blur', function() {
		$(this).closest('table').find('input.btn').focus();
	});

	$('#feedback').on('click', function() {
		sessionStorage.setItem('Feedback', 'Yes');
	});

	if (window.location.href.indexOf("registration.asp") > -1) {
		var feedback = sessionStorage.getItem('Feedback');
		sessionStorage.clear();

		if(feedback === 'Yes') {
			var first_name = $('input[name="FName"]').val(),
				last_name = $('input[name="SName"]').val(),
				email = $('input[name="Email"]').val();

			sessionStorage.setItem('FirstName', first_name);
			sessionStorage.setItem('LastName', last_name);
			sessionStorage.setItem('Email', email);

			window.location.replace('https://brooks.mybrandstorefront.com/page.asp?name=Customer%20Feedback');
		}
	}

	if (window.location.href.indexOf("Customer%20Feedback") > -1) {
		var first_name = sessionStorage.getItem('FirstName'),
			last_name = sessionStorage.getItem('LastName'),
			email = sessionStorage.getItem('Email');

		$('#first_8').val(first_name);
		$('#last_8').val(last_name);
		$('#input_6').val(email);
	}

	if (window.location.href.indexOf("Thank%20You") > -1) {
		sessionStorage.clear();
	}

	if($('#tabDelDetails').length > 0) {
		$('.bordertableheader[colspan="2"]').attr('colspan', '');	
	}

	if (window.location.href.indexOf("ProductCats.asp") > -1) {
		$('.no-records-found').closest('.bootstrap-table').hide();
		$('#btnCartContinue, #btnCart').addClass('btn btn-primary');
		sessionStorage.clear();
	}
});