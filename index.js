var product = [{
    id: 1,
    image: 'https://cf.shopee.co.th/file/521e06dead2d47ef2bbf9872ea0c70b3',
    name: 'T-shit',
    piece: 5000000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}, {
    id: 2,
    image: 'https://cf.shopee.co.th/file/5d06c2e47e2b1b0bc7d5c46512c29574',
    name: 's-shittt',
    piece: 7500,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}, {
    id: 3,
    image: 'https://static.wixstatic.com/media/07dfe4_b5efc2f4bfdb46d7b5d1eaa6bb811e34~mv2_d_3202_4144_s_4_2.jpg/v1/fill/w_498,h_665,al_c,q_85,usm_0.66_1.00_0.01/07dfe4_b5efc2f4bfdb46d7b5d1eaa6bb811e34~mv2_d_3202_4144_s_4_2.jpg',
    name: 'GWAR',
    piece: 1500,
    description: 'Lorem ipsum dolor sit amet conolor sit amet consectetolor sit amet consectetolor sit amet consolor sit amet consectetectetsectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}, {
    id: 4,
    image: 'https://cf.shopee.co.th/file/f9b984d408826a12c4e76855ee49acbd',
    name: 'l-shit',
    piece: 5000000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}, {
    id: 5,
    image: 'https://lzd-img-global.slatic.net/g/ff/kf/Sb125adb661f24c359e7a102693f7f3960.jpg_720x720q80.jpg_.webp',
    name: 'g-shittt',
    piece: 7500,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}, {
    id: 6,
    image: 'https://inwfile.com/s-j/ryicby.jpg',
    name: 'Hakirachan',
    piece: 1500,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}, {
    id: 7,
    image: 'https://cf.shopee.co.th/file/521e06dead2d47ef2bbf9872ea0c70b3',
    name: 'Poporaper',
    piece: 5000000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}, {
    id: 8,
    image: 'https://cf.shopee.co.th/file/5d06c2e47e2b1b0bc7d5c46512c29574',
    name: 'ironmaden',
    piece: 7500,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}, {
    id: 9,
    image: 'https://static.wixstatic.com/media/07dfe4_b5efc2f4bfdb46d7b5d1eaa6bb811e34~mv2_d_3202_4144_s_4_2.jpg/v1/fill/w_498,h_665,al_c,q_85,usm_0.66_1.00_0.01/07dfe4_b5efc2f4bfdb46d7b5d1eaa6bb811e34~mv2_d_3202_4144_s_4_2.jpg',
    name: 'GWAR',
    piece: 1500,
    description: 'Lorem ipsum dolor sit amet conolor sit amet consectetolor sit amet consectetolor sit amet consolor sit amet consectetectetsectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}, {
    id: 10,
    image: 'https://cf.shopee.co.th/file/f9b984d408826a12c4e76855ee49acbd',
    name: 'nikr',
    piece: 5000000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}, {
    id: 11,
    image: 'https://lzd-img-global.slatic.net/g/ff/kf/Sb125adb661f24c359e7a102693f7f3960.jpg_720x720q80.jpg_.webp',
    name: 'asd',
    piece: 7500,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}, {
    id: 12,
    image: 'https://inwfile.com/s-j/ryicby.jpg',
    name: 'GGG',
    piece: 1500,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum facilis natus corrupti itaque asperiores',
    type: 'T-shit'
}]

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < (product.length); i++) {
        html += `<div onclick="openModal(${i})" class="item ${product[i].type}">
                    <img src=" ${product[i].image}">
                    <figcaption>
                        ${product[i].name}
                    </figcaption>
                    <p> ${numberWithCommas(product[i].piece)} THB</p>
                </div>`;
    }
    $("#productlist").html(html);
})

var productindex = 0;

function openModal(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDes").css('display', 'flex');
    $("#modalDesImage").attr('src', product[index].image)
    $(".desProduct").attr('src', product[index].description)
    $(".nameProduct").text(product[index].name)
    $(".pieceProduct").text(numberWithCommas(product[index].piece))
    $('.desProduct').text(product[index].description)
}

function closeModal() {
    $(".modal").css('display', 'none')
}


