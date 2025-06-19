// form.js

const form = document.getElementById("skillForm");

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    // Let browser show native validation
    return;
  }

  // Optional: Uncomment if you want to store values in localStorage
  
  const data = {
    name: form.fullname.value,
    email: form.email.value,
    title: form.skillname.value,
    category: form.category.value,
    description: form.description.value
  };
  localStorage.setItem("formData", JSON.stringify(data));

  // Optional: Confirmation before real submission
   e.preventDefault();
   const confirm = window.confirm("Submit this skill?");
   if (confirm) form.submit();
});
