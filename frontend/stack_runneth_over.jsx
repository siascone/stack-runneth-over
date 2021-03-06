import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createAnswer, deleteAnswer, fetchAllAnswers, fetchAnswer, updateAnswer } from './util/answers_api_util';
import { fetchAllQuestions, createQuestion, deleteQuestion, fetchQuestion, updateQuestion } from './util/questions_api_util'
import * as questionActions from './actions/question_actions';
import * as answerActions from './actions/answer_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState)
    } else {
        store = configureStore();
    }

    window.store = store;
    window.dispatch = store.dispatch
    
    window.questionActions = questionActions
    window.answerActions = answerActions

    window.fetchAllQuestions = fetchAllQuestions
    window.fetchQuestion = fetchQuestion
    window.createQuestion = createQuestion
    window.updateQuestion = updateQuestion
    window.deleteQuestion = deleteQuestion

    window.fetchAllAnswers = fetchAllAnswers
    window.fetchAnswer = fetchAnswer
    window.createAnswer = createAnswer
    window.updateAnswer = updateAnswer
    window.deleteAnswer = deleteAnswer

    ReactDOM.render(<Root store={store} />, root)
});