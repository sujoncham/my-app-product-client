
import React from 'react';
import ReactModal from '../ReactModal';



const Products = (props) => {
    // console.log(props.product)
   
    const {setCartCount} = props;
  //   const [singleId, setSingleId] = useState();

  //   useEffect(()=>{
  // const  url = `https://fakestoreapi.com/products/${props.product.id}`;
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data =>setSingleId(data))
  //   }, [])


    return (
        <div className='col-md-4 item' data-aos="fade-down-left">
            <div className='card'>
            <img src={props.product.image} alt="" />
            <h4>{props.product.title}</h4>
            <p>Price: {props.product.price}</p>
            <p>Category: {props.product.category}</p>
            <p>Description: {props.product.description.slice(0,100)}</p>
            <div className='d-flex justify-content-around'>
            <button onClick={setCartCount} className='btn btn-primary'>Add Cart</button>
            <button className='btn btn-warning'>Delete</button>
            {/* <button className='btn btn-info'>Detail</button> */}
            <ReactModal product={props.product}></ReactModal>
            </div>
            </div>


            {/*  */}

        </div>
    );
};

export default Products;