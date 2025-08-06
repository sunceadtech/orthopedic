document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const phone = e.target.phone.value.trim();
  const message = e.target.message.value.trim();

  const errorEl = document.getElementById("form-error");
  errorEl.textContent = "";

  if (!name || !email || !phone || !message) {
    errorEl.textContent = "All fields are required.";
    return;
  }

  const payload = {
    access_key: "d178f430-9dc9-4bf5-871b-b104717253a8",
    subject: "dramitsharmaortho.com - New Appointment",
    from_name: "dramitsharmaortho.com",
    name,
    email,
    phone,
    message,
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    if (result.success) {
      window.location.href = "/thankyou.html";
    } else {
      errorEl.textContent = "Form submission failed. Please try again.";
    }
  } catch (err) {
    errorEl.textContent = "Something went wrong. Please try later.";
  }
});
