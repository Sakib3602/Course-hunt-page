
import PropTypes from 'prop-types'

const MyCart = ({time}) => {
  return (
    <div className='w-[240px] rounded-lg h-[430px] border-solid border-gray-700 border-[2px] p-3'>
      <h1 className='text-[20px] font-[600] '>Credit Hour : {time}{(time > 0)? "hr" : " "}</h1>
      <hr className='mt-3' />
      <h1 className='text-[20px] font-[600] mt-2'>Course Name</h1>
      
    </div>
  )
}

MyCart.propTypes = {

}

export default MyCart
