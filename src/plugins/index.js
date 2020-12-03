import { toBeautifulJSON } from '@/common/functions';
import { apiLinkType } from '@/common/types/page-home-types';
import $ from 'jquery';

export default {
    install(Vue) {
        Vue.prototype.$toBeautifulJSON = toBeautifulJSON;
        Vue.prototype.$apiLinkType = apiLinkType;
        Vue.prototype.$ = $;
    }
}