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
        if (this.listManufactures.length === 0) {
            if (this.nextFilter) {
                return this.nextFilter?.filter(listProducts);
            }

            return listProducts;
        }

        let listManuNames = this.listManufactures.map(manu => manu.name);
        listProducts = listProducts.filter(p => listManuNames.findIndex(brand => p.brand.toLowerCase() === brand.toLowerCase()) >= 0);
        if (this.nextFilter) {
            return this.nextFilter?.filter(listProducts);
        }

        return listProducts;
    }
}

export const manuFilter = new ManufacturerFilter();