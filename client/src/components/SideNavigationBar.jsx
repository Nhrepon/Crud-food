import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Nav } from 'react-bootstrap';

const SideNavigationBar = () => {
    return (
        <div className='pt-3 border-end bg-gray h-100' style={{height:'100'}}>
            <h5 className='text-black-50 px-3'>MENU</h5>
            <ul className='text-black-50 px-3'>
                <li className='nav-link py-2 button-bg'><Nav.Link href="/create-foods"><Icon.Cart/>  Create Food</Nav.Link></li>
                <li className='nav-link py-2'><Nav.Link href="/all-foods"><Icon.CardList/>  All Foods</Nav.Link></li>
            </ul>
        </div>
    );
};

export default SideNavigationBar;