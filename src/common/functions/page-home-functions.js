import { categoryModel, homeBannerDescriptionModel, homeBannerImageModel, specificNewsModel, twoBannersModel } from "@/models/home";

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

export function getListTechNews() {
    let sampleData = specificNewsModel;
    sampleData = {
        categoryName: 'Tin công nghệ',
        categoryLink: '/tin-tuc',
        listPosts: [
            {
                postUrl: '/tin-tuc/ai-se-dai-dien-trung-quoc-lap-day-cho-trong-huawei-de-lai-1310348',
                imageUrl: 'https://cdn.tgdd.vn/Files/2020/11/30/1310348/huaweiusa_800x450-100x100.jpg',
                title: 'Chẳng may Huawei mất vị thế trên trường quốc tế, ai sẽ đại điện Trung Quốc lấp đầy chỗ trống đó!',
                createdTime: '1 giờ trước',
            }
        ]
    }

    let result = [];
    result.push({...sampleData});
    return result;
}

export function getTwoBanners() {
    let sampleData = twoBannersModel;
    let result = [];
    sampleData = {
        imageUrl: 'https://cdn.tgdd.vn/2020/12/banner/M51-398-110-398x110.png',
        link: 'https://www.thegioididong.com/dtdd/samsung-galaxy-m51',
    }
    result.push({...sampleData});
    sampleData = {
        imageUrl: 'https://cdn.tgdd.vn/2020/11/banner/398-110-398x110-2.png',
        link: 'https://www.thegioididong.com/apple#iphone',
    }
    result.push({...sampleData});

    return result;
}