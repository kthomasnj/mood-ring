import React, {useState} from 'react';
// document.body.style.backgroundColor = "maroon";

function MoodSelect (){
    const [mood, setMood]=useState('sad');

    const handleSubmit = (e) => {
      e.preventDefault();
      const selectedMood={mood};
      console.log(selectedMood.mood);
      if(selectedMood.mood=='sad'){
        document.body.style.backgroundColor = "#1515b6";
      }
      else if(selectedMood.mood=='happy'){
        document.body.style.cssText = 
        `background: green;
         transition: all 1s ease;
         WebkitTransition: all 1s ease;
         MozTransition: all 1s ease;`;
      }
      else{
        document.body.style.cssText = 
        `background: maroon;
         transition: all 1s ease;
         WebkitTransition: all 1s ease;
         MozTransition: all 1s ease;`;
      }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div class='mood-select'>
            <label>I am Feeling</label>
            <select 
            value={mood}
            onChange={(e)=>setMood(e.target.value)}
            >
                <option value="sad">Sad</option>
                <option value="happy">Happy</option>
                <option value="angry">Angry</option>
            </select>
        <button type="submit" class="btn btn-primary">Play</button>
        {/* <p>{mood}</p>  */}
        </div>
        </form>
           
    </div>
    
  );
};

export default MoodSelect;
