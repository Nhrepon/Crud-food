import React from 'react';
import {useNavigate} from 'react-router-dom';
import MasterLayout from '../components/MasterLayout';

const CreateFoodPage = () => {
    let navigate=useNavigate();

    const createFood=async (event)=>{
        let formData=new FormData(event.target);
        let foodName=formData.get('foodName');
        let foodCode=formData.get('foodCode');
        let foodImage=formData.get('foodImage');
        let foodCategory=formData.get('foodCategory');
        let qty=formData.get('qty');
        let price=formData.get('price');

        await axios.post("/createProduct",{
            foodName: foodName,
        foodCode: foodCode,
        foodImage: foodImage,
        foodCategory: foodCategory,
        Qty: qty,
        price:price
        })

        navigate('/');
    }

    
    return (
        <MasterLayout>
            <h4>Create Food Item</h4>
            <form onSubmit= {createFood}> 
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label>Food Name</label>
                        <input name='foodName' type='text' className='form-control my-2'/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Food Code</label>
                        <input name='foodCode' type='text' className='form-control my-2'/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Food image</label>
                        <input name='foodImage' type='text' className='form-control my-2'/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Food Category</label>
                        <input name='foodCategory' type='text' className='form-control my-2'/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Qty</label>
                        <input name='qty' type='text' className='form-control my-2'/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Price</label>
                        <input name='price' type='text' className='form-control my-2'/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary px-3'>Submit</button>
            </form>
        </MasterLayout>
    );
};

export default CreateFoodPage;