
let sProductImgs = document.querySelector(".single-pro-img")
let productLgImg = sProductImgs.querySelector(".lg-img")
let productSmImgs = sProductImgs.querySelectorAll(".sm-img")
let product = document.querySelectorAll(".product")
function productChoose() {
    productSmImgs.forEach(smImg => {
        smImg.addEventListener("click", () => {
            let smImgAtvalue = smImg.getAttribute("src")
            productLgImg.src = `${smImgAtvalue}`
        })
    })
}
productChoose()