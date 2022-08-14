import React, { Component } from 'react'
import Newsitem from './newsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps = {
      country : "in",
      pageSize : 15,
      category : "general"
    }
    static propTypes = {
      country : PropTypes.string,
      pageSize : PropTypes.number,
      category : PropTypes.string

    }
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }
    async updateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState(
         {
          articles : parseData.articles,
          totalResults : parseData.totalResults,
          loading : false
         });

    }
    async componentDidMount(){
        
       
        this.updateNews();
    }
    handleNextClick = async ()=>{

    this.setState({
      page: this.state.page + 1
    })
    this.updateNews()
    }
    handlePreClick = async()=>{

        this.setState ({
          page: this.state.page -1
        })
        this.updateNews()
    }

  render() {
    return (
      <div className='container my-3 '>
        <h1 className='text-center my-3 category-heading'>
          Top HeadLines
        </h1>
        {this.state.loading && <Spinner />}  
        <div className='row'>
            {!this.state.loading && this.state.articles?.map((e)=>{

            return <div className='col-md-4 my-3' key={e.url}>
            <Newsitem title={e.title?e.title.slice(0,40):""} description={e.description?e.description.slice(0,80):""} imgUrl ={e.urlToImage} newUrl={e.url} author={e.author} date={e.publishedAt} source = {e.source.name}/>
            </div>
          })}  
        </div>
        <div className='container d-flex justify-content-between my-3'>
        <button type="button" disabled ={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreClick}>&larr;Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/18)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    )
  }
}
