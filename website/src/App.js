
import './App.css';
import NavBar from "./my-components/NavBar.js";
import PredictHeartFailure from './my-components/PredictHeartFailure';
import { useState } from "react";

let no = "NO";
let yes = "YES";
let genderMale = "MALE"
let genderFemale = "FEMALE"



function App() {
  const [diabetesState, setDiabetesState] = useState(no);
  const [anaemiaState, setAnaemiaState] = useState(no);
  const [genderState, setGenderState] = useState(null);
  const [somkingState, setSomkingState] = useState(no);
  const [bpState, setBpState] = useState(no);
  const [ageState, setAgeState] = useState(45);
  return (
    <>
      <NavBar/>
      <PredictHeartFailure yes = {yes} no = {no} 
                           male = {genderMale} female = {genderFemale}
                           diabetes = {diabetesState} setDiabetes = {setDiabetesState}
                           anaemia = {anaemiaState} setAnaemia = {setAnaemiaState} 
                           gender = {genderState} setGender = {setGenderState} 
                           smoking = {somkingState} setSmoking = {setSomkingState}
                           bp = {bpState} setBp = {setBpState}
                           age = {ageState} setAge = {setAgeState}/>
    </>
  );
}

export default App;
