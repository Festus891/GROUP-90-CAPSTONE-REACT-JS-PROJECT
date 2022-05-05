import { useState } from 'react'
import './ProductList.css'
import american from'./american.jpg'
import italian from'./italian.jpg'
import pizza from './pizza.jpg'
import mexican from './mexican.jpg'
import ofada from './ofada.jfif'
import portage from './portage.jfif'
import semovita from './semovita.jfif'
import vegetable from './vegetable.jfif'
import jollof from './jollof.jfif'
import meatpie from './meatpie.jfif'
import sandwich from './sandwich.jpg'
import eba from './eba.jfif'
import fufu from './fufu.jfif'
import iyan from './iyan.jfif'


const ProductList = (props) => {
   
    const [products] = useState([
        {img:american, productName: 'American food', productPrice: 3000, id:1},
        {img:italian, productName: 'Italian food', productPrice: 3000, id:2},
        {img:pizza, productName: 'Pizza', productPrice: 4000, id:3},
        {img:mexican, productName: 'Mexican food', productPrice: 3500, id:4},
        {img:ofada, productName: 'Ofada Rice', productPrice: 2000, id:5},
        {img:portage, productName: 'Portage', productPrice: 2000, id:6},
        {img:semovita, productName: 'Semo', productPrice: 1500, id:7},
        {img:vegetable, productName: 'Vegetable', productPrice: 1000, id:8},
        {img:jollof, productName: 'Jollor Rice', productPrice: 2000, id:9},
        {img:meatpie, productName: 'Meatpie', productPrice: 500, id:11},
        {img:sandwich, productName: 'Sandwich', productPrice: 1000, id:12},
        {img:eba, productName: 'Eba', productPrice: 1500, id:13},
        {img:fufu, productName: 'Fufu', productPrice: 1500, id:14},
        {img:iyan, productName: 'Iyan with Efo riro', productPrice: 2500, id:10}
      ]);

    return ( 
     <div className="wrapper">
        <div className ="product-list">
          {products.map((product)=>(
             <div className="product" key = {product.id}> 
                <img src={product.img} alt="" />             
                <h3>{product.productName}</h3>
                <h4>#{product.productPrice}</h4>
             </div>
          ))}        
        </div>
      </div>
     );
}
export default ProductList;