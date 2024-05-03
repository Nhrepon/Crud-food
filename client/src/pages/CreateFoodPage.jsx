import React from 'react';
import MasterLayout from '../components/MasterLayout';
import axios from 'axios';
import {useNavigate} from "react-router";
import {toast, Toaster} from "react-hot-toast";

const CreateFoodPage = () => {

    const navigation=useNavigate()
    const createFood=async (event)=>{
        event.preventDefault();
        let formData=new FormData(event.target);
        let foodName=formData.get("foodName");
        let foodCode=formData.get("foodCode");
        let foodImage=formData.get("foodImage");
        let foodCategory=formData.get("foodCategory");
        let qty=formData.get("qty");
        let price=formData.get("price");

        let formValue={
            foodName: foodName,
            foodCode: foodCode,
            foodImage: foodImage,
            foodCategory: foodCategory,
            qty: qty,
            price: price
        }

       await axios({
           method:'post',
           url:'/api/createProduct',
           data:formValue
       }).then((res)=>{
           console.log(res)
           toast("Product Create Success ... ");
       }).catch((err)=>{
           console.log(err)
           toast("Product Create Failed ... ");
       })

        //navigation("/all-foods")


    }

    
    return (
        <MasterLayout>
            <h4>Create Food Item</h4>
            <form onSubmit={createFood}>
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
                        <select name='foodCategory' className="form-select my-2">
                            <option value="Barger">Barger</option>
                            <option value="Pizza">Pizza</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Qty</label>
                        <input name='qty' type='text' className='form-control my-2'/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Price</label>
                        <input name='price' type='text' className='form-control my-2'/>
                    </div>
<Toaster/>
                </div>
                <button type='submit' className='btn btn-primary px-3'>Submit</button>
            </form>

        </MasterLayout>
    );
};

export default CreateFoodPage;