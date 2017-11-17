$(document).ready(function() {


	$(".owl-carousel").owlCarousel();

	$(".s-directions .item-vertical p").equalHeights();

	$(".equipment .equipment-item p").equalHeights();

	$(".s-reviews .review p").equalHeights();
	
	$(".s-adv").waypoint(function(){
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1000,
			easing: 'swing',
			step: function() {
				$(".s-adv-item h3 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".s-adv-item h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "40px",
				numberStep: comma_separator_number_step},
				1000);
		});
		this.destroy();
	}, {
		offset: '90%'
	});


	$(".mfp-gallery").magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			vertacalFit: false
		},
		gallery: {
			enabled: true
		}
	});

	$(".mfp-certificate").magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			vertacalFit: false
		},
		gallery: {
			enabled: true
		}
	});

	$(".portfolio-item").each(function(e){
		var th = $(this);
		th.attr("href", "#portfolio-img-" + e)
			.find(".portfolio-popup")
				.attr("id", "portfolio-img-" + e);
	});

	$(".portfolio-item, a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

	$("a[href='#callback']").click(function(){
		var dataForm = $(this).data("form");
		var dataText = $(this).data("text");
		$(".form-callback h4").text(dataText);
		$(".form-callback [name = 'admin-data']").val(dataForm);
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(this).next().find(".main-mnu").slideToggle();
		return false;
	});

  	$(".main-foot .toggle-mnu").click(function(){
  		$("html, body").animate({scrollTop: $(document).height()}, "slow");
  		return false;
  	});

  	$("body").on("click", ".top", function(){
  		$("html, body").animate({scrollTop: 0}, "slow");
  	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".form-callback .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".form-callback .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	$("body").append('<div class = "top"><i class="fa fa-angle-double-up"</i>');

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()){
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}

	});

});
