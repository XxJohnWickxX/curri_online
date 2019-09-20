import React from 'react';
import H2styled from '../styled/H2styled';
import H3styled from '../styled/H3styled';
import Pstyled from '../styled/Pstyled';

const Experiencia = props => (
    <div className="Experiencia">
        <H2styled name="Experiencia"/> <hr/>
        <div className="Experiencia-container">
            {props.data.map((exp, index) => (
                 <div className="Experiencia-item" key={`Exp-${index}`}>
                    <H3styled>{exp.jobTitle} @ {exp.company} <br/> <span>{exp.startDate} a {exp.endDate}</span></H3styled>
                    <Pstyled>{exp.jobDescription}</Pstyled>
                </div>
            ))}
        </div>
    </div>
    );

export default Experiencia;