import React from 'react';
import FilterBtn from '../filterBtn';
import Accordion from 'react-bootstrap/Accordion';

const Species = ({setSpecies}) => {

	const species = [
    "Human", "Alien", "Humanoid",
    "Poopybutthole", "Mythological", "Unknown",
    "Animal", "Disease","Robot","Cronenberg","Planet",
  ];

	return (
		<Accordion.Item eventKey="1">
        <Accordion.Header>Status</Accordion.Header>
        <Accordion.Body>
				<div className="accordion-body d-flex flex-wrap gap-3">
	 				{species.map((item, index) => {
							return (
								<FilterBtn
									name="species" 
									index={index} 
									key={index}
									task={setSpecies} 
									input={item}
								/>
							);
    				})}
  				</div>
        </Accordion.Body>
      </Accordion.Item>
	);
};

export default React.memo(Species);