const mongoose = require('mongoose')
const Question = require('../models/question')

const dbString = 'mongodb://127.0.0.1:27017/trivial'
mongoose.connect(dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const questions = [
    { question: 'Animals that only eat plants are called', answers: ['Plantivores', 'Herbivores', 'Vegevores', 'Fernavores'], correctAnswer: 1 },
    { question: 'Which of the following delicacies is traditionally composed of phyllo pastry, honey and crushed nuts?', answers: ['Strudel', 'Napoleon', 'Turkish delights', 'Baklava'], correctAnswer: 3 },
    { question: "What's the nickname of the Academy Awards", answers: ['The Tonys', 'The Rogers', 'The Oscars', 'The Nemos'], correctAnswer: 2 },
    { question: 'Where did the Olympics originate?', answers: ['Greece', 'France', 'China', 'Egypt'], correctAnswer: 0 },
    { question: "The Egyptian Sphynx's body is based on which animal?", answers: ['Hyena', 'Lion', 'Goat', 'Horse'], correctAnswer: 1 },
    { question: 'Vampires are typically known for turning into which animal?', answers: ['Moose', 'Monkeys', 'Cows', 'Bats'], correctAnswer: 3 },
    { question: "If I'm eating a pink lady, which fruit am I eating?", answers: ['Apple', 'Grapefruit', 'Watermelon', 'Pitaya'], correctAnswer: 0 },
    { question: 'People from Denmark are called', answers: ['Markers', 'Danes', 'Denmarkans', 'Dutch'], correctAnswer: 1 },
    { question: "Finish the name of the famous painting by James Abbott: \"Whistler's ______", answers: ['Elder', 'Memory', 'Idol', 'Mother'], correctAnswer: 3 },
    { question: 'How many rounds is there in a single episode of "The Great British Baking Show"?', answers: ['2', '3', '4', '5'], correctAnswer: 1 },
    { question: 'Who wrote the popular "Hunger Games" series?', answers: ['E.L. James', 'Stephanie Meyer', 'Cassandra Clare', 'Suzanne Collins'], correctAnswer: 3 },
    { question: "Which of the following colors isn't on the icon for Apple's calculator app?", answers: ['Blue', 'Orange', 'Gray', 'Black'], correctAnswer: 0 },
    { question: 'What year did Disneyland open?', answers: ['1940', '1955', '1971', '1979'], correctAnswer: 1 },
    { question: 'In "Romeo and Juliet", what family is Juliet from?', answers: ['Malvolio', 'Montague', 'MacBeth', 'Capulet'], correctAnswer: 3 },
    { question: 'The Hawaiian islands were formed by', answers: ['Hurricanes', 'Volcanoes', 'Mudslides', 'Earthquakes'], correctAnswer: 1 }
]

const saveAndClose = async () => {
    await Promise.all(questions.map(async item => new Question(item).save()))
    await mongoose.disconnect()
}
saveAndClose()

module.exports = questions
