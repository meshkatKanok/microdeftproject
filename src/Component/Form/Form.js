import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Form = () => {
    return (
        <div>
            <Navbar/>
            <section
                id="login"
                className="grid place-items-center lg:grid-cols-2 sm:h-[85vh]  font-poppins"
            >
                <form
                    style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}

                    className="card flex-shrink-0 w-full rounded shadow-xl  max-w-sm"
                >
                    <div className="card-body">
                        <h3 className="text-lg font-poppins font-semibold">
                            Add New Product
                        </h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <div className='input input-bordered'>
                                <input
                                    type="text"

                                    placeholder="Product Name"
                                    className="border-none h-full w-full focus:outline-none"
                                    name="email"
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Disciption</span>
                            </label>
                            <div className='input input-bordered flex  items-center'>
                                <input
                                    placeholder="Disciption"
                                    className="h-full border-none focus:outline-none w-full"
                                    name="password"
                                />

                            </div>
                            <div>
                                <h1>Catagorey</h1>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Who shot first?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <div>
                                <h1>Catagorey</h1>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Who shot first?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <h1>Image Url</h1>
                                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                            </div>
                            <div className="form-control">
                                <h1>price</h1>
                                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value='Submit' className="btn  bg-[#44977B] border-none text-white hover:bg-[#44977B] shadow-md" />
                        </div>


                    </div>
                </form>


            </section>

        </div>
    );
};

export default Form;