import React from 'react'
import '../styles/ShortBtn.scss'

const ShortBtn = (props) => {
  return (
    <div className='btn-div'>
      <button>
        {props.text}
      </button>
    </div>
  );
}

export default ShortBtn;