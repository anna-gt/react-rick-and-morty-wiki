import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import FilterBtn from '../filterBtn';

const Gender = ({setGender}) => {

	const genders = ["female", "male", "genderless", "unknown"];

	return (
		<Accordion.Item eventKey="2">
        <Accordion.Header>Gender</Accordion.Header>
        <Accordion.Body>
				<div className="accordion-body d-flex flex-wrap gap-3">
				{genders.map((items, index) => {
					return (
						<FilterBtn
							name="gender" 
							index={index} 
							key={index}
							task={setGender} 
							input={items}
						/>
						);
    			})}
  				</div>
        </Accordion.Body>
      </Accordion.Item>
	);
};


export default Gender;