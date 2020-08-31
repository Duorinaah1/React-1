import React from "react";
import logo from "./logo.svg";
import Image1 from './hulk-1.jpg';
import Image2 from './venom-1.jpg';
import Image3 from './venom-2.jpg';
import Header from './component/Header';
import ImageCard from './component/ImageCard';
import SearchInput from './component/SearchInput';
import "./App.css";


function App() {
  return (
    <div>
      <Header />
  
    <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        {/* search input component */}
        <SearchInput />

    
        <div class="sample-wallpaper">
         <ImageCard uri={Image1}/>
         <ImageCard uri={Image2}/>
         <ImageCard uri={Image3}/>
        </div>
      </div>
    </header>
    </div>
 );
}

export default App;
