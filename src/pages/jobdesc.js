import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../components/navbar';
import { IconBack, IconLocation, IconStop } from '../assets/icon';

import glogo from '../assets/google_logo.png';

function JobDesc(props) {
    return (
        <div className="dashboard">
            <NavBar />
            <Container style={{ backgroundColor: '#FFFFFF', padding: '30px 50px', marginTop: '40px' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'start' }}>
                        <div><a href="#"><IconBack /><u>Back</u></a></div>
                        <div style={{ display: 'flex', marginTop: '10px', width: '100%' }}>
                            <div className="comp-logo">
                                <img src={glogo} alt="logo" />
                            </div>
                            <div style={{ paddingLeft: '20px', paddingTop: '10px', flex: 5 }}>
                                <div style={{ display: 'inline' }}>
                                    <div className="comp-name">Google <span style={{ color: '#D3D3D3', paddingLeft: '15px', fontSize: '14px', fontWeight: '400' }}>3 days ago</span></div>
                                </div>
                                <div className="job-role">Software Engineer <span style={{ color: '#AEA8B0' }}>| Full Time</span></div>
                            </div>
                            <div style={{ textAlign: 'end', paddingTop: '15px', flex: 2 }}>
                                <div style={{ fontWeight: '600', fontSize: '18px' }}>20 - 30 LPA</div>
                                <div style={{ paddingTop: '5px' }}><IconLocation /> Delhi</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ textAlign: 'start', paddingTop: '25px' }}>
                        <h3>Job Description</h3>
                        <p style={{ color: '#787878', fontSize: '14px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae elementum lectus metus ut nibh sed amet vitae. In blandit sit condimentum pellentesque. Elementum id sem eget pulvinar augue risus semper nunc egestas. Cursus in aliquam, ipsum aliquam. Lectus in pellentesque dolor dolor duis odio vestibulum. Eu suspendisse consectetur ullamcorper turpis tincidunt odio duis a vulputate.
                            Ullamcorper aliquam eu varius adipiscing id facilisi amet felis. Urna placerat nulla sed euismod lacus sed tortor. Vestibulum odio mi velit commodo at porttitor felis neque. Sed facilisis diam risus faucibus neque fermentum. Pretium mi quis in ullamcorper at amet, ornare. Sed mi etiam nunc id elit. Lectus malesuada amet elit posuere vitae, praesent. Convallis massa tellus et condimentum amet in suspendisse.
                            Leo mauris orci, morbi platea lacus nulla. Tempus mollis purus pellentesque porta. Quisque nec suspendisse ut turpis rhoncus dictum nisi. Nisl accumsan eleifend nunc at. Mi id ac tortor, nascetur amet libero euismod. In nulla aliquam enim, amet sagittis aliquam euismod. Sed sit id curabitur bibendum ullamcorper semper. Duis tristique mauris nibh turpis vitae neque, varius eu. Ipsum arcu nisi, in at consequat, quam. Maecenas nisi pulvinar nisl eget faucibus enim, adipiscing volutpat.
                            Donec auctor in id pellentesque. Sed phasellus sed blandit massa consectetur. Cursus sed elementum amet, dignissim vitae. Ultrices viverra bibendum scelerisque est metus vitae eu, ornare est. Tempor sapien habitasse penatibus mi, at vitae. Vel tincidunt congue euismod a et id. Arcu scelerisque malesuada nunc dui, et commodo pharetra. Nec tincidunt elit porta nam tempus non. Rutrum cursus lacinia pulvinar viverra id quis. Fringilla varius duis et donec facilisis rhoncus. Eget vulputate imperdiet sem lobortis neque sed sollicitudin imperdiet tellus.
                            Vitae odio scelerisque purus arcu in diam viverra condimentum laoreet. Tellus, cras aliquam sit vitae. Id quis neque ac tempus ultrices nunc duis quis nunc. Placerat sem turpis ut eu sit pretium dui. Risus purus venenatis felis ac penatibus. Vel vitae morbi at nam. Urna quis amet.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div style={{ textAlign: 'end' }}>
                            <Button style={{ borderRadius: '8px', border: '2px solid #1D2A64', backgroundColor: '#FFFFFF', color: '#1D2A64', width: '175px', height: '60px', marginRight: '20px' }}>Save for Later</Button>
                            <Button style={{ borderRadius: '8px', border: '2px solid #1D2A64', backgroundColor: '#1D2A64', color: '#FFFFFF', width: '175px', height: '60px' }}>Apply Now</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default JobDesc;