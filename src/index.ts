import crypto from 'crypto';
import { Block, Blockchain } from './blockchain';

let bh = new Blockchain();

bh.addBlock(
	new Block(new Date(), [
		{
			from: 'Vadim',
			to: 'Anton',
			amount: 10,
			type: 'transaction'
		}
	])
).addBlock(
	new Block(new Date(), [
		{
			from: 'Vadim',
			to: 'Kiril',
			amount: 30,
			type: 'transaction'
		}
	])
);
console.log(JSON.stringify(bh.chain, null, ' '));
