import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';

import { IconFindJobs, IconDetails, IconProfile } from '../assets/icon';

import navlogo from '../assets/logo-full.png';

function NavBar() {
    return (
        <Navbar style={{ backgroundColor: '#FFFFFF' }}>
            <Container>
                <Navbar.Brand href="#home"><img src={navlogo} style={{ width: '250px' }}/></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{ paddingRight: '40px' }}>
                        <IconFindJobs />
                    </Navbar.Text>

                    <Navbar.Text style={{ paddingRight: '40px' }}>
                        <IconProfile />
                    </Navbar.Text>

                    <Navbar.Text style={{ paddingRight: '40px' }}>
                        <IconDetails />
                    </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;