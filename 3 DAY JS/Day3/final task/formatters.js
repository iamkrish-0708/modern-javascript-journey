export function formatCurrency(price){
    return `$ ${price.toFixed(2)}`;
};

export function createProductCard(product){
    const { title: name, price, rating, category, brand = "Generic" } = product;
    const formattedPrice=formatCurrency(price);
    return `📦 [Product Card] Name: ${name} | Brand: ${brand} | Category: ${category} | Price: ${formattedPrice} | Rating: ${rating}⭐`;
};