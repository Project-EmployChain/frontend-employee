import React, { Component } from 'react';
import NavBar from '../components/navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { IconGreenCheck, IconDownload, IconEditDetails, IconLocation } from '../assets/icon';

function ProfilePage() {

    const printresume = (divName) => {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    return (
        <div className="profverifyPage">
            <NavBar />
            <Container style={{ paddingBottom: '40px' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'end', paddingTop: '35px', paddingRight: '50px' }}>
                        <Button style={{ marginRight: '35px', backgroundColor: '#FFFFFF', border: 'none', boxShadow: '0px 7px 20px rgba(183, 183, 183, 0.18)', borderRadius: '5px', color: '#1D2A64', fontSize: '13px', height: '45px', width: '190px' }} onClick={() => {printresume('resume')}}>Download Resume <IconDownload /></Button>
                        <Button style={{ backgroundColor: '#1D2A64', border: 'none', boxShadow: '0px 7px 20px rgba(183, 183, 183, 0.18)', borderRadius: '5px', color: '#FFFFFF', fontSize: '13px', height: '45px', width: '190px' }}>Edit Details <IconEditDetails /></Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ paddingRight: '50px' }} id="resume">
                        <div style={{ paddingTop: '30px' }} >
                            <h3 style={{ fontWeight: '600', color: '#1D2A64 !important', textAlign: 'start' }}>Your Profile is verified <IconGreenCheck /></h3>
                            <div style={{ display: 'flex', marginTop: '20px' }} >
                                <div style={{ flex: 6, padding: '0px 15px 0px 0px' }}>
                                    <div className="appcards">
                                        <h4 style={{ textAlign: 'start', paddingBottom: '10px' }}>Personal Info</h4>
                                        <hr />
                                        <div style={{ textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingBottom: '15px' }}>
                                            <div style={{ marginTop: '25px', fontSize: '15px' }}>
                                                <span style={{ color: '#D3D3D3', marginTop: '20px' }}>Name :  </span>
                                                <span>Pranav M S</span>
                                            </div>
                                            <div style={{ marginTop: '25px', fontSize: '15px' }}>
                                                <span style={{ color: '#D3D3D3', marginTop: '20px' }}>Mobile Number : </span>
                                                <span>8792491253</span>
                                            </div>
                                            <div style={{ marginTop: '25px', fontSize: '15px' }}>
                                                <span style={{ color: '#D3D3D3', marginTop: '20px' }}>Email : </span>
                                                <span>pranavms@gmail.com</span>
                                            </div>
                                            <div style={{ marginTop: '25px', fontSize: '15px' }}>
                                                <span style={{ color: '#D3D3D3', marginTop: '20px' }}>Location : </span>
                                                <span>Bangalore</span>
                                            </div>
                                            <div style={{ marginTop: '25px', fontSize: '15px' }}>
                                                <span style={{ color: '#D3D3D3', marginTop: '20px' }}>Gender : </span>
                                                <span>Male</span>
                                            </div>
                                            <div style={{ marginTop: '25px', fontSize: '15px' }}>
                                                <span style={{ color: '#D3D3D3', marginTop: '20px' }}>Date of Birth : </span>
                                                <span>10/07/2000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="appcards" style={{ marginTop: '25px' }}>
                                        <h4 style={{ textAlign: 'start', paddingBottom: '10px' }}>Experience</h4>
                                        <hr />

                                        <div style={{ textAlign: 'start', fontWeight: '600', fontSize: '15px', paddingBottom: '15px' }}>
                                            <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                                                <div style={{ flex: 8 }}>
                                                    <div style={{ fontWeight: '600', fontSize: '16px', color: '#1D2A64' }}>
                                                        UI & UX Designer - Full Time
                                                    </div>
                                                    <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px' }}>
                                                        Microsoft | 3 Years
                                                    </div>
                                                    <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px', paddingBottom: '5px' }}>
                                                        <IconLocation /> Bangalore
                                                    </div>
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                                        5 LPA
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ textAlign: 'start', fontWeight: '600', fontSize: '15px', paddingBottom: '15px' }}>
                                            <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                                                <div style={{ flex: 8 }}>
                                                    <div style={{ fontWeight: '600', fontSize: '16px', color: '#1D2A64' }}>
                                                        UI & UX Designer - Full Time
                                                    </div>
                                                    <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px' }}>
                                                        Microsoft | 3 Years
                                                    </div>
                                                    <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px', paddingBottom: '5px' }}>
                                                        <IconLocation /> Bangalore
                                                    </div>
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                                        5 LPA
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ textAlign: 'start', fontWeight: '600', fontSize: '15px', paddingBottom: '15px' }}>
                                            <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                                                <div style={{ flex: 8 }}>
                                                    <div style={{ fontWeight: '600', fontSize: '16px', color: '#1D2A64' }}>
                                                        UI & UX Designer - Full Time
                                                    </div>
                                                    <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px' }}>
                                                        Microsoft | 3 Years
                                                    </div>
                                                    <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px', paddingBottom: '5px' }}>
                                                        <IconLocation /> Bangalore
                                                    </div>
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                                        5 LPA
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div style={{ flex: 4, padding: '0px 0px 0px 15px' }}>
                                    <div className="appcards">
                                        <h4 style={{ textAlign: 'start', paddingBottom: '10px' }}>Address</h4>
                                        <hr />
                                        <div style={{ textAlign: 'start', fontWeight: '600', fontSize: '15px', paddingBottom: '15px' }}>
                                            2972 Westheimer Rd. Santa Ana,<br />
                                            Bangalore 85486<br />
                                            Karnataka
                                        </div>
                                    </div>

                                    <div className="appcards" style={{ marginTop: '25px' }}>
                                        <h4 style={{ textAlign: 'start', paddingBottom: '10px' }}>Education</h4>
                                        <hr />
                                        <div style={{ textAlign: 'start', fontWeight: '600', fontSize: '15px', paddingBottom: '15px' }}>

                                            <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                                                <div style={{ flex: 8 }}>
                                                    <div>
                                                        <span style={{ fontWeight: '600' }}>B.Tech</span><span style={{ fontWeight: '300' }}>{' '}(2018-2022)</span>
                                                    </div>
                                                    <div style={{ fontWeight: '300', fontSize: '14px' }}>Visvesvarayya Technological University</div>
                                                    <div style={{ fontWeight: '300', fontSize: '14px' }}>Computer Science</div>
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                                        75%
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                                                <div style={{ flex: 8 }}>
                                                    <div>
                                                        <span style={{ fontWeight: '600' }}>B.Tech</span><span style={{ fontWeight: '300' }}>{' '}(2018-2022)</span>
                                                    </div>
                                                    <div style={{ fontWeight: '300', fontSize: '14px' }}>Visvesvarayya Technological University</div>
                                                    <div style={{ fontWeight: '300', fontSize: '14px' }}>Computer Science</div>
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                                        75%
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                                                <div style={{ flex: 8 }}>
                                                    <div>
                                                        <span style={{ fontWeight: '600' }}>B.Tech</span><span style={{ fontWeight: '300' }}>{' '}(2018-2022)</span>
                                                    </div>
                                                    <div style={{ fontWeight: '300', fontSize: '14px' }}>Visvesvarayya Technological University</div>
                                                    <div style={{ fontWeight: '300', fontSize: '14px' }}>Computer Science</div>
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                                        75%
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="appcards" style={{ marginTop: '25px' }}>
                                        <h4 style={{ textAlign: 'start', paddingBottom: '10px' }}>Skills</h4>
                                        <hr />
                                        <div style={{ paddingTop: '15px', maxHeight: '40vh', overflowX: 'auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginRight: '25px', alignItems: 'start', textAlign: 'start', fontWeight: '600', fontSize: '15px' }}>
                                            <div>HTML</div>
                                            <div>UX Design</div>
                                            <div>CSS</div>
                                            <div>Webflow</div>
                                            <div>UI Design</div>
                                            <div>Wireframing</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default ProfilePage;