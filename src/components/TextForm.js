import React, { useState } from 'react'



export default function (props) {
    const [text, setText] = useState("")
    const [sentenceCount, setSentenceCount] = useState(0);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!!","success");

    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!!","success");
    }

    const handleClearClick = () => {
        setText("");
        setSentenceCount(0);
        props.showAlert("Cleard text!!","warning");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
        setSentenceCount(countSentence());
    }

    const countSentence = () => {
        // Remove any leading or trailing white spaces
        const trimmedText = text.trim();

        // Use regular expression to split the text based on sentence-ending punctuation marks
        const sentences = trimmedText.split(/[.!?]+/);

        // Remove empty sentences (e.g., caused by multiple consecutive punctuation marks)
        const filteredSentences = sentences.filter(sentence => sentence.trim().length > 0);

        // Return the count of sentences
        return filteredSentences.length;
    };

    const handleCopy= () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied sucessfully","success");
    };
    return (
        <>
            <div>
                <div className="form-outline "  style={{color:props.mode==="dark"?"white":"black"}}>
                    <h1 className='mb-4'>{props.head}</h1>

                    <textarea placeholder='Enter  text to analyze' value={text} onChange={handleOnChange} style={{color:props.mode==="dark"?"white":"black"}} className="form-control border" id="myBox" rows="8" ></textarea>
                    <button disabled ={text.length===0} className={`btn btn-${props.mode} mx-2 my-2`} onClick={handleUpClick}>Change to UPPER CASE</button>
                    <button disabled ={text.length===0} className={`btn btn-${props.mode} mx-2 my-2`} onClick={handleLowClick}>Change to lower case</button>
                    <button disabled ={text.length===0} className={`btn btn-${props.mode} mx-2 my-2`} onClick={handleClearClick}>Clear</button>
                    <button disabled ={text.length===0} className={`btn btn-${props.mode} mx-2 my-2`} onClick={handleCopy}>Copy</button>
                </div>

            </div>
            <div className="container my-2"   style={{color:props.mode==="dark"?"white":"black"}}>
                <h1>{props.summary}</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <p>Total Sentences : {sentenceCount}</p>
                <h2>{props.prev}</h2>
                <p>{text.length>0?text:"Nothing to Preview!!"}</p>
            </div>

        </>
    )
}


