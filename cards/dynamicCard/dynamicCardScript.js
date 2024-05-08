//Dummy Data

const reviews = [
    {
        userName: "Fatema",
        reviewBody: "I have purchased the product from here. It is good."
    },

    {
        userName: "Firefly",
        reviewBody: "The product is good. ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧"
    },

    {
        userName: "Mina",
        reviewBody: "Products are good & the delivery was on time"
    },

    {
        userName: "Tina",
        reviewBody: "I will buy again in the future. Take Love(｡˃ ᵕ ˂)♡"
    },

    {
        userName: "Hanabi",
        reviewBody: "I have purchased the product from here."
    },

    {
        userName: "Ananna",
        reviewBody: "It was a nice exprience ( ˶ˆᗜˆ˵ )."
    }
]


//fetch product data from api -- dummy data
//console.log(axios);

const fetch_product_data = async(config)=>{
   try{
    const fetchProductDate = await axios(config);
    console.log(fetchProductDate.data);
    return fetchProductDate.data;
   }
   catch(exc){
    console.log(exc);
    throw Error(`Data is not fetched`);
   }
}


//product selection

const productCardsElement = document.querySelector(".product-cards");

const loadProducts = async () =>{

    const products = await fetch_product_data("https://fakestoreapi.com/products"); //api url
    
    products.map((product)=>{
        console.log(products);
        const productElement = document.createElement("div");
        productElement.classList.add("single-card");
        productElement.innerHTML = `
            <h4 class="title">${product.title}</h4>
            <div class="img">
                <img src="${product.image}" alt="">
            </div>
            <h5 class="price">${product.price} USD</h5>
            <p class="description">${product.description}</p>
            <h5 class="category">${product.category}</h5>`;
        productCardsElement.appendChild(productElement);
    });
}
loadProducts();


//selection

const reviewsElement = document.querySelector(".reviews");

const loadReviews = () =>{

    reviews.map((review)=>{
        //console.log(reviews);
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `
            <h4 class="user-name">${review.userName}</h4>
            <p class="review-body">${review.reviewBody}</p>`;
        reviewsElement.appendChild(reviewElement);
    });
}
loadReviews();


