import '../css/Header.css'
export const Header = ({title, description}) => {
  return (
        <div className='header-div'>
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
  )
}
