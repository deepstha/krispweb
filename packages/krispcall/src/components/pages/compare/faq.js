import React, {useState} from 'react' ;
import { connect } from "frontity";
import AccordionItem from "../../common/accordion";
const Faq = ({ state }) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];
    return (
        <div className="accordion accordion--bordered" id="accordion-faq">
       
                    <AccordionItem accordion_modifier="accordion--bordered" 
                    itemClass="accordion-item" 
                    itemHeaderClass="accordion-item__header" 
                    items={item.acf.faq} itemBodyClass="accordion-item__body"/>
                
        </div>
    )
}
export default connect(Faq);