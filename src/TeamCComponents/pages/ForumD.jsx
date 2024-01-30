import React, { useState } from 'react';
import '../css/fdiscussion.css';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineReply } from "react-icons/md";

const ForumD = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleReaction = (type) => {
    if (type === 'like') {
      setLikeCount((prevLikeCount) => prevLikeCount + 1);
    } else if (type === 'dislike') {
      setDislikeCount((prevDislikeCount) => prevDislikeCount + 1);
    }
  };

  return (
    <>
      <div className="container">
        <a href="FrontInterfaceForum.html" id="returnButton" className="btn btn-secondary">
          <i className="bx bx-arrow-back" style={{ color: 'white' }}></i>
        </a>
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h6 className="fw-bold text-success mb-1">Default User</h6>
                <p id="post-time" className="text-muted small mb-0">
                  {new Date().toLocaleString()}
                </p>
              </div>
              <div className="dropdown position-absolute top-0 end-0 three-dots">
                <a className="link-muted" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className='bx bx-dots-horizontal-rounded'></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#" onClick={() => console.log("Edit clicked")}>Edit</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => console.log("Delete clicked")}>Delete</a></li>
                </ul>
              </div>
            </div>

            <h2 id="discussionTitle" className="mt-3 mb-3 pb-2">
              Discussion Title
            </h2>

            <p id="discussionContent" className="mb-4 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
            </p>

            <div className="small d-flex justify-content-start">
              <a href="#!" className="d-flex align-items-center me-3 reaction-button" onClick={() => handleReaction('like')}>
              <AiOutlineLike />
                <span className="reaction-counter">{likeCount}</span>
              </a>
              <a href="#!" className="d-flex align-items-center me-3 reaction-button" onClick={() => handleReaction('dislike')}>
              <AiOutlineDislike />
                <span className="reaction-counter">{dislikeCount}</span>
              </a>
              <a href="#!" className="d-flex align-items-center me-3 reply-button" onClick={() => console.log("Reply clicked")}>
                <MdOutlineReply />
                Reply
              </a>
            </div>

            <div id="commentContainer" className="mt-3">
              <textarea id="commentTextArea" className="form-control" rows="3" placeholder="Write your comment..."></textarea>
              <button className="btn btn-primary mt-2" onClick={() => console.log("Reply clicked")}>Reply</button>
            </div>

            <div id="commentsSection" className="mt-3">
              {/* Existing or future comments and replies will be appended here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForumD;
