const trainingData = {
  wrist: {
    rush: {
      target: "Far-side pad-height, using the defender as a partial screen.",
      visualTarget: "low-right",
      cue: "Pull the puck inside your frame and release in stride before the lane closes.",
      confidence: "Trust your feet and shoot decisively instead of waiting for a perfect look."
    },
    slot: {
      target: "Upper blocker when the goalie is dropping early.",
      visualTarget: "top-right",
      cue: "Keep your hands away from your body and snap through the middle of the puck.",
      confidence: "In high-danger space, commit quickly and finish the rep with purpose."
    },
    powerplay: {
      target: "Low glove through traffic for a rebound or deflection chance.",
      visualTarget: "low-left",
      cue: "Change the angle with one pull and prioritize a quick release over raw power.",
      confidence: "A simple, clean release under pressure is often the best play."
    },
    breakaway: {
      target: "Against the grain under the blocker after a subtle shoulder fake.",
      visualTarget: "low-right",
      cue: "Sell your hands first, then shoot from a stable base without overhandling.",
      confidence: "Stay calm and let your preparation show up in one smooth motion."
    }
  },
  snap: {
    rush: {
      target: "Short-side high if the goalie is moving laterally.",
      visualTarget: "top-left",
      cue: "Catch and release quickly with your weight already moving toward the net.",
      confidence: "Your advantage is speed, so attack the moment with confidence."
    },
    slot: {
      target: "Mid-glove with a compact release before sticks arrive.",
      visualTarget: "top-left",
      cue: "Load lightly and fire from your hands with minimal extra motion.",
      confidence: "Quick decisions create time; trust the first good window."
    },
    powerplay: {
      target: "Inside the far post off a cross-ice pass.",
      visualTarget: "top-right",
      cue: "Prepare your blade early so the puck moves from pass to release smoothly.",
      confidence: "Be ready before the puck gets there and the play will feel slower."
    },
    breakaway: {
      target: "Five-hole if the goalie is backing in and staying tall.",
      visualTarget: "five-hole",
      cue: "Approach with controlled speed and release before the goalie sets fully.",
      confidence: "A confident quick release can be more effective than an extra deke."
    }
  },
  slap: {
    rush: {
      target: "Low far pad for a rebound if you have space above the circles.",
      visualTarget: "low-right",
      cue: "Keep your head up and make sure the puck is set early enough for clean contact.",
      confidence: "Choose power only when the timing and lane are there."
    },
    slot: {
      target: "Stick-side through traffic with controlled pace.",
      visualTarget: "low-right",
      cue: "Shorten the backswing and stay balanced so you do not sacrifice accuracy.",
      confidence: "Control matters more than maximum force in tight space."
    },
    powerplay: {
      target: "High glove from the point when traffic is layered in front.",
      visualTarget: "top-left",
      cue: "Transfer through your front side and hit through the middle for a heavy, accurate shot.",
      confidence: "Let the structure of the power play create the chance and finish your mechanics."
    },
    breakaway: {
      target: "Not recommended; switch to a quicker option unless the goalie is deeply set.",
      visualTarget: "five-hole",
      cue: "Recognize the situation and adapt your shot selection to the moment.",
      confidence: "Smart choices are part of confidence too."
    }
  },
  backhand: {
    rush: {
      target: "Far-side shelf if the goalie is leaning on your forehand threat.",
      visualTarget: "top-right",
      cue: "Push the puck slightly ahead and elevate with soft hands instead of rushing the lift.",
      confidence: "A patient backhand can surprise the goalie when you sell the forehand first."
    },
    slot: {
      target: "Low blocker with quick elevation if the goalie drops.",
      visualTarget: "low-right",
      cue: "Protect the puck and keep your wrists relaxed through the finish.",
      confidence: "Do not force it; stay composed and use deception."
    },
    powerplay: {
      target: "Near-side under the bar on a recovery around the crease.",
      visualTarget: "top-left",
      cue: "Stay tight to the body and lift with touch from close range.",
      confidence: "Around the net, confidence comes from calm hands and controlled edges."
    },
    breakaway: {
      target: "Backhand shelf after freezing the goalie on the forehand.",
      visualTarget: "top-right",
      cue: "Match your speed to the goalie, then lift with a compact upward motion.",
      confidence: "Commit fully once you choose the move and finish without hesitation."
    }
  }
};

const form = document.getElementById("shot-trainer-form");
const targetDot = document.getElementById("targetDot");

const targetPositions = {
  "top-left": { top: "16%", left: "20%" },
  "top-right": { top: "16%", left: "80%" },
  "low-left": { top: "68%", left: "22%" },
  "low-right": { top: "68%", left: "78%" },
  "five-hole": { top: "66%", left: "50%" }
};

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const shotType = document.getElementById("shotType").value;
    const situation = document.getElementById("situation").value;
    const result = trainingData[shotType][situation];

    document.getElementById("targetLocation").textContent = result.target;
    document.getElementById("coachingCue").textContent = result.cue;
    document.getElementById("confidenceTip").textContent = result.confidence;

    if (targetDot && targetPositions[result.visualTarget]) {
      const nextTarget = targetPositions[result.visualTarget];
      targetDot.style.top = nextTarget.top;
      targetDot.style.left = nextTarget.left;
      targetDot.classList.add("is-visible");
    }
  });
}
