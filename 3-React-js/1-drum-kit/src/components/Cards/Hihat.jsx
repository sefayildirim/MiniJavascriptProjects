import {useEffect, useState} from "react";

export const Hihat = () => {
	const [borderStyle, setBorderStyle] = useState('');

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 's') {
				new Audio('/src/sounds/openhat.wav').play();
				setBorderStyle('2px solid red'); // Border değerini değiştirme
			}
		};
		const handleKeyUp = (event) => {
			if (event.key === "s") {
				setBorderStyle(""); // Border değerini sıfırlama
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);

		};
	}, []);
	return (
		<>
			<div className="card ms-2" style={{width: '18rem', border:borderStyle}}>
			<div className="card-body">
					<h5 className="card-title d-flex align-items-center justify-content-center">S</h5>
					<p className="card-title d-flex align-items-center justify-content-center text-bg-danger">HIHAT</p>
				</div>
			</div>
		</>
	)
}