// Problem Number - 01: Help The Zoo Manager
function calculateMoney(ticketSold) {
   if(ticketSold < 0){
    return "the number of soled ticket must be positve"
   }
    const ticketPrice = 120;
    const securityGard = 500;
    const nubmberOfStaff = 8;
    const lunchBill = nubmberOfStaff * 50;

    const totalCost = lunchBill + securityGard;
    const dailyEarn = ticketSold * ticketPrice;

    const totalEarn = dailyEarn - totalCost;

    return totalEarn;
}

// console.log(calculateMoney(15))
// console.log(calculateMoney(-15))




// Problem Number - 02: Good Name, Bad Name.
function checkName(name){
    if(typeof name !== 'string' || name.length === 0){
        return "Invalid"
    }
    name = name.toLowerCase()
    const badNameLetter = ["a","y","i","e","o","u","w"]
    const lastLetter = name[name.length-1]
    if(badNameLetter.includes(lastLetter)){
        return "Good Name"
    }else{
        return "Bad Name"
    }
}
// console.log(checkName("Shohan"))
// console.log(checkName("ayesha"))
// console.log(checkName(465364))
// console.log(checkName(true))
// console.log(checkName(""))
// console.log(checkName([]))




//  Problem Number - 03: Virus In My Array
function deleteInvalids (array){
    if(array.some(item => typeof item == 'string')){
        return 'Invalid Array'
    }
    return array.filter(item => typeof item === 'number' && !isNaN(item));
    
}

// console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined]))


//  Problem Number - 04: Make A Grate Password
function password(user){
    if(!user.Name || !user.birthYear || !user.siteName){
        return 'Invalid'
    }
    if(user.birthYear.toString().length !== 4){
        return 'Invalid'
    }
    return `${user.siteName}#${user.Name}@${user.birthYear}`;
}
// const user = {Name:'Shohan', birthYear:2001, siteName:'google'}
// console.log(password(user))



//  Problem Number - 04: Make A Grate Password
function monthlySavings(payments,livingCost){
    if(!Array.isArray(payments) || typeof livingCost !== "number"){
        return 'Invalid input'
    }
    const totalIncome = payments.reduce((total, payment) =>{
        if (payment>3000){
            payment -= payment * 0.2;
        }
        return total + payment;
    }, 0);

    const savings = totalIncome - livingCost;
    if(savings >=0){
        return savings;
    }else{
        return "earn more";
    }
}

// console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
