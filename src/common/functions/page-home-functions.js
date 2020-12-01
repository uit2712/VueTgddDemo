import { categoryModel } from "@/models/home";

export function getListCategories() {
    let sampleData = categoryModel;
    sampleData = {
        url: '/dtdd',
        title: 'Điện thoại di động, smartphone',
        text: 'Điện thoại',
        iconClassName: 'icontgdd-mobile',
    }

    let result = [];
    for (let i = 0; i < 10; i++) {
        result.push({...sampleData});
    }
    return result;
}