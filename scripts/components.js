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
		<div class="items" v-for='item in items' :key="item">
		<img src="item.path" class="item-pic" alt="item.alt"/>
		<p class="label">{{item.name}]</p>
		</div>
		</div>
		`
}

const Food = {
	template: `<product items="foodProduct" />`,
	name: "food"
}

const Drink = {
	template: `<product items="drinkProduct" />`,
	name: "drink"
}

const Others = {
	template: `<product items="otherProduct" />`,
	name: "others"
}
