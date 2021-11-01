
import './App.css';
import NavBar from "./components/NavBar.js";
import PredictHeartFailure from './components/PredictHeartFailure';
import { useState } from "react";
import DismmisibleAlert from './components/DismmisibleAlert';

let no = "NO";
let yes = "YES";
let genderMale = "MALE"
let genderFemale = "FEMALE"
let colors = {
  red:"danger",
  yellow:"alert",
  green:"success",
}


function App() {
  const [diabetesState, setDiabetesState] = useState(no);
  const [anaemiaState, setAnaemiaState] = useState(no);
  const [genderState, setGenderState] = useState(null);
  const [somkingState, setSomkingState] = useState(no);
  const [bpState, setBpState] = useState(no);
  const [ageState, setAgeState] = useState(45);
  const [alertState, setAlertState] = useState(false);
  const [alertMessage,setAlertMessage] = useState("Invalid age");
  const [alertColor,setAlertColor] = useState(colors.green);

  return (
      <>
      <DismmisibleAlert state = {alertState} message = {alertMessage} color = {alertColor}/>
      <NavBar/>
      <PredictHeartFailure yes = {yes} no = {no} colors = {colors}
                           male = {genderMale} female = {genderFemale}
                           diabetes = {diabetesState} setDiabetes = {setDiabetesState}
                           anaemia = {anaemiaState} setAnaemia = {setAnaemiaState} 
                           gender = {genderState} setGender = {setGenderState} 
                           smoking = {somkingState} setSmoking = {setSomkingState}
                           bp = {bpState} setBp = {setBpState}
                           age = {ageState} setAge = {setAgeState}
                           alertState = {alertState} alertMessage = {alertMessage}
                           setAlertState = {setAlertState} setAlertMessage = {setAlertMessage} setAlertColor = {setAlertColor}
                           />
    </>
  );
}

export default App;
