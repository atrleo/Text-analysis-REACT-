import React,{useState} from 'react'

export default function About(props) {

    let myStyle = {
        color : props.mode ==="dark"?"white":"black",
        backgroundColor: props.mode === "dark"?"#2d2d35":"white",
       
    };

      

    return (
        <div className='container' style={myStyle}  >
            <h1 className='my-3 mx-3'  >About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample"  > 
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne"  >
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                            style={myStyle}
                        >
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-mdb-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body"  style={myStyle}>
                            TextAalysis is used to analyaze differenet text form users. Here a user can know the number of
                            words and sentences used in their text. TextAnalysis also has a feature which helps to know total
                            minutes to read a given text. Additional features such as changing the given text to upperCase, 
                            lowerCase, clearing the text, copying the text has been added.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                            style={myStyle}
                           
                        >
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-mdb-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body"  style={myStyle}>
                            TextAnalysis is free to use for all our users. The main motive of creating this page
                            was to analyze the given text of user.     
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                            style={myStyle}
                        >
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-mdb-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body"  style={myStyle} >
                            TextAnalysis is compatible in all the browers used in our daily life.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
