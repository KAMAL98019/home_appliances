(() => {
  'use strict';

  // Bootstrap validation
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      const mobileInput = document.getElementById('mobileNumber');
      const mobileValue = mobileInput.value.trim();
      const mobilePattern = /^[0-9]{10}$/;

      if (!mobilePattern.test(mobileValue)) {
        mobileInput.classList.add('is-invalid');
        event.preventDefault();
        event.stopPropagation();
      } else {
        mobileInput.classList.remove('is-invalid');
      }

      form.classList.add('was-validated');
    }, false);
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  const modalId = 'enquiryModal';
  const hasModalBeenShown = localStorage.getItem('hasEnquiryModalBeenShown');

  if (!hasModalBeenShown) {
    const myModal = new bootstrap.Modal(document.getElementById(modalId), {
      backdrop: 'static',
      keyboard: false
    });

    myModal.show();
    localStorage.setItem('hasEnquiryModalBeenShown', 'true');
  }

  // Close button mobile number check
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      const mobileInput = document.getElementById('mobileNumber');
      const mobileValue = mobileInput.value.trim();
      const mobilePattern = /^[0-9]{10}$/;

      if (!mobilePattern.test(mobileValue)) {
        mobileInput.classList.add('is-invalid');
        mobileInput.focus();
        e.preventDefault();
      } else {
        const enquiryModal = bootstrap.Modal.getInstance(document.getElementById(modalId));
        enquiryModal.hide();
      }
    });
  }
});