import React, { useState } from 'react';
import '../css/fdiscussion.css';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineReply } from "react-icons/md";
import Team_D_HeaderV2 from '../../TeamDComponents/Team_D_HeaderV2';

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
    <Team_D_HeaderV2 />
    <body className='ForumDSpace'>{/*30/24*/}
      <div className="ForumC_ForumDcontainer">{/*30/24*/}
        <a href="FrontInterfaceForum.html" id="TeamCReturnButtonFf" className="btn btn-secondary">
          <i className="TeamCarrow bx bx-arrow-back" style={{ color: 'white' }}></i>
        </a>
        <div className="TeamCForumC_Forumcard">{/*30/24*/}
          <div className="TeamCCardBody">{/*30/24*/}
            <div className="TeamCFlex d-flex justify-content-between align-items-center mb-2">
              <div>
                <h6 className="nameUSerfw-bold text-success mb-1">Default User</h6>
                <p id="post-time" className=" TeamC_ForumD text-muted small mb-0">{/*30/24*/}
                  {new Date().toLocaleString()}
                </p>
              </div>
              <div className="TeamForum_Drop dropdown position-absolute top-0 end-0 three-dots">
                <a className="TeamC_forum_link link-muted" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className='TeamCarrow bx bx-dots-horizontal-rounded'></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#" onClick={() => console.log("Edit clicked")}>Edit</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => console.log("Delete clicked")}>Delete</a></li>
                </ul>
              </div>
            </div>

            <h2 id="discussionTitle" className="TeamC_discSec mt-3 mb-3 pb-2">
              Discussion Title
            </h2>

            <p id="discussionContent" className="TeamC_ForumD mb-4 pb-2">{/*30/24*/}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
            </p>

            <div className="TeamCFlex d-flex justify-content-start">
              <a href="#!" className="TeamCFlex d-flex align-items-center me-3 reaction-button" onClick={() => handleReaction('like')}>
              <AiOutlineLike />{/*30/24*/}
                <span className="reaction-counter">{likeCount}</span>
              </a>
              <a href="#!" className="TeamCFlex  align-items-center me-3 reaction-button" onClick={() => handleReaction('dislike')}>
              <AiOutlineDislike />{/*30/24*/}
                <span className="reaction-counter">{dislikeCount}</span>
              </a>
              <a href="#!" className="TeamCFlex d-flex align-items-center me-3 reply-button" onClick={() => console.log("Reply clicked")}>
                <MdOutlineReply />{/*30/24*/}
                Reply
              </a>
            </div>

            <div id="commentContainer" className="mt-3">
              <textarea id="commentTextArea" className="TeamC_controlForm form-control" rows="3" placeholder="Write your comment..."></textarea>
              <button className="TeamCForumBtnPrime btn btn-primary mt-2" onClick={() => console.log("Reply clicked")}>Reply</button>{/*30/24*/}
            </div>

            <div id="commentsSection" className="mt-3">
              {/* Existing or future comments and replies will be appended here */}
            </div>
          </div>
        </div>
      </div>
    </body>
    </>
  );
}

export default ForumD;
