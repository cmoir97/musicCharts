import React from 'react'

const SongDetail = (props) => {
  const title = props.songs.map((song, index) => {
    return <div className="songItem">
    <li value={index} key={index}>{song["im:name"].label}</li>
    <li value={index} key={index}>{song["im:artist"].label}</li>
    <li value={index} key={index}>{index + 1}</li>
    <li value={index} key={index}>{song.category.attributes.label}</li>
    <br/>
    <br/>
    </div>
  })

  return(
    <div>
      {title}
    </div>
  )
}
export default SongDetail
