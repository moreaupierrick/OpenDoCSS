
requirejs.config({
	baseUrl: '../lib',
	paths: {
		app: '../src'
	}
});

requirejs(['app/openDoCss']);
requirejs(['jquery.min']);


//TODO Add conditionnal jquery.mobil.min


/**
WARNING :  Loading time is unknown !!!
*/
-(function(global){


	var loadCss = function(url) {
		var link = document.createElement("link");
		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = url;
		document.getElementsByTagName("head")[0].appendChild(link);
	};



	loadCss("../css/openDoCSS.css");

}());