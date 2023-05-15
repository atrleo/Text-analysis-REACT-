import React, { useState } from 'react'



export default function (props) {
    const [text, setText] = useState("")
    const [sentenceCount, setSentenceCount] = useState(0);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        setText("");
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


    return (
        <>
            <div>
                <div className="form-outline " >
                    <h1>{props.head}</h1>

                    <textarea value={text} onChange={handleOnChange} className="form-control border" id="myBox" rows="8" ></textarea>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Change to UPPER CASE</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Change to lower case</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
                </div>

            </div>
            <div className="container my-2" >
                <h1>{props.summary}</h1>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <p>The total number of sentence : {sentenceCount}</p>
                <h2>{props.prev}</h2>
                <p>{text}</p>
            </div>

        </>
    )
}


