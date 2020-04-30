import React from 'react'
import { Component } from 'react';
import { Link} from 'react-router-dom';
import fondmarin from './images/fondmarin.jpg'
import foret from './images/foret.jpg'
import montagne from './images/montagne.jpg'
import plage from './images/plage.jpg'
import ville from './images/ville.jpg'
import './Wishes.css'



class Wishes extends Component {
    constructor(props){
        super(props)
        this.state = {
        //   fondmarin : false,
        //   foret : false,
        //   montagne : false,
        //   plage : false,
        //   ville : false,
          category : "",
        }
      }

  
      render (){ 
        return (
            <div className="Wishes">
                <h1>Pendant cette période de confinement, il est difficile de s'évader.</h1> 
                <h2>Où voulez-vous vous échapper ?</h2>

                <div className="box">
                 
                    <div className="ligne1">
                        <div className="p1">
                             <h2>Plages</h2>
                            <Link to ={{pathname: '/location',
                                state: "beach" }}>
                                <img className="photos1" src={plage} alt="Plages"/>
                            </Link> 
                        </div>

                        <div className="p1">                     
                            <h2>Forêts</h2>
                            <Link to ={{pathname: '/location',
                                state: "forest" }}>
                                <img className="photos1" src={foret} alt="Forêts"/>
                            </Link> 
                        </div>

                        <div className="p1"> 
                            <h2>Montagnes</h2>
                            <Link to ={{pathname: '/location',
                                state: "mountain" }}>
                                <img className="photos1" src={montagne} alt="Montagnes"/>
                            </Link>   
                        </div>
                    </div>

                    <div className="ligne2">
                        <div className="p4"> 
                            <h2>Fonds Marins</h2>
                            <Link to ={{pathname: '/location',
                                state: "underwater" }}>
                                <img className="photos2" src={fondmarin} alt="Fonds Marins"/> 
                            </Link>  
                            
                        </div>
                        
                        <div className="p5"> 
                            <h2>Villes</h2>
                            <Link to ={{pathname: '/location',
                                state: "city" }}>
                                <img className="photos2" src={ville} alt="Villes"/>
                            </Link> 
                            
                        </div>
                    </div>
                             
                </div>
            </div>
        );
    }}
  

    export default Wishes;

   
 //   <Link to ={{pathname: '/select',
 //                  state: this.state.Forêt }}>
 //            <img className="photos" src={foret} alt="Forêt"/>
 //   </Link> 