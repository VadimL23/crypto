import crypto from 'crypto';

class Block {
	hash: string;
	prevHash: string = '';

	constructor(public timestamp: Date = new Date(), public data: any[] = []) {
		this.hash = this.getHash();
	}

	getHash(): string {
		return crypto
			.createHash('sha256')
			.update(this.prevHash + this.timestamp + JSON.stringify(this.data))
			.digest('hex');
	}
}

class Blockchain {
	chain: Block[];

	constructor() {
		this.chain = [new Block(new Date(), [{ from: 'Vadim', to: 'Anton', amount: 10, typy: 'transaction' }])];
	}

	get getLastBlock(): Block {
		return this.chain[this.chain.length - 1];
	}

	addBlock(block: Block): Blockchain {
		block.prevHash = this.getLastBlock.hash;
		block.hash = block.getHash();
		this.chain.push(Object.freeze(block));
		return this;
	}

	isValid(blockchain = this): boolean {
		for (let i = 0; i < blockchain.chain.length - 1; i++) {
			const currentBlock = blockchain.chain[i];
			const prevBlock = blockchain.chain[i - 1];

			if (currentBlock.hash !== currentBlock.getHash() || currentBlock.prevHash !== prevBlock.hash) {
				return false;
			}
		}
		return true;
	}
}

export { Block, Blockchain };
