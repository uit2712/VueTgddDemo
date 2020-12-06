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

const installmentModel = {
    value: 0,
}

export const shockedProductModel = {
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
    installment: installmentModel,
    otherInfoIconUrl: '',
    preorderText: '',
}