import './Contact.scss';

import { useCallback, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Linemask } from '../commons';
import ArrowBottom from "../commons/Icons/Arrow-bottom";
import LongArrow from "../commons/Icons/Long-arrow";

import { ANIMATION_CONTACT } from '../../animations';

import { validateEmail } from "../../utils/basics";

const Contact = () => {
    const [identity, setIdentity] = useState('');
    const [email, setEmail] = useState('');
    const [requestType, setRequestType] = useState('');
    const [errors, setErrors] = useState({});

    const [isSent, setIsSent] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e);

        emailjs.sendForm('service_bhp9vq8',
                        'template_7l7r6vz',
                        // { identity, email, requestType },
                        form.current,
                        '6sH8LhMcq_INIfqaT')
        .then((res) => {
            console.log('then', res.text)
            form.current.reset();
            setIdentity('');
            setEmail('');
            setRequestType('');
            setErrors('');
            setIsSent(true);
        }, (error) => {
            console.log('catch', error.text)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let formErrors = {};

        if (!identity) formErrors.identity = "Please enter your name.";
        if (!email || !validateEmail(email)) formErrors.email = "Please enter your email.";
        if (!requestType) formErrors.requestType = "Please select a request type.";

        if (Object.keys(formErrors).length === 0) {
            console.log(identity, email, requestType);
            sendEmail(e);
        } else {
            setErrors(formErrors);
        }
    };

    const handleTypeClick = useCallback((type) => {
        setRequestType(type);
        setErrors({ ...errors, requestType: '' });
    });

    useEffect(() => {
        ANIMATION_CONTACT();
    }, []);

    return (
        <div className="contact-container">
            <div className="contact-container__top">

                <div className="container__top-first-line">
                    <Linemask phrases={["A project in mind?"]} className="title" />
                </div>
                
                <div className="container__top-second-line">
                    <div className="titles">
                        <Linemask phrases={["Or just want", "to say hello? <span>&#10042;</span>"]} className="title" />
                    </div>
                    <ArrowBottom />
                </div>
            </div>

            <div className="contact-container__form">
                <form ref={form} onSubmit={sendEmail}>

                    <div className="form__data">
                        <div className="data__main">
                            <Linemask className="small-title" phrases={["Write your e-mail"]} />
                            <div className="main__info">
                                <p>Hello Clement, my name is</p>
                                <input
                                    placeholder="John Doe"
                                    type="text"
                                    name="identity"
                                    id="identity"
                                    value={identity}
                                    onChange={(e) => setIdentity(e.target.value)}
                                />
                                {errors.identity && <span className="error">{errors.identity}</span>}
                            </div>

                            <div className="main__info">
                                <p>and I'd like to talk to you about</p>
                                <div className="talk__type">
                                    <div className={`type ${requestType === 'Opportunity' ? 'selected' : ''}`} onClick={() => handleTypeClick('Opportunity')}>
                                        Professional opportunity
                                    </div>
                                    <div className={`type ${requestType === 'Making a website' ? 'selected' : ''}`} onClick={() => handleTypeClick('Making a website')}>
                                        Making a website
                                    </div>
                                    <div className={`type ${requestType === 'Other' ? 'selected' : ''}`} onClick={() => handleTypeClick('Other')}>
                                        Other
                                    </div>
                                </div>
                                <input 
                                    type="hidden" 
                                    name="requestType" 
                                    value={requestType} 
                                />
                                {errors.requestType && <span className="error">{errors.requestType}</span>}
                            </div>

                            <div className="main__info">
                                <p>so please, get back to me at this address</p>
                                <input
                                    placeholder="john.doe@gmail.com"
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                            {isSent &&
                                <p className="small-title rep-message animation">
                                    Your message has been sent successfully!
                                </p>
                            }
                        </div>
                    </div>
                    
                    <div className="form__submit" onClick={handleSubmit}>
                        Send <LongArrow />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Contact;
