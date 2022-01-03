import React, { Component } from 'react';
import Data from '../../dataComponent/index.json';

export default class FrameOutput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       dataComponentUsed: [],
       data: [],
       situation: false,
       situation2: false
    };
  };

  componentDidMount = () => {
    this.setState({
      data: Data
    })
  }

  hire = () => {
    this.setState({
      situation: false,
      situation2: false,
    })
  }

  hire2 = () => {
    this.setState({
      situation: true,
      situation2: true,
    })
  }
  
  componentDidUpdate = () => {
    this.setState({
      data: Data
    })
  }

  remove = (index) => {
    for( let i = 0; i < this.props.dataHTML.length; i++){ 
      this.props.dataHTML.splice(index, 1)
    }
    for( let i = 0; i < this.props.dataStyle.length; i++){ 
      this.props.dataStyle.splice(index, 1)
    }
    for( let i = 0; i < this.props.dataComponentUsed.length; i++){ 
      this.props.dataComponentUsed.splice(index, 1)
    }
    this.setState({
      situation: true,
      situation2: true,
    })
  }
  
  componentDidUpdate = () => {
    let web = '';
    let webStyle = '';
    this.props.dataHTML.forEach(function(data) {
        web += data;
    }); 
    this.props.dataStyle.forEach(function(data2) {
        webStyle += data2;
    }); 
    document.querySelector('.template').innerHTML = web;
    document.querySelector('.styles').innerHTML = webStyle;

    console.log(this.props.dataComponentUsed)
  }

  render() {
    return (
      <> 
      {
        this.state.situation2 ? (
          <div className='listComponentUsed listNonUsed'>
            {
            this.state.situation ? (
              <div className='btn-list' onClick={this.hire}>
              <i className='fas fa-list-alt'></i>
            </div>
            ):
            <div className='btn-list' onClick={this.hire}>
              <i className='fas fa-list-alt topz'></i>
            </div>
            }
              <div className='wrap-listComponentUsed'>
                {
                  this.props.dataComponentUsed.map((data, index) => {
                    if(data.title === 'navbar') {
                      return (
                          <div className="cardImage-navbar" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                        )
                      }else if(data.title === 'hero') {
                        return (
                          <div className="cardImage" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                      )
                      }else if(data.title === 'content') {
                        return (
                          <div className="cardImage-content" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                      )
                      }else if(data.title === 'footer') {
                        return (
                          <div className="cardImage-footer" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                      )
                    }
                  })
                }
              </div>
          </div>
        ):
        <div className='listComponentUsed'>
          {
            this.state.situation ? (
            <div className='btn-list' onClick={this.hire2}>
              <i className='fas fa-list-alt'></i>
            </div>
            ):
            <div className='btn-list' onClick={this.hire2}>
              <i className='fas fa-list-alt topz'></i>
            </div>
            }
              <div className='wrap-listComponentUsed'>
              {
                  this.props.dataComponentUsed.map((data, index) => {
                    if(data.title === 'navbar') {
                      return (
                          <div className="cardImage-navbar" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                        )
                      }else if(data.title === 'hero') {
                        return (
                          <div className="cardImage" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                      )
                      }else if(data.title === 'content') {
                        return (
                          <div className="cardImage-content" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                      )
                      }else if(data.title === 'footer') {
                        return (
                          <div className="cardImage-footer" key={index}><img src={`${data.image}`} alt="img-component" /><i className='fas fa-trash' onClick={() => this.remove(index)}></i></div>
                      )
                    }
                  })
                }
              </div>
          </div>
        }
        <div className='frameOutput'>
            <div className="templateCurrent">
                <style className="styles">
                </style>
                <div className="template">
                </div>
            </div>
        </div>
      </>
    );
  }
}
