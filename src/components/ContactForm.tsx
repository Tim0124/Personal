import emailjs from '@emailjs/browser'
import clsx from 'clsx'
import { useState } from 'react'

const SERVICE_ID = 'service_dijzn6i'
const TEMPLATE_ID = 'template_oy3zmrl'
const PUBLIC_KEY = 'xQ0oUgahFEdCujkZj'

type FormProps = {
  name: string
  email: string
  message: string
}


export default function ContactForm() {
  const [form, setForm] = useState<FormProps>({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [sendSuc, setSendSuc] = useState(false)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> =(e) => {
    e.preventDefault()

    if(form.name.trim().length === 0 && form.email.trim().length === 0 && form.message.trim().length === 0) {
      setNameError(true)
      setEmailError(true)
      setMessageError(true)
      setTimeout(() => {
        setNameError(false)
        setEmailError(false)
        setMessageError(false)
      },2000)
      return
    }
    
    if(form.name.trim().length === 0) {
      setNameError(true)
      setTimeout(() => {
        setNameError(false)
      },2000)
      return
    }
    if(form.email.trim().length === 0) {
      setEmailError(true)
      setTimeout(() => {
        setEmailError(false)
      },2000)
      return
    }
    if(form.message.trim().length === 0) {
      setMessageError(true)
      setTimeout(() => {
        setMessageError(false)
      },2000)
      return
    }

    setLoading(true)
    

    emailjs.send(SERVICE_ID, TEMPLATE_ID, 
      {
        from_name: form.name,
        to_name: "Tim",
        from_email: form.email,
        to_email: "a0925172969@gmail.com",
        message: form.message
      },PUBLIC_KEY
    ).then((result) => {
      console.log(result)
      setForm({
        name: '',
        email: '',
        message: ''
      })
      setSendSuc(true)
      setTimeout(()=>{
        setSendSuc(false)
        setLoading(false)
      },2000)
      
    }).catch((error) => {
      console.log('error', error)
    })
  }
  
   const handleChange = (e:| React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  }


  return (
    // contact form
    <div className="py-5 text-steelBlueGray dark:text-lightGray">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center content-center w-full">
        {/* input name */}
        <label className="relative">
          <input type="text" name="name" value={form.name} onChange={handleChange}  placeholder={nameError ? "請輸入姓名" : "Name"} className={clsx("peer h-10 border-2 text-slateBlue border-steelBlueGray bg-creamyWhite rounded-lg w-full pl-10 dark:bg-midnightBlack dark:text-creamyWhite  focus:border-slateBlue dark:focus:border-creamyWhite select-none",{"placeholder:text-coralRed" : nameError})}/>
          <span className=' absolute top-2 left-2 peer-focus:text-slateBlue dark:peer-focus:text-creamyWhite'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className='fill-current' fill="#9393a7" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"/></svg>
          </span>
        </label>
        {/* input email */}
        <label className="relative">
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={emailError ? "請輸入信箱" : "Email"} className={clsx("peer h-10 border-2 text-slateBlue border-steelBlueGray bg-creamyWhite rounded-lg w-full pl-10 dark:bg-midnightBlack dark:text-creamyWhite  focus:border-slateBlue dark:focus:border-creamyWhite select-none",{"placeholder:text-coralRed" : emailError})}/>
          <span className=" absolute top-2 left-2 peer-focus:text-slateBlue dark:peer-focus:text-creamyWhite">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="fill-current" fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z"/></svg>
          </span>
        </label>
        {/* input message */}
        <label className="relative">
          <textarea typeof="text" name="message" value={form.message} onChange={handleChange} placeholder={messageError ? "請輸入內容" : "Message"} className={clsx("peer pt-1 border-2 text-slateBlue border-steelBlueGray rounded-lg bg-creamyWhite w-full h-40 resize-none pl-10 dark:bg-midnightBlack dark:text-creamyWhite  focus:border-slateBlue dark:focus:border-creamyWhite select-none",{"placeholder:text-coralRed" : messageError})}/>
          <span className="absolute top-2 left-2 peer-focus:text-slateBlue dark:peer-focus:text-creamyWhite">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
          </span>
        </label>
        <div className="mx-auto">
          {/* submit button */}
          <button disabled={loading} type='submit' className="flex items-center justify-center gap-2 p-2 w-fit  text-creamyWhite rounded-lg transition-all duration-300 ease-out bg-steelBlueGray/90 hover:bg-steelBlueGray dark:bg-steelBlueGray dark:hover:bg-steelBlueGray/80 dark:text-creamyWhite  select-none">
            {loading ?  (
              <>
                {sendSuc ? (<span className=' text-center '>Success！</span>) : (
                <>
                  <svg className="w-6 h-6 text-gray-200 animate-spin dark:text-steelBlueGray fill-slateBlue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/></svg>
                  <span className=" animate-pulse">Sending...</span>
                </>)}
              </>
            ):(
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className='fill-current' fill="#9393a7" d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5l8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/></svg>
              <span className=' font-bold'>Submit</span>
            </>)}
            </button>
        </div>
      </form>
    </div>
  )
}