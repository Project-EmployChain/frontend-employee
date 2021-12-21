import React, { Component } from 'react';

import { IconLocation } from '../assets/icon';

const EduCard = (props) => {
    return(
        <div style={{ width: '360px', height: '150px', margin:'0px 10px 0px 10px', padding: '30px 25px 15px 20px', border: '1px solid #D3D3D3', borderRadius: '7px', textAlign: 'start', fontSize: '18px', fontWeight: '600', color: '#1D2A64' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 8, borderRight: '1px solid #D3D3D3' }}>
                    <div style={{ color: '#1D2A64' }}>Class 12th <span style={{ fontWeight: '300', fontSize: '16px', color: '#1D2A64' }}>(2018-2022)</span></div>
                    <div><span style={{ fontWeight: '500', fontSize: '14px' }}>K N S PU College</span></div>
                    <div><span style={{ fontWeight: '500', fontSize: '14px' }}>PCMC</span></div>
                </div>
                <div style={{ flex: 2, textAlign: 'end', paddingTop: '25px' }}>
                    94 %
                </div>
            </div>    
        </div>
    )
}

const ExpCard = (props) => {
    return(
        <div style={{ width: '380px', height: '150px', margin:'0px 10px 0px 10px', padding: '30px 15px 15px 20px', border: '1px solid #D3D3D3', borderRadius: '7px', textAlign: 'start', fontSize: '18px', fontWeight: '600', color: '#1D2A64' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 8, borderRight: '1px solid #D3D3D3' }}>
                    <div style={{ color: '#1D2A64' }}>UI & UX Designer - Full Time</div>
                    <div><span style={{ fontWeight: '500', fontSize: '14px' }}>Microsoft | 3 Years</span></div>
                    <div><span style={{ fontWeight: '500', fontSize: '14px' }}><IconLocation/> Bangalore</span></div>
                </div>
                <div style={{ flex: 2, textAlign: 'center', paddingTop: '25px' }}>
                    5 LPA
                </div>
            </div>    
        </div>
    )
}

export { EduCard, ExpCard };