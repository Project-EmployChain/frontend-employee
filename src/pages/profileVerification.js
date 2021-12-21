import React, { Component, useState } from 'react';
import NavBar from '../components/navbar';
import ProfSteps from '../components/profSteps';

import { AddEduButton, AddExpButton } from '../components/addedu';
import { EduCard, ExpCard } from '../components/educard';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IconRefresh, IconGreenCheck } from '../assets/icon';
import CheckCircle from '../assets/check_circle.png'
import CompleteVerification from '../assets/completeVerification.png';


function ProfileVerifyPage() {
    const [verifystep, setVerifyStep] = useState(3);
    const [edumodal, setEduModal] = useState(false);
    const [expmodal, setExpModal] = useState(false);

    const addEducation = () => {

    }

    return (
        <div className="profverifyPage">
            <NavBar />
            <Container style={{ textAlign: 'start', paddingTop: '25px' }}>
                <Row style={{ paddingBottom: '20px' }}>
                    <Col>
                        <h1 style={{ color: '#1D2A64' }}>Profile Verification</h1>
                        <p style={{ color: '#D3D3D3', fontSize: '21px', fontWeight: '400' }}>To Apply for Jobs, you must complete the following verification steps</p>
                    </Col>
                </Row>
                <ProfSteps verifystep={verifystep} />
                {verifystep === 1 &&
                    <Row style={{ paddingTop: '50px' }} className="justify-content-center">
                        <Col className="align-self-center">
                            <div className="appcards">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Enter Your Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="text" placeholder="+91" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formAadhaarNumber">
                                        <Form.Label>Aadhaar Number</Form.Label>
                                        <Form.Control type="text" placeholder="xxxx xxxx xxxx" />
                                    </Form.Group>

                                    <div style={{ alignItems: 'end', textAlign: 'end' }}>
                                        <Button className="transparentbutton">
                                            Clear All
                                        </Button>
                                        <Button variant="primary" type="submit" className="appbutton">
                                            Continue
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col xs={5}>
                            <div className="appcards">
                                <Form>
                                    <h4>Captcha Verification</h4>
                                    <div style={{ textAlign: 'center', paddingTop: '30px', paddingBottom: '30px', paddingLeft: '15px', paddingRight: '15px', color: '#D3D3D3' }}>
                                        Please enter the OTP sent to your Aadhaar Linked Mobile Number</div>
                                    <div>
                                        <Form.Group className="mb-3" controlId="formOTP">
                                            <Form.Control type="text" placeholder="xxxxxx" />
                                        </Form.Group>

                                    </div>
                                    <div style={{ alignItems: 'end', textAlign: 'end', paddingBottom: '20px' }}>
                                        <Button className="refreshbutton">
                                            Refresh{' '}<IconRefresh />
                                        </Button>
                                    </div>
                                    <Button variant="primary" className="loginbtn" onClick={() => { setVerifyStep(2) }}>
                                        Verify
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                }
                {verifystep === 2 &&
                    <Row style={{ overflowY: 'scroll', maxHeight: '65vh' }}>
                        <Col>
                            <div style={{ width: '100%', paddingTop: '75px', textAlign: 'start' }}>
                                <div className="appcards" >
                                    <Form>
                                        <h4 style={{ textAlign: 'start', paddingBottom: '15px' }}>Personal Info</h4>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ flex: 5, paddingRight: '30px' }}>
                                                <Form.Group className="mb-3" controlId="formName">
                                                    <Form.Label>Full Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Name" />
                                                </Form.Group>
                                            </div>
                                            <div style={{ flex: 3, paddingRight: '30px' }}>
                                                <Form.Group className="mb-3" controlId="formPhone">
                                                    <Form.Label>Mobile Number</Form.Label>
                                                    <Form.Control type="text" placeholder="+91" />
                                                </Form.Group>
                                            </div>
                                            <div style={{ flex: 2 }}>
                                                <Form.Group className="mb-3" controlId="formCity">
                                                    <Form.Label>Location</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter City" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ flex: 5, paddingRight: '30px' }}>
                                                <Form.Group className="mb-3" controlId="formEmail">
                                                    <Form.Label>Email Address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter Email" />
                                                </Form.Group>
                                            </div>
                                            <div style={{ flex: 2, paddingRight: '30px' }}>
                                                <Form.Group className="mb-3" controlId="formgender">
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Gender" />
                                                </Form.Group>
                                            </div>
                                            <div style={{ flex: 3 }}>
                                                <Form.Group className="mb-3" controlId="formDOB">
                                                    <Form.Label>Date Of Birth</Form.Label>
                                                    <Form.Control type="text" placeholder="DD/MM/YYYY" />
                                                </Form.Group>
                                            </div>
                                        </div>

                                        <h4 style={{ textAlign: 'start', paddingTop: '15px', paddingBottom: '15px' }}>Address</h4>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ flex: 1, paddingRight: '30px' }}>
                                                <Form.Group className="mb-3" controlId="formAddress1">
                                                    <Form.Label>Your Address</Form.Label>
                                                    <Form.Control type="text" placeholder="Address Line 1" />
                                                </Form.Group>
                                            </div>
                                            <div style={{ flex: 1, paddingRight: '30px', paddingTop: '30px' }}>
                                                <Form.Group className="mb-3" controlId="formAddress2">
                                                    {/* <Form.Label>Your Address</Form.Label> */}
                                                    <Form.Control type="text" placeholder="Address Line 2" />
                                                </Form.Group>
                                            </div>
                                            <div style={{ flex: 1, paddingTop: '30px' }}>
                                                <Form.Group className="mb-3" controlId="formAddress3">
                                                    {/* <Form.Label>Your Address</Form.Label> */}
                                                    <Form.Control type="text" placeholder="Address Line 3" />
                                                </Form.Group>
                                            </div>
                                        </div>

                                        <h4 style={{ textAlign: 'start', paddingTop: '15px', paddingBottom: '15px' }}>Education</h4>
                                        <div style={{ overflowX: 'scroll' }}>
                                            <div style={{ width: 'max-content', display: 'flex', flexDirection: 'row', padding: '10px 0px 30px 0px' }}>
                                                <AddEduButton />
                                                <EduCard />
                                                <EduCard />
                                                <EduCard />
                                                <EduCard />
                                                <EduCard />
                                            </div>
                                        </div>


                                        <h4 style={{ textAlign: 'start', paddingTop: '15px', paddingBottom: '15px' }}>Experience</h4>
                                        <div style={{ overflowX: 'scroll' }}>
                                        <div style={{ width: 'max-content', display: 'flex', flexDirection: 'row', padding: '10px 0px 30px 0px' }}>
                                                <AddExpButton />
                                                <ExpCard/>
                                                <ExpCard/>
                                                <ExpCard/>
                                            </div>
                                        </div>


                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                }
                {verifystep === 3 &&
                    <Row>
                        <Col>
                            <div className="appcards" style={{ marginTop: '30px', width: '100%', paddingTop: '75px', textAlign: 'center' }}>
                                <h4>Completing Verification</h4>
                                <img style={{ width: '20%', marginTop: '20px' }} src={CompleteVerification} />
                                <p style={{ color: '#1D2A64', fontWeight: '500', fontSize: '15px', paddingBottom: '35px', marginTop: '20px' }}>Your Profile is under verification. This usually takes few hours.<br/>Expect Verification within next 24 - 48 hours</p>
                            </div>
                        </Col>
                    </Row>
                }
            </Container>
        </div>
    )
}
export default ProfileVerifyPage;