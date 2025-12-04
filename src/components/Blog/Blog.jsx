import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className="p-8 rounded-xl card bg-[#0D0D0D]  shadow-lg mt-4">
            <h1 className='font-bold'>Question : {blog.Ques}</h1>
            <h3 className='text-base font-semibold text-gray-500'>Answer : {blog.ans}</h3>
        </div>
    );
};

export default Blog;