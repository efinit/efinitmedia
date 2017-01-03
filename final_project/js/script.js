


window.onscroll = function() {myFunction()};

	function myFunction() {
		var newBg='rgba(255,255,255,'+(document.body.scrollTop)/600.0+')';
		$('#navbar').css('backgroundColor',newBg);
	}