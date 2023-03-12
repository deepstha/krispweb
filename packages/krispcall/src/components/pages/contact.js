import React from "react";
import { connect, styled } from "frontity";
import contactCss from "../../assets/css/contact.min.css";
import Lottie from "../common/lottie";
import Link from "../link";
import { BtnSecondary } from '../common/button'; 
import iconEmail from '../../assets/images/iconsrc/icon-email.svg'
import iconMap from '../../assets/images/iconsrc/icon-map.svg'
import iconCall from '../../assets/images/iconsrc/icon-call.svg'
import iconWatch from '../../assets/images/iconsrc/icon-watch.svg'
import knowledgebase from '../../assets/images/contact/knowledge-base.svg'
import tickets from '../../assets/images/contact/ticket.svg'
import ctaContact from '../../assets/images/contact/cta-contact-sm.png'
import liveChat from '../../assets/images/contact/message.png'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

    
const Contact = ({state}) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];
    // const [form] = Form.useForm();
    const onComplete = (fields) => {
        const msg = {
        to: 'khusbooshrestha123@gmail.com',
        from: fields.email, // Use the email address or domain you verified above
        subject: fields.subject,
        text: 'and easy to do anywhere, even with Node.js',
        html: `
        <p><strong>Name:</strong> ${fields.name}</p>
        <p>${fields.message}</p>`,
        };
        sgMail
            .send(msg)
            .then(() => {
                // form.resetFields();
                console.log('Email Sent:');
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
            
    };
    return (
        <Info>
            <section className="hero-sm hero-contact hero-overlay">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-6">
                            <div className="hero-sm__content hero-contact__content">
                                <h1 className="text-3">
                                    {item.acf.banner.title}
                                    <span className="text-bold text-primary"> {item.acf.banner.bold_text}</span>
                                </h1>
                                <p className="text-9 text-md">
                                    {item.acf.banner.content}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-contact__img" id="heroContact">
                            <Lottie lottieItem={item.acf.banner.lottie} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-xl-auto">
                            <div className="contact-heading">
                                <h4 className="text-4">Get in Touch</h4>
                                <p className="text-9">
                                    Connect today to let us know how we can help? Find the best solution for your
                                    business.
                                </p>
                            </div>
                            <div className="form-block1">
                                {/* <div dangerouslySetInnerHTML= {{__html: item.content.rendered}}/> */}
                                {/* <div dangerouslySetInnerHTML= {{__html: item.acf.contact_form_1}}/> */}
                                <Form  onFinish={onComplete}>
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="col-6">
                                        <FormGroup>
                                            <label htmlFor="fname">First Name</label>
                                            <input type="text" className="form-control" id="fname"
                                                placeholder="Your First Name" required="" name="full_name"/>
                                        </FormGroup>
                                        </div>
                                        <div className="col-6">
                                            <FormGroup>
                                                <label htmlFor="fname">Last Name</label>
                                                <input type="text" className="form-control" id="lname"
                                                    placeholder="Your Last Name" required="" name="last_name"/>
                                            </FormGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <FormGroup>
                                        <div className="form-row">
                                            <div className="col-6">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" id="cemail"
                                                    placeholder="Your Email" required="" name="email"/>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="cname">Company Name</label>
                                                <input type="text" className="form-control" id="cname"
                                                    placeholder="Company name" required="" name="company_name"/>
                                            </div>
                                        </div>
                                    </FormGroup>
                                </div>
                                <div className="form-action text-center">
                                    <Button>Submit</Button>
                                </div>
                                </Form>
                                {/* <form className="contact__form" id="form-contact">
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-6">
                                                <label htmlFor="fname">First Name</label>
                                                <input type="text" className="form-control" id="fname"
                                                    placeholder="Your First Name" required="" name="full_name"/>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="fname">Last Name</label>
                                                <input type="text" className="form-control" id="lname"
                                                    placeholder="Your Last Name" required="" name="last_name"/>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="form-group">
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-6">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" className="form-control" id="cemail"
                                                        placeholder="Your Email" required="" name="email"/>
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="cname">Company Name</label>
                                                    <input type="text" className="form-control" id="cname"
                                                        placeholder="Company name" required="" name="company_name"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-6">
                                                <label htmlFor="group">Regarding</label>
                                                <select name="group" id="select-regarding"
                                                    className="custom-select form-control" required="">
                                                    <option value="" selected disabled>Choose Option</option>
                                                    <option value="customerSupport">Customer Support</option>
                                                    <option value="salesEnquiry">New Sales Enquiry</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="subject">Subject</label>
                                                <input type="text" className="form-control" id="subject"
                                                    placeholder="Enter Subject" required="" name="subject-name"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Contact Number</label>
                                        <input type="phone" className="form-control" id="c-phone" name="c-phone"
                                            placeholder="1032xx - xxxx - xxxx" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Your Message</label>
                                        <textarea className="form-control" name="message" id="message" cols="30"
                                            rows="10" placeholder="How can we help you?" aria-label="Message"
                                            required=""></textarea>
                                    </div>
                                    <div className="form-reminder">
                                        <input type="radio" id="agree" name="agree" value=""/>
                                        <label htmlFor="agree">
                                            By submitting this form, you consent to us emailing you occasionally
                                            about our products and services. You can unsubscribe from emails at any
                                            time, and we will never pass your email to third parties.
                                            {/* <a href="/privacy-policy">Privacy Policy</a> */}
                                            {/* <Link link={'/privacy-policy/'}>Privacy Policy</Link>
                                        </label>
                                    </div>
                                    <div className="form-action text-center">
                                        <button type="submit" className="btn btn-primary">Submit <span
                                                className="preloader preloader-sm"></span></button>
                                    </div>
                                </form> */} 
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl">
                            <div className="contact-info">
                                <div className="contact-info__top">
                                    <h3 className="text-10">Sales Team Contact</h3>
                                    <ul className="contact-list">
                                        <li>
                                            <span className="icon-email">
                                            <img src={iconEmail}/>
                                            </span>
                                            <a href="mailto:sales@krispCall.com">{item.acf.sales.email}</a>
                                        </li>
                                        <li>
                                            <span className="icon-map"><img src={iconMap}/></span>{item.acf.sales.address}
                                        </li>
                                        <li>
                                            <span className="icon-call"><img src={iconCall}/></span>
                                            <a href="{item.acf.sales-info.phone_number}">{item.acf.sales.phone_number}</a>
                                        </li>
                                    </ul>
                                    <div dangerouslySetInnerHTML= {{__html: item.acf.sales.extra_info}}/>
                                </div>
                                <div className="contact-info__bottom"></div>
                                <h3 className="text-10">Australia Office Address</h3>
                                <ul className="contact-list">
                                    <li>
                                        <span className="icon-map"><img src={iconMap}/></span>
                                        {item.acf.sales.australia_address}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-support bg-lt-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-xl-auto">
                        <div className="contact-heading">
                            <h4 className="text-4">Contact Support</h4>
                            <p className="text-10">
                                Our support team is always available to respond to your queries.
                            </p>
                        </div>
                        <div className="contact-support__content" dangerouslySetInnerHTML= {{__html: item.acf.contact_support}}/>
                    </div>
                    <div className="col-lg-5 col-xl">
                        <div className="contact-info card">
                            <h3 className="text-10">Support Team</h3>
                            <ul className="contact-list">
                                <li>
                                    <span className="icon-email">
                                        <img src={iconEmail}/>
                                    </span>
                                    <a href="{item.acf.support_team.email}">{item.acf.support_team.email}</a>
                                </li>
                                <li>
                                    <span className="icon-call"><img src={iconCall}/></span>
                                    <a href="{item.acf.support_team.phone_numbers}">{item.acf.support_team.phone_numbers}</a>
                                </li>
                                <li>
                                    <span className="icon-watch"><img src={iconWatch}/></span>
                                    <span className="float-right" dangerouslySetInnerHTML= {{__html: item.acf.support_team.operational_time}}>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="card card-bordered card-link">
                            <div className="card__img">
                                <figure className="mb-0">
                                    <img src={knowledgebase} width="28" height="30"
                                        alt="knowledge Base"/>
                                </figure>
                            </div>
                            <div className="card__content">
                                <h5 className="text-6 text-bold card__title">Knowledge Base</h5>
                                <p className="card__text text-11 mb-0">
                                    Your answers by KrispCall team
                                </p>
                            </div>
                            {/* <a href="#" className="stretched-link"></a> */}
                            <Link link={'#'} className="stretched-link"></Link>
                        </div>
                        <div className="card card-bordered card-link" id="btn-ticket">
                            <div className="card__img">
                                <figure className="mb-0">
                                    <img src={tickets} width="30" height="28" alt="Create a ticket"/>
                                </figure>
                            </div>
                            <div className="card__content">
                                <h5 className="text-6 text-bold card__title">Create a ticket</h5>
                                <p className="card__text text-11 mb-0">
                                    To make your ticket, Click here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <div className="contact-ticket cn-arrow" id="contact-ticket">
            <div className="container">
                <div className="contact-heading">
                    <h5 className="text-8">Request for Ticket</h5>
                </div>
                <form className="contact__form" id="form-ticket">
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-4">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" className="form-control" id="first-name" placeholder="First Name"
                                    required="" name="first_name"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" className="form-control" id="last-name" placeholder="Last Name"
                                    required="" name="last_name"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="temail">Email</label>
                                <input type="email" className="form-control" id="temail" placeholder="Email"
                                    required name="temail"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-4">
                                <label htmlFor="c-id">Customer ID</label>
                                <input type="number" className="form-control" id="c-id" placeholder="Customer ID"
                                    required="" name="c_id"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="questionTitle">Question Title</label>
                                <select name="group" id="questionTitle" className="custom-select form-control"
                                    required="">
                                    <option value="technical-question" selected>Technical Question</option>
                                    <option value="support">Support</option>
                                    <option value="inquiry">Inquiry</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="priority">Priority</label>
                                <select name="group" id="priority" className="custom-select form-control"
                                    required="">
                                    <option value="medium" selected>Medium</option>
                                    <option value="high">High</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ticketMessage">Message</label>
                        <textarea className="form-control" id="ticketMessage" cols="30" rows="10"
                            placeholder="How can we help you?" aria-label="Message" name="fields[message]"
                            required=""></textarea>
                    </div>
                    <div className="form-action form-ticket-submit text-center">
                        <button data-element="submit" type="submit" className="btn btn-primary">Create a New
                            ticket<span className="preloader preloader-sm"></span></button>
                        <p className="mb-0">By signing up, you agree to our
                            <Link link={'/terms-of-service/'}>Terms & Privacy Policy</Link>
                        </p>
                    </div>
                </form>
            </div>
            </div>
            <section className="contact-convo contact-support">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-xl-auto">
                            <div className="contact-heading mb-0">
                                <h4 className="text-4">Conversation With Us</h4>
                            </div>
                            <div className="contact-support__content" dangerouslySetInnerHTML= {{__html: item.acf.conversation_with_us}}>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl">
                            <div className="card card-bordered card-link">
                                <div className="card__img">
                                    <figure className="mb-0">
                                        <img src={liveChat} width="30" height="30" alt="Live Chat"/>
                                    </figure>
                                </div>
                                <div className="card__content">
                                    <h5 className="text-6 text-bold card__title">Live Chat</h5>
                                    <p className="card__text text-11 mb-0">
                                        To make your ticket, Click here
                                    </p>
                                </div>
                                {/* <a href="#" className="stretched-link" id="chatSupport"></a> */}
                                <Link link={'#'} className="stretched-link" id="chatSupport"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-xl-auto d-flex">
                            <div className="cta-contact d-flex align-items-center justify-content-between">
                                <div className="cta-contact__content">
                                    <h5 className="text-8">If you prefer to
                                        <span className="text-md"> find answers </span>
                                        on your own, you can also
                                        <span className="text-md"> refer to </span>
                                        our user guide.
                                    </h5>
                                    <BtnSecondary addClass="btn-sm" link="#">Knowledge base</BtnSecondary>
                                </div>
                                <figure className="mb-0 cta-contact__img">
                                    <img src={ctaContact}
                                        alt="Knowledge Base" width="446" height="288"/>
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl d-flex">
                            <div className="form-newsletter contact-newsletter">
                                <div className="text-center w-100">
                                    <h5 className="text-9 text-md">
                                        Newletter
                                    </h5>
                                    <span className="text-10 text-md">
                                        Join 80,000 subscribers!
                                    </span>
                                    <div className="form-block">
                                        <form id="form-newsletter" autoComplete="off">
                                            <div className="form-group mb-0">
                                                <input type="email" className="form-control w-100" id="news-mail"
                                                    placeholder="Email address..."/>
                                            </div>
                                            <div className="form-action">
                                                <button type="submit" className="btn btn-primary btn-block"
                                                    id="news-submit">Sign Up<span
                                                        className="preloader preloader-sm"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                    <small className="text-regular text-11">
                                        By signing up, you agree to our
                                        <a className="text-md" href="/privacy-policy"> Privacy Policy</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </Info>
    )
}
export default connect(Contact);
const Info = styled.div(contactCss);