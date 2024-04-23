import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Nav } from 'react-bootstrap';

const TopNavigationBar = () => {
    return (
        
        <div className='shadow-sm p-3'>
            <h4 className='text-black-50'><Nav.Link href="/"><Icon.Amazon /> CRUD Food</Nav.Link></h4>
        </div>
    );
};

export default TopNavigationBar;