function Deposit(){
  const [balance, setBalance]       = React.useState('');
  const ctx = React.useContext(UserContext);
  function updateDeposit(){

  }
  return (
    <Card
    bgcolor="primary"
    header="Deposit"
    status={status}
    body={  
            <>
            Deposit  {/* {balance}<br/> */}
            {/* <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/> */}
            <br/>
            Balance {balance}<br/>
            <input type="Deposit Amount" className="form-control" id="deposit" placeholder="Deposit Amount" value={balance} onChange={e => setBalance(e.currentTarget.value)}/>
            <br/>
            <button type="submit" className="btn btn-light" onClick={updateDeposit}>Deposit</button>
            </>
            }
          ></Card>
  )
}
