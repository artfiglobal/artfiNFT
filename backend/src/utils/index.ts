import Web3 from 'web3';
import { ethers } from 'ethers';
import crypto from 'crypto';

export function getProvider() {
    return new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
}

export function getWeb3() {
    return new Web3(new Web3.providers.HttpProvider(process.env.RPC_URL as string));
}

export function getReferCode() {
    return crypto.randomBytes(20).toString('hex').substring(0, 9);
}
