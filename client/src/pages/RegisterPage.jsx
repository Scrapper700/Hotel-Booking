import React from 'react'

const RegisterPage = () => {
  return (
    <div className='register'>
    <div className='register_content'>
      <form>
        
        <input
        placeholder='First Name'
        name='firstname'
        required
        />
        
         <input
        placeholder='Last Name'
        name='lastname'
        required
        />
         
         <input
        placeholder='Email'
        name='email'
        type='email'
        required
        />
        
         <input
        placeholder='Password'
        name='password'
        type='password'
        required
        />
        
        <input
        placeholder='Confirm Password'
        name='confirmPassword'
        type='password'
        required
        />
        
        <input type="file" 
        name='profileImage' 
        accept='image/*'
        style={{display:"none"}}
        required
        />
        
        <label htmlFor='image'>
          <img src="/assests/addImage.png" alt="add profile photo"/>
          <p>Upload Your Photo</p>
        </label>
        <button type="submit">REGISTER</button>
      </form>
      
      <a href='/login'>Already have a account? Log in Here</a>
    
    </div>
    </div>
  )
}

export default RegisterPage