import React from 'react'
import styled from 'styled-components'

function Feed() {
  return (
    <FeedStyle>
      <h2 className="a11y-hidden">Home-post</h2>
    </FeedStyle>
  )
}

export default Feed

const FeedStyle = styled.main`
  margin: 130px 0;
  font-size: 24px;
  line-height: 24px;
`
