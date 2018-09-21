import React from 'react'
import Media from "./media"
import "./playlist.css"

function Playlist (props){
  //const playlist=this.props.data.categories[0].playlist
  const categoria=props.data.categories[0]
  console.log(props.data)

  return (
    <div>
      <div className="PlaylistSubtitle">
        {categoria.description}
      </div>      
      <div className="PlaylistTitle">
        {categoria.title}
      </div>
      <div className="Playlist divscroll">
        {
          categoria.playlist.map((item)=>{
            return <Media {... item} key={item.id}/>
          })
        }
      </div>
    </div>
  )
}  


export default Playlist
