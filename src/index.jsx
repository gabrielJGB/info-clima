import { render } from 'preact';
import preactLogo from './assets/preact.svg';
import './style.css';

export function App() {


	const url = "https://my.meteoblue.com/images/meteogram?temperature_units=C&windspeed_units=kmh&precipitation_units=mm&darkmode=false&iso2=ar&lat=-38.8805&lon=-62.075&asl=3&tz=America%2FArgentina%2FBuenos_Aires&dpi=72&apikey=jhMJTOUVRNvs25m4&lang=es&location_name=Punta+Alta&sig=b7481d4bc23322d8f0f2694769f407c0"

	return (
		<div class="container">
			<img
				src={url}
				height={window.innerHeight}
				class="image"
			/>
			
		</div>

	);
}

render(<App />, document.getElementById('app'));
