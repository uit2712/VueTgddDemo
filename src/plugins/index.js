import { toBeautifulJSON } from '@/common/functions';

export default {
    install(Vue) {
        Vue.prototype.$toBeautifulJSON = toBeautifulJSON;
    }
}