import React from 'react'

function Contact() {
  return (
    
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form >
  )
}

export default Contact