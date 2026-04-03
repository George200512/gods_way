const foodProduct = [
	{
		path: "images/bread.jpg",
		name: "Bread"
	},
	{
		path: "images/gari.jpg",
		name: "Gari"
	},
	{
		path: "images/sugar.jpg",
		name: "Sugar"
	}
];

const drinkProduct = [
	{
		path: "images/bel_cola.jpg",
		name: "Bel Cola"
	},
	{
		path: "images/beta_malt.jpg",
		name: "Beta Malt"
	},
	{
		path: "images/rush_energy_drink.jpg",
		name: "Rush Energy Drink"
	}
];

const otherProduct = [
	{
		path: "images/bag_of_water.jpg",
		name: "Bag Of Water"
	},
	{
		path: "images/mosquito_spray.jpg",
		name: "Insecticide Spray"
	},
	{
		path: "images/toilet_roll.jpg",
		name: "Toilet Roll"
	}
];

const Product = {
	props: ["items"],
	template: `
		<div class="prod-cont">
		<div class="items" v-for='item in items' :key="item">
		<img src="item.path" class="item-pic" />
		<p class="label">{{item.name}]</p>
		</div>
		</div>
		`
}

const 