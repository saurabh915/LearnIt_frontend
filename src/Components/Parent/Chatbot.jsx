
// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         maxWidth: 600,
//         margin: 'auto',
//         padding: theme.spacing(2),
//         backgroundColor: '#f4f6f9',
//         borderRadius: 10,
//     },
//     messageContainer: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//     },
//     message: {
//         margin: theme.spacing(1),
//         padding: theme.spacing(1),
//         borderRadius: 5,
//         width: 'fit-content',
//         maxWidth: '80%',
//     },
//     userMessage: {
//         alignSelf: 'flex-end',
//         backgroundColor: '#0066FF',
//         color: '#fff',
//     },
//     botMessage: {
//         alignSelf: 'flex-start',
//         backgroundColor: '#ddd',
//     },
//     button: {
//         margin: theme.spacing(1),
//     },
// }));

// const Chatbot = () => {
//     const classes = useStyles();
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const [showAllOptions, setShowAllOptions] = useState(false);

//     const handleOptionClick = (option) => {
//         const staticReplies = {
//             'how to take study': "To support your child's study habits, create a conducive learning environment free from distractions. Establish a consistent study routine with dedicated time for homework and review. Encourage active learning by asking questions, discussing topics, and exploring different study methods. Provide resources and tools that cater to their learning style, such as textbooks, educational apps, or online resources. Set achievable goals and celebrate their progress to maintain motivation. Offer guidance and assistance when needed, but also encourage independence and self-directed learning. Finally, prioritize their well-being by ensuring they get enough rest, exercise, and healthy meals to fuel their learning journey.",
//             "tips to increase child's performance": "To increase your child's performance, focus on creating a conducive learning environment at home. Provide encouragement, praise their efforts, and celebrate their achievements. Establish a consistent study routine with designated study times and breaks. Help your child set achievable goals and develop effective study habits. Provide resources and support tailored to their individual needs, such as tutoring or educational apps. Encourage active learning through hands-on activities and exploration. Foster a growth mindset by emphasizing the importance of effort and resilience. Finally, maintain open communication with your child's teachers to address any challenges and collaborate on strategies for improvement.",
//             'How can I help my child improve their study habits?': "Improving your child's study habits involves creating a supportive environment conducive to learning. Start by establishing a consistent study routine, allocating specific times for studying each day. Encourage them to organize their study materials and workspace to minimize distractions. Teach effective time management skills, such as setting goals and prioritizing tasks. Show them different study techniques like summarizing, highlighting, and self-quizzing. Offer praise and positive reinforcement to motivate them, and be available to provide guidance and support when needed. Finally, lead by example and demonstrate the importance of lifelong learning and academic success.",
//             'What are effective ways to motivate my child to learn?': "Motivating your child to learn can be achieved through various effective strategies. Firstly, make learning enjoyable and engaging by incorporating fun activities, games, and interactive lessons. Provide opportunities for hands-on learning experiences and exploration to spark their curiosity. Offer praise and positive reinforcement to boost their confidence and self-esteem. Set realistic goals and reward their achievements to maintain their motivation. Additionally, show genuine interest in their learning journey by actively participating and showing enthusiasm. Encourage autonomy and decision-making by allowing them to choose subjects or topics of interest. Lastly, be a role model by demonstrating a positive attitude towards learning and embracing a growth mindset.",

