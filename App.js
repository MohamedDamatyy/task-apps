import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    // clean up
    useEffect(() => {
        if (name) {
            const timeOut = setTimeout(() => {
                console.log("effect")
            }, 2000);
            return () => {
                clearTimeout(timeOut);
            }
        }
    }, [name]);

    // render
    // use effect
    // return clean up
    // change state
    // render
    // use effect
return (
    <div className="App">
        <label>Name</label>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <br />
        <label>Phone</label>
        <input onChange={(e) => setPhone(e.target.value)} value={phone} />

        <p>
            name: {name} <br /> phone: {phone}
        </p>
    </div>
    )
}