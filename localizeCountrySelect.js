$.countryLocalizeSelect = jQuery.fn.countryLocalizeSelect = function () {
	var $elems = this;

	var country = null;

	$.ajax({
	  	dataType: "json",
	  	url: 'https://ipfind.co/me',				  
	  	success: function(data){
    		if (data.country){
    			$elems.each(function(){
					var $el = $(this);
					$el.val(data.country);
				});
    		}    		
    	},
    	error : function (error){
    		var resp = error.responseText;
    		if (resp){
    			var errorObj = JSON.parse(resp);
    			if (errorObj && errorObj.error){
    				console.error("Could not localise select: ", errorObj.error);
    				return;
    			}
    		} 

    		console.error("Could not localise select: ", resp);
    					    		
    	}
	});	

	return this;
};