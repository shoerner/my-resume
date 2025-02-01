import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ResumeProvider } from './Components/ResumeProvider/ResumeProvider.tsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faAt, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faPhone, faAt, faWifi, faLinkedin, faGithub);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ResumeProvider>
			<App />
		</ResumeProvider>
	</StrictMode>,
);
