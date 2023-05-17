import React, {useState} from 'react'


export default function About() {

    const [myStyle, setMyStyle] = useState({
        color:"white",
        backgroundColor:'black',
        border:"1px solid white"
    });

    const [btntext,setBtnText] = useState("Enable Light Mode")


        const toggleButton =() =>{
            if(myStyle.color=='white')
            {
                setMyStyle({
                    color:'black',
                    backgroundColor:"white",
                    border:"1px solid white"
                })
                setBtnText('Enabale Dark Mode')
            }
            else{
                setMyStyle({
                    color:"white",
                    backgroundColor:"black",
                    border:"1px solid black",
                })
                setBtnText('Enable light Mode')
            }
        }

    return (
        <div className='container' style={myStyle} >
            <h1 className='my-3 mx-3'>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" > 
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
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-mdb-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" style={myStyle} >
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                            brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                            craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                            heard of them accusamus labore sustainable VHS.
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
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-mdb-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                            brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                            craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                            heard of them accusamus labore sustainable VHS.
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
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-mdb-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                            brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                            craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                            heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-dark mx-3 mt-3 mb-3" onClick={toggleButton} >{btntext}</button>
        </div>
    )
}
