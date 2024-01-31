import React, { useState, useEffect } from 'react';
import '../css/ffront.css';
import { IoIosSearch } from 'react-icons/io';

const ForumF = () => {
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  const [discussionPosts, setDiscussionPosts] = useState([]);
  const [discussionTitle, setDiscussionTitle] = useState('');
  const [discussionContent, setDiscussionContent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDiscussionForm = () => {
    setShowDiscussionForm(!showDiscussionForm);
  };

  const searchDiscussions = () => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    const updatedDiscussionPosts = discussionPosts.map((post) => {
      const discussionTitle = post.title.toLowerCase();

      if (trimmedSearchTerm && discussionTitle.includes(trimmedSearchTerm)) {
        return { ...post, display: true };
      } else {
        return { ...post, display: false };
      }
    });

    setDiscussionPosts(updatedDiscussionPosts);
  };

  function postDiscussion() {
    var discussionTitleInput = document.getElementById("discussionTitle");
    var discussionContentInput = document.getElementById("discussionContent");
    
    // Retrieve the input values
    var discussionTitle = discussionTitleInput.value.trim();
    var discussionContent = discussionContentInput.value.trim();
    
    // Validate discussion title length
    if (discussionTitle.length > 200) {
    alert("Discussion title must not exceed 200 characters!");
    return;
    }
    
    // Validate special characters in the discussion title using a regular expression
    var specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    if (specialCharacters.test(discussionTitle)) {
    alert("Special characters are not allowed in the discussion title!");
    return;
    }
    
    // Validate if both title and content are provided
    if (discussionTitle === '' || discussionContent === '') {
    alert("Discussion title and content are required!");
    return;
    }
    
        // Create a new discussion card
        var newDiscussionCard = document.createElement("div");
        newDiscussionCard.className = "card row-hover pos-relative py-3 px-3 mb-3 border-top-0 border-right-0 border-bottom-0 rounded-0 discussion-container";
        
        var cardContent = `
            <div class="row align-items-center ">
                <div class="col-md-8 mb-3 mb-sm-0">
                    <h5><a href="#" class="c_forum_decor text-primary" id="discussionTitle_${Date.now()}">${discussionTitle}</a></h5>
                    <p class="text-sm"><span class="op-6">Posted by</span> <a class="c_forum_decor text-black" href="#">Your Name</a></p>
                </div>
                <div class="col-md-4 op-7 d-flex justify-content-end align-items-center">
                    <div class="row text-center op-3">
                        <div class="col px-5"> 
                            <a class="c_forum_btnicn ion-ios-chatboxes-outline icon-1x" href="#"></a> 
                            <span class="d-block text-sm">0 replies</span> 
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        newDiscussionCard.innerHTML = cardContent;
    
        // Add an event listener to the discussion title for redirection
        var discussionTitleElement = newDiscussionCard.querySelector(`#discussionTitle_${Date.now()}`);
        discussionTitleElement.addEventListener("click", function() {
            redirectToDiscussionDetails(discussionTitle, discussionContent);
        });
    
        // Insert the new discussion card before the first post
        var existingDiscussions = document.getElementById("discussionPosts");
        existingDiscussions.insertBefore(newDiscussionCard, existingDiscussions.firstChild);
    
        // Reset the input fields and hide the form
        document.getElementById("discussionTitle").value = "";
        document.getElementById("discussionContent").value = "";
        var discussionForm = document.getElementById("discussionForm");
        discussionForm.style.display = "none";
    
        // Show modal and set timeout to close it after 1 second
        var myModal = new bootstrap.Modal(document.getElementById('niceModal'));
        myModal.show();
    
        setTimeout(function () {
            myModal.hide();
        }, 1000); // Close the modal after 1 second
        
    }

    const redirectToDiscussionDetails = (title, content) => {
    const urlTitle = title.replace(/\s+/g, '-').toLowerCase();
    const url = `/discussion_detail/${urlTitle}/${encodeURIComponent(content)}`;
    //navigate("/"); // Use useNavigate instead of history.push
  };

  const toggleSearchButton = () => {
    const searchInput = document.getElementById('searchDiscussion');
    setIsSearchButtonDisabled(searchInput.value.trim() === '');
  };

  useEffect(() => {
    const searchInput = document.getElementById('searchDiscussion');
    searchInput.addEventListener('input', toggleSearchButton);

    return () => {
      searchInput.removeEventListener('input', toggleSearchButton);
    };
  }, []);

  return (
    <>
      <div className="container stretch-forum">
        <div className="row justify-content-center">
          <div className="c_forum_adjustm col-lg-12 mb-3">
            <div className="row text-left mb-5">
              <div className="col-lg-12 text-left">
                <h1 className="c_forum_big">FORUM</h1>
              </div>
              <div className="c_forum_adjustm col-lg-9mx-auto">
                <div className="row text-left mb-5">
                  <div className="col-lg-6">
                    <button
                      className="c_forum_btngr btn btn-lg btn-success rounded-5 py-2 px-4 mb-3 bg-op-6 roboto-bold"
                      onClick={toggleDiscussionForm}
                    >
                      Add discussion
                    </button>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="c_forum_search form-control form-control-lg search-bar"
                        id="searchDiscussion"
                        placeholder="Search topic..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button
                        id="c_forum_btnsrch"
                        className="btn btn-success"
                        type="button"
                        onClick={searchDiscussions}
                        disabled={isSearchButtonDisabled}
                      >
                        <IoIosSearch />
                      </button>
                    </div>
                  </div>
                </div>
                {showDiscussionForm && (
                  <div id="discussionForm">
                    <form>
                      <div className="form-group">
                        <label htmlFor="discussionTitle">Discussion Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="discussionTitle"
                          placeholder="Enter discussion title"
                          value={discussionTitle}
                          onChange={(e) => setDiscussionTitle(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="discussionContent">Discussion Content</label>
                        <textarea
                          className="form-control"
                          id="discussionContent"
                          rows="3"
                          placeholder="Enter discussion content"
                          value={discussionContent}
                          onChange={(e) => setDiscussionContent(e.target.value)}
                        />
                      </div>
                      <div className="d-md-flex justify-content-md-end">
                        <button
                          type="button"
                          className="c_forum_btngr btn btn-success"
                          onClick={postDiscussion}
                          style={{ marginTop: '10px', paddingLeft: '11px' }}
                        >
                          Post
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              <div id="discussionPosts">
                {discussionPosts.map((post) => (
                  <div key={post.id} style={{ display: post.display ? 'block' : 'none' }}>
                    <h5>
                      <a href={`/Discussion/${post.title}`} className="c_forum_decor text-primary">
                        {post.title}
                      </a>
                    </h5>
                    <p className="text-sm">
                      <span className="op-6">Posted by</span>{' '}
                      <a className="c_forum_decor text-black" href="#">
                        Your Name
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade top-right" id="niceModal" tabIndex="-1" aria-labelledby="niceModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="c_forum_modal modal-content">
              <div className="c_forum_modbod modal-body">Discussion posted!</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumF;
