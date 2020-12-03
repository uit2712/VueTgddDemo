import { toBeautifulJSON } from '@/common/functions';
import { apiLinkType } from '@/common/types/page-home-types';

export default {
    install(Vue) {
        Vue.prototype.$toBeautifulJSON = toBeautifulJSON;
        Vue.prototype.$apiLinkType = apiLinkType;
    }
}