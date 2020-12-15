import { getQueryParamFromUrl, isNullOrUndefined } from '@/common/functions';
import Axios from 'axios';

export function getCategoryData() {
    return new Promise((resolve, reject) => {
        const url = getQueryParamFromUrl('categoryurl');
        if (isNullOrUndefined(url) === false) {
            Axios.get(url)
                .then((result) => {
                    const data = result.data;
                    resolve(data);
                }).catch(() => reject());
        } else {
            reject();
        }
    });
}