---
layout: page
title: Contact
permalink: /contact/
description: Get in touch with ESB AI Lab Corporation.
nav: true
nav_order: 6
---

<style>
  .contact-form { display: flex; flex-direction: column; gap: 20px; max-width: 600px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
  .form-group { display: flex; flex-direction: column; gap: 4px; }
  .form-group label { font-size: 0.82rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--global-text-color-light, #666); }
  .form-group label .req { color: #b33a3a; margin-left: 2px; }
  .form-group input, .form-group select, .form-group textarea {
    font-family: inherit; font-size: 1rem; color: var(--global-text-color, #333);
    background: var(--global-bg-color, #fff); border: 1.5px solid var(--global-divider-color, #e0e0e0);
    border-radius: 4px; padding: 10px 12px; outline: none; width: 100%;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
    border-color: var(--global-theme-color, #6c3082);
    box-shadow: 0 0 0 3px rgba(108, 48, 130, 0.1);
  }
  .form-group select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%23666' d='M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z'/%3E%3C/svg%3E");
    background-repeat: no-repeat; background-position: right 12px center; padding-right: 36px; cursor: pointer;
  }
  .form-group textarea { min-height: 140px; resize: vertical; line-height: 1.6; }
  .submit-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 4px; }
  .submit-btn {
    font-family: inherit; font-size: 0.95rem; font-weight: 600; color: #fff;
    background: var(--global-theme-color, #6c3082); border: none; border-radius: 4px;
    padding: 11px 28px; cursor: pointer; transition: opacity 0.2s;
  }
  .submit-btn:hover { opacity: 0.85; }
  .privacy-note { font-size: 0.78rem; color: var(--global-text-color-light, #999); line-height: 1.4; max-width: 300px; }
  @media (max-width: 500px) {
    .submit-row { flex-direction: column-reverse; align-items: stretch; }
    .privacy-note { max-width: 100%; text-align: center; }
    .submit-btn { width: 100%; }
  }
  .success-msg { display: none; text-align: center; padding: 40px 20px; }
  .success-msg h3 { margin-bottom: 8px; }
  .success-msg p { color: var(--global-text-color-light, #666); }
  .direct-contact { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--global-divider-color, #e0e0e0); max-width: 600px; }
  .dc-item .dc-label { font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--global-text-color-light, #999); display: block; margin-bottom: 2px; }
</style>

We welcome inquiries about research collaboration, education programs, and organizational partnerships. We respond within five business days.

<form class="contact-form" id="contactForm" action="https://formspree.io/f/mlgzagyn" method="POST">
  <div class="form-row">
    <div class="form-group">
      <label for="name">Name <span class="req">*</span></label>
      <input type="text" id="name" name="name" required placeholder="Your name">
    </div>
    <div class="form-group">
      <label for="email">Email <span class="req">*</span></label>
      <input type="email" id="email" name="email" required placeholder="you@example.com">
    </div>
  </div>
  <div class="form-group">
    <label for="reason">Reason for contacting <span class="req">*</span></label>
    <select id="reason" name="reason" required>
      <option value="" disabled selected>Select a topic</option>
      <option value="Research Collaboration">Research Collaboration</option>
      <option value="Education Programs">Education Programs</option>
      <option value="Support & Giving">Support & Giving</option>
      <option value="Board Service">Board Service</option>
      <option value="Media & Press">Media & Press</option>
      <option value="Other">Other</option>
    </select>
  </div>
  <div class="form-group">
    <label for="message">Message <span class="req">*</span></label>
    <textarea id="message" name="message" required placeholder="How can we help?"></textarea>
  </div>
  <div class="submit-row">
    <p class="privacy-note">ESB AI Lab does not sell or share contact information submitted through this form.</p>
    <button type="submit" class="submit-btn">Send Message</button>
  </div>
</form>

<div class="success-msg" id="successMsg">
  <h3>Message sent</h3>
  <p>We'll get back to you within five business days.</p>
</div>

<div class="direct-contact">
  <div class="dc-item">
    <span class="dc-label">Executive Director</span>
    Edwin Solares, Ph.D.
  </div>
</div>

<script>
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  try {
    const res = await fetch(this.action, { method: 'POST', body: new FormData(this), headers: { 'Accept': 'application/json' } });
    if (res.ok) { this.style.display = 'none'; document.getElementById('successMsg').style.display = 'block'; }
  } catch (err) { this.submit(); }
});
</script>
