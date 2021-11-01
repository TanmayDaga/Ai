import React from 'react'
import * as tf from '@tensorflow/tfjs';
import './PredictHeartFailure.css';


export default function PredictHeartFailure(props) {
    var model;

    // Load model
    async function loadModel() {
        model = await tf.loadLayersModel('https://raw.githubusercontent.com/TanmayDaga/Ai/main/models/model.json')
        console.log("model loaded success")
    }
    loadModel();



    const loadValues = (value) => {
        if (value === props.male) {
            return 1;
        }
        if (value === props.female) {
            return 0;
        }
        return 1 ? value === props.yes : 0;
    }
    function roundToX(num, X) {
        return +(Math.round(num + "e+" + X) + "e-" + X);
    }
    function makePrediction() {

        var input_xs;
        input_xs = tf.tensor2d([
            [Number(props.age),
            loadValues(props.anaemia),
            loadValues(props.diabetes),
            loadValues(props.bp),
            loadValues(props.gender),
            loadValues(props.smoking)
            ]
        ])

        var output = model.predict(input_xs)
        var outputData = output.dataSync();
        document.getElementById("answer").value = "You have " + String(roundToX(Number(outputData) * 100, 2)) + " % chances of heart failure"


    }

    const handleGender = (event) => {
        event === props.male ? props.setGender(props.yes) : props.setGender(props.no)
    }

    const handleAge = (event) => {
        var regex = /^[0-9]+$/;
        if (event.target.value === "" || (event.target.value.match(regex))) {
            const initial = props.age;
            props.setAge(event.target.value);
            if (String(props.age).length >= 3 || String(props.age).length === 0) {

            }


        }

    }
    const handleAnaemia = (event) => {
        event === props.yes ? props.setAnaemia(props.yes) : props.setAnaemia(props.no)
    }
    const handleSmoking = (event) => {
        event === props.yes ? props.setSmoking(props.yes) : props.setSmoking(props.no)
    }
    const handleBp = (event) => {
        event === props.yes ? props.setBp(props.yes) : props.setBp(props.no)
    }
    const handleDiabetes = (event) => {
        event === props.yes ? props.setDiabetes(props.yes) : props.setDiabetes(props.no)
    }

    return (
        <>
            <div className="container-fluid">
                {/* Gender */}

                <div>
                    <div className="form-check-inline">
                        <label className="form-check-lable">
                            Gender:
                        </label>
                    </div>

                    <div className="form-check-inline">
                        <label htmlFor="maleGenderRadioButton">Male</label>
                        <input type="radio" name="genderRadioButton" id="maleGenderRadioButton" onClick={() => handleGender(props.male)} />
                    </div>
                    <div className="form-check-inline">
                        <label htmlFor="femaleGenderRadioButton">Female</label>
                        <input type="radio" name="genderRadioButton" id="femaleGenderRadioButton" defaultChecked={true} onClick={() => handleGender(props.female)} />
                    </div>
                </div>

                {/* Age */}
                <div className="form-group">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label className="col-form-label" htmlFor="inputAge">Age</label>
                                </td>
                                <td>
                                    <input type="text" className="container-fluid ageTextEdit" id="inputAge" onChange={(e) => { handleAge(e) }} value={props.age} placeholder="Enter Age" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Anameia */}
                <div>
                    <div className="form-check-inline">
                        <label className="form-check-lable">
                            Anaemia
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label htmlFor="yesAnaemiaRadioButton" className="form-check-inline">Yes</label>
                        <input type="radio" name="anameiaRadioButton" id="yesAnaemiaRadioButton" onClick={() => handleAnaemia(props.yes)}></input>
                    </div>
                    <div className="form-check form-check-inline">
                        <label htmlFor="noAnaemiaRadioButton" className="form-check-inline">No</label>
                        <input type="radio" name="anameiaRadioButton" defaultChecked={true} id="noAnaemiaRadioButton" onClick={() => handleAnaemia(props.no)}></input>
                    </div>
                </div>

                {/* Smoking */}
                <div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            Smoking
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label htmlFor="yesSmokingRadioButton" className="form-check-inline">Yes</label>
                        <input type="radio" name="smokingRadioButton" id="yesSmokingRadioButton" onClick={() => handleSmoking(props.yes)}></input>
                    </div>
                    <div className="form-check form-check-inline">
                        <label htmlFor="noSmokingRadioButton" className="form-check-inline">No</label>
                        <input type="radio" name="smokingRadioButton" id="noSmokingRadioButton" defaultChecked={true} onClick={() => handleSmoking(props.no)}></input>
                    </div>
                </div>
                {/* High Blooad Pressur */}
                <div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            High Blood Pressure?
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label htmlFor="yesBpRadioButton" className="form-check-inline">Yes</label>
                        <input type="radio" name="BpRadioButton" id="yesBpRadioButton" onClick={() => handleBp(props.yes)}></input>
                    </div>
                    <div className="form-check form-check-inline">
                        <label htmlFor="noBpRadioButton" className="form-check-inline">No</label>
                        <input type="radio" name="BpRadioButton" id="noBpRadioButton" defaultChecked={true} onClick={() => handleBp(props.no)}></input>
                    </div>
                </div>

                {/* Diabetes */}
                <div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            Diabetes
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label htmlFor="yesDiabetesRadioButton" className="form-check-inline">Yes</label>
                        <input type="radio" name="DiabetesRadioButton" id="yesDiabetesRadioButton" onClick={() => handleDiabetes(props.yes)}></input>
                    </div>
                    <div className="form-check form-check-inline">
                        <label htmlFor="noDiabetesRadioButton" className="form-check-inline">No</label>
                        <input type="radio" name="DiabetesRadioButton" id="noDiabetesRadioButton" defaultChecked={true} onClick={() => handleDiabetes(props.yes)}></input>
                    </div>
                </div>

                <div>
                    <input type="text" id="answer" readOnly className="form-control-plaintext" style={{ width: "50%" }} />
                    <input type="button" className="clickButton my-1 btn btn-primary pull-right" onClick={makePrediction} value="Get Results" />

                </div>
            </div>
        </>
    )
}
