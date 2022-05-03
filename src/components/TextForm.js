import React, { useState } from "react";



export default function TextForm(props) {

    const [text, setText] = useState("");
    const [col, setColor] = useState("white");
    const [txtstyle, setStyle] = useState("");

    const selectStyle = (event) =>{
        console.log("Change .. . .. .. ..");
        setStyle(event.target.value);

    }

    function Listening(event) {
        console.log("Listening .. . .. .. ..");

        setText(event.target.value);


    }

    const colorchange = (event) => {
        console.log("color changing");
        setColor(event.target.value);


    }

    const btnClick = () => {
        console.log("function clicked", text);

        setText(text.toUpperCase());
    }
    const btnClick2 = () => {
        console.log("function clicked", text);

        setText(text.toLowerCase());
    }

    return (
        <>
            <div className="container">

                <div className="mb-3">

                    <label style={{ color: `${props.colo}` }} htmlFor="exampleFormControlTextarea1" className="form-label h1 my-4"> {props.title} </label>
                    <textarea onChange={Listening} className={`form-control `}  id="exampleFormControlTextarea1" value={text} rows="3">



                    </textarea>
                   

                    <div className="col-1">
                    <select onChange={selectStyle} className="mt-3 " aria-label="Default select example">
                        <option selected>Select Style</option>
                        <option value="fst-italic">Italic</option>
                        <option value="fw-bold">Bold</option>
                        <option value="h1">h1</option>
                        <option value="h2">h2</option>
                        <option value="h3">h3</option>
                        <option value="h4">h4</option>
                        <option value="h5">h5</option>
                        <option value="h6">h6</option>
                       
                    </select>
                    </div>
                    <input className="mt-2 " onChange={colorchange} type="color" />

                    


                </div>
                <div>

                    <button className="btn btn-primary" onClick={btnClick} >
                        {props.btn}
                    </button>
                    <button className="btn btn-secondary mx-2" onClick={btnClick2} >
                        {props.btn2}
                    </button>

                </div>
            </div>

            <div className="container my-2" >
        
                <p>


                    No Of Words : {text.split(" ").length - 1} and character : {text.length}
                </p>
                <p>
                    Time : {text.split(' ').length * 0.8}
                </p>
            </div>

            <div className="container border py-4 px-4 my-3 bg-dark" >
                <h2 className="text-light">
                    Preview - 
                </h2>

                <p style={{ color: `${col}` }  } className={txtstyle}  >
                    {text}
                </p>
            </div>




        </>
    );
}

