//Registrando Plugin
(function($) {
	$.fn.SimpleGalleryShow = function(options) {

		var defaults = {
			'delay' : 200,
			'interval': 2000,
		};

		var settings = $.extend( {}, defaults, options );

		//defindo class active na primeira li
		$("li:eq(0)").addClass("active").show();

		$('a').click(function() {
			event.preventDefault();
		});

		SetImage();

		//adicionano classe dinâmica na li
		function gallery(){
			if($("li.active").next().size()){
				$("li.active").removeClass("active").next().addClass("active");
				SetImage();
			}else{
			 $("li.active").removeClass("active");
				$("li:eq(0)").addClass("active");
				SetImage();
			}
		}

		//caso o hover exista
		$('li').mouseover(function() {

			if ($(this).attr('class') == "active"){
				return false;
			}
			$("li.active").removeClass("active");
			$('li').eq($(this).index()).addClass('active');
			link = $(this).attr('href');
			alt = $(this).attr('alt');
			SetImage(link, alt);
		});

		//coloca a imagem grande ao lado
		function SetImage (link, alt) {
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