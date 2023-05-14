import React, {useState} from 'react'



export default function (props) {
    const [text,setText] = useState("Enter your text here....")
 
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        
    }
    const handleLowClick = () =>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    } 

  
    return (
        <>
        <div>
            <div className="form-outline " >
                <h1>{props.head}</h1>
             
                <textarea value={text}  onChange={handleOnChange} className="form-control border" id="myBox" rows="8" ></textarea>
                <button className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Change to UPPER CASE</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Change to lower case</button>
            </div>
        
        </div> 
        <div className="container my-2" >
            <h1>{props.summary}</h1>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <h1>Preview2</h1>
            <p>{text}</p>   
        </div>

        </>
    )
}


