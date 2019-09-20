import React from 'react';
import H2styled from '../styled/H2styled';
import H3styled from '../styled/H3styled';
import Pstyled from '../styled/Pstyled';

const Educacion = props => (
    <div className="Educacion">
        <H2styled name="Educación" />  <hr/>
        <div className="Educacion-container">
            {props.data.map((edu, index) => (
                <div className="Edicacion-item" key={`Edu-${index}`}>
                    <H3styled>{edu.degree} @ {edu.institution} <br/> <span>{edu.startDate} a {edu.endDate}</span> </H3styled>
                    <Pstyled>{edu.description}</Pstyled>
                </div>
            ))}
        </div>
    </div>
    );

export default Educacion;