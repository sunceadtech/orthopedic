document.getElementById("appointmentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Prepare payload with your access key and form data
  const payload = {
    access_key: "d178f430-9dc9-4bf5-871b-b104717253a8",
    subject: "dramitsharmaortho.com - New Consultation Request",
    from_name: "dramitsharmaortho.com",
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    serviceType: formData.get("serviceType"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      alert("Thank you! Your consultation request has been submitted.");
      form.reset();
      window.location.href = "thankyou.html"; // Redirect to thank you page
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again later.");
  }
});
