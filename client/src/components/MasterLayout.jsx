import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import SideNavigationBar from './SideNavigationBar';

const MasterLayout = (props) => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12">
                    <TopNavigationBar/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                <SideNavigationBar />
                </div>
                <div className="col-sm-9">{props.children}</div>
            </div>
            
            
        </div>
    );
};

export default MasterLayout;