
export default function FieldSet(){

    return (
   

<fieldset name="clubfields" disabled>
    <legend>
        <label>
            <input type="checkbox" name="club" />
            Use Club Card
            
        </label>
    </legend>
    <p>
        <label>
            Name on card: <input type="text"
                id="cardName"
                placeholder="Enter card name"
                 name="clubname" required/>
        </label>
    </p>
    <p>
        <label>
            Card number: <input  name="clubnum"  required pattern="[-0-9]+"/>
        </label>
    </p>
    <p>
        <label>
          Expiry date: <input name="clubexp" type="number" />   
        </label>
    </p>

   </fieldset>

  
    
    );
}