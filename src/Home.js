import { useState } from "react";
const Home = () => {
    const [name, setName] = useState("Mayur")
    const [age, setAge] = useState(22)
    // let name = "Mayur";
    // let age = 22
    const clickMe = (ev,name,age)=>{
        setName(name)
        setAge(age)
    }
    return ( 
        <div className="home">
            <input type="text" className="name" placeholder="Enter name"/>
            <input type="number" className="age" placeholder="Enter age"/>
            Home
            <p>My name is {name} and age is {age}</p>
            <button onClick={(ev)=>{
                let ageElement = document.querySelector('.age')
                let nameElement = document.querySelector('.name')
                let age = ageElement.value.trim()
                let name = nameElement.value.trim()
                clickMe(ev,name,age)
                }}>Click</button>
        </div>
     );
}
 
export default Home;