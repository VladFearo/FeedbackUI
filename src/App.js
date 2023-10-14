import { useState } from 'react';
import Header from "./components/Header.jsx";
import FeedbackData from './data/FeedbackData.js';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { FeedbackProvider } from './context/FeedbackContext.js';
import { Route, Routes, Link } from "react-router-dom";
import AboutLinkIcon from './components/AboutLinkIcon.jsx';

function App ()
{

    const [ feedback, setFeedback ] = useState( FeedbackData );


    return (
        <FeedbackProvider>
            <Link to='/'>
                <Header />
            </Link>
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </> }
                    />

                    <Route path="/about" Component={ AboutPage } />
                </Routes>

            </div>
            <AboutLinkIcon />
        </FeedbackProvider>
    );
};


export default App;;