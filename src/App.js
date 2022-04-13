import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Routage from './routes/Routage';
import Module1 from './components/Module1';
import history from './utils/history';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Col className="p-0">
					<BrowserRouter history={history} >
					<Routage/>	
				
					</BrowserRouter>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;