import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import axios from "axios";

const AllFoods = () => {

    const navigation=useNavigate()

    const [data, SetData] = useState(null);

    useEffect(()=>{
        ( async ()=>{

            await readFood()

        })()
    },[])

    const readFood=async ()=>{
        let res=await axios.get('/api/readProduct');
        let productData=res.data['product']
        SetData(productData)
    }

    const deleteFood=async (id)=>{
        await axios.get(`/api/deleteProduct/${id}`)
        await readFood()
    }

    const updateFood=async (id)=>{
        navigation(`/update-foods/${id}`);
    }

    return (
            <div className="container">
                <div className="row">
                    {
                        data!==null && data.map((item, i)=>{
                            return (
                                <div className="col-sm-3" key={i}>
                                    <div className="card my-3">

                                        <img
                                            className="card-img-top"
                                            src={item['foodImage']}
                                            alt={item['foodName']}
                                        />
                                        <div className="card-body">
                                            <p title={item['foodName']} className="card-text">{item['foodName'].slice(0,40)}</p>

                                            <button onClick={()=>{updateFood(item['_id'])}} className="btn btn-light mx-2" type="button">
                                                Update
                                            </button>
                                            <button onClick={()=>{deleteFood(item['_id'])}} className="btn btn-danger mx-2" type="button">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }




                </div>
            </div>
    );
};

export default AllFoods;
