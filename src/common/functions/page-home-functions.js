import { promotionBannerModel, productModel, specificNewsModel, twoBannersModel } from "@/models/home";

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

export function getPromotionBanner() {
    let sampleData = promotionBannerModel;
    sampleData = {
        imageUrl: 'https://cdn.tgdd.vn/2020/12/banner/1200-75-1200x75.png',
        description: 'Mừng Trung Thu[break]Giảm Đến 49%',
        link: 'https://www.thegioididong.com/flashsale',
    };
    return sampleData;
}

export function getListShockedProducts() {
    let sampleData = productModel;

    let result = [];
    sampleData = {
        productId: 0,
        link: '/dtdd/samsung-galaxy-note-20-ultra-5g-trang',
        imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/230867/samsung-galaxy-note-20-ultra-5g-trang-600x600-2-400x400.jpg',
        name: 'Samsung Galaxy Note 20 Ultra 5G Trắng',
        preorderText: 'Đặt trước đến 07/12',
        productStatusText: 'Hàng sắp về',
        originalPrice: 32990000,
        discountPrice: 0,
        promotionText: 'Tặng ngay 6 triệu, Thu cũ đổi mới, Trả góp 0%',
        otherInfoIconUrl: 'https://cdn.tgdd.vn/ValueIcons/1/Label_01-05.png',
    };
    result.push({...sampleData});

    sampleData = {
        productId: 1,
        link: '/dtdd/samsung-galaxy-m51',
        installment: {
            value: 0.5,
        },
        imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-white-600x600-400x400.jpg',
        label: {
            iconUrl: 'https://cdn.tgdd.vn/2020/10/content/icon2-50x50.png',
            text: 'THU CŨ ĐỔI MỚI',
        },
        name: 'Samsung Galaxy M51',
        productStatusText: 'Hàng sắp về',
        originalPrice: 9490000,
        discountPrice: 8990000,
        discountPercent: 5,
        rating: {
            totalStars: 4,
            totalRatings: 128,
        },
    };
    result.push({...sampleData});

    sampleData = {
        productId: 2,
        link: '/laptop/lenovo-thinkbook-15iil-i3-20sm00d9vn',
        imageUrl: 'https://cdn.tgdd.vn/Products/Images/44/230161/lenovo-thinkbook-15iil-i3-20sm00d9vn-021320-101327-400x400.jpg',
        name: 'Lenovo ThinkBook 15IIL i3 1005G1/4GB/512GB/Win10 (20SM00D9VN)',
        label: {
            text: 'Giảm sốc',
            iconUrl: 'https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png',
        },
        productStatusText: 'Online giá rẻ',
        listProperties: ['RAM 4GB', 'Ổ cứng SSD 512GB'],
        originalPrice: 12990000,
        discountPrice: 11690000,
        promotionText: 'Quà <b>100.000₫</b>',
        otherInfoIconUrl: 'https://cdn.tgdd.vn/ValueIcons/1/Label-Intel-Gen10.png',
    };
    result.push({...sampleData});

    return result;
}