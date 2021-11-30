import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(){
        super()

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <div class="top-footer">
                        <div class = "container-fluid ">
                            <div class ="row align-self-center">
                                <div class="row col-xs-12 col-sm-12 col-md-8">
                                    <div class= "mail-subcribe">
                                    <img src="/images/mail.png"/>
                                    <p class="item-padding">Đăng kí nhận tin</p>
                                    </div>
                                
                                    
                                        <div class="form-group mail-subcribe-form">
                                            <input class="form-control"placeholder="Email..."></input>
                                        </div>
                                        <button class="btn btn-danger">Đăng kí</button>
                                    
                                </div>
                                <div class="row col-xs-12 col-sm-12 col-md-4 align-self-center">
                                
                                    <a><i class="fa fa-fw fa-phone"></i></a>
                                    <a href="tel:0904518901">0904518901</a>
                                    <p>Tư vấn thủ tục, trang trí từ A-Z</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                        <div class = "row text-center">
                            <div class = "col-md-4">
                                <h5>Giới thiệu</h5>
                                <hr class="light"></hr>
                                <p>Cưới Hỏi HUST - Hệ thống Cưới Hỏi HUST 
                                     100 năm phục vụ Uy tín DV Cưới Hỏi Trọn Gói 
                                    Xem Các Mẫu trang trí Cưới hỏi tại Fanpage : https://www.facebook.com/hoanghiep0411/</p>
                            </div>

                            <div class= "col-md-2">
                                
                                <h5>Liên kết</h5>
                                <hr class="light"></hr>
                                <p>Tìm kiếm</p>
                                <p>Giới thiệu</p>
                                <img src ="/images/logo.png"/>
                            </div>

                            <div class = "col-md-3 footer-img">
                                
                                <h5>Thông tin liên hệ</h5>
                                <hr class = "light"/>
                                <div class="row"><img src="/images/mark.png"/>
                                <p>Hà Nội</p></div>
                                <div class="row"><img src="/images/phone.png"/>
                                <p>0123456789</p></div>
                                <div class="row"><img src="/images/send.png"/>
                                <p>hustweddingplanner@gmail.com</p>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <h5>Fanpage</h5>
                                <hr/>
                                <div class="fb-page" 
                                    data-href="https://www.facebook.com/hoanghiep0411/"
                                    data-height="100" 
                                    data-adapt-container-width
                                    data-hide-cover="false"
                                    data-show-facepile="false"></div>                                
                            </div>
                    </div>
                    <div class = "col-12">
                            <hr class = "endpage"/>
                            <p>HiepHT&copy; 2021 Hust wedding. Powered by Mr Pham Doan Tinh</p>
                    </div>
                    
                </footer>
            </div>
        );
    }
}

export default FooterComponent;