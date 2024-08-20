import React from 'react'

function SliderMain2({slides}) {
  return (
    <div>
    <div className='overflow-hidden relative' >
        <div className='flex'>
            {
                slides.map((s) => {
                    return <img src={s}/>;
                }
            )
            }
        </div>
    </div>
    </div>
  )
}

export default SliderMain2