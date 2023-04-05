import React from 'react';
import { Container } from '@core/layout';

export function PageNotFound() {
	return (
		<div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
			<Container>
				<h1 className="text-center text-red-300 text-4xl">Unauthorised Access !!</h1>
			</Container>
		</div>
	);
}

export default PageNotFound;