function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchSomething(key) {
    var valume = $('#' + key.id).val()
    console.log(valume)

    var html = '';
    for (let i = 0; i < (product.length); i++) {
        if (product[i].name.includes(valume)) {
            html += `<div onclick="openModal(${i})" class="item ${product[i].type}">
                    <img src=" ${product[i].image}">
                    <figcaption>
                        ${product[i].name}
                    </figcaption>
                    <p> ${numberWithCommas(product[i].piece)} THB</p>
                    </div>`;
        }
    }
    if (html == '') {
        $("#productlist").html('Not Found Product');
    } else {
        $("#productlist").html(html);
    }
}

var cart = []
function addtoCash() {
    var orderAddToCash = true

    // Loop Add Count in Cash
    for (let i = 0; i < cart.length; i++) {
        if (productindex == cart[i].index) {
            console.log('Same')
            cart[i].count++;
            orderAddToCash = false
        }

    }

    //if orderAddToCash == true add Details Product to cash array
    if (orderAddToCash) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            piece: product[productindex].piece,
            img: product[productindex].image,
            count: 1
        }
        cart.push(obj)
        $("#cartCount").css('display', 'block');
    }
    console.log(cart)

    Swal.fire({
        title: 'Add ' + product[productindex].name + ' to cart',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
    $("#cartCount").css('display', 'flex').text(cart.length)
    $(".cartCount2").text(cart.length)
}

function openMenu() {
    $("#mub").toggleClass("active");
    if ($("#mub").hasClass("active")) {
        $("#cartCount").css('display', 'none');
        $(".menu-bg").css('display', 'block');
        $(".searchBar").css('z-index', '-1')
        if (cart.length > 0) {
            $(".cartCount2").css('display', 'block');
        }
    } else {
        $("#cartCount").css('display', 'none');
        $(".menu-bg").css('display', 'none');
        $(".searchBar").css('z-index', '1')
        $(".cartCount2").css('display', 'none');
        if (cart.length < 0) {
            $("#cartCount").css('display', 'none');
        } else {
            if(cart.length > 0){
                setTimeout(function () {
                    $("#cartCount").css('display', 'block');
                }, 1050)
            }
        }
    }
}

function openModalCart() {
    $("#modalCart").css('display', 'flex')
    openMenu()
    renderCart()
}

function renderCart() {
    if (cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cart-item">
                        <div class="cart-item-left">
                            <img class="cartImg" src="${cart[i].img}">
                            <div class="cart-item-detail">
                                <p style="font-size: 2.5vw;">${cart[i].name}</p>
                                <p style="font-size: 2.2vw;">${numberWithCommas(cart[i].piece * cart[i].count)}</p>
                            </div>
                        </div>
                        <div class="cart-item-right">
                            <img onclick="deinitems('remove',${i})" class="btn-" src="https://cdn-icons-png.flaticon.com/512/3031/3031143.png"
                                style="width: 30px; height: 30px; margin-right: 5px; cursor:pointer;">

                            <p id="countitem" style="margin: 0 20px;">${cart[i].count}</p>

                            <img onclick="deinitems('plus',${i})" cladd="btn+" src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
                                style="width: 30px; height: 30px; margin-left: 5px; cursor:pointer;">
                        </div>
                    </div>`;
        }
        $("#myCartList").html(html)
    } else {
        $("#myCartList").html('<p> Not Found Product List </p>')
    }
}

function deinitems(action, index) {
    if (action == 'remove') {
        if (cart[index].count > 0) {
            cart[index].count--;
            $("#countitem" + index).text(cart[index].count)
            $("#cartCount").text(cart.length)
            $(".cartCount2").text(cart.length)
            if (cart[index].count <= 0) {
                Swal.fire({
                    icon: "warning",
                    title: 'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel',
                }).then((res) => {
                    if(res.isConfirmed) {
                        cart.splice(index,1);
                        renderCart();
                        $("#cartCount").text(cart.length)
                        $(".cartCount2").text(cart.length)
                        if(cart.count <= 0){
                            $("#cartCount").css('display', 'none');
                        }
                    } else {
                        cart[index].count++;
                        $("#countitem" + index).text(cart[index].count)
                        renderCart();
                    }
                })
            }
        }renderCart();
    }else{
        cart[index].count++;
        renderCart();
        $("#countitem" + index).text(cart[index].count)
    }

    console.log(cart);
}
