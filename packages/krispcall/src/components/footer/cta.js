import React from 'react';
import { connect, styled } from 'frontity';
import checkBox from '../../assets/images/svg/icons/icon-checkbox-circle-white.svg';
const Cta = ({ state }) => {
    const page = state.source.get(`/footer/cta/`).items;
    return (
        <CtaWrapper>
        <div className='cta'>
            <div className='container'>
                <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
            </div>
        </div>
        </CtaWrapper>
    )
}
export default connect(Cta);


const CtaWrapper = styled.div`
    .cta__list{
        li {
            &:before{
                background-image: url(${checkBox});
            }
        }
    }
`;