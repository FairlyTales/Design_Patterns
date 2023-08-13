/*
  Chain of Responsibility.

  In this pattern, an object is passed to a Successor, and depending on some kind of logic, will or won't be passed onto another successor and processed. There can be any number of different successors and successors can be re-processed recursively.
 */

class Account {
  name: string;
  successor: Account;
  balance: number;

  pay = (price: number) => {
    if (this.canPay(price)) {
      console.log(`Paid ${price} using ${this.name}`);
    } else if (this.successor) {
      console.log(`Cannot pay using ${this.name}. Proceeding...`);
      this.successor.pay(price);
    } else {
      console.log('None of the accounts have enough balance');
    }
  };

  canPay = (price: number) => {
    return this.balance >= price;
  };

  setNext = (account: Account) => {
    this.successor = account;
  };
}

class MasterCard extends Account {
  constructor(balance: number) {
    super();
    this.name = 'MasterCard';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance: number) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}

class Bitcoin extends Account {
  constructor(balance: number) {
    super();
    this.name = 'Bitcoin';
    this.balance = balance;
  }
}

// usage

// set balances
const masterCard = new MasterCard(100);
const paypal = new Paypal(200);
const bitcoin = new Bitcoin(300);

// set a chain of successors
masterCard.setNext(paypal);
paypal.setNext(bitcoin);

// start payment
masterCard.pay(259);
