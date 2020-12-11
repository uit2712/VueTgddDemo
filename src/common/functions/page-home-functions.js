import { promotionBannerModel } from "@/models/home";

export function getPromotionBanner() {
    let sampleData = promotionBannerModel;
    sampleData = {
        imageUrl: 'https://cdn.tgdd.vn/2020/12/banner/1200-75-1200x75.png',
        description: 'Mừng Trung Thu[break]Giảm Đến 49%',
        link: 'https://www.thegioididong.com/flashsale',
    };
    return sampleData;
}