import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Provider
import { FeedbackProvider } from './context/FeedbackContext'

// Components
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'

// Pages
import AboutPage from './pages/AboutPage'

export default function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						/>
						<Route exact path='about' element={<AboutPage />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	)
}
