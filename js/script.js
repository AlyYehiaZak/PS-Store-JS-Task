var allProducts = document.querySelectorAll(".addToCart_button")
var totalPrice_btn = document.getElementById("totalPrice_btn")
var cart_div = document.getElementById("cart_content")
var cart_counter_div = document.getElementById("cart_counter")
var totalPrice_div = document.getElementById("totalPrice_div")
var totalPrice = 0
var products_count = 0

allProducts.forEach(function(item){
    item.onclick = function(){

        totalPrice += +(item.getAttribute("price"))
        products_count++
        cart_counter_div.innerHTML = products_count

        var temp = item.getAttribute("productName").toLowerCase()
        var filteredName = temp.split(" ").join("")

        cart_div.innerHTML += '<div class="d-flex justify-content-between mt-3"><div><img style="width: 70px;" src="images/' + filteredName + '.avif" alt="productImage"><span class="fs-4 ps-4">' + item.getAttribute("productName") + '</span></div><span class="fs-4 pe-4 my-auto">' + item.getAttribute("price") + ' EGP</span></div>'

    }
})

totalPrice_btn.onclick = function(){
    totalPrice_div.innerHTML = '<span class="fs-3">' + totalPrice + ' EGP</span>'
}