import React from 'react'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const Comments = () => {
    let disqusConfig = {}
    return (
        <>
            <div className="comments">
                {/* <CommentCount config={disqusConfig} placeholder={'Counter'} /> *}
                {/* Post Contents */}
                <Disqus config={disqusConfig} />
            </div>
        </>
    )
}

export default Comments
