import logo from './logo.svg';
import './App.css';
import {ethers} from "ethers";
import {useEffect, useState} from "react";
import abi from "./HeroesToken.json"


const contract_address = '0x9e3F28C3c37ac77684730e223aa7c0621a206CD6'
const provider = new ethers.providers.JsonRpcProvider('https://api.avax-test.network/ext/bc/C/rpc');
const contract = new ethers.Contract(contract_address, abi, provider);

function App() {
    const [txs, setTxs] = useState([]);
    useEffect(() => {
        console.log(contract)
    })
    return (
        <div className="App">
            <header className="App-header">

            </header>
        </div>
    );
}

export default App;
