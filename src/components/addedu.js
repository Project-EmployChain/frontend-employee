import React, { Component } from 'react';
import { IconAdd } from '../assets/icon';

function AddEduButton(props){
    return(
        <div style={{ width: '200px', height: '150px', margin:'0px 10px 0px 10px', paddingTop: '40px', paddingBottom: '30px', border: '1px solid #D3D3D3', borderRadius: '7px', textAlign: 'center' }}>
            <IconAdd />
            <div style={{ paddingTop: '30px', fontWeight: '600' }}>Add Education</div>
        </div>
    )
}

function AddExpButton(props){
    return(
        <div style={{ width: '200px', height: '150px', margin:'0px 10px 0px 10px', paddingTop: '40px', paddingBottom: '30px', border: '1px solid #D3D3D3', borderRadius: '7px', textAlign: 'center' }}>
            <IconAdd />
            <div style={{ paddingTop: '30px', fontWeight: '600' }}>Add Experience</div>
        </div>
    )
}

export {AddEduButton, AddExpButton};