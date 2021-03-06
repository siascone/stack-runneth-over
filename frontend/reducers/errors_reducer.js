import { combineReducers } from "redux";
import questionErrorsReducer from "./question_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import answerErrorsReducer from "./answer_errors_reducer";

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    questionErrors: questionErrorsReducer,
    answerErrors: answerErrorsReducer
})

export default errorsReducer;