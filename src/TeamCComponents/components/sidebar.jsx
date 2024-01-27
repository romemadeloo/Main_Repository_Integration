import { Link, useLocation } from 'react-router-dom';
import { showNextTopic } from "../js/script";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function TeamC_Sidebar() {
    const { pathname } = useLocation();
let sidebarTitle = '';
let url = '';

switch (pathname) {

  /* CHAPTER 1 */
  case '/course1_sql':
    sidebarTitle = 'I: The SQL Queries';
    url = '/chapters_sql';
    break;
  case '/course1_svn':
    sidebarTitle = 'I: Subversion Control';
    url = '/chapters_svn';
    break;
  case '/course1_hprog':
    sidebarTitle = 'I: HTML Programming';
    url = '/chapters_hprog';
    break;

    /* CHAPTER 2 */
    case '/course2_sql':
      sidebarTitle = 'II: The SQL Queries';
      url = '/chapters_sql';
      break;
    case '/course2_svn':
      sidebarTitle = 'II: Subversion Control';
      url = '/chapters_svn';
      break;
    case '/course2_hprog':
      sidebarTitle = 'II: HTML Programming';
      url = '/chapters_hprog';
      break;

      /* CHAPTER 3 */
      case '/course3_sql':
        sidebarTitle = 'III: The SQL Queries';
        url = '/chapters_sql';
        break;
      case '/course3_svn':
        sidebarTitle = 'III: Subversion Control';
        url = '/chapters_svn';
        break;
      case '/course3_hprog':
        sidebarTitle = 'III: HTML Programming';
        url = '/chapters_hprog';
        break;
  default:
    sidebarTitle = '-NO TITLE-';
    url = '-URL DATA-'
    break;
}

    return (
        <>
          <div className="c_sidebar_maincontainer">
  <div className="c_sidebar_main sidebar" style={{  bottom: '0', padding: '70px 0 0', boxShadow: '0 2px 5px 0 rgb(0 0 0 / 50%), 0 5px 15px 0 rgb(0 0 0 / 30%)', overflowY: 'auto', position: 'fixed', zIndex: '1', height: '100%', width: '15%', backgroundColor: '#126912', whiteSpace: 'nowrap'}}>
    <hr />
    <span className="d-flex justify-content-center c_sidebar_sidebarTitle" style={{ fontSize: '200%', color: '#ffffff', whiteSpace: 'wrap', textAlign: 'center', alignItems: 'center', fontSize: '1.7rem !important'}}>{sidebarTitle}</span>
    <ul className="nav nav-pills flex-column mb-auto">
      {/* START OF SIDEBAR ITEM */}
      <li className="sidebarItem nav-item">
        <a onClick={() => showNextTopic(0)} className="c_sidebar_sidebaritems sidebarItems nav-link"  aria-current="page">
          HOME
        </a>
      </li>
      {/* END OF SIDEBAR ITEM */}
    </ul>
    <hr />
    <div className="d-flex justify-content-center"> {/* Added this container for center alignment */}
      <Link to={url} className="buttonReturn text-center" style={{ textDecoration: 'none', color: 'black', display: 'inline-block' }}>
        <div>
          <img src="/pics/return.png" className="c_sidebar_btnReturn" alt="return-icon" />
          <span className="returnTitle" style={{ marginLeft: '5px', color: 'white' }}>Back</span>
        </div>
      </Link>
    </div>
  </div>
</div>

        </>
    )
}

export default TeamC_Sidebar;
