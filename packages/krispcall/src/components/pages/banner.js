import React from 'react';
import { connect } from 'frontity';
const Banner = ({ state }) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];
    return (
        <div className='hero-md'>
            <div className='container'>
                <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
            </div>
        </div>
    )
}
export default connect(Banner);