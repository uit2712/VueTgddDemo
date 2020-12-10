import { getQueryParamFromUrl, isNullOrUndefined } from '@/common/functions';
import Axios from 'axios';

export function getHomeData() {
    return new Promise((resolve, reject) => {
        const url = getQueryParamFromUrl('caseurl');
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