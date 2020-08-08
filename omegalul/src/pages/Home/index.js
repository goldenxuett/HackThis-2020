import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faBath, faQuestion, faTruck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./style.sass"
import sampleHomePage from '..\\..\\assets\\kekw.png'; // Delete Later

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          "icon": faBath,
          "title": "What",
          "content": "5HEAD.",
        },
        {
          "icon": faQuestion,
          "title": "Why",
          "content": "KEKW.",
        },
        {
          "icon": faTruck,
          "title": "How",
          "content": "OMEGALUL.",
        },
      ]
    }
  }



  render() {
    return (
      <div className="home-page">
        <div className="header">
          <div className="menu">
            <div className="spacer"/>
          </div>

          <div className="container">

            <div className="left">
              <div className="title">OMEGALUL</div>
              <div className="description">Brought to you by KRISTEN ONE</div>
            </div>
            <div className="right">
              <img className="preview-image" src={sampleHomePage}/>
            </div> 
          </div>

          <div className="details-button" onClick={() => window.scroll({left: 0, top: window.innerHeight, behavior: 'smooth'})}>
            <div className="text">more info</div>
            <FontAwesomeIcon icon={faChevronDown}/>
          </div>
        </div>

        <div className="info-section">
          {
            this.state.info.map(({ icon, title, content }) => (
              <div className="info" key={title}>
                <FontAwesomeIcon className="icon" icon={icon}/>
                <div className="title">{title}</div>
                <div className="content">{content}</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}