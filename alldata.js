function AllData(){
  const ctx = React.useContext(UserContext);
  const [counterKey, setCounterKey] = React.useReducer(c => c + 1, 0)
  console.log(ctx.users[0].name)
  return (
    <>
    <h5>All Data in Store</h5>
    {/* Added 3.22.22 mapping through context to show each user and their associated balance. */}
    {/* <ul>{ctx.users.map(user=> <li>{user.name}: ${user.balance}</li> )}</ul>
    {JSON.stringify(ctx)}<br/> */}
     {/* Need to return a card showing Name / Email / Password */}
     <Card
    bgcolor="primary"
    header="Name -- Email -- Password"
    status={status}
    body={  
      <>
      <ul >{ctx.users.map(user=> <> {user.name} : {user.email } : {user.password} </> ) }</ul>
      </>
      }
    >
    </Card>
  
    </>
  );
}
