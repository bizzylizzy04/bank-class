class Bank {
	constructor(balance) {
		this.balance = balance;
	}

	withdraw(amount) {
		// guard clause
		if (this.balance - amount <= 0) {
			console.log("You can't withdraw more than what you have!")
			return;
		}
		this.balance -= amount;
		console.log('withdrew', `$${amount}`);
		console.log({ balance: this.balance });
	}

	deposit(amount) {
		this.balance += amount;
		console.log('deposited', `$${amount}`);
		console.log({ balance: this.balance });
	}
}

const myChecking = new Bank(100);
console.log(myChecking.balance);
myChecking.deposit(100);
myChecking.withdraw(100);
myChecking.withdraw(100);

const depositBtn = document.getElementById('deposit');
const withdrawBtn = document.getElementById('withdraw');
const amountInput = document.getElementById('amount');
const balanceDiv = document.getElementById('balance');

depositBtn.onclick = () => {
	const amount = Number(amountInput.value);
	myChecking.deposit(amount);
	balanceDiv.innerText = `Balance: ${myChecking.balance}`;
}

withdrawBtn.onclick = () => {
	const amount = Number(amountInput.value);
	myChecking.withdraw(amount);
	balanceDiv.innerText = `Balance: ${myChecking.balance}`;
}
