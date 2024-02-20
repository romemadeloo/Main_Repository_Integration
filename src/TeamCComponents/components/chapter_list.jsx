import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from "axios";

function ChapterList() {
    const [chapters, setChapters] = useState([]);
    const { id } = useParams(); // Destructure id from useParams

    useEffect(() => {
        const loadChapters = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/chapter/${id}`);
                setChapters(result.data);
            } catch (error) {
                console.error("Error loading chapters:", error);
                // Handle error (e.g., set an error state or display an error message)
            }
        }
        if (id) { // Check if id is defined before calling loadChapters
            loadChapters();
        }
    }, [id]);
    
console.log(chapters)
    return (
        <>
            {/* Back button */}
            <Link to='/course' className="buttonReturn d-flex align-items-center c_chapter_returncontainer" style={{ textDecoration: 'none', color: 'black', width: 'fit-content', }}>
                <div className="d-flex align-items-center" style={{ marginTop: '1rem' }}>
                    <div>
                        <img src="../../src/assets/TeamCassets/green_button.png" className="btnReturn c_chapter_return" alt="return-icon" style={{
                            transition: 'transform .1s', color: '#ffffff',
                            marginLeft: '1rem', width: '2rem', height: '2rem',
                        }} />
                    </div>
                    <span className="returnTitle c_chapter_returnText" style={{ marginLeft: '0.5rem', color: '#126912', fontSize: '1.5rem', marginTop: '0rem', }}>Back</span>
                </div>
            </Link>
            <div className="container mt-4 mx-auto">
                <h2 className="text-left mb-4" style={{ fontWeight: 'bold', fontSize: '2rem' }}>TITLE GOES HERE</h2>
                <hr />
                {Array.isArray(chapters) && chapters.map((chapter, index) => (
                    <div className="d-flex align-items-center" key={index}>
                        <div className="c_chapter_cardmain card flex-grow-1" style={{
                            willChange: 'filter',
                            transition: 'filter 300ms', marginTop: '10px', backgroundColor: '#126912', borderRadius: '1rem',
                        }}>
                            <Link to={`/course${index + 1}_sql`} className="h4 text-white text-decoration-none c_chapter_cardtext">
                                <div className="card-body d-flex c_chapter_cardbody" style={{
                                    backgroundColor: '#126912', borderRadius: '1rem',
                                }}>
                                    {chapter.courseTitle}
                                </div>
                            </Link>
                        </div>
                        <div className="small-box-container c_chapter_scoremain" style={{ marginTop: '0.6rem', marginLeft: '0.99rem', }}>
                            <div className="small-box c_chapter_scoresub d-flex align-items-center justify-content-center text-white" style={{
                                backgroundColor: '#126912', width: '4rem',
                                height: '4rem', borderRadius: '10px',
                            }}>
                                <span>-$-</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ChapterList;
