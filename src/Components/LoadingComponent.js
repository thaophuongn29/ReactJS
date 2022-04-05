import { Spinner} from 'react-bootstrap';

const Loading = () => {
    return(
        <div className='text-center pt-5 pb-5'>
            <Spinner animation="border" role="status"></Spinner>
            <span>Loading...</span>
        </div>)
}

export default Loading