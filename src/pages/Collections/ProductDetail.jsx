import React, { Component, useSate } from 'react';
import RequestService from '../../services/request-service';
import { CartItemType } from '../../types/types';


class ProductDetail extends Component {

    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        RequestService.getDetailProduct(this.state.id).then(res=>{
            this.setState({product: res.data});
        });
    }


    render() {
        return (
            <div class="main">
                <hr/>
                <section class="container-fluid">
                    <div class="row">
                        <div className="col-md-9">
                        <div class="col-md-7 text-left">
                            <h3>{this.state.product.title}</h3>
                            <p>Giá: {this.state.product.price} VND</p>
                           
                            <div  dangerouslySetInnerHTML={{ __html: this.state.product.content}}/>

                        </div>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default ProductDetail;