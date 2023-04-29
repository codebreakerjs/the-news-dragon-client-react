import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const LeftNav = () => {
    
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://the-news-dragon-server-react.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    
   

    return (
        <div>
            
            <div>
                <h3>All Category</h3>
                <div className='ps-4 '>
                    {
                        categories.map(category => <p key={category.id}>
                            <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                        </p>)
                    }
                </div>
            </div>
           
        </div>
    );
};

export default LeftNav;