import { createGlobalStyle } from 'styled-components';
import { Colours } from 'src/Utils/Settings';

const GlobalStyles = createGlobalStyle`

body {
  background: ${Colours.OffWhite};
}

.grid-figure,
.single-photo {
  flex-basis: calc(33.333% - 4rem);
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 2rem 2rem 2rem;
  padding: 2rem;
  border: 1px solid #d3d3d3;
  background: #fff;
  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
  position: relative;
}

.single-photo .grid-figure {
  box-shadow: none;
  margin: 0 2rem 0 0;
  border: 0;
  padding: 0;
  flex: 1 0 60%;
  max-width: 60%;
}
.single-photo .comments {
  flex: 1 0 40%;
  max-width: 40%;
}
.single-photo .grid-photo {
  width: 100%;
  margin: 0;
}
.grid-photo {
  width: calc(100% + 4rem);
  margin-left: -2rem;
  margin-top: -2rem;
  max-width: none;
}
.remove-comment {
  background: none;
  border: 0;
  line-height: 1;
  opacity: 0;
}
.remove-comment:hover {
  color: #f00;
}
.comment {
  border-bottom: 1px solid #d3d3d3;
  padding: 0.5rem 0;
}
.comment p {
  font-size: 1.2rem;
  margin: 0;
}
.comment strong {
  color: #00f;
  margin-right: 5px;
}
.comment:hover .remove-comment {
  opacity: 1;
}
.comment-form input,
.comment-form textarea {
  width: 100%;
  border: 0;
  font-size: 1.3rem;
  padding: 1rem 0;
  border-bottom: 1px solid #d3d3d3;
  outline: none;
  resize: vertical;
}
.grid-photo-wrap {
  position: relative;
}
.likes-heart {
  background: url("http://f.cl.ly/items/3Y373q2Q3J3Y1j203n0m/Bitmap-3.png") center no-repeat;
  background-size: contain;
  font-size: 2rem;
  padding: 1rem;
  position: absolute;
  color: #00f;
  left: 50%;
  top: 50%;
  pointer-events: none;
}
/*  
  Buttons  
*/
.control-buttons {
  display: flex;
  justify-content: space-between;
}
button,
.button {
  border: 2px solid #f2f2f2;
  background: none;
  flex-basis: 48%;
  display: inline-block;
  line-height: 2;
  text-decoration: none;
  padding: 5px;
  text-align: center;
  font-size: 15px;
  color: #00f;
  transition: all 0.2s;
  box-sizing: padding-box;
}
button:hover,
.button:hover,
button:focus,
.button:focus {
  border-color: #00f;
  outline: 0;
}
/*
  Cowboy style speech bubble - you should probably use an SVG for this if you are doing more icons.
*/
.speech-bubble {
  width: 1.5rem;
  height: 1.25rem;
  background: #00f;
  display: inline-block;
  border-radius: 50%;
  position: relative;
}
.speech-bubble:after {
  display: inline-block;
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 1.25rem 1.25rem 0;
  border-color: transparent #00f transparent transparent;
  top: 30%;
  left: 0;
}

`;

export default GlobalStyles;
