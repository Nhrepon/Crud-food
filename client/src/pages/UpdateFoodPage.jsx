import React, {useEffect, useState} from 'react';
import MasterLayout from "../components/MasterLayout.jsx";
import {useNavigate, useParams} from "react-router-dom";

import axios from "axios";
import {toast, Toaster} from "react-hot-toast";

const UpdateFoodPage = () => {

    const {id}=useParams()

    const [Existing, setExisting]=useState(null);
    const existingInfo=async (id)=>{
        let res=await axios.get(`/api/readSingleProduct/${id}`);
        //console.log(res)
        setExisting(res.data['data'][0]);
    }

    useEffect(()=>{
        (async ()=>{
            await existingInfo(id);
        })()
    },[])

    const navigation=useNavigate()
    const updateFood=async (event)=>{
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
            url:`/api/updateProduct/${id}`,
            data: formValue
        }).then((res)=>{
            console.log(res)
            toast("Product Update Success ... ");
        }).catch((err)=>{
            console.log(err)
            toast("Product Update Failed ... ");
        })

        //navigation("/all-foods")


    }



    return (
        <MasterLayout>
            <h4>Create Food Item</h4>
            <form onSubmit={updateFood}>
                <div className="row">

                    <div className="form-group col-sm-4">
                        <label>Food Name</label>
                        <input defaultValue={Existing !== null?(Existing['foodName']):("")} name='foodName' type='text' className='form-control my-2'/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Food Code</label>
                        <input defaultValue={Existing !== null?(Existing['foodCode']):("")} name='foodCode' type='text' className='form-control my-2'/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Food image</label>
                        <input defaultValue={Existing !== null?(Existing['foodImage']):("")} name='foodImage' type='text' className='form-control my-2'/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Food Category</label>
                        <select name='foodCategory' className="form-select my-2">
                            <option selected={Existing!==null && Existing['foodCategory']==="Barger"} value="Barger">Barger</option>
                            <option selected={Existing!==null && Existing['foodCategory']==="Pizza"} value="Pizza">Pizza</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Qty</label>
                        <input defaultValue={Existing !== null ? (Existing['qty']) : ("")} name='qty' type='text'
                               className='form-control my-2'/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Price</label>
                        <input defaultValue={Existing !== null?(Existing['price']):("")} name='price' type='text' className='form-control my-2'/>
                    </div>
<Toaster/>
                </div>
                <button type='submit' className='btn btn-primary px-3'>Update</button>
            </form>

        </MasterLayout>
    );
};

export default UpdateFoodPage;