
export const getRealPrice = (books) => {
    try {
        let arrayBooksPrice = []
        for (let index = 0; index < books.length; index++) {
            arrayBooksPrice.push(books[index].realPrice)
            // console.log(typeof books[index].realPrice);
        }
        let rangePrice = []
        if (arrayBooksPrice.length > 1) {
            const maxPrice = Math.max(...arrayBooksPrice)
            const minPrice = Math.min(...arrayBooksPrice)
            rangePrice.push(maxPrice)
            rangePrice.push(minPrice)
            // rangePrice.push()
            // console.log("max:",typeof maxPrice);
        }
        else{
            rangePrice.push(arrayBooksPrice[0])
        }
        return rangePrice
        
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch realPrice")
    }
}


export const getPriceAfterDiscount = (books) => {
    try {
        let arrayBooksPrice = []
        for (let index = 0; index < books.length; index++) {
            arrayBooksPrice.push(books[index].priceAfterDiscount)
            // console.log(typeof books[index].realPrice);
        }
        let rangePrice = []
        if (arrayBooksPrice.length > 1) {
            const maxPrice = Math.max(...arrayBooksPrice)
            const minPrice = Math.min(...arrayBooksPrice)
            rangePrice.push(maxPrice)
            rangePrice.push(minPrice)
            // rangePrice.push()
            // console.log("max:",typeof maxPrice);
        }
        else{
            rangePrice.push(arrayBooksPrice[0])
        }
        //  rangePrice
        return rangePrice
        
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch priceAfterDiscount")
    }
}