import emailjs from '@emailjs/browser';

const SERVICE_ID = 'Your EmailJS Service ID';
const TEMPLATE_ID = 'Your EmailJS Template ID';
const USER_ID = 'your EmailJS userID';


export async function sendEmail(form : HTMLFormElement) {

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: USER_ID,
      })
      .then(
        () => {
          console.log('Email sending SUCCESS!');
        },
        (error) => {
          console.log('Email sending FAILED...', error);
        },
    );
};

