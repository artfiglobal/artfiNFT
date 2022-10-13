// Load libraries and helpers
import fs from 'fs'
import client from './client.js'
import avalanche from 'avalanche'
import { avalanche, BinTools } from "avalanche"
const binTools = avalanche.BinTools.getInstance()


async function main() {

    const chain = client.XChain()
    const keychain = chain.keyChain()

   
    const data = JSON.parse(fs.readFileSync(`${process.env.credentialsPath}/keypair.json`))
    const key = keychain.importKey(data.privkey)

    const address = key.getAddressString()
    const { utxos } = await chain.getUTXOs(address)

    const receiver = "X-fuji1j2zasjlkkvptegp6dpm222q6sn02k0rp9565d" 
    const amount = "50000000" 
    const asset = "AVAX" 

    const assetInfo = await chain.getAssetDescription(asset)
    const assetID = binTools.cb58Encode(assetInfo.assetID)

    let balance = await chain.getBalance(address, assetID)
    console.log("Balance before sending tx:", balance)
    const unsignedTx = await chain.buildBaseTx(
        utxos, 
        new avalanche.BN(amount), 
        assetID, 
        [receiver],
        [address], 
        [address]
    )

    const signedTx = unsignedTx.sign(keychain)
    const txID = await chain.issueTx(signedTx)
    console.log("Transaction submitted!")
    let status = await chain.getTxStatus(txID)
    console.log("Current transaction status:", status)

    setTimeout(async function () {
        status = await chain.getTxStatus(txID)
        console.log("Updated transaction status:", status)

        balance = await chain.getBalance(address, assetID)
        console.log("Balance after sending tx:", balance)
    }, 2000)
}

main().catch((err) => {
    console.log("We have encountered an error!")
    console.error(err)
})