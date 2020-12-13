function getListProductsInShockPromotion() {
    return Array.from(document.getElementById("owl-promo")?.querySelectorAll(".item")).map(element => {
        let productId = Number(element.querySelector(".spInfo")?.value);
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
        let discountPrice = Number(element.querySelector(".price")?.querySelector("span")?.innerText?.replace(/\D/g,''));
        let originalPrice = Number(element.querySelector(".price")?.querySelector("strong")?.innerText?.replace(/\D/g,''));
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
        }
    
        return result;
    });
}
JSON.stringify(getListProductsInShockPromotion());

function getListFeaturedProductsInCate() {
    return Array.from(document.getElementById("cate44")?.querySelectorAll("a")).map(element => {
        let text = element.innerHTML;
        let link = element.href;
        
        let result = {
            text,
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