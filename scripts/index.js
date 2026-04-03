$(document).ready(function (event) {
	$('header').css('transform', 'translateY(-110%)');
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

/*const foodProduct = [
	{
		path: "images/bread.jpg",
		name: "Bread",
		alt: "image of a bread"
	},
	{
		path: "images/gari.jpg",
		name: "Gari",
		alt: "image of a Gari"
	},
	{
		path: "images/sugar.jpg",
		name: "Sugar",
		alt: "image of sugar"
	}
];

const drinkProduct = [
	{
		path: "images/bel_cola.jpg",
		name: "Bel Cola",
		alt: "image of a bottle of Bel Cola"
	},
	{
		path: "images/beta_malt.jpg",
		name: "Beta Malt",
		alt: "image of a bottle of Beta Malt"
	},
	{
		path: "images/rush_energy_drink.jpg",
		name: "Rush Energy Drink",
		alt: "image of a bottle of Rush Energy Drink"
	}
];

const otherProduct = [
	{
		path: "images/bag_of_water.jpg",
		name: "Bag Of Water",
		alt: "image of a bottle of bag of water"
	},
	{
		path: "images/mosquito_spray.jpg",
		name: "Insecticide Spray",
		alt: "image of an insecticide spray"
	},
	{
		path: "images/toilet_roll.jpg",
		name: "Toilet Roll",
		alt: "image of toilet roll"
	}
];

const Product = {
	props: ["items"],
	template: `
		<div class="prod-cont">
		<div class="items" v-for='item in items' :key="item.name">
		<img :src="item.path" class="item-pic" :alt="item.alt"/>
		<p class="label">{{item.name}}</p>
		</div>
		</div>
		`
}

const Food = {
	data () {
		return{
			foodProduct
		}
	},
	components: {Product},
	template: `<Product :items="foodProduct" />`,
	name: "food"
}

const Drink = {
	data () {
		return{
			drinkProduct
		}
	},
	components: {Product},
	template: `<Product :items="drinkProduct" />`,
	name: "drink"
}

const Others = {
	data (){
		return {
			otherProduct
		}
	},
	components: {Product},
	template: `<Product :items="otherProduct" />`,
	name: "others"
}*/

const app = Vue.createApp({
		data() {
			return {
				active_product: "food"
			}
		},
		methods: {
			showExcess(ele) {
				//const parentElement = ele.parentElement;
				console.log(ele.parentElement);
				//parentElement.children[0].display, parentElement.children[1].display = "none";
				//parentElement.children[2].display = "none";
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
	}
	});
	app.mount("#app");
	//console.log(Food, Drink, Others)