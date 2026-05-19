const foodProduct = [
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
		path: "images/download.webp",
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
		<div class="items" v-for='item in items' :key="item.name" ref="items">
		<img :src="item.path" class="item-pic" :alt="item.alt"/>
		<p class="label">{{item.name}}</p>
		</div>
		</div>
		`,
	mounted() {
		const Observer = new IntersectionObserver(
		function (entries) {
			entries.forEach(e=>{
				if (e.isIntersecting){
					e.target.style.opacity = '1';
					Observer.unobserve(e.target);
				}
			});
		},
		{
		threshold: 0.2
		} 
		);
		this.$refs.items.forEach((ele) => {
			Observer.observe(ele);
		});
	
	}
}

window.Food = {
	data () {
		return{
			foodProduct
		}
	},
	components: {Product},
	template: `<Product :items="foodProduct" />`,
	name: "food"
}

window.Drink = {
	data () {
		return{
			drinkProduct
		}
	},
	components: {Product},
	template: `<Product :items="drinkProduct" />`,
	name: "drink"
}

window.Others = {
	data (){
		return {
			otherProduct
		}
	},
	components:  {Product},
	template: `<Product :items="otherProduct" />`,
	name: "others"
}