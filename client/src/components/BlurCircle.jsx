
// const BlurCircle = ({top = "auto",left = "auto",right = "auto",bottom = "auto"}) => {
//   return (
//      <div className="absolute -z-50 h-58 aspect-square rounded-full bg-gray-800 blur-3xl"
//     style={{top:top, left:left, right:right, bottom:bottom}}>

      
//     </div>
//   )
// }

// export default BlurCircle


const BlurCircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto" }) => {
  return (
    <div
      className="absolute z-0 w-56 h-56 rounded-full bg-gray-800 blur-3xl pointer-events-none"
      style={{ top, left, right, bottom }}
    />
  )
}

export default BlurCircle