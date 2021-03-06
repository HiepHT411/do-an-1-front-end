import React, { Component } from 'react';
import TwsService from '../services/request-service';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import {REACT_APP_GOOGLE_KEY} from '../utils/constants/url';

function Map(){
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{lat: 21.027763, lng: 105.834160}}/>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
class ContactComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            note: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeEmailHandler = (event)=>{
        this.setState({email: event.target.value});
    }
    changePhoneHandler=(event)=>{
        this.setState({phone: event.target.value});
    }
    changeNoteHandler=(event)=>{
        this.setState({note: event.target.value});
    }

    saveToDatabase = (event) => {
        event.preventDefault();
        let feedback = {name: this.state.name, email: this.state.email, phone: this.state.phone, note: this.state.note};
        console.log('feedback => '+ JSON.stringify(feedback));
        TwsService.saveFeedback(feedback).then((res)=>{
            this.setState({
                name: '',
                email: '',
                phone: '',
                note: ''
            });
            
        });
    }

    render() {
        return (
            <div class="main contact">
                <div class="container-fluid row">
                    <div class="col-md-6" style={{width: '100vh', height: '100vh'}}>
                        <h4>Google map</h4>
                       
                <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places
                                            &key=${REACT_APP_GOOGLE_KEY}`}
                            loadingElement = {<div style = {{height: '100%'}}/>}
                            containerElement = {<div style = {{height: '100%'}}/>}
                            mapElement = {<div style = {{height: '100%'}}/>}
                />


                    </div>

                    <div class="col-md-6 fade-up-animation">
                        <h3>Li??n h??? v???i ch??ng t??i</h3>
                        <br/>
                        <div class="box-info-contact text-left">
                        <p>?????a ch???:</p>
                        <strong>Tr??? s???: Hanoi - Vietnam</strong>
                        <p>Email:</p>
                        <strong>weddingplanner@ftws.com</strong>
                        <p>??i???n tho???i:</p>
                        <strong>0912345678</strong>
                        <p>Th???i gian l??m vi???c:</p>
                        <strong>C??? tu???n t??? 8:00 - 22:00</strong>
                        </div>
                        <br/><br/>
                        <div class="box-send-contact">
                        <div class="card-body">
                            <h3>G???i th???c m???c</h3>
                            <form>
                                <div class="form-group">
                                    <input placeholder="T??n c???a b???n" name="name" class="form-control"
                                    value = {this.state.name} onChange={this.changeNameHandler}></input>
                                </div>
                                <div class="form-group">
                                    <input placeholder="Email c???a b???n" name="email" class="form-control"
                                    value = {this.state.email} onChange={this.changeEmailHandler}></input>
                                </div>
                                <div class="form-group">
                                    <input placeholder="S??? ??i???n tho???i c???a b???n" name="phone" class="form-control"
                                    value = {this.state.phone} onChange={this.changePhoneHandler}></input>
                                </div>
                                <div class="form-group">
                                    <input placeholder="N???i dung" name="note" class="form-control"
                                    value = {this.state.note} onChange={this.changeNoteHandler}></input>
                                </div>


                                <button className="btn btn-danger" onClick={this.saveToDatabase}>G???i cho ch??ng t??i</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default ContactComponent;