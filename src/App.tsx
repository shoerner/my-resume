import {
	BaseDocument,
	MainBodyContainer,
	MainInfo,
	MiscInfo,
} from './App.styled';
import { WhoAmI } from './WhoAmI/WhoAmI';
import { Jobs } from './Jobs';
import { Skills } from './Skills/Skills';
import { Education } from './Education';

function App() {
	return (
		<BaseDocument>
			<WhoAmI />
			<MainBodyContainer>
				<MainInfo>
					<Jobs />
				</MainInfo>
				<MiscInfo>
					<Skills />
					<Education />
				</MiscInfo>
			</MainBodyContainer>
		</BaseDocument>
	);
}

export default App;
