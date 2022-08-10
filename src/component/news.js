import React, { Component } from 'react'
import Newsitem from './newsItem'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }

    async componentDidMount(){
        
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=460031b7f4c448efbefce5800753d0c4&page=1&pageSize=18";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState(
           {
            articles : parseData.articles,
            totalResults : parseData.totalResults
           });
        //console.log(parseData);
    }
    handleNextClick = async ()=>{
         //console.log(this.state.page +1);
         if(this.state.page + 1 > Math.ceil(this.state.totalResults/18)){

         }
         else {
         let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=460031b7f4c448efbefce5800753d0c4&page=${this.state.page+1}&pageSize=18`;
         let data = await fetch(url);
         let parseData = await data.json();
         this.setState(
            {
             articles : parseData.articles,
             page : this.state.page + 1
            });
    }
    }
    handlePreClick = async()=>{
    //console.log("p");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=460031b7f4c448efbefce5800753d0c4&page=${this.state.page-1}&pageSize=18`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState(
           {
            articles : parseData.articles,
            page : this.state.page - 1
           });
    
    }

  render() {
    return (
      <div className='container my-3'>
        <h2>
            Top HeadLines
        </h2>
        <div className='row'>
            {this.state.articles?.map((e)=>{

            return <div className='col-md-4 my-2' key={e.url}>
            <Newsitem title={e.title?e.title.slice(0,40):""} description={e.description?e.description.slice(0,80):""} imgUrl ={e.urlToImage} newUrl={e.url}/>
            </div>
          })}  
        </div>
        <div className='container d-flex justify-content-between my-3'>
        <button type="button" disabled ={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreClick}>&larr;Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    )
  }
}
