import "./index.css"
import { useRef } from "react";
import emailjs, { send } from '@emailjs/browser'
import { redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

function Form() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])

    const refForm = useRef()
    const say = "everyone"

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(`${process.env.REACT_APP_PUBLIC_KEY} ${process.env.REACT_APP_SERVICE_ID} ${process.env.REACT_APP_TEMPLATE_ID}  ${say}`)

        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, refForm.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
            .then((result) => {
                alert("Thank You for sending the email!☺️");
            }, (err) => {
                alert("Something Went down.Please try again!🫤")
                console.log(err)
            })
        redirect("/form")
    }



    return (<div>
        {loading ?
            <ClimbingBoxLoader class="loader" color="#36d7b7" size={25}/>
            :
            <div class="form-container ">

                <h1 class="form-heading">Wanna Contact Me!</h1>
                <h2 class="form-heading">Fill The Form</h2>
                <h3 class="form-heading fs-1">📄</h3>
                <form ref={refForm} onSubmit={sendEmail}>
                    <input class="half1" type="text" name="user_name" placeholder="Name" required />
                    <input class="half" type="email" name="user_email" placeholder="Email" required />
                    <textarea class="message" type="text" name="message" placeholder="Message" required />
                    <input class="submit" type="submit" value="Send" />
                </form>
            </div>}
    </div>

    )
}

export default Form;