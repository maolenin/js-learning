const submitButton = document.getElementById('submitBtn');

function submitFeedback () {

  // Get values from fields,
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;
  const userExperience = document.getElementById('experienceText').value;
  
  // Show user info section
  document.getElementById('userInfo').style.display = 'block';
  
  // Provide feedback to the user
  alert('Thank you for your valuable feedback');
  
  // Display collected information in the summary section
  document.getElementById('userName').innerHTML = username;
  document.getElementById('userAge').innerHTML = age;
  document.getElementById('userEmail').innerHTML = email;
  document.getElementById('userJob').innerHTML = job;
  document.getElementById('userDesignation').innerHTML = designation;
  document.getElementById('userProductChoice').innerHTML = productType;
  document.getElementById('userFeedback').innerHTML = feedback;
  document.getElementById('userExperience').innerHTML = userExperience;

}

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });
  
  submitButton.onclick = submitFeedback;

