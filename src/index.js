import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
// import { faker } from "faker";
// import pic from "./src/img.jpeg";
// import { faker } from 'faker';


const App = () => {
    return (
      <div className="ui container comments">
    
     <ApprovalCard>    
      <CommentDetail 
      author="Joseph" 
      src={process.env.PUBLIC_URL+"review1.jpg"} 
      date="Today at 1:24PM" text="Nice blog post!"/>
      </ApprovalCard>

      <ApprovalCard>
         <CommentDetail
          author="Chandler" 
          src={process.env.PUBLIC_URL+"review2.jpg"} 
          date="Today at 8:17PM" 
          text="I like the subject."/> 
          </ApprovalCard>

      <ApprovalCard>    
      <CommentDetail
       author="Monica" 
       src={process.env.PUBLIC_URL+"review3.jpeg"}
       date="Yesterday at 4:54PM"
        text="I love the writing."/> 
        </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));