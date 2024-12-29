import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

export default function Pagination({previous_page, page_no, next_page}) {
    return (
        <div className='p-4 mt-8 flex justify-center bg-gray-400'>

            {/* Previous Page */}
            <div className='hover:cursor-pointer hover:scale-150 duration-200'
                 onClick={previous_page}>
                <FontAwesomeIcon icon={faArrowLeft}/></div>

            {/* Current Page */}
            <div className='text-xl pl-8 pr-8'>{page_no}</div>

            {/* Next Page */}
            <div className='hover:cursor-pointer hover:scale-150 duration-200'
                 onClick={next_page}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
        </div>
    )
}