import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from "./components/Header.jsx";
import FeedbackData from './data/FeedbackData.js';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { Route, Routes, Link } from "react-router-dom";
import AboutLinkIcon from './components/AboutLinkIcon.jsx';

function App ()
{

    const [ feedback, setFeedback ] = useState( FeedbackData );

    const deleteFeedback = ( id ) =>
    {
        if ( window.confirm( 'Are you sure you want to delete?' ) )
        {
            setFeedback( feedback.filter( ( item ) => item.id !== id ) );
        }
    };

    const addFeedback = ( newFeedback ) =>
    {
        newFeedback.id = uuidv4();
        setFeedback( [ newFeedback, ...feedback ] );
    };
    return (
        <>
            <Link to='/'>
                <Header />
            </Link>
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={ addFeedback } />
                            <FeedbackStats feedback={ feedback } />
                            <FeedbackList feedback={ feedback } handleDelete={ deleteFeedback } />
                        </> }
                    />

                    <Route path="/about" Component={ AboutPage } />
                </Routes>

            </div>
            <AboutLinkIcon />
        </>
    );
};


export default App;;