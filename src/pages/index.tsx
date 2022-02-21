import Head from "next/head";
import { useState } from "react";
import FullPage from "../components/ui/FullPage";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import metadata from "../contracts/erc20.json";
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Nav, Alert } from 'components';


export default function Home() {
  const [name, setName] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");
  const [decimal, setDecimal] = useState<string>("");
  const [totalSupply, setTotalSupply] = useState<string>("");
  const { connector, chainId, account, activate, active } = useWeb3React();
  const [loading, setLoading] = useState<number>(0);

  const handleCreateToken = () => {
    let nameInput = name;
    let symbolInput = symbol;
    let decimalInput = decimal;
    let totalSupplyInput = totalSupply;
    setLoading(1);

    console.log(nameInput, symbolInput, decimalInput, totalSupplyInput);

    if (name === "") {
      alert("name can't be blank");
    } else if (symbol === "") {
      alert("symbol can't be blank");
    } else if (decimal === "") {
      alert("decimals can't be blank");
    } else if (totalSupply === "") {
      alert("totalSupply can't be blank");
    } else {
      const web3 = new Web3((window as any).ethereum);
      var standardtokenContract = new web3.eth.Contract((metadata as any).abi);
      standardtokenContract
        .deploy({
          data: "0x" + (metadata as any).bytecode,
          arguments: [totalSupplyInput, nameInput, decimalInput, symbolInput],
        })
        .send(
          {
            from: account,
          },
          function (error, transactionHash) {
            if (error) {
              console.error(error);
              return;
            }
            console.log("Transaction Hash :", transactionHash);
          }
        )
        .on("confirmation", function () {
          return;
        })
        .then(function (newContractInstance) {
          if (!newContractInstance.options.address) {
            console.log(newContractInstance);
            return;
          }
          console.log(
            "Deployed Contract Address : ",
            newContractInstance.options.address
          );
          // alert(symbol + " is deployed at  " + newContractInstance.options.address);    //alert part when created token successfully.
          toast(symbol + " is deployed at  " + newContractInstance.options.address);
          setLoading(0);
          // setBusy(0);
          // var newContractAddress = newContractInstance.options.address;
        })
        .catch(function (error) {
          console.error(error);
          setLoading(0);
        });
    }
  };
  if (loading == 1) {
    return (
      <div style = {{margin:"10% 45%"}}>
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
      </div>
      
    )
    
  }
  else
    return (
      <div>
        <Head>
          <title>Tokenlaunch App</title>
        </Head>

        <FullPage>
          <p className="mt-2 mb-5 text-sm text-gray-900" id="email-description">
            Create Token
          </p>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md mb-5 max-w-sm"
                placeholder="name"
                aria-describedby="name-description"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="symbol"
              className="block text-sm font-medium text-gray-700"
            >
              Symbol
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="symbol"
                id="symbol"
                className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md mb-5 max-w-sm"
                placeholder="symbol"
                value={symbol}
                aria-describedby="symbol-description"
                onChange={(e) => setSymbol(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="decimal"
              className="block text-sm font-medium text-gray-700"
            >
              Decimal
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="decimal"
                id="decimal"
                maxLength="2"
                className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md mb-5 max-w-sm"
                placeholder="decimal"
                value={decimal}
                aria-describedby="decimal-description"
                onChange={(e) => setDecimal(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="totalSupply"
              className="block text-sm font-medium text-gray-700"
            >
              Total Supply
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="totalSupply"
                id="totalSupply"
                className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md mb-5 max-w-sm"
                placeholder="totalSupply"
                value={totalSupply}
                aria-describedby="totalSupply-description"
                onChange={(e) => setTotalSupply(e.target.value)}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleCreateToken}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none"
          >
            Create Token
          </button>
        </FullPage>
        <ToastContainer />
      </div>
    );
}
