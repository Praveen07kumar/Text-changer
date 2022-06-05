import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState('');

    const handleUpclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("Converted to Uppercase ", "success")
    }
    const handleLoclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert("Converted to Lower Case ", "success")
    }
    const handleclearclick = () => {
        let newtext = '';
        setText(newtext)
        props.showalert("Text cleared ", "success")
    }
    const handlecopyclick = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value)
        props.showalert("Copy to clipboard ", "success")


    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        speechSynthesis.speak(msg);
    }
    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        props.showalert("Remove extra space ", "success")
    }
    const handleOnclick = (event) => {

        setText(event.target.value)
    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#212529' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#dc3545' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnclick} id="myBox" rows="8"></textarea>
                </div >
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to Lower case</button>

                <button className="btn btn-primary mx-1 my-1" onClick={handlecopyclick}>Copy</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra space</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            </div >
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h2>Your text here</h2>
                <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} word {text.length} character</p>
                <p> {0.48 * text.split(" ").filter((element)=>{return element.length!==0}).length} Seconds to read an average person</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to previwe"}</p>
            </div>
        </>
    )
}
