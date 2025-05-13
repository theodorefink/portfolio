import React, { useEffect, useState } from "react";
import styles from './About.module.css';

const client_id = 'AXHkknI02RnaQ0vVJ3FK3pVcoToTlmFK';
const user_id = '505619184'; // Your user ID

export const About = () => {
    // Set up state to store the tracks and their audio URLs
    const [tracks, setTracks] = useState([]);

    // Fetch tracks when the component mounts
    useEffect(() => {
        const fetchTracks = async () => {
            const response = await fetch(`/api/users/${user_id}/tracks?client_id=${client_id}&limit=5`);
            const data = await response.json();
            console.log(data); // Log the response
            setTracks(data.collection); // Assuming 'collection' contains the track list
        };

        fetchTracks();
    }, []);

    // Function to fetch audio URL from transcoding URL
    const fetchAudioUrl = async (transcodingUrl) => {

        const isLocal = window.location.hostname === 'localhost';
        const baseUrl = isLocal ? '/api' : 'https://api-v2.soundcloud.com';
        const newUrl = transcodingUrl.replace('https://api-v2.soundcloud.com', baseUrl);
        // const newUrl = transcodingUrl.replace('https://api-v2.soundcloud.com', '/api');
        const audioResponse = await fetch(`${newUrl}?client_id=${client_id}`);
        const audioData = await audioResponse.json();
        console.log(audioData.url); // Log the audio URL
        return audioData.url;
    };

    // State to store the audio URL for each track
    const [audioUrls, setAudioUrls] = useState({});

    // Fetch the audio URL for each track and store it
    useEffect(() => {
        const fetchAllAudioUrls = async () => {
            let audioUrlData = {};
            for (let track of tracks) {
                if (track.media && track.media.transcodings && track.media.transcodings.length > 0) {
                    const transcodingUrl = track.media.transcodings.find(t => t.format.protocol === 'progressive')?.url;
                    if (transcodingUrl) {
                        const audioUrl = await fetchAudioUrl(transcodingUrl);
                        audioUrlData[track.id] = audioUrl;
                    }
                }
            }
            setAudioUrls(audioUrlData);
        };

        if (tracks.length > 0) {
            fetchAllAudioUrls();
        }
    }, [tracks]);

    return (
        <section className={styles.aboutSection}>
            <h2>About Me</h2>
            <div className={styles.aboutBox}>
                <h3 className={styles.aboutTitle}>Education</h3>
                <div className={styles.aboutBox2}>
                    <a href="https://www.otago.ac.nz" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="/otagouni.png" 
                            alt="Otago University logo" 
                            className={styles.aboutImage} 
                        />
                    </a>
                    <p className={styles.aboutDesc}>I am in my third year of my Bachelor of Science at the University of Otago, majoring in Computer Science and minoring in Mathematics. I have achieved highly in disciplines such as Web Development, Software Development, Data Structures and Algorithms, Databases, and Operating Systems Programming, and I am yet to complete papers in Artificial Intelligence. I currently hold a GPA of 7.6 out of 9, which reflects my ability to work hard and hold myself to high standards. I am also proficient in Linear Algebra and Differential Equations - I thoroughly enjoy the problem solving side of Computer Science and Mathematics.</p>
                </div>
            </div>
            <div className={styles.aboutBox}>
                <h3 className={styles.aboutTitle}>Hobbies</h3>
                <div className={styles.aboutBox2}>
                    <img 
                        src="/musicstu.png" 
                        alt="music studio photo" 
                        className={styles.aboutImage2} 
                    />
                    <p className={styles.aboutDesc}>Outside of coding, I enjoy making electronic music using Ableton, a Digital Audio Workstation on my computer. I have been teaching myself over the past two years and have uploaded some of my finished tracks on my soundcloud, which you can check out below! The world of software instruments and plugins is already super vast, it fascinates me how many sounds and effects can be achieved through software, and I would love to one day be able to code my own! </p>
                </div>
            </div>

            {/* Display SoundCloud Tracks */}
            <div className={styles.aboutBox}>
                <h3 className={styles.aboutTitle}>My Tracks</h3>
                <div className={styles.tracksContainer}>
                    {tracks.length > 0 ? (
                        tracks.map((track, index) => (
                            <div key={index} className={styles.trackItem}>
                                <img 
                                    src={track.artwork_url} 
                                    alt="cover art" 
                                    className={styles.trackImage} 
                                />
                                <div className = {styles.track}>
                                    <h4>{track.title}</h4>
                                    <audio controls>
                                        {audioUrls[track.id] ? (
                                            <source 
                                               src={audioUrls[track.id]} 
                                               type="audio/mpeg" 
                                            />
                                        ) : (
                                            <p>Loading audio...</p>
                                        )}
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading tracks...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

// import React, { useEffect, useState } from "react";
// import styles from './About.module.css';

// const client_id = 'AXHkknI02RnaQ0vVJ3FK3pVcoToTlmFK';
// const user_id = '505619184'; // Your user ID

// export const About = () => {
//     // Set up state to store the tracks
//     const [tracks, setTracks] = useState([]);

//     // Fetch tracks when the component mounts
//     useEffect(() => {
//         const fetchTracks = async () => {
//             const response = await fetch(`/api/users/${user_id}/tracks?client_id=${client_id}&limit=5`);
//             const data = await response.json();
//             console.log(data); // Log the response
//             setTracks(data.collection); // Assuming 'collection' contains the track list
//         };

//         fetchTracks();
//     }, []);

//     // Function to fetch audio URL from transcoding URL
//     const fetchAudioUrl = async (transcodingUrl) => {
//         //console.log(transcodingUrl);
//         const newUrl = transcodingUrl.replace('https://api-v2.soundcloud.com', '/api');
//         const audioResponse = await fetch(`${newUrl}?client_id=${client_id}`);
//         const audioData = await audioResponse.json();
//         console.log(audioData.url);
//         return audioData.url;
//     };

//     return (
//         <section className={styles.aboutSection}>
//             <h2>About Me</h2>
//             <div className={styles.aboutBox}>
//                 <h3 className={styles.aboutTitle}>Education</h3>
//                 <div className={styles.aboutBox2}>
//                     <a href="https://www.otago.ac.nz" target="_blank" rel="noopener noreferrer">
//                         <img 
//                             src="/otagouni.png" 
//                             alt="Otago University logo" 
//                             className={styles.aboutImage} 
//                         />
//                     </a>
//                     <p className={styles.aboutDesc}>I am in my third year of my Bachelor of Science at the University of Otago, majoring in Computer Science and minoring in Mathematics. I have achieved highly in disciplines such as Web Development, Software Development, Data Structures and Algorithms, Databases, and Operating Systems Programming, and I am yet to complete papers in Artificial Intelligence. I currently hold a GPA of 7.6 out of 9, which reflects my ability to work hard and hold myself to high standards. I am also proficient in Linear Algebra and Differential Equations - I thoroughly enjoy the problem solving side of Computer Science and Mathematics.</p>
//                 </div>
//             </div>
//             <div className={styles.aboutBox}>
//                 <h3 className={styles.aboutTitle}>Hobbies</h3>
//                 <div className={styles.aboutBox2}>
//                     <img 
//                         src="/musicstu.png" 
//                         alt="music studio photo" 
//                         className={styles.aboutImage2} 
//                     />
//                     <p className={styles.aboutDesc}>Outside of coding, I enjoy making electronic music using Ableton, a Digital Audio Workstation on my computer. I have been teaching myself over the past two years and have uploaded some of my finished tracks on my soundcloud <a href="https://soundcloud.com/theodore-nz" target="_blank" rel="noopener noreferrer">here.</a> The world of software instruments and plugins is already super vast, it fascinates me how many sounds and effects can be achieved through software, and I would love to one day be able to code my own! </p>
//                 </div>
//             </div>

//             {/* Display SoundCloud Tracks */}
//             <div className={styles.aboutBox}>
//                 <h3 className={styles.aboutTitle}>My Tracks</h3>
//                 <div className={styles.tracksContainer}>
//                     {tracks.length > 0 ? (
//                         tracks.map((track, index) => (
//                             <div key={index} className={styles.trackItem}>
//                                 <h4>{track.title}</h4>
//                                 <p>{track.description}</p>
//                                 <audio controls>
//                                     {track.media.transcodings && track.media.transcodings.length > 0 ? (
//                                         <source 
//                                             src={fetchAudioUrl(track.media.transcodings.find(t => t.format.protocol === 'progressive')?.url)} 
//                                             type="audio/mpeg" 
//                                         />
//                                     ) : (
//                                         <p>No audio available</p>
//                                     )}
//                                     Your browser does not support the audio element.
//                                 </audio>
//                             </div>
//                         ))
//                     ) : (
//                         <p>Loading tracks...</p>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// import React, { useEffect, useState } from "react";
// import styles from './About.module.css';

// const client_id = 'AXHkknI02RnaQ0vVJ3FK3pVcoToTlmFK';
// const user_id = '505619184'; // Your user ID

// export const About = () => {
//     // Set up state to store the tracks
//     const [tracks, setTracks] = useState([]);

//     // Fetch tracks when the component mounts
//     useEffect(() => {
//         const fetchTracks = async () => {
//             const response = await fetch(`/api/users/${user_id}/tracks?client_id=${client_id}&limit=5`);
//             const data = await response.json();
//             console.log(data); // Log the response
//             setTracks(data.collection); // Assuming 'collection' contains the track list
//           };
        
//         fetchTracks();
//     }, []);

//     const

//     return (
//         <section className={styles.aboutSection}>
//             <h2>About Me</h2>
//             <div className={styles.aboutBox}>
//                 <h3 className={styles.aboutTitle}>Education</h3>
//                 <div className={styles.aboutBox2}>
//                     <a href="https://www.otago.ac.nz" target="_blank" rel="noopener noreferrer">
//                         <img 
//                             src="/otagouni.png" 
//                             alt="Otago University logo" 
//                             className={styles.aboutImage} 
//                         />
//                     </a>
//                     <p className={styles.aboutDesc}>I am in my third year of my Bachelor of Science at the University of Otago, majoring in Computer Science and minoring in Mathematics. I have achieved highly in disciplines such as Web Development, Software Development, Data Structures and Algorithms, Databases, and Operating Systems Programming, and I am yet to complete papers in Artificial Intelligence. I currently hold a GPA of 7.6 out of 9, which reflects my ability to work hard and hold myself to high standards. I am also proficient in Linear Algebra and Differential Equations - I thoroughly enjoy the problem solving side of Computer Science and Mathematics.</p>
//                 </div>
//             </div>
//             <div className={styles.aboutBox}>
//                 <h3 className={styles.aboutTitle}>Hobbies</h3>
//                 <div className={styles.aboutBox2}>
//                     <img 
//                         src="/musicstu.png" 
//                         alt="music studio photo" 
//                         className={styles.aboutImage2} 
//                     />
//                     <p className={styles.aboutDesc}>Outside of coding, I enjoy making electronic music using Ableton, a Digital Audio Workstation on my computer. I have been teaching myself over the past two years and have uploaded some of my finished tracks on my soundcloud <a href="https://soundcloud.com/theodore-nz" target="_blank" rel="noopener noreferrer">here.</a> The world of software instruments and plugins is already super vast, it fascinates me how many sounds and effects can be achieved through software, and I would love to one day be able to code my own! </p>
//                 </div>
//             </div>

//             {/* Display SoundCloud Tracks */}
//             <div className={styles.aboutBox}>
//                 <h3 className={styles.aboutTitle}>My Tracks</h3>
//                 <div className={styles.tracksContainer}>
//                     {tracks.length > 0 ? (
//                         tracks.map((track, index) => (
//                             <div key={index} className={styles.trackItem}>
//                                 <h4>{track.title}</h4>
//                                 <p>{track.description}</p>
//                                 <audio controls>
//                                     <source src={track.stream_url + `?client_id=${client_id}`} type="audio/mpeg" />
//                                     Your browser does not support the audio element.
//                                 </audio>
//                             </div>
//                         ))
//                     ) : (
//                         <p>Loading tracks...</p>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// import React from "react";
// import styles from './About.module.css';

// const client_id = 'AXHkknI02RnaQ0vVJ3FK3pVcoToTlmFK';
// const user_id = '505619184'; // Your user ID

// const fetchTracks = async () => {
//   const response = await fetch(`https://api-v2.soundcloud.com/users/${user_id}/tracks?client_id=${client_id}&limit=5`);
//   const data = await response.json();
//   console.log(data); // Log the tracks or handle them
// };

// export const About = () => {
//     return (
//         <section className={styles.aboutSection}>
//             <h2>About Me</h2>
//             <div className={styles.aboutBox}>
//                 <h3 className={styles.aboutTitle}>Education</h3>
//                 <div className={styles.aboutBox2}>
//                     <a href="https://www.otago.ac.nz" target="_blank" rel="noopener noreferrer">
//                         <img 
//                             src="/otagouni.png" 
//                             alt="Otago University logo" 
//                             className={styles.aboutImage} 
//                         />
//                     </a>
//                     <p className={styles.aboutDesc}>I am in my third year of my Bachelor of Science at the University of Otago, majoring in Computer Science and minoring in Mathematics. I have achieved highly in disciplines such as Web Development, Software Development, Data Structures and Algorithms, Databases, and Operating Systems Programming, and I am yet to complete papers in Artificial Intelligence. I currently hold a GPA of 7.6 out of 9, which reflects my ability to work hard and hold myself to high standards. I am also proficient in Linear Algebra and Differential Equations - I thoroughly enjoy the problem solving side of Computer Science and Mathematics.</p>
//                 </div>
//             </div>
//             <div className={styles.aboutBox}>
//                 <h3 className={styles.aboutTitle}>Hobbies</h3>
//                 <div className={styles.aboutBox2}>
//                     <img 
//                         src="/musicstu.png" 
//                         alt="music studio photo" 
//                         className={styles.aboutImage2} 
//                     />
//                     <p className={styles.aboutDesc}>Outside of coding, I enjoy making electronic music using Ableton, a Digital Audio Workstation on my computer. I have been teaching myself over the past two years and have uploaded some of my finished tracks on my soundcloud <a href="https://soundcloud.com/theodore-nz" target="_blank" rel="noopener noreferrer">here.</a> The world of software instruments and plugins is already super vast, it fascinates me how many sounds and effects can be achieved through software, and I would love to one day be able to code my own! </p>
//                 </div>
//                 {/* <div className={styles.aboutBox2}>
//                     <img 
//                         src="/musicstu.png" 
//                         alt="music studio photo" 
//                         className={styles.aboutImage2} 
//                     />
//                     <p className={styles.aboutDesc}>Outside of coding, I enjoy making electronic music using Ableton, a digital audio workstation on my computer. I have been teaching myself over the past two years and have uploaded some of my finished tracks on my soundcloud <a href="https://soundcloud.com/theodore-nz" target="_blank" rel="noopener noreferrer">here.</a> The world of software instruments and plugins is already super vast, and it fascinates me how many sounds and effects can be achieved through software, and I would love to one day be able to code my own! </p>
//                 </div> */}
//             </div>
//         </section>
//     )
// }

