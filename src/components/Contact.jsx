import React from 'react'

const Contact = () => {
  return (
    <div class="contact">
    <div class="fc">
  
    <label for="email">Email</label>
    <input type="text" placeholder="Enter Email" name="email" required />
    <label for="password">Password</label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    <br/>
    <button type="submit" class="btn">Login</button>
    <button type="cancel" class="cancel">cancel</button>

    
  
  </div>
</div>
  )
}

export default Contact