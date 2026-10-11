export const calculateDiscount=(originalPrice, discountPercent)=>  {
    let discountAmt=originalPrice*(discountPercent/100);
    return `$ ${discountAmt.toFixed(2)}`
};

export const calculateTax=(price, taxRate = 0.18)=>{
    let taxLiability=price*taxRate;
    return `$ ${taxLiability.toFixed(2)}`;
};