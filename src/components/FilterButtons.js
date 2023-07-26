import React from "react";

const FilterButton = props => {
 return (
        <button
        type='button'
        className=' hover:opacity-50 w-full flex justify-center rounded-lg py-1 dark:text-white dark:bg-gray-600 border-gray-600 border-2'
        aria-pressed={ props.isPressed }
        id={props.id}
        onClick={() => props.setFilter(props.name)}
        >
          <span>{ props.name }</span>
        </button>
 );
}

export { FilterButton };