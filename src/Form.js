import React, {useState} from 'react'

const Form = (props) => {
 const[title, setTitle]= useState("");
 const[summary, setSummary]= useState("");
 const[author, setAuthor]= useState("")

 const titlehandler=(event)=>{
     setTitle(event.target.value)
 }

 const summaryhandler=(event)=>{
     setSummary(event.target.value)
 }

 const authorhandler=(event)=>{
     setAuthor(event.target.value)
 }

 const formhandler=(event)=>{
     event.preventDefault()

     const recordlist={
        title: title,
        summary: summary,
        author: author
     }
     props.onAdd(recordlist)
     console.log(recordlist.title);
     console.log(recordlist.summary);
     setAuthor("");
     setTitle("");
     setSummary("");
 }

    return (
       <form onSubmit={formhandler}>

           <input type="text" placeholder="title" value={title} onChange={titlehandler}/>
           <input type="text" placeholder="summary" value={summary} onChange={summaryhandler}/>
           <input type="text" placeholder="author" value={author} onChange={authorhandler}/>
           <button type="submit" >Add</button>
       </form>
    )
}

export default Form