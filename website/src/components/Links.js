import React from 'react'
import './Csss/Links.css'



export default function Links() {
    let externalLinks = require("../externalLinks.json");
    return (
        <div className="containerMainLinks container-fluid" >
            <h3>Reference Links</h3>
            <details >
                <summary>
                    Diabetes
                </summary>
                <a className="link-success"href={externalLinks.diabetes.Prevent}>How to prevent Diabetes</a><br />
                <a className="link-success"className="link-success" href={externalLinks.diabetes.Deal}>How to deal with Diabetes</a>
            </details>
            <details>
                <summary>
                    Smoking
                </summary>
                <a className="link-success"href={externalLinks.smoking.Stop}>How to stop smoking</a><br />
                <a className="link-success"href={externalLinks.smoking.Consequences}>Consequences of smoking</a>
            </details>
            <details>
                <summary>
                    Anaemia

                </summary>
                <a className="link-success"href={externalLinks.anaemia.what}>What is anaemia</a><br />
                <a className="link-success"href={externalLinks.anaemia.symptoms}>Symptoms of anaemia</a><br />
                <a className="link-success"href={externalLinks.anaemia.preventions}>How to prevent anaemia</a>

            </details>
            <details>
                <summary>
                    Blood Pressure
                </summary>
                <a className="link-success"href={externalLinks.bloodPressure.symptomsAndCauses}>Symptoms of High Blood Pressure</a><br />
                <a className="link-success"href={externalLinks.bloodPressure.preventions}>Prevent high blood pressure</a>
            </details>


        </div>
    )
}
