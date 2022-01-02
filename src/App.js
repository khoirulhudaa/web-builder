import React from 'react';
import './App.css';
import MenuComponent from './component/menuComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameOutput from './component/frameOutput';
import Data from './dataComponent/index.json';
import Alert1 from './assets/images/png/alert1.png';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      dataHTML: [],
      dataStyle: [],
      dataImages: [],
      screen: window.innerWidth
    };
  };

  componentDidMount = () => {
    console.log(Data)
    // let arrow = document.querySelectorAll(".arrow");
    //   for (var i = 0; i < arrow.length; i++) {
    //       arrow[i].addEventListener("click", (e)=>{
    //       let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    //       arrowParent.classList.toggle("showMenu");
    //       });
    //   }
    //       let sidebar = document.querySelector(".sidebar");
    //       let sidebarBtn = document.querySelector(".bx-menu");
    //       console.log(sidebarBtn);
    //       sidebarBtn.addEventListener("click", ()=>{
    //       sidebar.classList.toggle("close");
    //   });
  }

  createComponent =(img, html, style) => {
    let joinedHTML = this.state.dataHTML.concat(`${html}`)
    this.setState({ dataHTML: joinedHTML })
    let joinedStyle = this.state.dataStyle.concat(`${style}`)
    this.setState({ dataStyle: joinedStyle })
    let dataImg = this.state.dataImages.concat(`https://images-builder.vercel.app/img/${img}`)
    this.setState({ dataImages: dataImg })
  }

  render() {

    const {createComponent} = this;
    const {dataStyle, dataHTML, dataImages} = this.state;
    return (
      <>
        {
          this.state.screen < 1239 ? (
            <div className='alert-page'>
              <img src={Alert1} alt="alert-logo" />
              <h1>Sorry, the page cannot be accessed</h1>
              <p>can only be accessed on screen widths above 1240px, while those below that size cannot access including mobile phones</p>
            </div>
          ):
          null
        }
        <div className="row d-flex">
          <div className="col-sm-2 col-12">
            <MenuComponent createComponent ={createComponent}/>
          </div>
          <div className='col-sm-10 col-12' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <FrameOutput dataStyle={dataStyle} dataHTML={dataHTML} dataComponentUsed={dataImages} />
          </div>
        </div>
      </>
    );
  }
}

