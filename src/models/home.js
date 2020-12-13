export const categoryModel = {
    url: '',
    title: '',
    text: '',
}

export const homeBannerImageModel = {
    url: '',
    description: '',
    link: '',
}

export const homeBannerDescriptionModel = {
    text: '',
}

export const newsModel = {
    imageUrl: '',
    postUrl: '',
    title: '',
    createdTime: '',
}

export const specificNewsModel = {
    categoryName: '',
    categoryLink: '',
    listPosts: [newsModel],
}

export const twoBannersModel = {
    imageUrl: '',
    link: '',
}

export const promotionBannerModel = {
    imageUrl: '',
    description: '',
    link: '',
}

const shockedProductLabelModel = {
    iconUrl: '',
    text: '',
}

const ratingProductModel = {
    totalStars: 0,
    totalRatings: 0,
}

export const productModel = {
    productId: 0,
    name: '',
    imageUrl: '',
    link: '',
    label: shockedProductLabelModel,
    originalPrice: 0,
    discountPrice: 0,
    discountPercent: 0,
    promotionText: '',
    rating: ratingProductModel,
    productStatusText: '',
    listProperties: [], // list string
    installment: -1,
    otherInfoIconUrl: '',
    preorderText: '',
    isFeatured: false,
}

export const categoryDetailModel = {
    categoryId: 42,
    featuredText: "Điện thoại nổi bật nhất",
    listProductsClassNames: "homeproduct item2020",
    listFeaturedProducts: [{
        name: "Samsung Galaxy Note 20",
        link: "https://www.thegioididong.com/dtdd/samsung-galaxy-note-20"
    }],
    seeMoreProductsInfo: {
      link: "/dtdd",
      className: "mobile",
      text: "Xem tất cả <b>183</b> điện thoại"
    },
    listProducts: [productModel]
}

export const oldProductModel = {
    ...productModel,
    remainingQuantity: 0,
    lowerThanNewProductPrice: 0,
    lowerThanNewProductPercent: 0,
    isNewProductStopSelling: false,
    tag: 'máy',
    newProductPrice: 0,
    shockedLabel: 'Giảm đến 5%',
}