//             'What strategies can I use to help my child develop critical thinking skills?': "To help your child develop critical thinking skills, you can encourage them to ask questions, analyze information, and think deeply about different topics. Encourage discussions about everyday situations and ask open-ended questions to prompt their critical thinking. Engage in activities that require problem-solving, such as puzzles, games, or brain teasers. Encourage reading diverse materials and discussing them together, encouraging your child to express their opinions and back them up with evidence. Encourage them to consider multiple perspectives and challenge assumptions. Finally, provide opportunities for your child to make decisions independently and learn from their mistakes. By incorporating these strategies into your child's daily life, you can help them develop strong critical thinking skills.",
//             'How can I encourage my child to read more and develop a love for reading?': "Encouraging your child to read more and develop a love for reading can be achieved through various strategies. Firstly, set a good example by letting them see you read regularly. Create a reading-friendly environment at home by having a variety of books easily accessible. Take regular trips to the library or bookstore and allow your child to choose books that interest them. Make reading a fun and enjoyable activity by reading aloud together, especially with engaging voices and expressions. Incorporate reading into daily routines, such as bedtime stories or reading during mealtimes. Offer incentives or rewards for reaching reading goals, but be careful not to make it feel like a chore. Finally, show interest in what your child is reading, ask them questions about the story, and engage in discussions to deepen their understanding and enjoyment of the material. By implementing these strategies consistently, you can foster a lifelong love for reading in your child.",
//             'What are some fun and engaging ways to review material with my child': "There are plenty of fun and engaging ways to review material with your child. One effective method is to turn studying into a game. You can create flashcards with questions on one side and answers on the other, then take turns quizzing each other. Another idea is to use educational apps or online games that make learning enjoyable, such as educational videos, interactive quizzes, or educational board games. Additionally, you can incorporate hands-on activities like experiments, arts and crafts, or role-playing scenarios related to the material. Remember to keep the atmosphere positive and supportive to make the learning experience enjoyable for both you and your child.",
//             'How can I help my child prepare for exams and reduce test anxiety?': "To help your child prepare for exams and reduce test anxiety, you can start by creating a structured study plan together. Break down the material into manageable chunks and set aside specific times for studying each day. Encourage your child to practice active learning techniques, such as summarizing key concepts in their own words, making flashcards, and teaching the material to someone else. Additionally, ensure they get plenty of rest, eat healthily, and exercise regularly to support their overall well-being. Teach them relaxation techniques like deep breathing or visualization to manage stress during exams. Finally, remind your child that exams are just one measure of their abilities, and their worth is not defined by their grades. Offer praise and encouragement for their efforts, regardless of the outcome. By providing support, structure, and positive reinforcement, you can help your child approach exams with confidence and ease test anxiety.",
//             'What role does technology play in my child education, and how can I monitor their screen time effectively?': "Technology plays a crucial role in education by providing access to resources and interactive learning platforms. To monitor screen time effectively, set clear guidelines, encourage purposeful use, and utilize parental control features. By fostering responsible digital habits and maintaining open communication, you can ensure a healthy balance between online learning and offline activities.",
//             'How can I foster a growth mindset in my child and teach them the value of perseverance?': "Fostering a growth mindset in your child and teaching them the value of perseverance is essential for their long-term success. Encourage your child to view challenges as opportunities for growth rather than obstacles. Praise their efforts and strategies rather than just their intelligence or talent. Help them understand that mistakes are a natural part of learning and that they can learn from them. Encourage them to set goals and celebrate progress along the way. Model a positive attitude towards learning and demonstrate perseverance in your own endeavors. By providing support, encouragement, and positive reinforcement, you can help your child develop a growth mindset and the resilience to overcome challenges.",
//             "What extracurricular activities would benefit my child's overall development?": "Engaging your child in a variety of extracurricular activities, such as sports, arts, clubs, and community service, can foster their overall development. These activities promote physical fitness, creativity, academic skills, teamwork, and social responsibility. Encourage your child to explore different options and choose activities they enjoy and find fulfilling.",
//             'How can I ensure a healthy balance between academics and relaxation for my child?': "Ensuring a healthy balance between academics and relaxation for your child is essential for their overall well-being. To achieve this balance, establish a consistent schedule that includes designated study times and breaks. Encourage your child to prioritize tasks, manage their time effectively, and avoid procrastination. Provide opportunities for relaxation and recreation, such as outdoor activities, hobbies, and spending time with family and friends. Encourage open communication with your child to understand their needs and concerns, and adjust the routine accordingly. Additionally, lead by example by demonstrating healthy habits and self-care practices."
//         };

