import React from 'react';
import MasterLayout from '../components/MasterLayout';

const AllFoodPage = () => {



    return (
        <div>
            <MasterLayout>
                <div className="row">
                    <div className="col-sm-3">
                    <div className="card">
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQotyuQdvWBn0B-CwHGdp_LUM18iJGJzOEznXNKLdo7w&s" alt="Title" />
                    <div className="card-body">
                        <p className="card-text">Cirspy fried chicken on a plate with salad and carrot</p>
                        <button className='btn btn-light mx-2' type='button'>Edit</button>
                        <button className='btn btn-danger mx-2' type='button'>Delete</button>
                    </div>
                </div>
                    </div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
                </div>
                
            </MasterLayout>
        </div>
    );
};

export default AllFoodPage;