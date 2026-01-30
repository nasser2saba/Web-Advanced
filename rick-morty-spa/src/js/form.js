export function initFormValidation() {
  const form = document.getElementById('feedbackForm');
  const message = document.getElementById('formMessage');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const rating = form.querySelector('input[name="rating"]:checked')?.value;

    if (!name || !rating) {
      message.textContent = 'Please fill in all fields.';
      message.style.color = 'red';
      return;
    }

    const feedback = {
      name,
      rating,
      date: new Date().toISOString()
    };

    const stored = JSON.parse(localStorage.getItem('feedback')) || [];
    stored.push(feedback);
    localStorage.setItem('feedback', JSON.stringify(stored));

    message.textContent = `Thanks ${name}! 💖 Your feedback was saved.`;
    message.style.color = 'green';

    form.reset();
  });
}
