import nodemailer from 'nodemailer';


const sendEmail = async(to,subject,text,options) =>{
    const transporter =  nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
        ...options
    }

    await transporter.sendMail(mailOptions);
}

export {sendEmail};