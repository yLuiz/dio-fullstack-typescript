"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class CompanyAccount extends DioAccount_1.DioAccount {
    constructor(name, accountNumber) {
        super(name, accountNumber);
        this.getLoan = (value) => {
            if (this.validateStatus()) {
                const balance = this.getBalance();
                this.setBalance(balance + value);
                console.log('Você pegou um empréstimo!');
            }
        };
    }
}
exports.CompanyAccount = CompanyAccount;
