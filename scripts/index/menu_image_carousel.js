const products = {
    'AASTU': ['1_aa_boldstroke_cuban_shirt', '2_aa_racing_hoodie', '3_aa_racing_logo_tee','4_aa_short_jeans'],
    'CHAUTFIFTH': ['1_2_face', '2_bakery_box_bag', '3_c2_pocket_hobo_bag','4_zigzag_star_handbag'],
    'GHOSTBOY': ['1_reverent_skort', '2_shade_tank', '3_synergy_halter_top','4_whip_shorts'],
    'SNAMO': ['1_embrody_vulva', '2_mini_strap_bag', '3_washed_denim_bag','4_washed_denim_big_tote'],
    'THE IDIOT': ['1_agi_trouser', '2_dislocated_top', '3_no26_denim_shorts','4_split_top'],
};
const brands = document.querySelectorAll("#brands-list a");
const brandImageArr = [document.querySelector("#brand-image-1 img"),document.querySelector("#brand-image-2 img"),
                        document.querySelector("#brand-image-3 img"),document.querySelector("#brand-image-4 img")];
const h1BrandText  = document.querySelector("#brand-images-carousel h1");

let route = "";

function getClosestProduct(pattern, brandProducts) {
    const regex = new RegExp(`^${pattern}`); 
    return brandProducts.filter(product => regex.test(product));
}

brands.forEach((brand)=>{ //only on web
    brand.addEventListener("click", (e) => {
        switch(e.currentTarget.innerHTML){
            case('AASTU'):
                route = "images/brands/aastu/";
                break;
            case('CHAUTFIFTH'):
                route = "images/brands/chautfifth/";
                break;
            case("GHOSTBOY"):
                route = "images/brands/ghostboy/";
                break;
            case("SNAMO"):
                route = "images/brands/snamo/";
                break;
            case("THE IDIOT"):
                route = "images/brands/the_idiot/";  
                break; 
            default:
                route = ""; // Default route if no match is found
                break;
        }
        h1BrandText.innerHTML = e.currentTarget.innerHTML;
        const selectedProducts = products[e.currentTarget.innerHTML] || [];
        brandImageArr.forEach((brand_image, index) => {
            const productPrefix = `${index + 1}_`; 
            const matchedProducts = getClosestProduct(productPrefix, selectedProducts);

            if (matchedProducts.length > 0) {
                brand_image.src = `${route}${matchedProducts[0]}.jpeg`;
                brand_image.alt = `${e.currentTarget.innerHTML} ${matchedProducts[0]}`
            }
        });
    });
})