//         setMessages([
//             ...messages,
//             { text: option, sender: 'user' },
//             { text: staticReplies[option], sender: 'bot' }
//         ]);

//         if (option === 'hi' || option === 'hello') {
//             setMessages([
//                 ...messages,
//                 { text: "Hello! How may I help you?", sender: 'bot' },
//                 {
//                     text: 'Select an option:',
//                     sender: 'bot',
//                     options: ['My query resolved', 'I want more help', 'I want to talk with teacher']
//                 }
//             ]);
//         } else if (option === 'My query resolved') {
//             setMessages([
//                 ...messages,
//                 { text: 'Great! We are always here to support you.', sender: 'bot' }
//             ]);
//         } else if (option === 'I want more help') {
//             setMessages([
//                 ...messages,
//                 { text: 'select options give below', sender: 'bot' }
//             ]);
//         } else if (option === 'I want to talk with teacher') {
//             setMessages([
//                 ...messages,
//                 { text: 'Teacher will assist you in their free time. You can view upcoming meetings in the notice section. Thank you.', sender: 'bot' }
//             ]);
//         }
//     };

//     const handleSendMessage = () => {
//         if (!input) return;
//         setMessages([...messages, { text: input, sender: 'user' }]);
//         if (input.toLowerCase() === 'hi' || input.toLowerCase() === 'hello') {
//             setMessages([
//                 ...messages,
//                 { text: "Hello! How may I help you?", sender: 'bot' },
//                 {
//                     text: 'Select an option:',
//                     sender: 'bot',
//                     options: ['My query resolved', 'I want more help', 'I want to talk with teacher']
//                 }
//             ]);
//         }
//         setInput('');
//     };

//     const allOptions = [
//         // All options here
//         'how to take study',
//         "tips to increase child's performance",
//         'How can I help my child improve their study habits?',
//         'What are effective ways to motivate my child to learn?',
//         'What strategies can I use to help my child develop critical thinking skills?',
//         'How can I encourage my child to read more and develop a love for reading?',
//         'How can I help my child prepare for exams and reduce test anxiety?',
//         'What role does technology play in my child education, and how can I monitor their screen time effectively?',
//         'How can I foster a growth mindset in my child and teach them the value of perseverance?',
//         'How can I ensure a healthy balance between academics and relaxation for my child?',
//         "What extracurricular activities would benefit my child's overall development?"
//     ];

//     const visibleOptions = showAllOptions ? allOptions : allOptions.slice(0, 4);

//     return (
//         <div className={classes.root} >
//             <Typography variant="h6">Chat with Us</Typography>
//             <Paper elevation={3} className={classes.messageContainer}>
//                 {messages.map((message, index) => (
//                     <div key={index} className={`${classes.message} ${message.sender === 'user' ? classes.userMessage : classes.botMessage}`}>
//                         <Typography variant="body1">
//                             {message.text}
//                         </Typography>
//                         {message.options && message.options.map((option, index) => (
//                             <Button key={index} variant="outlined" color="primary" className={classes.button} onClick={() => handleOptionClick(option)}>
//                                 {option}
//                             </Button>
//                         ))}
//                     </div>
//                 ))}
//             </Paper>
//             <div style={{ marginTop: "50px" }}>
//                 <TextField
//                     variant="outlined"
//                     placeholder="Type your message here..."
//                     fullWidth
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                 />
//                 <Button variant="contained" color="primary" className={classes.button} onClick={handleSendMessage}>
//                     Send
//                 </Button>
//             </div>
//             <div style={{ marginTop: 10 }}>
//                 <Typography variant="body2">Select an option:</Typography>
//                 {visibleOptions.map((option, index) => (
//                     <Button key={index} variant="outlined" color="primary" className={classes.button} onClick={() => handleOptionClick(option)}>
//                         {option}
//                     </Button>
//                 ))}
//                 {!showAllOptions && (
//                     <Button variant="outlined" color="primary" className={classes.button} onClick={() => setShowAllOptions(true)}>
//                         Show More
//                     </Button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Chatbot;


