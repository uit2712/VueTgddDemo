import { toBeautifulJSON } from '@/common/functions';
import { apiLinkType } from '@/common/types/page-home-types';
import { formatCurrencyFilter, formatPercentFilter, upperCaseFirstLetterFilter } from '@/filters';

export default {
    install(Vue) {
        Vue.prototype.$toBeautifulJSON = toBeautifulJSON;
        Vue.prototype.$apiLinkType = apiLinkType;

        Vue.filter('formatCurrency', formatCurrencyFilter);
        Vue.filter('formatPercent', formatPercentFilter);
        Vue.filter('upperCaseFirstLetter', upperCaseFirstLetterFilter);
    }
}