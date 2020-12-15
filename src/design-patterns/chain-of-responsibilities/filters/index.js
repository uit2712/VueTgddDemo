import { manuFilter } from './manufacturer-filter';
import { priceFilter } from './price-filter';

const _filter = manuFilter;
manuFilter.setNextFilter(priceFilter)
export default _filter;