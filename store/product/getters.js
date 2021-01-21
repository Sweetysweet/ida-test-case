export default {
    GET_PRODUCTS: ({ products }) => products,

    GET_SORT: ({ currentSortValue, sortMethods }) => {
        if (currentSortValue) {
            return sortMethods.find(s => s.value === currentSortValue)
        } else return sortMethods.find(s => s.value === 'price')
    },

    GET_METHODS: ({ sortMethods }) => sortMethods,

    GET_SORTED_PRODUCTS: ({ products, currentSortValue }) => {
        if (currentSortValue) {
            const sortKey = currentSortValue

            const productsCopy = JSON.parse(JSON.stringify(products))
            productsCopy.sort((curr, next) => next[sortKey] - curr[sortKey])
            return productsCopy
        }  
        else return products
    }
}