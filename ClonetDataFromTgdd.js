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
        let installment;
        if (element.querySelector(".installment")) {
            installment = {
                value: Number(element.querySelector(".installment").innerText.replace(/^(-)|[^0-9.,]+/g, ''))
            }
        }
        let otherInfoIconUrl = element.querySelector(".icon-imgNew")?.src;
        let preorderText = element.querySelector(".preorder")?.innerText;
    
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
        }
    
        return result;
    });
}