import fetchProduct from "./services.js";
import {createProductCard,formatCurrency} from "./formatters.js";
async function run(){
    try {
        console.log("⏳ Loading product #1...");
        let product = await fetchProduct(1);
        const card = createProductCard(product);
        console.log(card);
    } catch (error) {
        console.log(`❌ Error: ${error.message}`);
    }finally{
        console.log("🏁 Done loading.");
    }
};
run();