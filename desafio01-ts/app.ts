import { CompanyAccount } from './class/CompanyAccount';
import { DioAccount } from './class/DioAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log("deposit");
peopleAccount.deposit(10);

console.log("depositWithAddition");
peopleAccount.depositWithAddition(20);

console.log("getBalance");
peopleAccount.getBalance();

console.log("showBalance");
peopleAccount.showBalance();


console.log("getName");
peopleAccount.getName();


console.log("withdraw");
peopleAccount.withdraw(10);

console.log("\n");

// console.log(peopleAccount);


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log("deposit");
companyAccount.deposit(10);

console.log("getBalance");
companyAccount.getBalance();

console.log("showBalance");
companyAccount.showBalance();

console.log("getName");
companyAccount.getName();

console.log("withdraw");
companyAccount.withdraw(10);

console.log("getLoan");
companyAccount.getLoan(2000);

console.log("showBalance");
companyAccount.showBalance();


// console.log(companyAccount);