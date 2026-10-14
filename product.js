
const productArea = document.querySelector('#productArea');
const cartdody = document.querySelector('#cartdody');
const totalspan = document.querySelector('#totalspan');
const itemcunt= document.querySelector('#itemcunt');
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

const cart =[];
const jelwery = [
    {name:'​Astral Diamond Choker', price:3500 , img:"https://i.pinimg.com/736x/5a/d9/22/5ad922fea9c94cbf9a60389eb83dea74.jpg", category:'diamond necklance'},
    {name:'​Celestial Ice Pendant', price:2200 , img:"https://i.pinimg.com/736x/8c/2d/92/8c2d924484381aaf47b87d6ebb0a07ba.jpg", category:'diamond necklance'},
    {name:'​Stellar Brilliance ', price:4800 , img:"https://i.pinimg.com/736x/e3/30/bf/e330bf2e537838c3812a115ec4718004.jpg", category:'diamond necklance'},
    {name:'Luminary Diamond Cascade', price:6500 , img:"https://i.pinimg.com/736x/92/41/2f/92412f70a5d5900cd7964199eeb813e9.jpg", category:'diamond necklance'},
    {name:'​Radiant Horizon Pendant', price:2800 , img:"https://i.pinimg.com/736x/f4/04/ee/f404ee1fa50b9b954864c2547551c284.jpg", category:'diamond necklance'},
    {name:'​Eternal Sparkl Necklance', price:5200 , img:"https://i.pinimg.com/736x/f0/11/6d/f0116d58f21b1f126479818d3ae75dde.jpg", category:'diamond necklance'},
    {name:'​Infinity Solitaire Ring', price:3200 , img:"https://i.pinimg.com/736x/b0/6f/7d/b06f7d4d3d9561f54e3295cfbc958891.jpg", category:'diamond ring'},
    {name:'​Starlight Diamond Band', price:1850 , img:"https://i.pinimg.com/1200x/85/eb/c5/85ebc53e678fa848fa0e58a1cc68f377.jpg", category:'diamond ring'},
    {name:'​Midnight Frost Ring', price:2600 , img:"https://i.pinimg.com/1200x/ad/dc/08/addc08c51ab0fe34f18662a87fe897c9.jpg", category:'diamond ring'},
    {name:'​Crystal Halo Ring', price:2100 , img:"https://i.pinimg.com/736x/ba/1d/14/ba1d14ffe7808c9915d4242dc097d139.jpg", category:'diamond ring'},
    {name:'​Prism Crown Band', price:1950, img:"https://i.pinimg.com/736x/9c/b7/86/9cb78690b3a03af15c03c9743233779b.jpg", category:'diamond ring'},
    {name:'​Diamond Elegance Ring', price:2400 , img:"https://i.pinimg.com/736x/ef/41/ce/ef41ce17825ed00f4c2e9f97452f2a28.jpg", category:'diamond ring'},
    {name:'​Diamond-set Drop Earrings', price:1600 , img:"https://i.pinimg.com/736x/06/75/ea/0675ea8334720eea59b59ab68311d045.jpg", category:'diamond shaving'},
    {name:'​Glacier Cascade Earrings', price:2400 , img:"https://i.pinimg.com/736x/19/3b/42/193b42ed397e7751170fbe9dd606a143.jpg", category:'diamond shaving'},
    {name:'Crystal Teardrop Earrings', price:1950 , img:"https://i.pinimg.com/736x/b2/04/1e/b2041e646728479d16c16ca63a03adc1.jpg", category:'diamond shaving'},
    {name:'Blue ​Diamond Tennis Bangle', price:4500 , img:"https://i.pinimg.com/1200x/58/53/89/5853891cb104c8a7aec7f80194f4592e.jpg", category:'diamond bracelet'},
    {name:'​Frozen Glitz ​Diamond Cuff', price:3800 , img:"https://i.pinimg.com/736x/90/07/21/900721f52739523923ba3d80a336622d.jpg", category:'diamond bracelet'},
    {name:'Shimmering Lattice Bracelet', price:5200 , img:"https://i.pinimg.com/736x/4f/5f/14/4f5f147332c9d3192d4ab97059b795cc.jpg", category:'diamond bracelet'},
    {name:'Céleste Pavé Band', price:450 , img:"https://i.pinimg.com/736x/d5/e9/04/d5e90412075770081f105f8326701134.jpg" ,category:'gold ring'},
    {name:'Sovereign Gold Band', price:380 , img:"https://i.pinimg.com/736x/f6/88/a6/f688a6ac9456a99bcd94b4bb9c534245.jpg" ,category:'gold ring'},
    {name:'​Honeycomb Gold Ring', price:520 , img:"https://i.pinimg.com/736x/57/86/d5/5786d5a66753abe2959dcc08dcb42146.jpg" ,category:'gold ring'},
    {name:'​Gilded Horizon Ring', price:600 , img:"https://i.pinimg.com/736x/8a/58/0b/8a580ba249110654b37c8af6b1956a24.jpg" ,category:'gold ring'},
    {name:'​Royal Crest Band', price:320, img:"https://i.pinimg.com/1200x/05/98/05/059805f29fded40097b4b826dc72381e.jpg" ,category:'gold ring'},
    {name:'​Golden Twine Ring', price:290 , img:"https://i.pinimg.com/736x/8e/e4/6f/8ee46fc6f7126a766d35b86f236d95e8.jpg", category:'gold ring'},
    {name:'​Golden Aura Chain', price:850 , img:"https://i.pinimg.com/736x/e7/a2/c2/e7a2c24cb52e5a284b1ba0c09722e245.jpg", category:'gold necklance'},
    {name:'​Solstice Sun Pendant', price:620 , img:"https://i.pinimg.com/736x/27/f7/5b/27f75b2358a4501c710ac25ba8e59da6.jpg", category:'gold necklance'},
    {name:'​Monarch Gold Chain', price:1100 , img:"https://i.pinimg.com/1200x/30/a1/90/30a190d39aa29583cbb84eb61bd0b7d3.jpg", category:'gold necklance'},
    {name:'​Amber Elegance Necklace', price:780 , img:"https://i.pinimg.com/736x/c7/99/d3/c799d375f097d0a58700a34ecefbb41c.jpg", category:'gold necklance'},
    {name:'Elegant ​Velvet Gold Choker', price:950 , img:"https://i.pinimg.com/736x/7b/31/f5/7b31f533629a5921d4d25d3a15e9fae1.jpg", category:'gold necklance'},
    {name:'​Sunburst Charm Necklace', price:540 , img:"https://i.pinimg.com/736x/d9/6d/4e/d96d4ed437c0b055649eb7509226a776.jpg", category:'gold necklance'},
    {name:'​Golden Braid Cuff', price:1250 , img:"https://i.pinimg.com/736x/91/31/b8/9131b851df76e1ee1a25009037145cf1.jpg", category:'gold bracelet'},
    {name:'​Empress Gold Bangle', price:1400 , img:"https://i.pinimg.com/736x/69/f8/4d/69f84dbb0bbd0f9f536b522bc11b0704.jpg", category:'gold bracelet'},
    {name:'Aurelia Link Bracelet', price:980 , img:"https://i.pinimg.com/736x/4b/f4/97/4bf497642a363b1e2ec00aad5f5336ba.jpg", category:'gold bracelet'},
];
const filterProduct = (category) => {

    if (category == 'all') {
        showproduct();
        return;
    }

    let filtered = jelwery.filter((el) => {
        return el.category == category;
    });

    showproduct(filtered);
};
const calctotal=()=>{
    let total=0;
    cart.forEach((el,index)=>{
        total +=el.price * el.qty;
    });
    totalspan.innerHTML=total


}
const showproduct =(products = jelwery)=>{
    productArea.innerHTML='';
    products.forEach((el,index)=> {
        productArea.innerHTML+=`
             <div class="col-12 col-md-4 product-item">
                <div class="product-card "data-aos="fade-up" data-aos-delay="100" data-aos-duration="1100">
                    <img src="${el.img}" alt="">
                    <button>PAVÉ DIAMOND · 18K GOLD</button>
                    <p>${el.name}</p>
                    <div class="Button-size d-flex flex-row ">
                            <button>
                                <div class="fw-bold">48</div>
                            </button>
                            <button>
                              <div class="fw-bold">50</div>  
                            </button>
                            <button>
                                <div class="fw-bold">52</div>
                            </button>
                            <button>
                                <div class="fw-bold">54</div>
                            </button>
                            <button>
                                <div class="fw-bold">56</div>
                            </button>
                           
                    </div>
                    <span>$ ${el.price} USD</span>
                    <button class="btn" onclick="addtocart(${index})" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        Add To Cart
                    </button>
                </div>
            </div>
        `
    });
   
}
showproduct();
searchIcon.addEventListener("click",
    function(){
        if(searchInput.style.display === "none"){
            searchInput.style.display = "block";
        }else{
            searchInput.style.display = "none";
        }
    }
);
searchInput.addEventListener("input",
    function(){
        let searchValue = searchInput.value.toLowerCase();
        let searchResult = jelwery.filter(function(products){
            return products.name.toLowerCase().includes(searchValue);
        });
        showproduct(searchResult);
    }
)
const showcart=()=>{
    cartdody.innerHTML='';
    cart.forEach((el,index)=>{
        cartdody.innerHTML += `
        <div class="col-12 d-flex align-items-center py-3 border-bottom">
                <img class="col-3 pe-5 height="70" style="object-fit: contain;" " src="${el.img}" alt="">
            <div class="col-9 d-flex flex-column">
                <p>${el.name}</p>
                <div class="col-12 d-flex flex-row gap-4">
                    <button onclick="deincrement(${index})">-</button>
                    <p class="p">${el.qty}</p>
                    <button onclick="increment(${index})">+</button>
                    <p>${el.price * el.qty} UCD</p>
                </div>
            </div>
        </div>
        `
    });
    itemcunt.innerHTML=cart.length;
    calctotal();
}
showcart();
const addtocart =(indexInproduct)=>{
  let product = jelwery[indexInproduct];

 let productindexincart = cart.findIndex((el,index)=>{
    return el.name == product.name;
 });

 if(productindexincart == -1){
    product.qty=1;
    cart.push(product);
 }else{
    cart[productindexincart].qty++;
 }
  showcart();
}

const increment=(index)=>{
    cart[index].qty++;
    showcart();
}

const deincrement=(index)=>{
    let qty = cart[index].qty;
    if(qty == 1){
        cart.splice(index,1);
    }else{
        cart[index].qty--;
    }
    showcart();
}

