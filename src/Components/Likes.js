import React, {useState} from 'react'

const Likes = (props) => {
    const [count, setCount] = useState(0);

    console.log(`likes: ${count}`);

    return(
        <>
            
            <div className='likes'>
                <img src={props.post} alt='kitten pics'/>
                <div className="likesCount">
                    <h3 style={{ visibility: count === 0 ? 'hidden' : 'visible' }}>{count} likes</h3>
                    <button className='like' type='submit' onClick= {() => setCount(count + 1)}>Like</button>
                    {/* <button onClick ={() => setCount(0)}>reset</button>
                    <button className='like' type='submit' onClick= {() => setCount(count - 1)}>Disike</button> */}

                </div>
            </div>
           
        </>
    );
};

export default Likes;