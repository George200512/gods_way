$(document).ready(function (event) {
	$('header').css('transform', 'translateY(-136%)');
	$('.s1-img').css({
		transform: 'rotate(0deg)',
		opacity: '1'
	});
	$('.s1-h1').css({
		transform: 'translateX(0)',
		opacity: '1'
	});
	$('.s1-p').css({
		transform: 'translateX(0)',
		opacity: '1'
	});
	const threshold = 0.2*window.innerHeight;
	window.addEventListener('scroll', function (event) {
		let currentScroll = window.scrollY;
		if (currentScroll > threshold) {
			$('.nav-btn').css('opacity', '1');
		}else{
			$('.nav-btn').css('opacity', '0');
		}
	});
	const s2Div1Observer = new IntersectionObserver(
		function (entries) {
			entries.forEach(e=>{
				if (e.isIntersecting){
					e.target.style.transform = 'translateY(0)';
					e.target.style.opacity = '1';
					s2Div1Observer.unobserve(e.target);
				}
			});
		},
		{
		threshold: 0.2
		} 
		);
	s2Div1Observer.observe($('.s2-div1')[0]);
	s2Div1Observer.observe($('.section-3')[0]);
	$('.s4-div').each((idx, ele) => {
		s2Div1Observer.observe(ele);
	});

	
});


const app = Vue.createApp({
		data() {
			return {
				active_product: "food"
			}
		},
		methods: {
			showExcess(ele) {
				const parentElement = ele.parentElement;
				parentElement.children[0].style.display = "none";
				parentElement.children[1].style.display = "none";
				parentElement.children[2].style.display = "inline";
			},
			scrollUp() {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			},

		},
		components: {
		Food:window.Food,
		Drink:window.Drink, 
		Others:window.Others
	},
	

	});
	app.mount("#app");
	//console.log(Food, Drink, Others)