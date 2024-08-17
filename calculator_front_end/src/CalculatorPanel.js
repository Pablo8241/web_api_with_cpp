import React from "react"
import CalculatorButton from "./CalculatorButton"
import CalculatorDisplay from "./CalculatorDisplay"

function CalculatorPanel(props){
// This is now code with third branch
// Make sure the button handlers are correct.


    const buttons = [
        {text: "7", handler: ()=> props.numberClicked("7")},
        {text: "8", handler: ()=> props.numberClicked("8")},
        {text: "9", handler: ()=> props.numberClicked("9")},
        {text: "/", handler: ()=> props.operationClicked("divide")},
        {text: "4", handler: ()=> props.numberClicked("4")},
        {text: "5", handler: ()=> props.numberClicked("5")},
        {text: "6", handler: ()=> props.numberClicked("6")},
        {text: "*", handler: ()=> props.operationClicked("multiply")},
        {text: "1", handler: ()=> props.numberClicked("1")},
        {text: "2", handler: ()=> props.numberClicked("2")},
        {text: "3", handler: ()=> props.numberClicked("3")},
        {text: "-", handler: ()=> props.operationClicked("subtract")},
        {text: "0", handler: ()=> props.numberClicked("0")},
        {text: ".", handler: ()=> props.dotClicked()},
        {text: "C", handler: ()=> props.clearClicked()},
        {text: "+", handler: ()=> props.numberClicked("add")},
        {text: "=", handler: ()=> props.equalClicked()},
    ];

    const calc_buttons = buttons.map((value, index) => {
        return <CalculatorButton 
            caption={value.text} 
            onClick={value.handler}/>
    });

    return(
        <div className="calculator-grid-container">
            <CalculatorDisplay text={props.result} />
            {calc_buttons}
        </div>
    );
}
 // remember to export
export default CalculatorPanel;