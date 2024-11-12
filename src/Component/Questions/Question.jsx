// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Questions.css"

const Question = () => {
    return (
        <div>
            <div className='question'>
                <h1>How does React Work?</h1>
                <p>React creates a VIRTUAL DOM in memory.
                    Instead of manipulating the browser&lsquo;s DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
                    React only changes what needs to be changed!
                    React finds out what changes have been made, and changes only what needs to be changed.
                    You will learn the various aspects of how React does this in the rest of this tutorial.</p>
            </div>
            <div>
                <h1>What are the differences between props and state ?</h1>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.State is the local state of the component which cannot be accessed and modified outside of the component. It&lsquo;s equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div>
                <h1>How does useState work?  </h1>
                <p>In React, useState is a hook that lets you add state to a function component. It returns two things: the current state value and a function to update it.</p>
            </div>
            <div>
                <h1>What is the use of useEffect without data load?</h1>
                <p>Earlier, we looked at how to express side effects that don’t require any cleanup. However, some effects do. For example, we might want to set up a subscription to some external data source. In that case, it is important to clean up so that we don’t introduce a memory leak! Let’s compare how we can do it with classes and with Hooks.</p>
            </div>
        </div>
    );
};

export default Question;