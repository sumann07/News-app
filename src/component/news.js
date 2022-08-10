import React, { Component } from 'react'
import Newsitem from './newsItem'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false
        }
    }

    async componentDidMount(){
        
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=460031b7f4c448efbefce5800753d0c4";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState(
           {
            articles : parseData.articles
           });
        //console.log(parseData);
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>
            Top HeadLines
        </h2>
        <div className='row'>
            {this.state.articles?.map((e)=>{

            return <div className='col-md-4' key={e.url}>
            <Newsitem title={e.title?e.title.slice(0,40):""} description={e.description?e.description.slice(0,80):""} imgUrl ={e.urlToImage}/>
            </div>
          })}  
        </div>
        
      </div>
    )
  }
}
