import React, { useContext, useState } from 'react';
import { transContext } from './transContext';

function Child() {

    let { transactions, addTransaction } = useContext(transContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    let [Night,setNight]=useState(false);

    const handleAddition = (event) => {
        event.preventDefault();
        // if(TotalIncome() <  TotalExpenses()+newAmount){
        //     alert("hello");
        //     return false;
        // }
        addTransaction({
            desc: newDesc,
            amount: Number(newAmount)
        })


    }

    const TotalIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount;
            }

        }
        return income;

    }


    const TotalExpenses = () => {
        let expenses = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expenses += transactions[i].amount;
            }

        }
        return expenses;

    }
    return (
        <div className={`container ${Night ? 'nightMode' : ''}`}>
            
            <h1 className="text-center">Expance Tracker App</h1>

            <h3>Your Balance <br />{TotalIncome() + TotalExpenses()}  <span> <input type="checkbox" onChange={()=>setNight(!Night)} />{Night ? 'Light Mode':'Night Mode'}</span>  </h3>
     
            <div className="expence-container">
                <h3>Income <br /> $ {TotalIncome()}</h3>
                <h3>Expence <br /> $ {TotalExpenses()}</h3>

            </div>
            <h3>History</h3>
            <hr />

            <ul className="transaction-list">

                {transactions.map((transObj, ind) => {
                    return (
                        <li>
                            <span className={` ${Night ? 'black' : ''}`}>{transObj.desc}</span>
                            <span className={` ${Night ? 'black' : ''}`}>{transObj.amount}</span>
                        </li>
                    )
                })
                }

            </ul>

            <h3>Add New Transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label><span>Note : </span>+ve will be Income and -ve will be Expense</label><br />
                <label>Enter Description <br />
                    <input type="text" name="desc" required placeholder="Enter Description" onChange={(ev) => setDesc(ev.target.value)} />

                </label>
                <br />

                <label>Enter Amount <br />
                    <input type="number" name="amount" required placeholder="Enter Amount" onChange={(ev) => setAmount(ev.target.value)} />

                </label>
                <br />

                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default Child;
