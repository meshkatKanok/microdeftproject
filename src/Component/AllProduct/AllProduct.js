import React, { useEffect, useState } from 'react';

const AllProduct = () => {
    const [Product, SetProduct] = useState()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => SetProduct(data))
    }, [])
console.log(Product);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3  mt-8 '>
            {
                Product?.map(p => <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={p?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{p?.title}</h2>
                        <p>{p?.description}</p>

                    </div>
                </div>
                )
            }
        </div>
    );
};

export default AllProduct;