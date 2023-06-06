import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private _doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this._doc_id = doc_id;
  }

  depositWithAddition = (value: number) => {

    if (value < 1) {
      throw new Error("Valor de depósito inválido!");
    }

    const balance = this.getBalance();
    this.setBalance(balance + (value + 10));
  }
  

}