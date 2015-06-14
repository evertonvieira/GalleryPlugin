//Registrando Plugin
(function($) {
	$.fn.GalleryPlugin = function(options) {

		var defaults = {
			'delay' : 200,
			'interval': 3000
		};

		var settings = $.extend( {}, defaults, options );

		setInterval(gallery, settings.interval);

		//defindo class active na primeira li
		$("li:eq(0)").addClass("active").show();

		initSlide();

		//adicionano classe dinâmica na li
		function gallery(){
			if($("li.active").next().size()){
				$("li.active").removeClass("active").next().addClass("active");
				initSlide();
			}else{
			 $("li.active").removeClass("active");
				$("li:eq(0)").addClass("active");
				initSlide();
			}
		}

		//caso o click exista
		$('li').click(function() {
			event.preventDefault();
			$("li.active").removeClass("active");
			$('li').eq($(this).index()).addClass('active');
			link = $(this).attr('href');
			alt = $(this).attr('alt');
			initSlide(link, alt);
		});

		//coloca a imagem grande ao lado
		function initSlide (link, alt) {
			if (link == undefined){
				var link = $("li.active a").attr("href");
			}
			if (alt == undefined){
				var alt = $("li.active a").attr("alt");
			}
			var alt = $(".active a").attr("href");
			var img = '<img src="'+ link +'" class="selected" alt="'+ alt +'" />';
			$(".content-gallery").fadeOut(settings.delay, function(){
				$(".content-gallery").empty().append(img).fadeIn();
			});
		}

	};
})(jQuery);