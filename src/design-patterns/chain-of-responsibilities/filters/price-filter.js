class PriceFilter{
    nextFilter = null;
    fromPrice = -1;
    toPrice = -1;

    setNextFilter(nextFilter) {
        this.nextFilter = nextFilter;
    }

    setPriceFilterId(priceFilterId) {
        switch(priceFilterId) {
            default:
                this.fromPrice = -1;
                this.toPrice = -1;
                break;
            case 7:
                this.fromPrice = -1;
                this.toPrice = 2000000;
                break;
            case 9:
                this.fromPrice = 2000000;
                this.toPrice = 4000000;
                break;
            case 289:
                this.fromPrice = 4000000;
                this.toPrice = 7000000;
                break;
            case 562:
                this.fromPrice = 7000000;
                this.toPrice = 13000000;
                break;
            case 252:
                this.fromPrice = 13000000;
                this.toPrice = 20000000;
                break;
            case 253:
                this.fromPrice = 20000000;
                this.toPrice = -1;
                break;
        }
    }

    

    filter(listProducts = []) {
        if (this.fromPrice < 0 && this.toPrice < 0) {
            if (this.nextFilter) {
                return this.nextFilter?.filter(listProducts);
            }

            return listProducts;
        }

        if (this.fromPrice < 0 && this.toPrice > 0) { // check max only
            listProducts = listProducts.filter(p => p.originalPrice <= this.toPrice);
        } else {
            if (this.fromPrice > 0 && this.toPrice < 0) { // check min only
                listProducts = listProducts.filter(p => p.originalPrice >= this.fromPrice);
            } else {
                if (this.fromPrice > 0 && this.toPrice > 0) {
                    listProducts = listProducts.filter(p => p.originalPrice >= this.fromPrice && p.originalPrice <= this.toPrice);
                }
            }
        }

        if (this.nextFilter) {
            return this.nextFilter?.filter(listProducts);
        }

        return listProducts;
    }
}

export const priceFilter = new PriceFilter();