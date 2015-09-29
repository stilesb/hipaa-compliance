(function (global){
	var closeToc = function(){
		$(".tocify-wrapper").removeClass('open');
		$("#nav-button").removeClass('open');
	};

	var makeToc = function(){
		global.toc = $("#toc").tocify({
			context: '.content',
			selectors: 'h1, h2',
			extendPage: false,
			theme: 'none',
			smoothScroll: false,
			showEffectSpeed: 0,
			hideEffectSpeed: 180,
			ignoreSelector: '.toc-ignore',
			highlightOffset: 60,
			scrollTo: -1,
			scrollHistory: true,
			hashGenerator: function (text, element){
				return element.prop('id');
			}
		}).data('toc-tocify');

		$("#nav-button").click(function(){
			$(".tocify-wrapper").toggleClass('open');
			$("#nav-button").toggleClass('open');
			return false;
		});

		$(".page-wrapper").click(closeToc);
		$(".tocify-item").click(closeToc);
	};

	function animate (){
		setTimeout(function(){
			toc.setOption('showEffectSpeed', 180);
		}, 50);
	}

	function menuOptions(){
		var cH = $(".content").height();
		var cM = $(".menu");

		cM.css({ height: cH });

		var d = $(".content").offset().top;
		var w = $(window);
		var ul = $("#tocify-header0");

		w.scroll(function(){
			if ( w.scrollTop() >= d ){
				ul.addClass("menu-position");
			}else{
				ul.removeClass("menu-position");
			}
		});

	};

	function deviceMenu(){
		var s = $(".show-menu");
		var h = $(".hide-menu");
		var m = $(".menu");

		s.click(function(){
			m.css({"left" : 0});
			h.css({
				"display" : "block",
				"margin-bottom" : -9
			});
			$(this).hide(0);
		});
		h.click(function(){
			m.css({"left" : -220});
			s.css({
				"display" : "block",
				"margin-bottom" : -9
			});
			$(this).hide(0);
		});
	};

	$(deviceMenu);
	$(makeToc);
	$(animate);
	$(menuOptions);
})(window);

