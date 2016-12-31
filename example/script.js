$(document).ready(function(){

	$("#file").change(function(e){
		
		var img = e.target.files[0];

		if(!img.type.match('image.*')){
			alert("Whoops! That is not an image.");
			return;
		}
		iEdit.open(img, true, function(res){
			$("#result").attr("src", res);
		});
	});

});