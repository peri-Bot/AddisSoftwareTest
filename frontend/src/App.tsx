import React from 'react';
import RootLayout from './layout.tsx';
import Home from './page.tsx';

function App() {
	return (
		<RootLayout>
			<div className="min-h-screen flex flex-col bg-gruvbox-light0 dark:bg-gruvbox-dark0">
				<Home />
			</div>
		</RootLayout>
	);
}

export default App;
