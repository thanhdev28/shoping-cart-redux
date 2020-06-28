const initialState = [
    {
        id : 1,
        name : 'Iphone 20',
        description: 'asdadasd',
        image: '',
        price: 1000,
        inventory: 10
    },
    {
        id : 2,
        name : 'Samsung 20',
        description: 'asdadasd',
        image: '',
        price: 2000,
        inventory: 10
    },
    {
        id : 3,
        name : 'Sony 20',
        description: 'asdadasd',
        image: '',
        price: 30000,
        inventory: 10
    }
];
const products = (state = initialState, action) => {
    switch(action.type) {
        default:
        return [...state];
    }
    
}
export default products;