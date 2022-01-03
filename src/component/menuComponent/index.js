import React, { Component } from 'react';
import Data from '../../dataComponent/index.json';
import Swal from 'sweetalert2';

export default class MenuComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     data: [],
  };
};

componentDidMount = () => {
    this.setState({
        data: Data
    })
    console.log(this.state.data)

    document.querySelector('.fa-times').addEventListener('click', () => {
        document.querySelector('.menu1').classList.remove('show1')
    })

    document.querySelector('.fa-times2').addEventListener('click', () => {
        document.querySelector('.menu2').classList.remove('show2')
    })

    document.querySelector('.fa-times3').addEventListener('click', () => {
        document.querySelector('.menu3').classList.remove('show3')
    })

    document.querySelector('.fa-times4').addEventListener('click', () => {
        document.querySelector('.menu4').classList.remove('show4')
    })

    document.querySelector('.fa-times5').addEventListener('click', () => {
        document.querySelector('.menu5').classList.remove('show5')
    })

    document.getElementById('navbar').addEventListener('click', () => {
        document.querySelector('.menu1').classList.add('show1')
        document.querySelector('.menu2').classList.remove('show2')
        document.querySelector('.menu3').classList.remove('show3')
        document.querySelector('.menu4').classList.remove('show4')
        document.querySelector('.menu5').classList.remove('show5')
    })

    document.getElementById('heroes').addEventListener('click', () => {
        document.querySelector('.menu1').classList.remove('show1')
        document.querySelector('.menu2').classList.add('show2')
        document.querySelector('.menu3').classList.remove('show3')
        document.querySelector('.menu4').classList.remove('show4')
        document.querySelector('.menu5').classList.remove('show5')
    })

    document.getElementById('content').addEventListener('click', () => {
        document.querySelector('.menu1').classList.remove('show1')
        document.querySelector('.menu2').classList.remove('show2')
        document.querySelector('.menu3').classList.add('show3')
        document.querySelector('.menu4').classList.remove('show4')
        document.querySelector('.menu5').classList.remove('show5')
    })

    document.getElementById('footer').addEventListener('click', () => {
        document.querySelector('.menu1').classList.remove('show1')
        document.querySelector('.menu2').classList.remove('show2')
        document.querySelector('.menu3').classList.remove('show3')
        document.querySelector('.menu4').classList.add('show4')
        document.querySelector('.menu5').classList.remove('show5')
    })

    document.getElementById('pages').addEventListener('click', () => {
        document.querySelector('.menu1').classList.remove('show1')
        document.querySelector('.menu2').classList.remove('show2')
        document.querySelector('.menu3').classList.remove('show3')
        document.querySelector('.menu4').classList.remove('show4')
        document.querySelector('.menu5').classList.add('show5')
    })
}

download = (e) => {
    const name = e;
    const header = 
    `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    `
    const sourceHTML = header + document.querySelector(`.${name}`).innerHTML ;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'webBuilder.html';
    fileDownload.click();
    document.body.removeChild(fileDownload);

    Swal.fire({
        icon: "success",
        timer: 1160,
        title: "Download Successfully", 
        showConfirmButton: false 
    });
}

  render() {
    return (
        <>
            <div className="menuComponents">
                <div className="menuAll">
                    <div className="card-menu menu1">
                        <i className='fas fa-times'></i>
                        <div className='child-card-menu'>
                        {
                            this.state.data.map((data, index) => {
                                if(data.title === "navbar") {
                                    return (
                                        <div className="cardImage-navbar" key={index}><img src={`https://images-builder.vercel.app/img/${data.img}`} alt="img-component" /><i className='fas fa-plus' onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}></i></div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="card-menu menu2">
                        <i className='fas fa-times fa-times2'></i>
                        <div className='child-card-menu'>
                       {
                            this.state.data.map((data, index) => {
                                if(data.title === "hero") {
                                return (
                                    <div className="cardImage" key={index}><img src={`https://images-builder.vercel.app/img/${data.img}`} alt="img-component" /><i className='fas fa-plus' onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}></i></div>
                                    )
                                }
                            })
                        }
                        </div>
                    </div>
                    <div className="card-menu menu3">
                        <i className='fas fa-times fa-times3'></i>
                        <div className='child-card-menu'>
                       {
                            this.state.data.map((data, index) => {
                                if(data.title === "content") {
                                return (
                                    <div className="cardImage-content" key={index}><img src={`https://images-builder.vercel.app/img/${data.img}`} alt="img-component" /><i className='fas fa-plus' onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}></i></div>
                                    )
                                }
                            })
                        }
                        </div>
                    </div>
                    <div className="card-menu menu4">
                        <i className='fas fa-times fa-times4'></i>
                        <div className='child-card-menu'>
                       {
                            this.state.data.map((data, index) => {
                                if(data.title === "footer") {
                                return (
                                    <div className="cardImage-footer" key={index}><img src={`https://images-builder.vercel.app/img/${data.img}`} alt="img-component" /><i className='fas fa-plus' onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}></i></div>
                                    )
                                }
                            })
                        }
                        </div>
                    </div>
                    <div className="card-menu menu5">
                        <i className='fas fa-times fa-times5'></i>
                        <div className='child-card-menu'>
                       {
                            this.state.data.map((data, index) => {
                                return (
                                    <div className="cardImage" key={index}><img src={`https://images-builder.vercel.app/img/${data.img}`} alt="img-component" /><i className='fas fa-plus' onClick={() => this.props.createComponent(data.title, data.img, data.html, data.style)}></i></div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
                <i className="bx bxs-download" onClick={() => this.download("templateCurrent")}></i>
                <div className="squareComponents" id='navbar'>
                    <i className="bx bx-collection"></i>
                    <b><p>Navbar</p></b>
                </div>
                <div className="squareComponents" id='heroes'>
                    <i className="bx bx-collection"></i>
                    <b><p>Heroes</p></b>
                </div>
                <div className="squareComponents" id='content'>
                    <i className="bx bx-collection"></i>
                    <b><p>Content</p></b>
                </div>
                <div className="squareComponents" id='footer'>
                    <i className="bx bx-collection"></i>
                    <b><p>Footer</p></b>
                </div>
                <div className="squareComponents" id='pages'>
                    <i className="bx bx-collection"></i>
                    <b><p>Pages</p></b>
                </div>
            </div>
        </>
    );
  }
}
