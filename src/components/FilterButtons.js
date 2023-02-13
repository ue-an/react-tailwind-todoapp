import React from "react";

const FilterButton = props => {
 return (
        <button
        type='button'
        className='btn toggle-btn'
        aria-pressed={ props.isPressed }
        id={props.id}
        onClick={() => props.setFilter(props.name)}
        >
          <span className='visually-hidden'>Show </span>
          <span>{ props.name }</span>
          <span className='visually-hidden'> tasks</span>
        </button>
 );
}

export { FilterButton };