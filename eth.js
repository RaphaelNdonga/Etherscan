const Web3 = require('web3')
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/0f485d121a0f4dc2ad3891e12cb2c626')

const web3 = new Web3(provider)

function main() {

    // console.log(web3.eth.accounts)

    let myAddr = '0xea674fdde714fd979de3edf0f56aa9716b898ec8'

    let currentBlock = web3.eth.blockNumber

    getBlockDetails(currentBlock, myAddr)

}

async function getBlockDetails(blockNumber, address) {
    let n = await web3.eth.getTransactionCount(address, blockNumber)
    let block = await web3.eth.getBlock('latest')
    let bal = await web3.eth.getBalance(address, blockNumber)

    console.log("n is: ", n)
    console.log("balance is: ", bal)
    console.log("Block is: ", block)
}

main()