// Sandwich data and corresponding personality traits
const sandwiches = [
    { name: "Grilled Chicken", traits: ["Submissive", "Simple", "Emotional", "Extrovert", "Lawful", "Lazy", "Instinctive", "Compersion", "Thrifty", "Humorless", "Conservative"] },
    { name: "Cubano", traits: ["Dominant", "Mysterious", "Emotional", "Extrovert", "Rogue", "Ambitious", "Gifted", "Learned", "Jealous", "Thrifty", "Funny", "Liberal"] },
    { name: "BEC", traits: ["Dominant", "Simple", "Emotional", "Extrovert", "Lawful", "Lazy", "Inept", "Jealous", "Thrifty", "Funny", "Liberal"] },
    { name: "Ruben", traits: ["Dominant", "Mysterious", "Emotional", "Extrovert", "Lawful", "Lazy", "Gifted", "Learned", "Jealous", "Thrifty", "Funny", "Liberal"] },
    { name: "Bahn Mi", traits: ["Dominant", "Mysterious", "Intellectual", "Introvert", "Rogue", "Ambitious", "Gifted", "Instinctive", "Jealous", "Thrifty", "Humorless", "Liberal"] },
    { name: "Gyro", traits: ["Dominant", "Simple", "Emotional", "Extrovert", "Lawful", "Lazy", "Inept", "Instinctive", "Jealous", "Thrifty", "Funny", "Liberal"] },
    { name: "Ham and Brie on Baguette", traits: ["Submissive", "Mysterious", "Intellectual", "Introvert", "Rogue", "Ambitious", "Gifted", "Learned", "Compersion", "Extravagant", "Humorless", "Conservative"] },
    { name: "PB n J", traits: ["Submissive", "Simple", "Emotional", "Introvert", "Lawful", "Lazy", "Gifted", "Instinctive", "Jealous", "Thrifty", "Funny", "Liberal"] }
  ];
  
  // Initialize the quiz
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");
  const resultCanvas = document.getElementById("traitsChart");
  
  // Generate quiz questions
  sandwiches.forEach((sandwich, index) => {
    const question = document.createElement("div");
    question.innerHTML = `
      <p>Do you like ${sandwich.name}?</p>
      <label>
        <input type="radio" name="q${index}" value="yes"> Yes
      </label>
      <label>
        <input type="radio" name="q${index}" value="no"> No
      </label>
    `;
    quizContainer.appendChild(question);
  });
  
  // Function to display the chart
  function displayChart(traitsCount) {
    const labels = Object.keys(traitsCount);
    const data = Object.values(traitsCount);
  
    new Chart(resultCanvas, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Personality Traits Frequency",
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Frequency"
            }
          },
          x: {
            title: {
              display: true,
              text: "Traits"
            }
          }
        }
      }
    });
  }
  
  // Calculate personality and display result
  submitButton.addEventListener("click", () => {
    const responses = Array.from(document.querySelectorAll("input[type='radio']:checked"));
    if (responses.length < sandwiches.length) {
      alert("Please answer all questions.");
      return;
    }
  
    const traitsCount = {};
  
    responses.forEach((response, index) => {
      if (response.value === "yes") {
        sandwiches[index].traits.forEach(trait => {
          traitsCount[trait] = (traitsCount[trait] || 0) + 1;
        });
      }
    });
  
    // Display the chart
    displayChart(traitsCount);
  });