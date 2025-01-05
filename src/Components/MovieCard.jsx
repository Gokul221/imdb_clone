function MovieCard({
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
        <div title={movieObj.title}
             className="h-[40vh] w-[200px] hover:shadow-2xl hover:shadow-gray-900 bg-cover bg-center rounded-xl mb-5 m-3 p-1 hover:scale-110
            outline-8 duration-200 flex flex-col justify-between items-end"
             style={{
                 backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieObj.poster_path})`,
             }}
             onMouseEnter={(e) => {
                 const strip = e.currentTarget.querySelector('.name-strip');
                 strip.classList.remove('opacity-0', 'invisible')
                 strip.classList.add("opacity-100", "visible");
             }}
             onMouseLeave={(e) => {
                 const strip = e.currentTarget.querySelector(".name-strip");
                 strip.classList.remove("opacity-100", "visible");
                 strip.classList.add("opacity-0", "invisible");
             }}
        >
            <div title='Watch now in HD'
                className="rounded-b-xl name-strip hover:cursor-pointer invisible absolute h-[42px] bottom-0 left-0 w-full bg-purple-700 text-white  text-center py-2 text-sm duration-200"
            >
                Watch Now
            </div>
            {doesContain(movieObj) ?
                (<div title='Remove from Watchlist' onClick={() => (handleRemoveFromWatchList(movieObj))}
                      className='flex rounded-xl hover:cursor-pointer justify-center items-center bg-gray-600/50 h-9 w-9'>&#10060;</div>)
                :
                (<div title='Add to Watchlist' onClick={() => (handleAddToWatchList(movieObj))}
                      className='flex rounded-xl hover:cursor-pointer justify-center items-center bg-gray-600/50 h-9 w-9'>&#x2665;&#xfe0f;</div>)
            }

            <div className='bg-gray-800/60 w-full text-white text-xs text-center'>{movieObj.original_title}</div>
        </div>
    );
}

export default MovieCard;
