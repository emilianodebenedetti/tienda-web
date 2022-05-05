export const ProductoData = [
   { 
        id: '1',
        name: 'Air Jordan 1 - Red',
        category: 'Shoes',
        img: 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290505_1000.jpg',
        description: 'tenis altos WMNS Air Jordan 1 High OG',
        stock: '6',
        price: '$ 200'
    },
    { 
        id: '2',
        name: 'Air Jordan 1 - Black',
        category: 'Shoes',
        img: 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290505_1000.jpg',
        description: 'tenis altos WMNS Air Jordan 1 High OG',
        stock: '5',
        price: '$ 250'

    },
    { 
        id: '3',
        name: 'Air Jordan 1 - "Limited Edition"',
        category: 'Shoes',
        img: 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290505_1000.jpg',
        description: 'tenis altos WMNS Air Jordan 1 High OG',
        stock: '2',
        price: '$ 150'
    },
    { 
        id: '4',
        name: 'Black & Red Nike jacket',
        category: 'dress',
        img: 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290505_1000.jpg',
        description: 'tenis altos WMNS Air Jordan 1 High OG',
        stock: '6',
        price: '$ 200'
    },
    { 
        id: '5',
        name: 'Black slipper',
        category: 'dress',
        img: 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290505_1000.jpg',
        description: 'tenis altos WMNS Air Jordan 1 High OG',
        stock: '39',
        price: '$ 100'
    },
    { 
        id: '6',
        name: 'Red Nike T-shirt',
        category: 'dress',
        img: 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290505_1000.jpg',
        description: 'tenis altos WMNS Air Jordan 1 High OG',
        stock: '10',
        price: '$ 100'
    },
];

const ProdPromise = new Promise((resp) => {
	resp(ProductoData)
}, 2000)

export const getItem = () => {
	return ProdPromise
}