import React, { useRef } from "react";

export default function Electricitybill() {
    let aref = useRef();
    let nameref = useRef();
    let resultref = useRef();

    let Calc = () => {
        let a = parseInt(aref.current.value);
        let b = 10;
        let name = nameref.current.value;
        resultref.current.innerHTML = name + "'s electricity bill is $" + (a * b);
    };

    return (
        <div>
            <p>Enter name: <input type="text" ref={nameref} /></p>
            <p>Enter unit: <input type="text" ref={aref} /></p>
            <p>
                <input type="button" value="Calculate Electricity Bill" onClick={Calc} />
            </p>
            <p ref={resultref}></p>
        </div>
    );
}