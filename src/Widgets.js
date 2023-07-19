import React, { useState } from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Widgets() {
  const user = useSelector(selectUser);

  const [showMore, setShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setShowMore(!showMore);
  };
  

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  )

  const textIcon = (text, icon) => (
    <div className="showBtn">{text}{icon}</div>
    

  )

  return (
    <div className="widgets">

      <div className="widgets__top">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("Apple decreases Vision Pro target", "Top News - 4,245 readers")}
        {newsArticle("Celebrating National CROWN Day", "1h ago - 1,580 readers")}
        {newsArticle("Meta Twitter rival launching soon?", "1h ago - 115 readers")}
        {newsArticle("Tesla surpasses delivery estimates", "1h ago - 4,976 readers")}
        {newsArticle("The numbers to watch this week", "1h ago - 4,367 readers")}
        
        {showMore && (
          <div>
            {newsArticle("Private sector adds 497K jobs", "2h ago - 3,236 readers")} 
            {newsArticle("New car buying continues its roll", "9h ago - 8,433 readers")}
            {newsArticle("Mortgage rates hit new high for year", "3h ago - 2,302 readers")}
            {newsArticle("Rivian sets sights beyond Amazon", "7h ago - 1,397 readers")}
            {newsArticle("Probe of Tesla Autopilot deepens", "1h ago - 562 readers")}
          </div>
        )}
          
          <button onClick={toggleReadMoreLess}>
              {showMore ? textIcon("Show less", <KeyboardArrowUpIcon/>) : textIcon("Show more", <ExpandMoreIcon/>)}
          </button>
          
     </div>


    <div className="widgets__middle">
      <div className="widgets__ad">
          <div className="widgets__adHeader">
              <p>Ad</p>
              <MoreHorizIcon />
          </div>

          <div className="widgets__adBody">
            <p>{user?.displayName}, restart your Premium free trial today!</p>
            <div className="widgets__adImg">
              <Avatar src={user?.photoURL} className="widgets__avatar" >{user.email[0]}</Avatar>
              <img src="https://media.licdn.com/dms/image/C4E0EAQHukQjlI4RxEg/rightRail-logo-shrink_200_200/0/1630999895307?e=1689652800&v=beta&t=HtnlUBEdJJU65VsWE8xfsGYGgCcXSIjM3GDY4jsRASw" />
            </div>
            
            <h3>See job postings where you'll be a top applicant</h3>
            <button>Restart Trial</button>
            
          </div>

      </div>
    </div>

    <div className="widgets__bottom">
      
    </div>
    </div>

    
  );
}

export default Widgets;
