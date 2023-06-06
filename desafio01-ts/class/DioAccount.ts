export abstract class DioAccount {
  private readonly _name: string;
  private readonly _accountNumber: number;
  private _balance: number = 0;
  private _status: boolean = true;

  constructor(name: string, accountNumber: number){
    this._name = name;
    this._accountNumber = accountNumber;
  }

  getName(): string {
    return this._name;
  }

  deposit = (value: number): void => {
    
    if (value < 1) {
      throw new Error("Valor de depósito inválido!");
    }
    
    if (this.validateStatus()){      
      this._balance += value;
      console.log('Você depositou');
    }
  }

  withdraw = (value: number): void => {

    if (value < 1) {
      throw new Error("Valor de saque inválido!");
    }

    if (this.validateStatus()) {
      if (value > this._balance) throw new Error("Saldo insuficiente!");

      this._balance -= value;    

      console.log(`Você sacou R$${value.toPrecision(2)}`);
      console.log(`Seu saldo após o saque R$${this._balance.toPrecision(2)}`);
    }
  }

  showBalance = (): void => {
    console.log(this._balance);
  }

  getBalance() {
    return this._balance;
  }

  protected setBalance (value: number) {
    this._balance = value;
  }

  protected validateStatus = (): boolean => {
    if (this._status) {
      return this._status;
    }

    throw new Error('Conta inválida');
  }
}
