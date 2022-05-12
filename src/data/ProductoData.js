export const ProductoData = [
   { 
        id: '0',
        name: 'Air Jordans',
        category: 'Calzado',
        img: 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290505_1000.jpg',
        description: '"Tenis Air Jordan 1 High Red OG"',
        stock: '6',
        price: '$ 200'
    },
    { 
        id: '1',
        name: 'Jordans',
        category: 'Calzado',
        img: 'https://cdn-images.farfetch-contents.com/14/60/16/40/14601640_22559260_1000.jpg',
        description: '"Tenis Air Jordan 6 Retro Cactus Jack de Jordan x Travis Scott"',
        stock: '5',
        price: '$ 1,081'

    },
    { 
        id: '2',
        name: 'Air Jordans',
        category: 'Calzado',
        img: 'https://cdn-images.farfetch-contents.com/17/72/00/35/17720035_37178543_1000.jpg',
        description: '"Tenis Air Jordan 1 Low"',
        stock: '2',
        price: '$ 271'
    },
    { 
        id: '3',
        name: 'Air Jordans',
        category: 'Calzado',
        img: 'https://cdn-images.farfetch-contents.com/17/67/32/68/17673268_36959155_1000.jpg',
        description: '"Tenis Jordan 1 Low Green Toe"',
        stock: '6',
        price: '$ 321'
    },
    { 
        id: '4',
        name: 'Babucha Nike',
        category: 'Indumentaria',
        img: 'https://cdn-images.farfetch-contents.com/18/04/05/20/18040520_39108589_1000.jpg',
        description: '"Babucha con logo bordado"',
        stock: '10',
        price: '$ 85'
    },
    { 
        id: '5',
        name: 'Campera Jordan',
        category: 'Indumentaria',
        img: 'https://cdn-images.farfetch-contents.com/17/81/97/28/17819728_37542814_1000.jpg',
        description: '"Camperón PSG Negro"',
        stock: '10',
        price: '$ 446'
    },
];

const ProdPromise = new Promise((resp) => {
	resp(ProductoData)
}, )

export const getItem = () => {
	return ProdPromise
}