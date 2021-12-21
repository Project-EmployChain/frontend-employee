import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

import { IconLocation, IconBookmark, IconSearch, IconFilter } from '../assets/icon';
import glogo from '../assets/google_logo.png'
import NavBar from '../components/navbar';

function Dashboard() {
    return (
        <div className="dashboard">
            <NavBar />
            <Container>
                <Row>
                    <Col xs={8}>
                        <div style={{ textAlign: 'start', paddingTop: '25px', paddingBottom: '25px' }}>
                            <div className="searchbar">
                                <IconSearch />
                                <input style={{ marginLeft: '15px', border: 'none', width: '100%' }} className="searchbar-input" placeholder="Search For Job Title" />
                            </div>
                        </div>
                        <div>
                            <div style={{ overflowY: 'scroll', height: '79vh', paddingRight: '10px' }}>
                                <div className="dashcard">
                                    <div className="comp-logo">
                                        <img src={glogo} alt="logo" />
                                    </div>
                                    <div style={{ paddingLeft: '20px', paddingTop: '10px', flex: 5 }}>
                                        <div style={{ display: 'inline' }}>
                                            <div className="comp-name">Google <span style={{ color: '#D3D3D3', paddingLeft: '15px', fontSize: '14px', fontWeight: '400' }}>3 days ago</span></div>
                                        </div>
                                        <div className="job-role">Software Engineer <span style={{ color: '#AEA8B0' }}>| Full Time</span></div>
                                        <div style={{ fontWeight: '600', paddingTop: '10px', color: '#1D2A64' }}>203 Applicants</div>
                                    </div>
                                    <div style={{ textAlign: 'end', paddingTop: '15px', flex: 2 }}>
                                        <div style={{ fontWeight: '600', fontSize: '18px', marginTop: '-10px' }}><IconBookmark filled={true} /></div>
                                        <div style={{ fontWeight: '600', fontSize: '18px', paddingTop: '5px' }}>20 - 30 LPA</div>
                                        <div style={{ paddingTop: '10px' }}><IconLocation /> Delhi</div>
                                    </div>
                                </div>

                                <div className="dashcard">
                                    <div className="comp-logo">
                                        <img src={glogo} alt="logo" />
                                    </div>
                                    <div style={{ paddingLeft: '20px', paddingTop: '10px', flex: 5 }}>
                                        <div style={{ display: 'inline' }}>
                                            <div className="comp-name">Google <span style={{ color: '#D3D3D3', paddingLeft: '15px', fontSize: '14px', fontWeight: '400' }}>3 days ago</span></div>
                                        </div>
                                        <div className="job-role">Software Engineer <span style={{ color: '#AEA8B0' }}>| Full Time</span></div>
                                        <div style={{ fontWeight: '600', paddingTop: '10px', color: '#1D2A64' }}>203 Applicants</div>
                                    </div>
                                    <div style={{ textAlign: 'end', paddingTop: '15px', flex: 2 }}>
                                        <div style={{ fontWeight: '600', fontSize: '18px', marginTop: '-10px' }}><IconBookmark filled={false} /></div>
                                        <div style={{ fontWeight: '600', fontSize: '18px', paddingTop: '5px' }}>20 - 30 LPA</div>
                                        <div style={{ paddingTop: '10px' }}><IconLocation /> Delhi</div>
                                    </div>
                                </div>

                                <div className="dashcard">
                                    <div className="comp-logo">
                                        <img src={glogo} alt="logo" />
                                    </div>
                                    <div style={{ paddingLeft: '20px', paddingTop: '10px', flex: 5 }}>
                                        <div style={{ display: 'inline' }}>
                                            <div className="comp-name">Google <span style={{ color: '#D3D3D3', paddingLeft: '15px', fontSize: '14px', fontWeight: '400' }}>3 days ago</span></div>
                                        </div>
                                        <div className="job-role">Software Engineer <span style={{ color: '#AEA8B0' }}>| Full Time</span></div>
                                        <div style={{ fontWeight: '600', paddingTop: '10px', color: '#1D2A64' }}>203 Applicants</div>
                                    </div>
                                    <div style={{ textAlign: 'end', paddingTop: '15px', flex: 2 }}>
                                        <div style={{ fontWeight: '600', fontSize: '18px', marginTop: '-10px' }}><IconBookmark filled={false} /></div>
                                        <div style={{ fontWeight: '600', fontSize: '18px', paddingTop: '5px' }}>20 - 30 LPA</div>
                                        <div style={{ paddingTop: '10px' }}><IconLocation /> Delhi</div>
                                    </div>
                                </div>

                                <div className="dashcard">
                                    <div className="comp-logo">
                                        <img src={glogo} alt="logo" />
                                    </div>
                                    <div style={{ paddingLeft: '20px', paddingTop: '10px', flex: 5 }}>
                                        <div style={{ display: 'inline' }}>
                                            <div className="comp-name">Google <span style={{ color: '#D3D3D3', paddingLeft: '15px', fontSize: '14px', fontWeight: '400' }}>3 days ago</span></div>
                                        </div>
                                        <div className="job-role">Software Engineer <span style={{ color: '#AEA8B0' }}>| Full Time</span></div>
                                        <div style={{ fontWeight: '600', paddingTop: '10px', color: '#1D2A64' }}>203 Applicants</div>
                                    </div>
                                    <div style={{ textAlign: 'end', paddingTop: '15px', flex: 2 }}>
                                        <div style={{ fontWeight: '600', fontSize: '18px', marginTop: '-10px' }}><IconBookmark filled={false} /></div>
                                        <div style={{ fontWeight: '600', fontSize: '18px', paddingTop: '5px' }}>20 - 30 LPA</div>
                                        <div style={{ paddingTop: '10px' }}><IconLocation /> Delhi</div>
                                    </div>
                                </div>

                                <div className="dashcard">
                                    <div className="comp-logo">
                                        <img src={glogo} alt="logo" />
                                    </div>
                                    <div style={{ paddingLeft: '20px', paddingTop: '10px', flex: 5 }}>
                                        <div style={{ display: 'inline' }}>
                                            <div className="comp-name">Google <span style={{ color: '#D3D3D3', paddingLeft: '15px', fontSize: '14px', fontWeight: '400' }}>3 days ago</span></div>
                                        </div>
                                        <div className="job-role">Software Engineer <span style={{ color: '#AEA8B0' }}>| Full Time</span></div>
                                        <div style={{ fontWeight: '600', paddingTop: '10px', color: '#1D2A64' }}>203 Applicants</div>
                                    </div>
                                    <div style={{ textAlign: 'end', paddingTop: '15px', flex: 2 }}>
                                        <div style={{ fontWeight: '600', fontSize: '18px', marginTop: '-10px' }}><IconBookmark filled={false} /></div>
                                        <div style={{ fontWeight: '600', fontSize: '18px', paddingTop: '5px' }}>20 - 30 LPA</div>
                                        <div style={{ paddingTop: '10px' }}><IconLocation /> Delhi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} style={{ marginTop: '25px', paddingRight: '50px' }}>
                        <div className="appcards">
                            <div style={{ textAlign: 'start' }}>
                                <h5 style={{ fontWeight: '600', color: '#1D2A64' }}><IconFilter /> Filters</h5>
                                <Form>
                                    <div style={{ fontWeight: '600', paddingTop: '20px', paddingBottom: '10px' }}>Job Type</div>
                                    <Form.Group className="mb-3" controlId="formFullTime">
                                        <Form.Check type="checkbox" label="Full Time" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPartTime">
                                        <Form.Check type="checkbox" label="Part Time" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formInternship">
                                        <Form.Check type="checkbox" label="Internship" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formApprenticeship">
                                        <Form.Check type="checkbox" label="Apprenticeship" />
                                    </Form.Group>

                                    <Form.Group controlId="formCity" style={{ paddingTop: '20px' }}>
                                        <Form.Label>Location </Form.Label>
                                        <Form.Control type="text" placeholder="Select City" />
                                    </Form.Group>

                                    <Form.Group controlId="formExp" style={{ paddingTop: '20px' }}>
                                        <Form.Label>Experience </Form.Label>
                                        <Form.Control type="text" placeholder="Select Experience" />
                                    </Form.Group>

                                    
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Dashboard;