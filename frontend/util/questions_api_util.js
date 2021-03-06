export const createQuestion = (question) => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions`,
        data: { question }
    })
}

export const fetchAllQuestions = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/questions`
    })
}

export const fetchQuestion = (questionId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/questions/${questionId}`
    })
}

export const updateQuestion = (question) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/questions/${question.id}`,
        data: { question }
    })
}

export const deleteQuestion = (questionId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/questions/${questionId}`
    })
}