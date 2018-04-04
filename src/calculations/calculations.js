//state = this.state.value (i.e. 12+3)
//value = newValue (i.e. '=')
function calculation (value, state) {

  //combines the arguments (i.e. 12+3=)
  let result = state.concat(value);
  let num1;
  let num2;
  let finalNum;

  //running a for loop to get i for our index
 for (let i = 0; i < result.length; i++) {
   if ( (isNaN(parseFloat(result[i]))) && (result[i] !== '.') && (i !== result.length -1)) {
//last condition: makes sure that i is not the =.
     let operator = result[i];
     //slice includes start index, but not the end index
     num1 = result.slice(0, i);
     num2 = result.slice(i + 1, result.length - 1);

     if (operator === "+") {
       finalNum = parseFloat(num1) + parseFloat(num2);
     }

     else if (operator === "-") {
       finalNum = parseFloat(num1) - parseFloat(num2);
     }

     else if (operator === "/") {
       finalNum = parseFloat(num1) / parseFloat(num2);
     }

     else if (operator === "x") {
       finalNum = parseFloat(num1) * parseFloat(num2);
     }

     //once it has finished the for/if conditions, then we want it to render finalNum --> this.setState({value: finalNum.toString()}). toString() because we are continually using .concat (only for strings).
     return {
       value: finalNum.toString()
     }

   }
 }

 //if it DOESN'T meet the for/if conditions, we return the result (i.e. 12+ or 12+3, this is why it renders on the page --> this.setState({value: result})
 return {
   value: result
 }

}

export default calculation;
