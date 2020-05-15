import React from 'react';

export function SectionHeader({ title }) {
	if (!title) return null;

	return (
		<header className="section-header">
			<h2 className="section-header__title">{title}</h2>
		</header>
	);
}
