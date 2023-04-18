import React from 'react'
import "./footer.css"
import{ FaFacebook, FaTwitter,FaInstagram,} from "react-icons/fa"



function Footer() {
    const [email, setEmail]= React.useState('')
    const handleChange = (e)=> setEmail(e.target.value)

    const submit = ()=>{
        console.log(email)
        setEmail('')
    }
  return (
    <footer className='footer'>
        <div className='footer--list--container'>
            <ul>
                <p>About us</p>
                <li>about</li>
                <li>contact us</li>
                <li>Newsroom</li>
                <li>careers</li>
                <li>Blog</li>
            </ul>
            <ul>
                <p>Support</p>
                <li>Product Support</li>
                <li>Community</li>
                <li>Report Abuse</li>
            </ul>
            <ul>
                <p>Resources</p>
                <li>Webmail</li>
                <li>Afiliates</li>
            </ul>
            <ul>
                <p>Account</p>
                <li>My Account</li>
                <li>My Renewals</li>
                <li>Create Account</li>
            </ul>
        </div>
        <div className='SignUp--container'>
            <p>Sign Up for specials</p>
            <div className='email--input'>
                <input 
                    type="email"
                    placeholder='Email Address'
                    value={email}
                    name='email'
                    onChange={(e)=> {handleChange(e)}} 
                
                />
                <button onClick={()=> {submit()}}>Submit</button>
            </div>
        </div>
        <div className='icons--container'>
            <FaFacebook size={42}/>
            <FaInstagram size={42}/>
            <FaTwitter size={42}/>
            
        </div>
        <p className='bottom--text'> 
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quia ducimus, numquam ab voluptates sunt, corrupti doloribus cumque nostrum dolorum eum ipsum vitae, similique aliquid beatae aspernatur ratione unde animi.</span>
        </p>
        <p>Copyright &#169; 2023 All Rights Reserved</p>
    </footer>
  )
}

export default Footer