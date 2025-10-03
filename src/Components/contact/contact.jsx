import React, { useState } from 'react'
import emailjs from "emailjs-com"; //email js
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



const contact = () => {

  const [message, setMessage] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [err, setErr] = useState(false)
  const [sucess, setSucess] = useState(false)
  const [warning, setWarning] = useState(false)








  function sendMessage() {
    if (!message.name || !message.email || !message.message) {


      setWarning(true)
      setTimeout(() => {
        setWarning(false)

      }, 4000)
      return



    }

    emailjs
      .send(
        "service_ink7o3g",      // Your Service ID
        "template_1ajko5n",      // Your Template ID
        message,               // Pass formData directly
        "4D6504Kr6c0LymhBQ"         // Your Public Key
      )
      .then(
        (result) => {
          console.log("Message Sent ✅", result.text);
          setSucess(true)
          setTimeout(() => {
            setSucess(false)

          }, 4000)



          setMessage({ name: '', email: '', phone: '', message: '' }); // reset form
        },
        (error) => {
          console.error("Error ❌", error.text);
          setErr(true)
          setTimeout(() => {
            setErr(false)

          }, 4000)


        }
      );



  }





  return (
    <div id='contact' className='flex flex-col'>


      <h2 className='title_text  mx-10 md:mx-15'>Contact</h2>
      <div className='flex flex-col-reverse md:flex-row  md:mx-12 mt-5
         md:mt-10 justify-center  2xl:h-170 md:h-140  '>
        <div className=' flex flex-col justify-between p-10   2xl:gap-25 md:w-70 2xl:w-90  bg-black md:bg-gray-900  md:rounded-bl-4xl'>
          <div>
            <h2 className='title_text '>Contact Information</h2>
            <p className='paragraph_text'>say somthing to start a live chat!</p>
          </div>

          <div className='flex flex-col gap-y-3 mt-5 md:mt-auto md:gap-y-5 text-white text-xs md:text-sm font-semibold '>
            <div>
              <p>+91 9626023853</p>
            </div>
            <div>
              <p>codersiva6@gmail.com</p>
            </div>
            <div>
              <p>Musiri-621211,<br />
                trichy district,<br />
                Tamil Nadu, India
              </p>
            </div>

          </div>
          {/* Social media links */}

          <div className='flex gap-3 text-2xl md:text-3xl text-white mt-5 md:mt-auto'>
            <GrInstagram />
            <GrLinkedin />
            <GrGithub />


          </div>
        </div>
        {/* Contact form */}
        <div className='flex justify-center bg-gray-200 md:bg-white  md:rounded-tr-4xl'>
          <form action="" className='flex flex-col gap-10 px-2  md:px-20   py-15 '>
            <div className='flex  flex-col  md:flex-row   gap-10 '>
              <FormControl variant="standard" className='w-80 md:w-60'>
                <InputLabel htmlFor="component-simple">Name *</InputLabel>
                <Input id="component-simple" defaultValue={message.firstname} onChange={(e) => setMessage(prev => ({ ...prev, name: e.target.value }))} />
              </FormControl>
              <FormControl variant="standard" className='w-80 md:w-60'>
                <InputLabel htmlFor="component-simple">Phone no</InputLabel>
                <Input id="component-simple" defaultValue={message.phone} onChange={(e) => setMessage(prev => ({ ...prev, phone: e.target.value }))} />
              </FormControl>


            </div>
            <div className='flex gap-10 '>
              <FormControl variant="standard" className=' w-full'>
                <InputLabel htmlFor="component-simple">Email *</InputLabel>
                <Input id="component-simple" defaultValue={message.email} onChange={(e) => setMessage(prev => ({ ...prev, email: e.target.value }))} />
              </FormControl>


            </div>
            <div className='flex gap-10 '>
              <FormControl variant="standard" className=' w-full'>
                <InputLabel htmlFor="component-simple">Message *</InputLabel>
                <Input required id="component-simple" defaultValue={message.message} onChange={(e) => setMessage(prev => ({ ...prev, message: e.target.value }))} />
              </FormControl>


            </div>
            <div className='flex justify-end w-full'>


              <Button onClick={() => sendMessage()} size='extra large' variant="contained" endIcon={<SendIcon />}>Send</Button>




            </div>






          </form>

        </div>

      </div>


      <div className='fixed top-0 md:top-5 transition-all ease-in-out z-100 w-full flex justify-center'>
        <div className='w-full md:w-[40%]'>
          {
            warning &&
            <Alert variant="filled" severity="warning">
              please must   fill  all the required fields
            </Alert>
          }
          {
            sucess &&
            <Alert variant="filled" severity="success">
              Message was sended sucessfully
            </Alert>
          }
          {
            err && <Alert variant="filled" severity="error">
              Mail was not send somthing failure
            </Alert>
          }


        </div>
      </div>





    </div>
  )
}



export default contact