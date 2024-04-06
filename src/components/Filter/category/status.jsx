import React from 'react';
import FilterBtn from '../filterBtn';
import Accordion from 'react-bootstrap/Accordion';

const Status = ({setStatus}) => {

	const status = ["Alive", "Dead", "Unknown"];

	return (
		<Accordion.Item eventKey="0">
        <Accordion.Header>Status</Accordion.Header>
        <Accordion.Body>
				<div className="accordion-body d-flex flex-wrap gap-3">
				{status.map((item, index) => (
					<FilterBtn
						key={index}
						index={index}
						name="status"
						task={setStatus}
						input={item}
					/>
				))}
			</div>
        </Accordion.Body>
      </Accordion.Item>
	);
};


export default Status;