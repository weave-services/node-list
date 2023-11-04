/* eslint-disable react/jsx-no-comment-textnodes */
import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'

// eslint-disable-next-line
export default memo(() => {
    return (
        <>
            <div className='cloud gradient'>
                <div></div>
            </div>
            <div className='wrapper gradient'>
                <div className='inner'>
                    <div className='body'>
                        {data.icon && <div className='icon'>{data.icon}</div>}
                        <div>
                            <div className='title'>{data.title}</div>
                            {data.subline && <div className='subline'>{data.subline}</div>}
                        </div>
                    </div>
                    <Handle type='target' position={Position.Left} />
                    <Handle type='source' position={Position.Right} />
                </div>
            </div>
        </>
    )
})
