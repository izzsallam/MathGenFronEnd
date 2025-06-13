document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const outputText = document.querySelector('.output-text');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const originalProblem = document.getElementById('original-problem').value;
    const theme = document.getElementById('theme-select').value;
    const educationLevel = document.getElementById('education-level').value;

    
    outputText.textContent = "Sending data to AI model...";

    
    simulateAIRequest({ originalProblem, theme, educationLevel })
      .then(response => {
        outputText.textContent = response;
      })
      .catch(error => {
        outputText.textContent = "Failed to generate problem: " + error;
      });
  });

  
  function simulateAIRequest(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockResponses = {
          "Video Games": {
            "primary": `Generated Problem: If Mario has 5 coins and finds 3 more, how many coins does Mario have?`,
            "middle": `Generated Problem: In Minecraft, a player fires an arrow at a creeper standing 15 blocks away. The arrow follows a parabolic path described by the equation: y = -0.05x^2 + 1.5x. At what horizontal distance x will the arrow hit the ground?`,
            "high": `Generated Problem: Calculate the trajectory angle for a character jump using the equation: -4.9t^2 + 20t + 1 = 0.`,
            "college": `Generated Problem: Develop a probability model for loot box outcomes using advanced combinatorics.`
          },
          "Sports": {
            "primary": `Generated Problem: If a basketball team scores 10 points in the first half and 14 points in the second half, how many points did they score in total?`,
            "middle": `Generated Problem: A marathon runner's speed is 8 km/h. How long will it take to finish a 42 km marathon?`,
            "high": `Generated Problem: Calculate the optimal launch angle for a javelin throw using physics principles.`,
            "college": `Generated Problem: Analyze the aerodynamics of a soccer ball in flight using differential equations.`
          },
          "Science": {
            "primary": `Generated Problem: If a plant grows 2 cm each week, how tall will it be after 5 weeks?`,
            "middle": `Generated Problem: Calculate the density of a substance with mass 50g and volume 10cm³.`,
            "high": `Generated Problem: Balance the chemical equation: Fe + O₂ → Fe₂O₃.`,
            "college": `Generated Problem: Derive the wave function for an electron in a hydrogen atom using quantum mechanics.`
          },
          "Technology": {
            "primary": `Generated Problem: If a computer executes 5 tasks per second, how many tasks will it execute in 10 seconds?`,
            "middle": `Generated Problem: Calculate the binary equivalent of the decimal number 25.`,
            "high": `Generated Problem: Design a logic circuit for a full adder using NAND gates.`,
            "college": `Generated Problem: Develop an algorithm for real-time data encryption using elliptic curve cryptography.`
          }
        };

       
        if (mockResponses[data.theme] && mockResponses[data.theme][data.educationLevel]) {
          resolve(mockResponses[data.theme][data.educationLevel]);
        } else {
          reject("No response generated for the given inputs.");
        }
      }, 1500); 
    });
  }
});
