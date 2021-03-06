function getListProductsInShockPromotion() {
    return Array.from(document.getElementById("owl-promo")?.querySelectorAll(".item")).map(element => {
        let productId = Number(element.querySelector(".spInfo")?.value);
        let brand = element.querySelector(".spInfo")?.dataset.brand;
        let name = element.querySelector("h3")?.innerText;
        let imageUrl = element.querySelector("h3")?.previousElementSibling?.src ? element.querySelector("h3")?.previousElementSibling.src : element.querySelector("h3")?.previousElementSibling?.previousElementSibling.src;
        let link = element.querySelector("a")?.href;
        let label;
        if (element.querySelector(".result-label")) {
            label = {
                iconUrl: element.querySelector(".result-label")?.querySelector("img")?.src,
                text: element.querySelector(".result-label")?.querySelector(".text")?.innerText,
                className: element.querySelector(".result-label")?.className.split(" ").find(name => name.includes("temp")),
            }
        }
        let discountPrice = 0;
        let originalPrice = 0;
        if (element.querySelector(".price")?.querySelector("span")) {
            originalPrice = Number(element.querySelector(".price")?.querySelector("span")?.innerText?.replace(/\D/g,''));
            discountPrice = Number(element.querySelector(".price")?.querySelector("strong")?.innerText?.replace(/\D/g,''));
        } else {
            originalPrice = Number(element.querySelector(".price")?.querySelector("strong")?.innerText?.replace(/\D/g,''));
        }
        let discountPercent = Number(element.querySelector(".price")?.querySelector("i")?.innerText?.replace(/\D/g,''));
        let promotionText = element.querySelector(".promo")?.innerHTML;
        let rating;
        if (element.querySelector(".ratingresult")) {
            rating = {
                totalStars: Array.from(element.querySelector(".ratingresult").querySelectorAll(".icontgdd-ystar")).length,
                totalRatings: Number(element.querySelector(".ratingresult").querySelector("span")?.innerText?.replace(/\D/g,'')),
            }
        }
        let productStatusText = element.querySelector(".textkm")?.innerText;
        let listProperties = [];
        if (element.querySelector(".props")) {
            listProperties = Array.from(element.querySelector(".props").querySelectorAll("span")).map(s => s.innerText);
        }
        let installment = -1;
        if (element.querySelector(".installment")) {
            installment = Number(element.querySelector(".installment").innerText.replace(/^(-)|[^0-9.,]+/g, ''));
        }
        let otherInfoIconUrl = element.querySelector(".icon-imgNew")?.src;
        let preorderText = element.querySelector(".preorder")?.innerText;
        let isFeatured = element.classList.contains("feature");
    
        let result = {
            productId,
            name,
            imageUrl,
            link,
            label,
            originalPrice,
            discountPrice,
            discountPercent,
            promotionText,
            rating,
            productStatusText,
            listProperties, // list string
            installment,
            otherInfoIconUrl,
            preorderText,
            isFeatured,
            brand,
        }
    
        return result;
    });
}
JSON.stringify(getListProductsInShockPromotion());

function getListFeaturedProductsInCate() {
    return Array.from(document.querySelector("#cate44")?.querySelectorAll("a")).map(element => {
        let name = element.innerHTML;
        let link = element.href;
        
        let result = {
            name,
            link,
        }
    
        return result;
    });
}
JSON.stringify(getListFeaturedProductsInCate());

