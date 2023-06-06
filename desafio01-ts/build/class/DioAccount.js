"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
class DioAccount {
    constructor(name, accountNumber) {
        this._balance = 0;
        this._status = true;
        this.deposit = (value) => {
            if (value < 1) {
                throw new Error("Valor de depósito inválido!");
            }
            if (this.validateStatus()) {
                this._balance += value;
                console.log('Você depositou');
            }
        };
        this.withdraw = (value) => {
            if (value < 1) {
                throw new Error("Valor de saque inválido!");
            }
            if (this.validateStatus()) {
                if (value > this._balance)
                    throw new Error("Saldo insuficiente!");
                this._balance -= value;
                console.log(`Você sacou R$${value.toPrecision(2)}`);
                console.log(`Seu saldo após o saque R$${this._balance.toPrecision(2)}`);
            }
        };
        this.showBalance = () => {
            console.log(this._balance);
        };
        this.validateStatus = () => {
            if (this._status) {
                return this._status;
            }
            throw new Error('Conta inválida');
        };
        this._name = name;
        this._accountNumber = accountNumber;
    }
    getName() {
        return this._name;
    }
    getBalance() {
        return this._balance;
    }
    setBalance(value) {
        this._balance = value;
    }
}
exports.DioAccount = DioAccount;
