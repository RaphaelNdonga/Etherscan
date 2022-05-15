import React from "react"
import './block.css'

export default function BlockInfo() {
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
                    <th>Reward</th>
                    <th>Burnt Fees (ETH)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>80000</td>
                    <td>80000</td>
                    <td>80000</td>
                    <td>80000</td>
                    <td>80000</td>
                    <td>80000</td>
                    <td>80000</td>
                    <td>80000</td>
                    <td>80000</td>
                    <td>80000</td>
                </tr>
                <tr>
                    <td>920000</td>
                    <td>920000</td>
                    <td>920000</td>
                    <td>920000</td>
                    <td>920000</td>
                    <td>920000</td>
                    <td>920000</td>
                    <td>920000</td>
                    <td>920000</td>
                    <td>920000</td>
                </tr>
            </tbody>
        </table>
    )
}