import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%', // Set the width to 80% of the viewport
        margin: 'auto', // Center the container horizontally
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '150px',
    },
    chatContainer: {
        flex: 1,
        width: 500,
        height: 700,
        overflowY: 'auto', // Added to enable scrolling
        backgroundColor: 'lightblue',
        marginRight: theme.spacing(1), // Added spacing between chat and options div
    },
    optionsContainer: {
        flex: 1,
        overflowY: 'auto', // Added to enable scrolling
        marginLeft: theme.spacing(1), // Added spacing between chat and options div
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    message: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        borderRadius: 5,
        width: 'fit-content',
        maxWidth: '80%',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: 'grey',
        color: 'black',
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#ddd',
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const Chatbot = () => {
    const classes = useStyles();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showAllOptions, setShowAllOptions] = useState(false);

    const handleOptionClick = (option) => {
        const staticReplies = {
            'how to take study': "To support your child's study habits, create a conducive learning environment free from distractions. Establish a consistent study routine with dedicated time for homework and review. Encourage active learning by asking questions, discussing topics, and exploring different study methods. Provide resources and tools that cater to their learning style, such as textbooks, educational apps, or online resources. Set achievable goals and celebrate their progress to maintain motivation. Offer guidance and assistance when needed, but also encourage independence and self-directed learning. Finally, prioritize their well-being by ensuring they get enough rest, exercise, and healthy meals to fuel their learning journey.",
            "tips to increase child's performance": "To increase your child's performance, focus on creating a conducive learning environment at home. Provide encouragement, praise their efforts, and celebrate their achievements. Establish a consistent study routine with designated study times and breaks. Help your child set achievable goals and develop effective study habits. Provide resources and support tailored to their individual needs, such as tutoring or educational apps. Encourage active learning through hands-on activities and exploration. Foster a growth mindset by emphasizing the importance of effort and resilience. Finally, maintain open communication with your child's teachers to address any challenges and collaborate on strategies for improvement.",
            'How can I help my child improve their study habits?': "Improving your child's study habits involves creating a supportive environment conducive to learning. Start by establishing a consistent study routine, allocating specific times for studying each day. Encourage them to organize their study materials and workspace to minimize distractions. Teach effective time management skills, such as setting goals and prioritizing tasks. Show them different study techniques like summarizing, highlighting, and self-quizzing. Offer praise and positive reinforcement to motivate them, and be available to provide guidance and support when needed. Finally, lead by example and demonstrate the importance of lifelong learning and academic success.",
            'What are effective ways to motivate my child to learn?': "Motivating your child to learn can be achieved through various effective strategies. Firstly, make learning enjoyable and engaging by incorporating fun activities, games, and interactive lessons. Provide opportunities for hands-on learning experiences and exploration to spark their curiosity. Offer praise and positive reinforcement to boost their confidence and self-esteem. Set realistic goals and reward their achievements to maintain their motivation. Additionally, show genuine interest in their learning journey by actively participating and showing enthusiasm. Encourage autonomy and decision-making by allowing them to choose subjects or topics of interest. Lastly, be a role model by demonstrating a positive attitude towards learning and embracing a growth mindset.",

            'What strategies can I use to help my child develop critical thinking skills?': "To help your child develop critical thinking skills, you can encourage them to ask questions, analyze information, and think deeply about different topics. Encourage discussions about everyday situations and ask open-ended questions to prompt their critical thinking. Engage in activities that require problem-solving, such as puzzles, games, or brain teasers. Encourage reading diverse materials and discussing them together, encouraging your child to express their opinions and back them up with evidence. Encourage them to consider multiple perspectives and challenge assumptions. Finally, provide opportunities for your child to make decisions independently and learn from their mistakes. By incorporating these strategies into your child's daily life, you can help them develop strong critical thinking skills.",
            'How can I encourage my child to read more and develop a love for reading?': "Encouraging your child to read more and develop a love for reading can be achieved through various strategies. Firstly, set a good example by letting them see you read regularly. Create a reading-friendly environment at home by having a variety of books easily accessible. Take regular trips to the library or bookstore and allow your child to choose books that interest them. Make reading a fun and enjoyable activity by reading aloud together, especially with engaging voices and expressions. Incorporate reading into daily routines, such as bedtime stories or reading during mealtimes. Offer incentives or rewards for reaching reading goals, but be careful not to make it feel like a chore. Finally, show interest in what your child is reading, ask them questions about the story, and engage in discussions to deepen their understanding and enjoyment of the material. By implementing these strategies consistently, you can foster a lifelong love for reading in your child.",
            'What are some fun and engaging ways to review material with my child': "There are plenty of fun and engaging ways to review material with your child. One effective method is to turn studying into a game. You can create flashcards with questions on one side and answers on the other, then take turns quizzing each other. Another idea is to use educational apps or online games that make learning enjoyable, such as educational videos, interactive quizzes, or educational board games. Additionally, you can incorporate hands-on activities like experiments, arts and crafts, or role-playing scenarios related to the material. Remember to keep the atmosphere positive and supportive to make the learning experience enjoyable for both you and your child.",
            'How can I help my child prepare for exams and reduce test anxiety?': "To help your child prepare for exams and reduce test anxiety, you can start by creating a structured study plan together. Break down the material into manageable chunks and set aside specific times for studying each day. Encourage your child to practice active learning techniques, such as summarizing key concepts in their own words, making flashcards, and teaching the material to someone else. Additionally, ensure they get plenty of rest, eat healthily, and exercise regularly to support their overall well-being. Teach them relaxation techniques like deep breathing or visualization to manage stress during exams. Finally, remind your child that exams are just one measure of their abilities, and their worth is not defined by their grades. Offer praise and encouragement for their efforts, regardless of the outcome. By providing support, structure, and positive reinforcement, you can help your child approach exams with confidence and ease test anxiety.",
            'What role does technology play in my child education, and how can I monitor their screen time effectively?': "Technology plays a crucial role in education by providing access to resources and interactive learning platforms. To monitor screen time effectively, set clear guidelines, encourage purposeful use, and utilize parental control features. By fostering responsible digital habits and maintaining open communication, you can ensure a healthy balance between online learning and offline activities.",
            'How can I foster a growth mindset in my child and teach them the value of perseverance?': "Fostering a growth mindset in your child and teaching them the value of perseverance is essential for their long-term success. Encourage your child to view challenges as opportunities for growth rather than obstacles. Praise their efforts and strategies rather than just their intelligence or talent. Help them understand that mistakes are a natural part of learning and that they can learn from them. Encourage them to set goals and celebrate progress along the way. Model a positive attitude towards learning and demonstrate perseverance in your own endeavors. By providing support, encouragement, and positive reinforcement, you can help your child develop a growth mindset and the resilience to overcome challenges.",
            "What extracurricular activities would benefit my child's overall development?": "Engaging your child in a variety of extracurricular activities, such as sports, arts, clubs, and community service, can foster their overall development. These activities promote physical fitness, creativity, academic skills, teamwork, and social responsibility. Encourage your child to explore different options and choose activities they enjoy and find fulfilling.",
            'How can I ensure a healthy balance between academics and relaxation for my child?': "Ensuring a healthy balance between academics and relaxation for your child is essential for their overall well-being. To achieve this balance, establish a consistent schedule that includes designated study times and breaks. Encourage your child to prioritize tasks, manage their time effectively, and avoid procrastination. Provide opportunities for relaxation and recreation, such as outdoor activities, hobbies, and spending time with family and friends. Encourage open communication with your child to understand their needs and concerns, and adjust the routine accordingly. Additionally, lead by example by demonstrating healthy habits and self-care practices."
        };

        setMessages([
            ...messages,
            { text: option, sender: 'user' },
            { text: staticReplies[option], sender: 'bot' }
        ]);

        if (option === 'hi' || option === 'hello') {
            setMessages([
                ...messages,
                { text: "Hello! How may I help you?", sender: 'bot' },
                {
                    text: 'Select an option:',
                    sender: 'bot',
                    options: ['My query resolved', 'I want more help', 'I want to talk with teacher']
                }
            ]);
        } else if (option === 'My query resolved') {
            setMessages([
                ...messages,
                { text: 'Great! We are always here to support you.', sender: 'bot' }
            ]);
        } else if (option === 'I want more help') {
            setMessages([
                ...messages,
                { text: 'select options give below', sender: 'bot' }
            ]);
        } else if (option === 'I want to talk with teacher') {
            setMessages([
                ...messages,
                { text: 'Teacher will assist you in their free time. You can view upcoming meetings in the notice section. Thank you.', sender: 'bot' }
            ]);
        }
    };

    const handleSendMessage = () => {
        if (!input) return;
        setMessages([...messages, { text: input, sender: 'user' }]);
        if (input.toLowerCase() === 'hi' || input.toLowerCase() === 'hello') {
            setMessages([
                ...messages,
                { text: "Hello! How may I help you?", sender: 'bot' },
                {
                    text: 'Select an option:',
                    sender: 'bot',
                    options: ['My query resolved', 'I want more help', 'I want to talk with teacher']
                }
            ]);
        }
        setInput('');
    };

    const allOptions = [
        'how to take study',
        "tips to increase child's performance",
        'How can I help my child improve their study habits?',
        'What are effective ways to motivate my child to learn?',
        'What strategies can I use to help my child develop critical thinking skills?',
        'How can I encourage my child to read more and develop a love for reading?',
        'How can I help my child prepare for exams and reduce test anxiety?',
        'What role does technology play in my child education, and how can I monitor their screen time effectively?',
        'How can I foster a growth mindset in my child and teach them the value of perseverance?',
        'How can I ensure a healthy balance between academics and relaxation for my child?',
        "What extracurricular activities would benefit my child's overall development?"
    ];

    const visibleOptions = showAllOptions ? allOptions : allOptions.slice(0, 4);

    return (
        <div className={classes.root}>
            <div className={classes.chatContainer}>
                <Typography style={{ color: "red", fontSize: '20px', marginTop: "20px" }} variant="h6">Chat with Us</Typography>
                <Paper elevation={3} className={classes.messageContainer}>
                    {messages.map((message, index) => (
                        <div key={index} className={`${classes.message} ${message.sender === 'user' ? classes.userMessage : classes.botMessage}`}>
                            <Typography variant="body1">
                                {message.text}
                            </Typography>
                            {message.options && message.options.map((option, index) => (
                                <Button key={index} variant="outlined" color="primary" className={classes.button} onClick={() => handleOptionClick(option)}>
                                    {option}
                                </Button>
                            ))}
                        </div>
                    ))}
                </Paper>
                <div style={{ marginTop: "50px" }}>
                    <TextField
                        variant="outlined"
                        placeholder="Type your message here..."
                        fullWidth
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleSendMessage}>
                        Send
                    </Button>
                </div>
            </div>
            <div className={classes.optionsContainer}>
                <Typography variant="body2" style={{ fontSize: "15px" }}>Select an option:</Typography>
                {visibleOptions.map((option, index) => (
                    <Button key={index} variant="outlined" color="primary" className={classes.button} onClick={() => handleOptionClick(option)}>
                        {option}
                    </Button>
                ))}
                {!showAllOptions && (
                    <Button variant="outlined" color="primary" className={classes.button} onClick={() => setShowAllOptions(true)}>
                        Show More
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Chatbot;