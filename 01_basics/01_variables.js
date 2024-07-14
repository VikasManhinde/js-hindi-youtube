const accountId = 144553
let accountEmail = "vikas@example.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // This is not allowed

accountEmail = "vinayak@example.com"
accountPassword = "23424234"
accountCity = "Gujrat"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefet not to use var
becsuse of issue in block scope and functional scope
*/
