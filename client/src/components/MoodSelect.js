import React, { useState } from "react";
// document.body.style.backgroundColor = "maroon";
import useSound from "use-sound";
import sad from "../images/sad.jpg";
import happy from "../images/happy.jpg";
import relaxed from "../images/relaxed.jpg";
import motivated from "../images/motivated.jpg";
import excited from "../images/excited.jpeg";
import angry from "../images/inferno.jpg";
import Auth from "../utils/auth";

function MoodSelect() {
  const [mood, setMood] = useState("sad");
  // const url='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  // const [playSound] = useSound({url});

  let beat = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedMood = { mood };
    console.log(selectedMood.mood);
    if (selectedMood.mood == "sad") {
      document.body.style.backgroundColor = "#6c89cc";
      
      beat.play();
    } else if (selectedMood.mood == "happy") {
      document.body.style.cssText = `background: #f2e09b;
        background-image: ${happy}; 
         transition: all 1s ease;
         WebkitTransition: all 1s ease;
         MozTransition: all 1s ease;`;
    } else if (selectedMood.mood == "relaxed") {
      document.body.style.cssText = `background: #c180d1;
         transition: all 1s ease;
         WebkitTransition: all 1s ease;
         MozTransition: all 1s ease;`;
    } else if (selectedMood.mood == "motivated") {
      document.body.style.cssText = `background: #de9c73;
         transition: all 1s ease;
         WebkitTransition: all 1s ease;
         MozTransition: all 1s ease;`;
    } else if (selectedMood.mood == "excited") {
      document.body.style.cssText = `background: #de6f6f;
         transition: all 1s ease;
         WebkitTransition: all 1s ease;
         MozTransition: all 1s ease;`;
    } else {
      document.body.style.cssText = `background: #9c546e;
         transition: all 1s ease;
         WebkitTransition: all 1s ease;
         MozTransition: all 1s ease;`;
    }
  };
  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <div>
            <form onSubmit={handleSubmit}>
              <div class="mood-select">
                <label>I am feeling...</label>
                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                  <option value="sad">Sad</option>
                  <option value="happy">Happy</option>
                  <option value="relaxed">Relaxed</option>
                  <option value="motivated">Motivated</option>
                  <option value="excited">Excited</option>
                  <option value="angry">Angry</option>
                </select>
                <button type="submit" class="btn btn-dark text-white">
                  Play
                </button>
                {/* <p>{mood}</p>  */}
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="flex-row">
            <div className=" col-12 home-instructions">
              <h1 className="text-center">
                Welcome to <span>MOOD RING!</span>
              </h1>
              <p className="text-center">
                Feeling down? Happy? Frustrated? Mood Ring is here to help!
                Whether you wish to stay in that feeling, or change it, we have
                your back!
              </p>
              <h3 className="text-center">How to Use</h3>
              <p className="text-center">
                Begin by logging in or creating an account. You will then be
                prompted with a list of emotions to choose from. Once you have
                selected a mood, Mood Ring will provide you with a mood board of
                sorts that fits your desired emotion. Each mood is accompanied
                by music and quotes to ensure our users are put into their
                desired headspace.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MoodSelect;
