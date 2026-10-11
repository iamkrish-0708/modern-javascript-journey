export default async function fetchProduct(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
    if(!response.ok){
        throw new Error(`Product #${id} not found.(HTTP STATUS: ${response.status})`);
    }
    return await response.json();
    } catch (error) {
        return `❌ Error: ${error.message}`;
    }
}