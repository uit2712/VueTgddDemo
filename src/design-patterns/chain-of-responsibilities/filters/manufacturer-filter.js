class ManufacturerFilter {
    nextFilter = null;
    listManufactures = [];

    setNextFilter(nextFilter) {
        this.nextFilter = nextFilter;
    }

    setListManufactures(listManufactures) {
        this.listManufactures = listManufactures;
    }

    filter(listProducts = []) {
        let listManuNames = this.listManufactures.filter(manu => Number.isInteger(manu.actualId) === false).map(manu => manu.name);
        if (Array.isArray(listManuNames) === false || listManuNames.length === 0) {
            if (this.nextFilter) {
                return this.nextFilter?.filter(listProducts);
            }

            return listProducts;
        }

        listProducts = listProducts.filter(p => listManuNames.findIndex(brand => p.brand.toLowerCase() === brand.toLowerCase()) >= 0);
        if (this.nextFilter) {
            return this.nextFilter?.filter(listProducts);
        }

        return listProducts;
    }
}

export const manuFilter = new ManufacturerFilter();