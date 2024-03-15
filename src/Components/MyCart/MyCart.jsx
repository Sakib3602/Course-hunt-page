
import PropTypes from 'prop-types'
import NameArea from '../NameArea/NameArea'

const MyCart = ({time,course}) => {
    console.log(typeof time,typeof course)
    
  return (
    <div className='w-[340px] rounded-lg min-h-[430px] border-solid border-gray-700 border-[2px] p-3'>
      <h1 className='text-[20px] font-[600] '>Credit Hour : {time}{(time > 0)? "hr" : " "}</h1>
      <hr className='mt-3' />
      <h1 className='text-[20px] font-[600] mt-2'>Course Name</h1>

      {
        course.map((e,i)=> <NameArea key={i} course={e}></NameArea>)
      }
      
    </div>
  )
}

MyCart.propTypes = {
    course: PropTypes.object,
    time: PropTypes.number

}

export default MyCart
