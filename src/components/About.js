import React,{useState} from 'react'

export default function About() {

const [myStyle, setMyStyle] = useState({
    color:'black',
    backgroundColor:"white",
    border:"1px solid White",
})
const [btnText,setBtnText] = useState('Enable Light Mode');

const toggleButton =() =>{
        if(myStyle.color=='white'){
            setMyStyle({
                color:'black',
                backgroundColor:"white",
                // border:"1px solid Black",
            })
            setBtnText('Enable Dark Mode');
        }
        else{
            setMyStyle({
                color:"white",
                backgroundColor:"Black",
                border:"1px solid white",
            })
            setBtnText("Enable Light Mode");
        }
}
  
      

    return (
        <div className='container' style={myStyle} >
            <h1 className='my-3 mx-3'>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample"  style={myStyle}> 
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne"  >
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            Analyze your Text
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-mdb-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" >
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
                        >
                            Free To use
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-mdb-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" >
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
                        >
                            Browser compatible
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-mdb-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" >
                            TextAnalysis is compatible in all the browers used in our daily life.
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary mx-3 mt-3 mb-3" onClick={toggleButton}>{btnText}</button>
        </div>
    )
}
