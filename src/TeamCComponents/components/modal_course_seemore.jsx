import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React, { useEffect, useState } from "react";
import axios from 'axios';

function ModalSeeMore() {
    const [chapter, setChapter] = useState([]);

    useEffect(() => {
        const loadChapter = async () => {
            const result = await axios.get("http://localhost:8080/chapter");
            setChapter(result.data);
        }
        loadChapter();
    }, []);

    return (
        <>
            {/* Modal for SQL Course */}
            <div className="modal fade" id="modal_seemoresql" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
                        <div className="modal-header">
                        {
                                chapter.map((courseData, idx) => {
                                    const rowIndex = 1; // Index of the desired row

                                    if (idx === rowIndex) {
                                        return (
                                            <div key={idx}>
                                                <h5 className="modal-title fw-bold" id="exampleModalLongTitle">{courseData.chapterTitle}</h5>


                                            </div>
                                        );
                                    }
                                    return null; // Return null for other rows if not needed
                                })
                            }
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                chapter.map((courseData, idx) => {
                                    const rowIndex = 1; // Index of the desired row

                                    if (idx === rowIndex) {
                                        return (
                                            <div key={idx}>

                                                {courseData.chapterDescription}

                                            </div>
                                        );
                                    }
                                    return null; // Return null for other rows if not needed
                                })
                            }

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: "#0e3b03", color: "#ffffff", borderRadius: "20px", fontSize: "15px", }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Subversion Course */}
            <div className="modal fade" id="modal_seemoresvn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
                        <div className="modal-header">
                        {
                                chapter.map((courseData, idx) => {
                                    const rowIndex = 2; // Index of the desired row

                                    if (idx === rowIndex) {
                                        return (
                                            <div key={idx}>
                                                <h5 className="modal-title fw-bold" id="exampleModalLongTitle">{courseData.chapterTitle}</h5>


                                            </div>
                                        );
                                    }
                                    return null; // Return null for other rows if not needed
                                })
                            }
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                chapter.map((courseData, idx) => {
                                    const rowIndex = 2; // Index of the desired row

                                    if (idx === rowIndex) {
                                        return (
                                            <div key={idx}>

                                                {courseData.chapterDescription}

                                            </div>
                                        );
                                    }
                                    return null; // Return null for other rows if not needed
                                })
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: "#0e3b03", color: "#ffffff", borderRadius: "20px", fontSize: "15px", }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for HTML Programming Course */}
            <div className="modal fade" id="modal_seemorehtml" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
                        <div className="modal-header">
                            {
                                chapter.map((courseData, idx) => {
                                    const rowIndex = 0; // Index of the desired row

                                    if (idx === rowIndex) {
                                        return (
                                            <div key={idx}>
                                                <h5 className="modal-title fw-bold" id="exampleModalLongTitle">{courseData.chapterTitle}</h5>


                                            </div>
                                        );
                                    }
                                    return null; // Return null for other rows if not needed
                                })
                            }
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                chapter.map((courseData, idx) => {
                                    const rowIndex = 0; // Index of the desired row

                                    if (idx === rowIndex) {
                                        return (
                                            <div key={idx}>

                                                {courseData.chapterDescription}

                                            </div>
                                        );
                                    }
                                    return null; // Return null for other rows if not needed
                                })
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: "#0e3b03", color: "#ffffff", borderRadius: "20px", fontSize: "15px", }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalSeeMore;
