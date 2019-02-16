$(function() {
	$('#myFullpage').fullpage({
		continuousVertical: true,
		//					verticalCentered:false,
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu',
		navigation: true,

		afterLoad: function(anchorLink, index) {
			if(index === 1) {
				$('.section1 h2').animate({
					left: '0',
					"font-size": "66px"
				}, 1000);
				$('.section1 h3').animate({
					right: '0'
				}, 1000);
				$('.section1 p').animate({
					bottom: '0'
				}, 1000);
				$('.section1 a').animate({
					opacity: '1'
				}, 1000);
			} else if(index === 2) {
				$('.section2 h2').animate({
					left: '0',
					top: "0"
				}, 500);
				$(".section2 h3").animate({
					opacity: "1",
					"font-size": "30px"
				}, 1000)
				$(".section2 p").animate({
					"font-size": "30px",
					opacity: "1"
				}, 1500)
				$('.section2 a').delay(500).animate({
					opacity: '1'
				}, 1000);
			} else if(index === 3) {
				$('.section3 h2').animate({
					"font-size": "60px",
					opacity: '1'
				}, 500);
				$('.section3 h2').addClass("xuanz");
				$('.section3 h3').animate({
					opacity: '1',
					left: '0',
					bottom: '0'
				}, 1000)
				$('.section3 h3').addClass("xuanz2");
				$('.section3 p').animate({
					bottom: '0'
				}, 2000);
				$('.section3 a').animate({
					opacity: '1'
				}, 1000);
			} else if(index === 4) {
				$('.section4 a').animate({
					opacity: '1'
				}, 1000);
				$('.section4 .pic1').animate({
					right: '0'
				}, 1000);
				$('.section4 .pic2').animate({
					left: '600px'
				}, 1000);
				$('.section4 .pic3').animate({
					bottom: '70px'
				}, 1000);
				$('.section4 .pic4').animate({
					left: '-100px'
				}, 1000);
			}
		},
		onLeave: function(index, nextIndex, direction) {
			if(index === 1) {
				$('.section1 h2').animate({
					left: '-100%',
					"font-size": "16px"
				}, 500);
				$('.section1 h3').animate({
					right: '-100%'
				}, 500);
				$('.section1 p').animate({
					bottom: '-500%'
				}, 500);
				$('.section1 a').animate({
					opacity: '0'
				}, 500);
			} else if(index === 2) {
				$('.section2 h2').animate({
					left: '-100%',
					top: "-100%"
				}, 500);
				$(".section2 h3").animate({
					opacity: "0",
					"font-size": "12px"
				}, 1000)
				$(".section2 p").animate({
					"font-size": "60px",
					opacity: "0"
				}, 1500)
				$('.section2 a').animate({
					opacity: '0'
				}, 500);
			} else if(index === 3) {
				$('.section3 h2').animate({
					"font-size": "16px",
					opacity: '0'
				}, 500);
				$('.section3 h2').removeClass("xuanz");
				$('.section3 h3').animate({
					opacity: '0',
					left: '-100%',
					bottom: '-100%'
				}, 500)
				$('.section3 h3').removeClass("xuanz2");
				$('.section3 p').animate({
					bottom: '-100%'
				}, 500);
				$('.section3 a').animate({
					opacity: '0'
				}, 500);
			} else if(index === 4) {
				$('.section4 a').animate({
					opacity: '0'
				}, 500);
				$('.section4 .pic1').animate({
					right: '-100%'
				}, 1000);
				$('.section4 .pic2').animate({
					left: '-1200px'
				}, 1000);
				$('.section4 .pic3').animate({
					bottom: '-270px'
				}, 1000);
				$('.section4 .pic4').animate({
					left: '500px'
				}, 1000);

			}
		},
		afterRender: function() {
			$('.section1 h2').animate({
				left: '0',
				"font-size": "66px"
			}, 1000);
			$('.section1 h3').animate({
				right: '0'
			}, 1000);
			$('.section1 p').animate({
				bottom: '0'
			}, 1000);
			$('.section1 a').animate({
				opacity: '1'
			}, 1000);
		}
	});
})