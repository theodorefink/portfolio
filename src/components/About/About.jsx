import React, { useEffect, useState } from "react";
import styles from './About.module.css';
import otagoPic from '../../assets/otagouni.png';
import musicStudioPic from '../../assets/musicstu.png';


const client_id = 'AXHkknI02RnaQ0vVJ3FK3pVcoToTlmFK';
const user_id = '505619184'; // Your user ID

export const About = () => {
    // Set up state to store the tracks and their audio URLs
    const [tracks, setTracks] = useState([]);

    // Fetch tracks when the component mounts
    useEffect(() => {
        const fetchTracks = async () => {
            

            //const baseUrl = '/api/soundcloud';
            const baseUrl = 'https://api-v2.soundcloud.com';


            //const response = await fetch(`${baseUrl}?path=users/${user_id}/tracks&limit=5`);
            const response = await fetch(`${baseUrl}/users/${user_id}/tracks?client_id=${client_id}&limit=5`);

            const data = await response.json();
            console.log(data); // Log the response
            setTracks(data.collection); // Assuming 'collection' contains the track list
        };

        fetchTracks();
    }, []);

    // Function to fetch audio URL from transcoding URL
    const fetchAudioUrl = async (transcodingUrl) => {
        const baseUrl = '/api/soundcloud';
        const newUrl = transcodingUrl.replace('https://api-v2.soundcloud.com/', '');

        //const audioResponse = await fetch(`${baseUrl}?path=${newUrl}`);
        const audioResponse = await fetch(`${transcodingUrl}?client_id=${client_id}`);

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
                            src={otagoPic} 
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
                        src={musicStudioPic} 
                        alt="music studio photo" 
                        className={styles.aboutImage2} 
                    />
                    <p className={styles.aboutDesc}>Outside of coding, I enjoy making electronic music using Ableton, a Digital Audio Workstation on my computer. I have been teaching myself over the past two years and have uploaded some of my finished tracks on my soundcloud, which you can check out <a href="https://soundcloud.com/theodore-nz/tracks" target="_blank" rel="noopener noreferrer">here!</a> The world of software instruments and plugins is already super vast, it fascinates me how many sounds and effects can be achieved through software, and I would love to one day be able to code my own! </p>
                </div>
            </div>

            {/* Display SoundCloud Tracks
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
            </div> */}
        </section>
    );
};