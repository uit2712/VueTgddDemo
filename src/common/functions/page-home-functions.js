import { categoryModel, homeBannerDescriptionModel, homeBannerImageModel } from "@/models/home";

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

export function getListHomeBanners() {
    let sampleData = homeBannerImageModel;
    sampleData = {
        url: 'https://cdn.tgdd.vn/2020/11/banner/iphone-12-800-300-800x300-2.png',
        description: 'Sắm iPhone 12[break]Giảm Online 2 Triệu',
        link: 'https://www.thegioididong.com/dtdd/iphone-12-128gb',
    };

    let result = [];
    for (let i = 0; i < 10; i++) {
        result.push({...sampleData});
    }
    return result;
}

export function getListHomeBannerDescriptions() {
    let sampleData = homeBannerDescriptionModel;
    sampleData = {
        text: 'Sắm iPhone 12<br/>Giảm Online 2 Triệu'
    };

    let result = [];
    for (let i = 0; i < 10; i++) {
        result.push({...sampleData});
    }
    return result;
}