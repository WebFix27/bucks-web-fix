const visualOnlyForms = document.querySelectorAll("[data-visual-only-form]");

visualOnlyForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");

    if (status) {
      status.textContent = "This form is being connected. For now, please email hello.buckswebfix@outlook.com or call 07483215393 for a free website review.";
    }
  });
});
