/*
const http = require('http');
const socketIo = require('socket.io');

const questions = [
    { 
        question: 'Who wrote the novel 1984?', 
        options: ['A) George Orwell', 'B) Aldous Huxley', 'C) J.R.R. Tolkien', 'D) F. Scott Fitzgerald'], 
        correctAnswer: 'A) George Orwell' 
    },
    { 
        question: 'Who won the Best Actor Oscar in 2000?', 
        options: ['A) Russell Crowe', 'B) Tom Hanks', 'C) Kevin Spacey', 'D) Denzel Washington'], 
        correctAnswer: 'C) Kevin Spacey' 
    },
    { 
        question: 'Who painted the Mona Lisa?', 
        options: ['A) Vincent van Gogh', 'B) Pablo Picasso', 'C) Leonardo da Vinci', 'D) Claude Monet'], 
        correctAnswer: 'C) Leonardo da Vinci' 
    },
    { 
        question: 'Which planet is known as the Red Planet?', 
        options: ['A) Venus', 'B) Jupiter', 'C) Saturn', 'D) Mars'], 
        correctAnswer: 'D) Mars' 
    },
    { 
        question: 'Who invented the telephone?', 
        options: ['A) Nikola Tesla', 'B) Thomas Edison', 'C) Alexander Graham Bell', 'D) Guglielmo Marconi'], 
        correctAnswer: 'C) Alexander Graham Bell' 
    },
    { 
        question: 'Who was the first president of the United States?', 
        options: ['A) George Washington', 'B) Thomas Jefferson', 'C) Abraham Lincoln', 'D) John Adams'], 
        correctAnswer: 'A) George Washington' 
    },
    { 
        question: 'What is the chemical symbol for gold?', 
        options: ['A) Au', 'B) Ag', 'C) Fe', 'D) Pb'], 
        correctAnswer: 'A) Au' 
    },
    { 
        question: 'Who directed the movie Inception?', 
        options: ['A) Quentin Tarantino', 'B) Christopher Nolan', 'C) Steven Spielberg', 'D) Martin Scorsese'], 
        correctAnswer: 'B) Christopher Nolan' 
    },
    { 
        question: 'Which country hosted the 2016 Summer Olympics?', 
        options: ['A) China', 'B) Brazil', 'C) Japan', 'D) United Kingdom'], 
        correctAnswer: 'B) Brazil' 
    },
    { 
        question: 'Who composed the symphony Beethoven\'s Ninth?', 
        options: ['A) Wolfgang Amadeus Mozart', 'B) Johann Sebastian Bach', 'C) Ludwig van Beethoven', 'D) Franz Schubert'], 
        correctAnswer: 'C) Ludwig van Beethoven' 
    },
];


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Socket.IO server is running\n');
});

const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A new client is connected:', socket.id);


    socket.emit('nextQuestion', questions[0]);
    console.log("first question:", questions[0].question);

    let currentQuestionIndex = 0;
    let correctAnswersCount = 0;

    socket.on('answer', (answer) => {
        console.log("Answer received:", answer);  
        if (questions && questions.length > currentQuestionIndex && questions[currentQuestionIndex]) {
            console.log("Current question:", questions[currentQuestionIndex].question); 
            console.log("Correct answer:", questions[currentQuestionIndex].correctAnswer); 
    
            if (answer === questions[currentQuestionIndex].correctAnswer) {
                correctAnswersCount++;
            }
            currentQuestionIndex++;
    
            if (currentQuestionIndex < questions.length) {
                console.log('Next question:', questions[currentQuestionIndex].question);
                socket.emit('nextQuestion', questions[currentQuestionIndex]);
            } else {
                socket.emit('quizFinished', correctAnswersCount);
                console.log('Quiz finished ' + correctAnswersCount);
            }
        } else {
            console.error("Question or answer not found! Index or question is invalid.");
        }
    });
    
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 */
/*
const http = require('http');
const socketIo = require('socket.io');

const questions = [
    { 
        question: 'Who wrote the novel 1984?', 
        options: ['A) George Orwell', 'B) Aldous Huxley', 'C) J.R.R. Tolkien', 'D) F. Scott Fitzgerald'], 
        correctAnswer: 'A) George Orwell' 
    },
    { 
        question: 'Who won the Best Actor Oscar in 2000?', 
        options: ['A) Russell Crowe', 'B) Tom Hanks', 'C) Kevin Spacey', 'D) Denzel Washington'], 
        correctAnswer: 'C) Kevin Spacey' 
    },
    { 
        question: 'Who painted the Mona Lisa?', 
        options: ['A) Vincent van Gogh', 'B) Pablo Picasso', 'C) Leonardo da Vinci', 'D) Claude Monet'], 
        correctAnswer: 'C) Leonardo da Vinci' 
    },
    { 
        question: 'Which planet is known as the Red Planet?', 
        options: ['A) Venus', 'B) Jupiter', 'C) Saturn', 'D) Mars'], 
        correctAnswer: 'D) Mars' 
    },
    { 
        question: 'Who invented the telephone?', 
        options: ['A) Nikola Tesla', 'B) Thomas Edison', 'C) Alexander Graham Bell', 'D) Guglielmo Marconi'], 
        correctAnswer: 'C) Alexander Graham Bell' 
    },
    { 
        question: 'Who was the first president of the United States?', 
        options: ['A) George Washington', 'B) Thomas Jefferson', 'C) Abraham Lincoln', 'D) John Adams'], 
        correctAnswer: 'A) George Washington' 
    },
    { 
        question: 'What is the chemical symbol for gold?', 
        options: ['A) Au', 'B) Ag', 'C) Fe', 'D) Pb'], 
        correctAnswer: 'A) Au' 
    },
    { 
        question: 'Who directed the movie Inception?', 
        options: ['A) Quentin Tarantino', 'B) Christopher Nolan', 'C) Steven Spielberg', 'D) Martin Scorsese'], 
        correctAnswer: 'B) Christopher Nolan' 
    },
    { 
        question: 'Which country hosted the 2016 Summer Olympics?', 
        options: ['A) China', 'B) Brazil', 'C) Japan', 'D) United Kingdom'], 
        correctAnswer: 'B) Brazil' 
    },
    { 
        question: 'Who composed the symphony Beethoven\'s Ninth?', 
        options: ['A) Wolfgang Amadeus Mozart', 'B) Johann Sebastian Bach', 'C) Ludwig van Beethoven', 'D) Franz Schubert'], 
        correctAnswer: 'C) Ludwig van Beethoven' 
    },
];

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Socket.IO server is running\n');
});

const io = socketIo(server);

let rooms = {}; // Her oda için oyuncuları ve skorlarını tutacağız.

io.on('connection', (socket) => {
    console.log('A new client is connected:', socket.id);

    // Yeni bağlanan kullanıcıyı bir odaya ekle
    socket.on('joinRoom', (roomName) => {
        socket.join(roomName);
        console.log(`${socket.id} joined room: ${roomName}`);
   
        
        if (!rooms[roomName]) {
            rooms[roomName] = {
                players: {},
                currentQuestionIndex: 0
            };
        }
        rooms[roomName].players[socket.id] = { correctAnswersCount: 0 };

        // Eğer oda doluysa (örneğin iki oyuncu varsa), ilk soruyu gönder
        if (Object.keys(rooms[roomName].players).length === 2) {
            const question = questions[rooms[roomName].currentQuestionIndex];
            io.to(roomName).emit('nextQuestion', question);
        }
    });

    socket.on('answer', (data) => {
        const { roomName, answer } = data;
        const room = rooms[roomName];

        if (room) {
            const currentQuestion = questions[room.currentQuestionIndex];
            if (answer === currentQuestion.correctAnswer) {
                room.players[socket.id].correctAnswersCount++;
            }
            
            // Tüm oyuncular cevap verdi mi kontrol et
            if (Object.keys(room.players).length === 2) {
                room.currentQuestionIndex++;
                if (room.currentQuestionIndex < questions.length) {
                    const nextQuestion = questions[room.currentQuestionIndex];
                    io.to(roomName).emit('nextQuestion', nextQuestion);
                } else {
                    // Oyun bittiğinde her iki oyuncunun sonuçlarını gönder
                    const results = Object.keys(room.players).map(playerId => ({
                        playerId,
                        score: room.players[playerId].correctAnswersCount
                    }));
                    io.to(roomName).emit('quizFinished', results);
                    delete rooms[roomName]; // Odayı temizle
                }
            }
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        // Oyuncuyu odadan çıkar ve odayı temizle
        for (let roomName in rooms) {
            if (rooms[roomName].players[socket.id]) {
                delete rooms[roomName].players[socket.id];
                console.log(`${socket.id} left room: ${roomName}`);
            }
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

const http = require('http');
const socketIo = require('socket.io');

const questions = [
    { 
        question: 'Who wrote the novel 1984?', 
        options: ['A) George Orwell', 'B) Aldous Huxley', 'C) J.R.R. Tolkien', 'D) F. Scott Fitzgerald'], 
        correctAnswer: 'A) George Orwell' 
    },
    { 
        question: 'Who won the Best Actor Oscar in 2000?', 
        options: ['A) Russell Crowe', 'B) Tom Hanks', 'C) Kevin Spacey', 'D) Denzel Washington'], 
        correctAnswer: 'C) Kevin Spacey' 
    },
    { 
        question: 'Who painted the Mona Lisa?', 
        options: ['A) Vincent van Gogh', 'B) Pablo Picasso', 'C) Leonardo da Vinci', 'D) Claude Monet'], 
        correctAnswer: 'C) Leonardo da Vinci' 
    },
    { 
        question: 'Which planet is known as the Red Planet?', 
        options: ['A) Venus', 'B) Jupiter', 'C) Saturn', 'D) Mars'], 
        correctAnswer: 'D) Mars' 
    },
    { 
        question: 'Who invented the telephone?', 
        options: ['A) Nikola Tesla', 'B) Thomas Edison', 'C) Alexander Graham Bell', 'D) Guglielmo Marconi'], 
        correctAnswer: 'C) Alexander Graham Bell' 
    },
    { 
        question: 'Who was the first president of the United States?', 
        options: ['A) George Washington', 'B) Thomas Jefferson', 'C) Abraham Lincoln', 'D) John Adams'], 
        correctAnswer: 'A) George Washington' 
    },
    { 
        question: 'What is the chemical symbol for gold?', 
        options: ['A) Au', 'B) Ag', 'C) Fe', 'D) Pb'], 
        correctAnswer: 'A) Au' 
    },
    { 
        question: 'Who directed the movie Inception?', 
        options: ['A) Quentin Tarantino', 'B) Christopher Nolan', 'C) Steven Spielberg', 'D) Martin Scorsese'], 
        correctAnswer: 'B) Christopher Nolan' 
    },
    { 
        question: 'Which country hosted the 2016 Summer Olympics?', 
        options: ['A) China', 'B) Brazil', 'C) Japan', 'D) United Kingdom'], 
        correctAnswer: 'B) Brazil' 
    },
    { 
        question: 'Who composed the symphony Beethoven\'s Ninth?', 
        options: ['A) Wolfgang Amadeus Mozart', 'B) Johann Sebastian Bach', 'C) Ludwig van Beethoven', 'D) Franz Schubert'], 
        correctAnswer: 'C) Ludwig van Beethoven' 
    },
];

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Socket.IO server is running\n');
});

const io = socketIo(server);

let rooms = {}; 

io.on('connection', (socket) => {
    console.log('A new client is connected:', socket.id);
    
    socket.on('joinRoom', (roomName) => {
        socket.join(roomName);
        console.log(`${socket.id} joined room: ${roomName}`);
        playerId = socket.id; 
        socket.emit('playerInfo', { playerId: playerId });
        
        if (!rooms[roomName]) {
            rooms[roomName] = {
                players: {},
                currentQuestionIndex: 0,
                answers: {}
            };
        }
        rooms[roomName].players[socket.id] = { correctAnswersCount: 0 };

        if (Object.keys(rooms[roomName].players).length === 2) {
            const question = questions[rooms[roomName].currentQuestionIndex];
            console.log("current question:", question.question);
            io.to(roomName).emit('nextQuestion', question);
        }
    });

    socket.on('answer', (data) => {
        console.log("Received answer data:", data);
    
        let jsonData;
        try {
            jsonData = typeof data === 'string' ? JSON.parse(data) : data;
        } catch (error) {
            console.error("Error parsing JSON:", error);
            return;
        }
    
        const roomName = jsonData.roomName;
        const answer = jsonData.answer;
    
        console.log("Room name:", roomName); 
        console.log("Answer:", answer); 
    
        if (roomName && rooms[roomName]) {
            const room = rooms[roomName];
            const currentQuestion = questions[room.currentQuestionIndex];
    
            if (answer === currentQuestion.correctAnswer) {
                room.players[socket.id].correctAnswersCount++;
                console.log("Correct answers count:", room.players[socket.id].correctAnswersCount);
            }
    
    
            room.answers[socket.id] = answer;
    
       
            if (Object.keys(room.answers).length === Object.keys(room.players).length) {
                room.currentQuestionIndex++;
                if (room.currentQuestionIndex < questions.length) {
                    const nextQuestion = questions[room.currentQuestionIndex];
                    io.to(roomName).emit('nextQuestion', nextQuestion);
                    console.log('Next question number: ',room.currentQuestionIndex);
                } else {
                    console.log('Quiz finished');

                    const results = Object.keys(room.players).map(playerId => ({
                        playerId,
                        score: room.players[playerId].correctAnswersCount
                    }));
                    console.log('Results: ',results);
                    io.to(roomName).emit('quizFinished', results);

                    for (let playerId in room.players) {
                        const playerResult = results.find(result => result.playerId === playerId);
                        io.to(room.players[playerId].socketId).emit('quizFinishednext', playerResult);
                    }


                    delete rooms[roomName]; 
                }
                room.answers = {}; 
            }
        } else {
            console.log("Room not found or undefined.");
        }
    });
    
    
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        for (let roomName in rooms) {
            if (rooms[roomName].players[socket.id]) {
                delete rooms[roomName].players[socket.id];
                console.log(`${socket.id} left room: ${roomName}`);
                
          
                if (Object.keys(rooms[roomName].players).length === 0) {
                    delete rooms[roomName];
                }
            }
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