function getListOldProducts() {
    return Array.from(document.getElementById("owl-promo")?.querySelectorAll(".item")).map(element => {
        let name = element.querySelector("h3")?.innerText;
        let imageUrl = element.querySelector("h3")?.previousElementSibling?.src ? element.querySelector("h3")?.previousElementSibling.src : element.querySelector("h3")?.previousElementSibling?.previousElementSibling.src;
        let link = element.querySelector("a")?.href;
        let productId = 0;
        if (link.includes("&") === true) {
            productId = Number(link?.substr(link?.indexOf("pid=") + 4, link.lastIndexOf("&") - link.indexOf("pid=") - 4));
        } else {
            productId = Number(link?.substr(link?.indexOf("pid=") + 4));
        }
        let label;
        if (element.querySelector(".result-label")) {
            label = {
                iconUrl: element.querySelector(".result-label")?.querySelector("img")?.src,
                text: element.querySelector(".result-label")?.querySelector(".text")?.innerText,
                className: element.querySelector(".result-label")?.className.split(" ").find(name => name.includes("temp")),
            }
        }
        let listSplitOldPrice = element.querySelector(".oldprice")?.innerHTML?.split('price-line');
        let discountPrice = 0;
        let originalPrice = 0;
        if (listSplitOldPrice?.length > 0) {
            if (listSplitOldPrice.length === 1) {
                originalPrice = Number(listSplitOldPrice[0].replace(/\D/g,''));
            } else {
                discountPrice = Number(listSplitOldPrice[0].replace(/\D/g,''));
                originalPrice = Number(listSplitOldPrice[1].replace(/\D/g,''));
            }
        }
        let discountPercent = 0;
        let listLabelElements = Array.from(element.querySelectorAll('label'));
        let lowerThanNewProductPrice = 0, lowerThanNewProductPercent = 0, newProductPrice = 0;
        let isNewProductStopSelling = false;
        let tag = '';
        if (listLabelElements.length > 0) {
            if (listLabelElements[0].innerText.toLowerCase().includes("máy") === true) {
                tag = "máy";
            }
            if (listLabelElements[0].innerText.toLowerCase().includes("sản phẩm") === true) {
                tag = "sản phẩm";
            }
            if (listLabelElements.length === 1) {
                isNewProductStopSelling = true;
            } else {
                newProductPrice = Number(listLabelElements[0].innerHTML?.replace(/\D/g,''));
                let splitCheaperPrice = listLabelElements[1].innerHTML.split('₫');
                if (splitCheaperPrice.length === 2) {
                    lowerThanNewProductPrice = Number(splitCheaperPrice[0].replace(/\D/g,''));
                    lowerThanNewProductPercent = Number(splitCheaperPrice[1].replace(/\D/g,''));
                }
            }
        }
        let remainingQuantity = Number(element.querySelector(".quantity")?.innerText?.replace(/\D/g,''));
        let shockedLabel = element.querySelector(".labelshock-top")?.innerText;

        let promotionText = element.querySelector(".promo")?.innerHTML;
        let rating;
        if (element.querySelector(".ratingresult")) {
            rating = {
                totalStars: Array.from(element.querySelector(".ratingresult").querySelectorAll(".icontgdd-ystar")).length,
                totalRatings: Number(element.querySelector(".ratingresult").querySelector("span")?.innerText?.replace(/\D/g,'')),
            }
        }
        let productStatusText = element.querySelector(".textkm")?.innerText;
        let listProperties = [];
        if (element.querySelector(".props")) {
            listProperties = Array.from(element.querySelector(".props").querySelectorAll("span")).map(s => s.innerText);
        }
        let installment = -1;
        if (element.querySelector(".installment")) {
            installment = Number(element.querySelector(".installment").innerText.replace(/^(-)|[^0-9.,]+/g, ''));
        }
        let otherInfoIconUrl = element.querySelector(".icon-imgNew")?.src;
        let preorderText = element.querySelector(".preorder")?.innerText;
        let isFeatured = element.classList.contains("feature");
    
        let result = {
            productId,
            name,
            imageUrl,
            link,
            label,
            originalPrice,
            discountPrice,
            discountPercent,
            promotionText,
            rating,
            productStatusText,
            listProperties, // list string
            installment,
            otherInfoIconUrl,
            preorderText,
            isFeatured,
            remainingQuantity,
            lowerThanNewProductPrice,
            lowerThanNewProductPercent,
            isNewProductStopSelling,
            tag,
            newProductPrice,
            shockedLabel,
        }
    
        return result;
    });
}
JSON.stringify(getListOldProducts());

function getListUtilitiesInFooter() {
    return Array.from(document.getElementById("colfoot1")?.querySelectorAll("li")).map(element => {
        let linkEl = element.querySelector("a");
        let link = linkEl?.href;
        let text = linkEl?.innerText;
        let title = linkEl?.title;
        let isOpenInNewTab = false;
        if (linkEl?.target) {
            isOpenInNewTab = true;
        }
    
        let result = {
            link,
            text,
            title,
            isOpenInNewTab,
        }
    
        return result;
    });
}
JSON.stringify(getListUtilitiesInFooter());

function getListManuInCate() {
    return Array.from(document.querySelector(".manu")?.querySelectorAll("a")).map(element => {
        let link = element.href;
        let name = element.dataset.name;
        let imageUrl = element.querySelector("img")?.src;
        let id = Number(element.dataset.id);
    
        let result = {
            link,
            name,
            imageUrl,
            id,
        }
    
        return result;
    });
}
JSON.stringify(getListManuInCate().filter(manu => manu.imageUrl !== undefined && manu.imageUrl !== null && manu.imageUrl !== ''));

function getListPriceFilterLabelsInCate() {
    return Array.from(document.querySelector(".fl")?.querySelectorAll("a")).map(element => {
        let link = element.href;
        let name = element.innerText;
        let id = Number(element.dataset.id);
    
        let result = {
            link,
            name,
            id
        }
    
        return result;
    });
}
JSON.stringify(getListPriceFilterLabelsInCate());

function getSliderInCate() {
    return Array.from(document.getElementById("owl-home")?.querySelectorAll(".owl-item")).map(element => {
        let imageUrl = element.querySelector("img")?.src;
        let link = element.querySelector("a")?.href;
        let description = element.querySelector("img")?.alt;
    
        let result = {
            link,
            imageUrl,
            description,
        }
    
        return result;
    });
}
JSON.stringify(getSliderInCate());

function getMainFilterInCate() {
    return Array.from(document.querySelector(".property")?.querySelectorAll(".prop")).map(element => {
        if (element.querySelector("strong")) {
            let name = element.querySelector("strong").innerText;
            let childPropsEl = element.querySelectorAll("a");
            let listChildProps = Array.from(childPropsEl).map(propEl => {
                return {
                    propId: propEl.dataset.id,
                    link: propEl.href,
                    name: propEl.innerText.trim(),
                }
            });
            if (listChildProps.length > 0) {
                return {
                    name,
                    listChildProps
                }
            }
        }
    
        return null;
    });
}
JSON.stringify(getMainFilterInCate().filter(mf => mf !== null && mf !== undefined));

function getListBenefitsInCate() {
    return Array.from(document.querySelector(".plc")?.querySelectorAll("li")).map(element => {
        let iconClassName = element.querySelector("i")?.className?.trim();
        let name = element.querySelector("span")?.innerHTML;
    
        let result = {
            iconClassName,
            name,
        }
    
        return result;
    });
}
JSON.stringify(getListBenefitsInCate());