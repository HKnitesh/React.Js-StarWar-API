import React from 'react';


class StarWar_Character extends React.Component {

   constructor() {
      super()
      this.state = {
         name: null,
         height: null,
         mass: null,
         gender: null,
         image: null,
         loadedCharacter: false,
      }
   }

   getCharacter = () => {

      const randomNumber = Math.ceil(Math.random() * 88);
      const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
      console.log(url);

      fetch(url)
         .then(response => response.json())
         .then(data => {
            this.setState({
               name: data.name,
               height: data.height,
               mass: data.mass,
               gender: data.gender,
               image: data.image,
               loadedCharacter: true,
            })

         })



   }

   render() {


      return (

         <div className='container'>
            <div className='col-12'>

               <h1 className='display-4 m-5 text-danger fw-bold'>Get Your StarWar Character  </h1>
            </div>
            {
               this.state.loadedCharacter &&
               <div className='row'>

                  <div className='colum-1 col-lg-6 col-sm-12'>
                     <h2>Name: {this.state.name}</h2>
                     <p>Height: {this.state.height} m</p>
                     <p>Mass: {this.state.mass} Kg</p>
                     <p>Gender: {this.state.gender}</p>

                  </div>
                  <div className='colum-2 col-lg-6 col-sm-12'>
                     <img className='img-fluid rounded img' src={this.state.image} alt='wearier-img'></img>
                  </div>
               </div>

            }


            <div className='row'>

               <div className='colum-1 col-lg-6 col-sm-12'>

                  <button type='buttom' onClick={() => this.getCharacter()} className='btn btn-outline-primary'>Get Random Character</button>
               </div>

            </div>



         </div>

      )
   }
}

export default StarWar_Character;