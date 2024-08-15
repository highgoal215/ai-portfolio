import { useState, ChangeEvent, FormEvent } from 'react';
import { sendEmail } from '../../email'
import { FormData } from '../../types';

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    const [message, setMessage] = useState<string>('');
    const [emailSending, setEmailSending] = useState<boolean>(false);

    function handleFormChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setEmailSending(true);

        try {
            await sendEmail(e.currentTarget);
            clearForm();
            setMessage("Thanks for reaching out. I'll get back to you soon.");
        } catch (error) {
            console.error('Message sending failed:', error);
            setMessage('Message sending failed. Please try again.');
        } finally {
            setEmailSending(false);
        }
    }

    function clearForm() {
        setFormData({
            name: '',
            email: '',
            subject: '',
            content: ''
        });
    }

    return (
        <div className='contact-wrapper'>
            <h1>Contact Me</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor='name'><span>*</span>Your Name:</label>
                    <input
                        type="text"
                        id='name'
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='email'><span>*</span>Your Email:</label>
                    <input
                        type="email"
                        id='email'
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='subject'><span>*</span>Subject:</label>
                    <input
                        type="text"
                        id='subject'
                        name="subject"
                        value={formData.subject}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='content'>Message</label>
                    <textarea
                        name="content"
                        id='content'
                        value={formData.content}
                        onChange={handleFormChange}
                        rows={6}
                    />
                </div>
                <button className='contact-submit-btn' type="submit" disabled={emailSending}>
                    {emailSending ? "Sending..." : "Send"}
                </button>
            </form>
            {message && <p className='email-sent-message'>{message}</p>}
        </div>
    );
}
