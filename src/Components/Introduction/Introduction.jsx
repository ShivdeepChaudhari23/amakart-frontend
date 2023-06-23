import Image from "react-bootstrap/Image";
import transparentLogo from '../../assets/logo_transparent.png';
import './Introduction.css'

const Introduction = () => {
    return (
      <>  
        <div className='Intro-Container'>
          <div className='Description-Container'>
            <p className='Description'>
              Shop latest fashion and accessries only with
            </p>
          </div>
          <Image className='Description-Image' src={transparentLogo} height={'300px'} width={'350px'} />
        </div>
      </>
    )
}

export default Introduction;