import React from 'react';
import { Container } from '@core/layout';

export function Home() {
	const user = JSON.parse(localStorage.getItem('activeUser'));

	return (
		<div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
			<Container>
				<h1 className="text-center text-white text-4xl">
					Welcome <span className="text-yellowSubtle">{user?.name.toUpperCase()}</span>
				</h1>
			</Container>
		</div>
	);
}

export default Home;
