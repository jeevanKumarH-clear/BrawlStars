const config = {
	multiplier: 200,
	margin: 50,
	topMargin: 110,
	topMultiplier: 270,
	brawlers: [
		{
			name: 'Bo',
			rank: 1,
			trophies: 6,
			rarity: 'mythic',
			image: '/images/bo.jpeg',
		},
		{
			name: '8-Bit',
			rank: 6,
			trophies: 43,
			rarity: 'rare',
			image: '/images/8bit.jpg',
		},
		{
			name: 'Rosa',
			rank: 3,
			trophies: 25,
			rarity: 'superRare',
			image: '/images/Rosa.png',
		},
		{
			name: 'El Primo',
			rank: 7,
			trophies: 77,
			rarity: 'legendary',
			image: '/images/elPrimo.png',
		},
		{
			name: 'Edgar',
			rank: 7,
			trophies: 77,
			rarity: 'legendary',
			image: '/images/edgar.png',
		},
		{
			name: 'Tara',
			rank: 9,
			trophies: 122,
			rarity: 'chromatic',
			image: '/images/Tara.png',
		},
	],
	size: 2,
	headers: [
		'name',
		'rank',
		'trophies',
		'power',
		'rarity',
		'coinsForUpgrade',
		'brawlCoins',
		'image',
	],

	sortBy: [
		'least Trophies',
		'most Trophies',
		'power Level',
		'by Rarity',
		'by Rarity Descending',
		'closest To Next Rank',
	],

	rarityLevel: {
		startingBrawler: 1,
		rare: 2,
		superRare: 3,
		epic: 4,
		mythic: 5,
		legendary: 6,
		chromatic: 7,
	},

	rankTrophies: {
		1: 0,
		2: 10,
		3: 20,
		4: 30,
		5: 40,
		6: 60,
		7: 80,
		8: 100,
		9: 120,
		10: 140,
		11: 160,
		12: 180,
		13: 220,
		14: 260,
		15: 300,
		16: 340,
		17: 380,
		18: 420,
		19: 460,
		20: 500,
		21: 550,
		22: 600,
		23: 650,
		24: 700,
		25: 750,
		26: 800,
		27: 850,
		28: 900,
		29: 950,
		30: 1000,
		31: 1050,
		32: 1100,
		33: 1150,
		34: 1200,
		35: 1250,
	},
};

export default config;
