$.countryLocalizeSelect = jQuery.fn.countryLocalizeSelect = function () {
	var $elems = this;

	var country = null;
	var authKey = null; // please sign up for a free IP Find account to add this

	$.ajax({
	  	dataType: "json",
	  	url: 'https://ipfind.co/me?auth=' + authKey,
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
