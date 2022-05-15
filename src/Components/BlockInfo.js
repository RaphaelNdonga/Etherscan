import React, { useEffect, useState } from "react"
import './block.css'
import Web3 from "web3"

export default function BlockInfo() {
    const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/0f485d121a0f4dc2ad3891e12cb2c626")
    const web3 = new Web3(provider)

    const [blockData, setBlockData] = useState([])

    useEffect(() => {
        async function getBlockData() {
            const latestBlockNumber = await (await web3.eth.getBlock("latest")).number
            console.log("latest block number is: ", latestBlockNumber)
            const blockDataArray = []
            for (let i = latestBlockNumber - 10; i < latestBlockNumber; i++) {
                const currentBlock = await web3.eth.getBlock(i)
                blockDataArray.push(currentBlock)
            }
            console.log(blockDataArray)
            setBlockData(blockDataArray)
        }
        getBlockData()
    }, [])

    function displayBlockRows() {
        const rowElements = blockData.map((block, i) =>
            <tr key={block.number}>
                <td>{block.number}</td>
                <td>{block.timestamp}</td>
                <td>{block.transactions.length}</td>
                <td>{block.uncles.length}</td>
                <td>{block.miner}</td>
                <td>{block.gasUsed}</td>
                <td>{block.gasLimit}</td>
                <td>{block.baseFeePerGas}</td>
            </tr>)

        return rowElements
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Block</th>
                    <th>Age</th>
                    <th>Txn</th>
                    <th>Uncles</th>
                    <th>Miner</th>
                    <th>Gas Used</th>
                    <th>Gas Limit</th>
                    <th>Base Fee</th>
                </tr>
            </thead>
            <tbody>
                {displayBlockRows()}
            </tbody>
        </table>
    )
}