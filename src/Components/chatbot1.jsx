
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
        width: '52%',
        height: 700,
        overflowY: 'auto', // Added to enable scrolling
        backgroundColor: 'white',
        marginRight: theme.spacing(1), // Added spacing between chat and options div
        height:'65rem',
    },
    optionsContainer: {
        flex: 1,
        overflowY: 'auto', // Added to enable scrolling
        marginLeft: theme.spacing(1),
        width: '52%',// Added spacing between chat and options div
        height:'65rem'
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
        backgroundColor: 'deepskyblue',
        color: 'black',
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: 'aliceblue',
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const Chatbot1 = () => {
    const classes = useStyles();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showAllOptions, setShowAllOptions] = useState(false);

    const handleOptionClick = (option) => {
        const staticReplies = {
            'How do I effectively manage my time between different subjects and activities?': "Effective time management is crucial for balancing various subjects and activities as a 9th-grade student. Start by creating a schedule or timetable that allocates specific time slots for each subject and extracurricular activity. Prioritize tasks based on deadlines and importance, ensuring you allocate more time to subjects that require deeper understanding or preparation for exams. Break down larger tasks into smaller, manageable chunks to prevent overwhelm. Utilize tools like planners or apps to track your schedule and progress. Remember to include breaks in your schedule to rest and recharge. Regularly review and adjust your timetable as needed to optimize your time management strategy. By being organized and proactive, you can effectively juggle your academic responsibilities and extracurricular pursuits.",
            "What are the best study techniques for memorizing information?": "The best study techniques for memorizing information involve a combination of active learning strategies. One effective method is creating visual aids such as flashcards, diagrams, or mind maps to organize and condense key concepts. Repetition is also crucial; reviewing information multiple times over spaced intervals helps reinforce memory retention. Additionally, incorporating mnemonic devices, acronyms, or rhymes can make memorization more engaging and easier to recall. Another helpful approach is to teach the material to someone else or to oneself, as explaining concepts out loud reinforces understanding and retention. Finally, maintaining a consistent study schedule and getting enough rest are essential for optimal memory function.",
            'How can I improve my concentration and focus during study sessions?': "Improving concentration and focus during study sessions requires a combination of techniques and habits. Firstly, it's important to create a conducive study environment free from distractions. Find a quiet and comfortable space where you can concentrate without interruptions. Break your study sessions into manageable chunks with regular breaks to avoid mental fatigue. Utilize techniques such as the Pomodoro Technique, where you work for a set period (e.g., 25 minutes) followed by a short break. Additionally, practicing mindfulness and meditation can help enhance focus and reduce wandering thoughts. Eliminate distractions like phones or social media during study time and establish a routine to train your brain to focus during specific hours. Finally, ensure you're well-rested, hydrated, and nourished, as physical well-being greatly impacts cognitive function.",
            'What are some effective strategies for tackling difficult subjects or topics?': "When faced with challenging subjects or topics, several effective strategies can help students overcome obstacles and enhance understanding. Firstly, breaking down complex concepts into smaller, more manageable parts can make them easier to grasp. Utilizing visual aids such as diagrams, charts, or graphs can also provide clarity and aid in comprehension. Additionally, seeking out additional resources such as textbooks, online tutorials, or educational videos can offer alternative explanations and perspectives. Engaging in active learning techniques such as practicing problem-solving, discussing with peers, or teaching the material to others can reinforce understanding and retention. Finally, maintaining a positive attitude, staying persistent, and seeking help from teachers or tutors when needed are crucial components of successfully tackling difficult subjects or topics.",

            'How do I deal with exam stress and anxiety?': "Dealing with exam stress and anxiety can be challenging, but there are several strategies that can help. Firstly, it's important to establish a solid study routine that includes regular breaks and sufficient rest. Practicing relaxation techniques such as deep breathing or meditation can also help calm nerves before an exam. Additionally, staying organized and prepared by creating a study schedule and reviewing material well in advance can boost confidence and reduce anxiety. It's crucial to maintain a positive mindset and avoid negative self-talk, focusing instead on past successes and strengths. Seeking support from friends, family, or teachers can provide reassurance and valuable advice. Remember, exams are just one aspect of your academic journey, and it's important to prioritize self-care and perspective during stressful times.",
            'What resources can I use to supplement my learning outside of the classroom': "Outside of the classroom, there are numerous resources available to supplement your learning. One of the most accessible options is the internet, which offers a wealth of educational websites, tutorials, and videos covering various subjects. Online courses and MOOCs (Massive Open Online Courses) provide structured learning experiences and often allow you to learn at your own pace. Additionally, libraries offer a treasure trove of books, journals, and other reference materials to deepen your understanding of specific topics. Don't forget about educational apps and software tailored to different subjects, offering interactive learning experiences. Finally, joining study groups or discussion forums can provide peer support and opportunities for collaborative learning. By exploring these resources, you can enhance your education beyond the confines of the classroom.",
            "How do I stay motivated to study, especially when I'm feeling overwhelmed or discouraged?": "Staying motivated to study, especially when feeling overwhelmed or discouraged, requires a blend of strategies tailored to individual needs. One effective approach is setting achievable goals, breaking down tasks into smaller, manageable chunks. Celebrating small victories along the way can boost morale and momentum. Additionally, finding personal connections to the material, such as understanding its relevance to future goals or interests, can provide intrinsic motivation. It's crucial to maintain a positive mindset, practicing self-compassion and reminding oneself of past successes. Creating a supportive study environment, free from distractions, can also enhance focus and productivity. Finally, taking regular breaks, engaging in activities that promote relaxation and well-being, helps prevent burnout and maintains long-term motivation.",
            'How can I improve my note-taking skills to better understand and retain information?': "Improving note-taking skills is crucial for better understanding and retaining information. One effective method is to actively engage with the material by summarizing key points in your own words rather than simply copying verbatim. Using abbreviations and symbols can help streamline notes while listening or reading. Additionally, organizing notes into categories or using visual aids like diagrams and charts can enhance comprehension and memory retention. Regular review of notes shortly after class or study sessions reinforces learning and aids in long-term retention. Experimenting with different note-taking techniques and finding what works best for individual learning styles is key to mastering this skill.",
            'What are some tips for staying organized with assignments, homework, and study materials?': "Staying organized with assignments, homework, and study materials is crucial for academic success. One effective tip is to maintain a planner or digital calendar where you can jot down all your deadlines and tasks. Prioritize tasks based on urgency and importance, and break larger assignments into smaller, manageable tasks. Keep a designated study space free from distractions, stocked with all necessary materials. Develop a routine for reviewing and organizing your notes regularly. Utilize folders or binders to keep your study materials organized by subject or topic. Finally, don't hesitate to ask for help or clarification from teachers or classmates when needed. By implementing these strategies, you can stay on top of your academic responsibilities and reduce stress.",
            'How can I balance extracurricular activities and social life with my academic responsibilities?': "Balancing extracurricular activities and a social life with academic responsibilities requires effective time management and prioritization. Firstly, create a schedule that allocates specific time slots for studying, attending classes, participating in extracurricular activities, and socializing. Prioritize tasks based on deadlines and importance, ensuring that academic responsibilities are not neglected. Learn to say no to excessive commitments and focus on activities that align with your interests and long-term goals. Additionally, utilize downtime efficiently by incorporating study sessions during breaks between classes or extracurricular activities. Remember to allocate some time for relaxation and self-care to prevent burnout. Effective communication with teachers, peers, and activity leaders can also help in managing expectations and finding support when needed. Overall, finding a balance requires discipline, flexibility, and self-awareness to ensure holistic growth and success.",
            "How do I effectively use technology for studying without getting distracted?": "To effectively use technology for studying without getting distracted, it's essential to establish a dedicated study environment free from distractions like social media or unnecessary notifications. Utilize productivity apps or website blockers to limit distractions during study sessions. Set specific goals and timelines for each study session to stay focused and on track. Additionally, organize digital study materials efficiently using tools like note-taking apps or cloud storage services. Consider using educational apps and online resources that align with your learning objectives to make studying more engaging and interactive. Finally, practice self-discipline and develop healthy study habits, such as taking regular breaks and maintaining a balance between screen time and offline activities."
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
        'How do I effectively manage my time between different subjects and activities?',
        "What are the best study techniques for memorizing information?",
        'How can I improve my concentration and focus during study sessions?',
        'What are some effective strategies for tackling difficult subjects or topics?',
        'How do I deal with exam stress and anxiety?',
        'What resources can I use to supplement my learning outside of the classroom',
        "How do I stay motivated to study, especially when I'm feeling overwhelmed or discouraged?",
        'How can I improve my note-taking skills to better understand and retain information?',
        'What are some tips for staying organized with assignments, homework, and study materials?',
        'How can I balance extracurricular activities and social life with my academic responsibilities?',
        "How do I effectively use technology for studying without getting distracted?"
    ];

    const visibleOptions = showAllOptions ? allOptions : allOptions.slice(0, 4);

    return (
        <div className={classes.root}>
            <div className={classes.chatContainer}>
                <Typography style={{ color: "darkblue", fontSize: '20px', marginTop: "20px" }} variant="h6">Chat with Us</Typography>
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

export default Chatbot1;