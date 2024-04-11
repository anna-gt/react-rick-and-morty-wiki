import React from 'react';

const InputGroup = ({ name, changeID, total }) => {
	return (
		<div className="input-group mb-3">
			<select
			onChange={(eo) => changeID(eo.target.value)}
			className="form-select"
			id={name}>
				<option value="1">Choose...</option>
			{[...Array(total).keys()].map((x, index) => {
				return (
					<option key={index} value={x + 1}>
						{name} - {x + 1}
					</option>
				);
			})}
			</select>
		</div>
	);
};

export default React.memo(InputGroup);