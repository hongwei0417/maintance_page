import React from "react";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./App.scss";

function App() {
	const close = () => {
		window.open("about:blank", "_self");
		window.close();
	};

	return (
		<div className="app">
			<div className="app-body">
				<div className="logo">
					<img src="./img/img_logo.svg" alt="FCS" height="30px" />
				</div>
				<div className="mb-5">
					<img src="./img/pic.png" alt="維護中" />
				</div>
				<div className="app-title">系統維護中</div>
				<div className="app-subtitle">
					我們需要暫時將網站關閉整修，造成您的不便，敬請見諒!
				</div>
				<Button className="app-button" onClick={close}>
					關閉此頁
				</Button>
			</div>
		</div>
	);
}

export default App;
