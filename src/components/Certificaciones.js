import React from 'react';
import H2styled from '../styled/H2styled';
import H3styled from '../styled/H3styled';
import Pstyled from '../styled/Pstyled';

const Certificaciones = props => (
    <div className="Certificaciones"> 
        <H2styled name="Certificaciones" /> <hr/>
        <div className="Certificaciones-coantainer">
            {props.data.map((cer, index) => (
                <div className="Certificaciones-item" key={`Cer-${index}`}>
                    <H3styled>{cer.name} @ {cer.institution} <br/> <span>{cer.date}</span></H3styled>
                    <Pstyled>{cer.description}</Pstyled>
                </div>
            ))}
        </div>
    </div>
    );

export default Certificaciones;