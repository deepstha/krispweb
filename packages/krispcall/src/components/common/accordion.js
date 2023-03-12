import React, {Fragment, useState } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import plus from '../../assets/images/icon-circle-plus.svg';
import minus from '../../assets/images/icon-circle-minus.svg';

const AccordionItem = ({ items, slotHead, slotContent, accordion_modifier, itemClass, itemHeaderClass, itemBodyClass }) => {
    const [isOpen, setIsOpen] = useState("");
    const handleToggle = (id) => {
        if (isOpen === id) {
        setIsOpen("");
        } else {
        setIsOpen(id);
        }
    };

    return (
        <Fragment >
            <div className={`accordion ${accordion_modifier? accordion_modifier : ""}`}>
                {items? 
                    items.map((item,key) => (
                        <Card key={key} className={`${itemClass? itemClass : ""}`}>
                            <CardHeader className={itemHeaderClass} onClick={() => handleToggle(key)}>
                                <h5 className="mb-0">{item.title}</h5>   
                                <div>{isOpen === key ? <img src={minus}/> : <img src={plus}/> }</div>
                            </CardHeader>
                            <Collapse isOpen={isOpen === key} className={`${itemBodyClass? itemBodyClass : ""}`}>
                                <CardBody className='p-0'>
                                    <div dangerouslySetInnerHTML= {{__html: item.content}}/>
                                    {item.feedback ? <div className="feedback">
                                                    <span>If you want to know more please
                                                        <a href="/contact-us"> contact us.</a>
                                                    </span>
                                                    <span>Was this helpful?
                                                        <button>
                                                            <span className="icon icon-xs icon-thumb-up"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.1623 4.91408L11.2819 4.91408L11.2819 12.4357L13.1623 12.4357C13.3285 12.4357 13.4879 12.3696 13.6055 12.2521C13.723 12.1345 13.7891 11.9751 13.7891 11.8089L13.7891 5.54088C13.7891 5.37464 13.723 5.21521 13.6055 5.09766C13.4879 4.98011 13.3285 4.91408 13.1623 4.91408ZM9.84462 4.10362L5.8331 0.0921107C5.77979 0.038641 5.70896 0.00621844 5.63364 0.000805886C5.55833 -0.00460667 5.48359 0.0173547 5.42318 0.0626511L4.88852 0.463802C4.74003 0.575275 4.62787 0.728219 4.56618 0.903349C4.5045 1.07848 4.49605 1.26795 4.5419 1.44788L5.26459 4.28728L1.25308 4.28728C0.920606 4.28728 0.601749 4.41935 0.366654 4.65445C0.131558 4.88954 -0.000517347 5.2084 -0.000517376 5.54087L-0.000517491 6.85966C-0.000686306 7.02348 0.031256 7.18575 0.0935024 7.33728L2.03345 12.0477C2.08077 12.1625 2.16115 12.2607 2.26437 12.3298C2.3676 12.3989 2.48903 12.4357 2.61323 12.4357L9.40147 12.4357C9.56771 12.4357 9.72713 12.3696 9.84468 12.2521C9.96223 12.1345 10.0283 11.9751 10.0283 11.8089L10.0283 4.54677C10.0282 4.38055 9.96217 4.22115 9.84462 4.10362Z" fill="#1A63F4"></path>
                                                                </svg></span>
                                                            Yes</button>
                                                        <button>
                                                            <span className="icon icon-xs icon-thumb-up"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.1623 4.91408L11.2819 4.91408L11.2819 12.4357L13.1623 12.4357C13.3285 12.4357 13.4879 12.3696 13.6055 12.2521C13.723 12.1345 13.7891 11.9751 13.7891 11.8089L13.7891 5.54088C13.7891 5.37464 13.723 5.21521 13.6055 5.09766C13.4879 4.98011 13.3285 4.91408 13.1623 4.91408ZM9.84462 4.10362L5.8331 0.0921107C5.77979 0.038641 5.70896 0.00621844 5.63364 0.000805886C5.55833 -0.00460667 5.48359 0.0173547 5.42318 0.0626511L4.88852 0.463802C4.74003 0.575275 4.62787 0.728219 4.56618 0.903349C4.5045 1.07848 4.49605 1.26795 4.5419 1.44788L5.26459 4.28728L1.25308 4.28728C0.920606 4.28728 0.601749 4.41935 0.366654 4.65445C0.131558 4.88954 -0.000517347 5.2084 -0.000517376 5.54087L-0.000517491 6.85966C-0.000686306 7.02348 0.031256 7.18575 0.0935024 7.33728L2.03345 12.0477C2.08077 12.1625 2.16115 12.2607 2.26437 12.3298C2.3676 12.3989 2.48903 12.4357 2.61323 12.4357L9.40147 12.4357C9.56771 12.4357 9.72713 12.3696 9.84468 12.2521C9.96223 12.1345 10.0283 11.9751 10.0283 11.8089L10.0283 4.54677C10.0282 4.38055 9.96217 4.22115 9.84462 4.10362Z" fill="#1A63F4"></path>
                                                            </svg></span>
                                                            No</button>
                                                    </span>
                                                </div> : ''}
                                </CardBody>
                            </Collapse>
                        </Card>
                    ))
                    :
                    <>
                    <CardHeader className={itemHeaderClass} onClick={() => handleToggle(0)}>
                        {slotHead}
                    </CardHeader>
                    <Collapse isOpen={isOpen === 0} className={`${itemBodyClass? itemBodyClass : ""}`}>
                        <CardBody className='p-0'>
                            {slotContent}
                        </CardBody>
                    </Collapse>
                    </>
                }
            </div>
        </Fragment>
        // <Accordion defaultActiveKey="0" className="accordion--bordered">
        //     {items.map((item, key) => {
        //         return ( 
        //             <Accordion.Item eventKey={key} id={key} key={key}>
        //                 <Accordion.Header className="accordion-item__header">{item.title}</Accordion.Header>
        //                 <Accordion.Body>
        //                     <div dangerouslySetInnerHTML= {{__html: item.content}}/>
        //                     <div className="feedback">
        //                         <span>If you want to know more please
        //                             <a href="/contact-us">contact us.</a>
        //                         </span>
        //                         <span>Was this helpful?
        //                             <button>
        //                                 <span className="icon icon-xs icon-thumb-up"></span>
        //                                 Yes</button>
        //                             <button>
        //                                 <span className="icon icon-xs icon-thumb-up"></span>
        //                                 No</button>
        //                         </span>
        //                     </div>
        //                 </Accordion.Body>
        //             </Accordion.Item>
        //         );
        //     })}
        // </Accordion>
        );
};

export default AccordionItem;