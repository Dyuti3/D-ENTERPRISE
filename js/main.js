// Image and Video Modal
const modal = document.getElementById('media-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-modal');

document.querySelectorAll('.media').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const mediaType = thumb.dataset.type;
    const src = thumb.dataset.src;

    modalContent.innerHTML = '';

    if (mediaType === 'image') {
      const img = document.createElement('img');
      img.src = src;
      modalContent.appendChild(img);
    } else if (mediaType === 'video') {
      const vid = document.createElement('video');
      vid.src = src;
      vid.controls = true;
      vid.autoplay = true;
      modalContent.appendChild(vid);
    }
    document.body.style.overflow = "hidden";
    modal.showModal();
  });
});

function closeModal() {
  modal.close();
  modalContent.innerHTML = '';
}

closeBtn.addEventListener('click', () => {
  closeModal();
  document.body.style.overflowY = "scroll";
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
    document.body.style.overflowY = "scroll";
  }
});

// FAQ toggle
  function toggleFaq(el) {
    const item = el.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));

  // Form submit
  function submitForm() {
    const name = document.getElementById('fname').value.trim();
    const phone = document.getElementById('fphone').value.trim();
    const email = document.getElementById('femail').value.trim();
    const address = document.getElementById('faddress').value.trim();
    const course = document.getElementById('fcourse').value;

    if (!name || !phone || !email || !address || !course) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    // Save to localStorage as simple DB
    const entries = JSON.parse(localStorage.getItem('enrollments') || '[]');
    entries.push({ name, phone, email, address, course, date: new Date().toISOString() });
    localStorage.setItem('enrollments', JSON.stringify(entries));

    document.getElementById('formWrap').style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
  }

  // Video opener
  function openVideo(url) {
    if (url && url !== 'YOUR_YOUTUBE_LINK_1' && url !== 'YOUR_YOUTUBE_LINK_2' && url !== 'YOUR_YOUTUBE_LINK_3') {
      window.open(url, '_blank');
    } else {
      alert('Replace the video URL placeholders with your real YouTube links!');
    }
  }