function MovieCard({
                       poster_path,
                       original_title,
                       handleAddToWatchList,
                       handleRemoveFromWatchList,
                       movieObj,
                       watchList
                   }) {

    function doesContain(movieObj) {
        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].id === movieObj.id) {
                return true
            }
        }
        return false
    }

    return (
        <div
            className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl m-3 p-1 hover:scale-110 hover:cursor-pointer
            duration-200 flex flex-col justify-between items-end"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
            }}
        >
            {doesContain(movieObj) ?
                (<div onClick={() => (handleRemoveFromWatchList(movieObj))}
                      className='flex rounded-xl justify-center items-center bg-gray-600/30 h-8 w-8'>&#10060;</div>)
                :
                (<div onClick={() => (handleAddToWatchList(movieObj))}
                      className='flex rounded-xl justify-center items-center bg-gray-600/30 h-8 w-8'>&#128525;</div>)
            }

            <div className='bg-gray-800/60 w-full text-white text-xs text-center'>{original_title}</div>
        </div>
    );
}

export default MovieCard;
