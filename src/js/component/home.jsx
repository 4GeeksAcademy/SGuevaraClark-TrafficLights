import React, {useState} from "react";


const Home = () => {
	
	const [color, setColor] = useState('');


	return (
		<div className="container d-flex flex-column align-items-center justify-content-center">
			<div className="trafficTop bg-dark"></div>
			<div className="d-flex flex-column align-items-center justify-content-center base">
				<div onClick={()=>setColor('red')} className={`red light rounded-circle bg-danger my-2 ${color ==='red' ? 'iluminado': ''}`}></div>
				<div onClick={()=>setColor('yellow')} className={`yellow light rounded-circle bg-warning my-2" ${color ==='yellow' ? 'iluminado': ''}`}></div>
				<div onClick={()=>setColor('green')} className={`green light rounded-circle bg-success my-2" ${color ==='green' ? 'iluminado': ''}`}></div>
			</div>
		</div>
	);
};

export default Home;
