let menuIcon = document.querySelector("#menuIcon")
let navBar = document.querySelector("#navBar")



function menuHideShow() {

    let counter = 0
    menuIcon.addEventListener("click", () => {

        counter++
        if (counter == 1) {
            navBar.classList.add("show")


        }
        else if (counter == 2) {
            navBar.classList.remove("show")
            return counter = 0
        }
    })


}
menuHideShow()

