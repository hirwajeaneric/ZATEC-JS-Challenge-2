const dishes = {
    biryani: {
        price: 12, 
        ingredients: "Rice, Chicken", 
        servings: 2
    },
    pizza: {
        price: 30, 
        ingredients: "Floor, Tomato, Meat", 
        servings: 3
    },
    backedHoneyMustard: {
        price: 50, 
        ingredients: "Honey, Chicken", 
        servings: 1
    },
    ClassicMeatLoaf: {
        price: 60, 
        ingredients: "Rice, Meat", 
        servings: 2
    }
};

let getDish = (dish) => {
    if (dishes[dish] == undefined) {
        return 'dish not found'
    }
    return dishes[dish];
}  

let printBill = (dishname, customerName="Nice") => {
    let thedish = getDish(dishname);

    if (typeof thedish != 'object') {
        console.log(`Sorry Mr/Mrs ${customerName}, unfortunately we don't offer that dish...`);
    }else {
        let {price, ingredients, servings} = thedish;
        
        const billPrice = price * servings;
        let totalBillPrice = 0;
        let tax = 0;
        let tip = 0;
    
        if (billPrice <= 100) {
            tax = billPrice * 0.15
        } else {
            tax = billPrice * 0.20        
        }
    
        totalBillPrice = billPrice + tax;
        tip = totalBillPrice * 0.10
    
        console.log(`Thank you Ms/Mrs ${customerName} for dinning with us! Your bill  is as follow:\n\nTotal Price: RWF ${totalBillPrice} (Incl Tax of ${tax}) and you have tipped the waiter RWF ${tip}`);   
    }
}

printBill("pizza", "Jean Eric")
