export default function Pagination({previous_page, page_no, next_page}) {
    return (
        <div className='justify-items-center'>
            <div className="flex border-gray-300 w-[95%] justify-center m-20 space-x-4">
                <button
                    onClick={previous_page}
                    className="min-w-9 rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-xl shadow-gray-300 text-slate-600 hover:text-white hover:bg-slate-500 hover:duration-200 hover:border-slate-500 focus:border-slate-600 active:border-slate-600 active:text-white active:bg-slate-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                    disabled={page_no === 1}>
                    Prev
                </button>
                <button
                    className="min-w-9 rounded-full border border-slate-300 py-2 px-3 text-sm text-center transition-all shadow-xl shadow-gray-300 text-slate-600 hover:text-white hover:bg-slate-500 hover:duration-200 hover:border-slate-500 active:text-white active:bg-slate-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                    {page_no}
                </button>
                <button
                    onClick={next_page}
                    className="min-w-9 rounded-full border border-slate-300 py-2 px-3 text-sm text-center transition-all shadow-xl shadow-gray-300 text-slate-600 hover:text-white hover:bg-slate-500 hover:duration-200 hover:border-slate-500 focus:border-slate-600 active:text-white active:bg-slate-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                    Next
                </button>
            </div>
        </div>
    )
}