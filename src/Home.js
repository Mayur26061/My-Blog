const Home = () => {
    const clickMe = (ev) =>{
        console.log("Click me",ev)
    } 
    const clickAgain = (ag,ev)=>{
        console.log(`Hello ${ag}`,ev)
    }
    return ( 
        <div className="home">
            Home
            <button onClick={clickMe}>Click</button>
            <button onClick={(ev)=>{clickAgain("Mayur",ev)}}>Click</button>
        </div>
     );
}
 
export default Home;