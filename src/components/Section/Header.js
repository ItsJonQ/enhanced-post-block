import React from 'react';

export function SectionHeader({ title }) {
	if (!title) return null;

	return (
		<header className="SectionHeader">
			<h2 className="SectionHeader__Title">{title}</h2>
		</header>
	);
}
