import './App.css';
import {ethers} from "ethers";
import {useEffect, useState} from "react";
import abi from "./HeroesToken.json"
import {Characters} from "./Characters/Characters.tsx";

const contract_address = '0x9e3F28C3c37ac77684730e223aa7c0621a206CD6'
const provider = new ethers.providers.JsonRpcProvider('https://api.avax-test.network/ext/bc/C/rpc');
const contract = new ethers.Contract(contract_address, abi, provider);

function App() {
    const [datas, setDatas] = useState([])
    const [txs, setTxs] = useState([]);
    const [initialize, setInitialize] = useState(false);

    async function fetchData() {
        for (let i = 1; i < 500; i++) {
            await fetch("https://character.heroesofnft.com/token/" + i)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    datas.push(data)
                    console.log(datas)
                })
        }
    }

    useEffect(() => {
        if (!initialize) {
            setInitialize(true)
            fetchData()
        }
        // console.log(contract)
    })
    return (
        <div className="App">
            <header className="App-header">
                <Characters data={datas}/>
            </header>
        </div>
    );
}

export default App;
