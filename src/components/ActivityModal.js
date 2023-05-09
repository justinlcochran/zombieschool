import React from 'react';


function ActivityModal({modalContent, onClose}) {
    if ( !modalContent ) return null;
    console.log(modalContent)
    const handleClose = (e) => {
        if ( e.target.id === "wrapper" ) onClose();
    }

    return (
        <div className={"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"} id="wrapper" onClick={handleClose}>
            <div className={"flex flex-col"}>
                <div className={"relative bg-violet-950 p-2 m-4 rounded select-none w-[50%] mx-auto"}>
                    <button onClick={onClose} className=" absolute -top-6 -right-6 m-2 p-2 w-10 rounded-full bg-red-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#fff" d="M14.12 12l5.3-5.3c.59-.59.59-1.54 0-2.12-.59-.59-1.54-.59-2.12 0L12 9.88 6.7 4.58c-.59-.59-1.54-.59-2.12 0-.59.59-.59 1.54 0 2.12L9.88 12l-5.3 5.3c-.59.59-.59 1.54 0 2.12.59.59 1.54.59 2.12 0L12 14.12l5.3 5.3c.59.59 1.54.59 2.12 0 .59-.59.59-1.54 0-2.12L14.12 12z"/>
                        </svg>
                    </button>
                    <div className={"col-span-7 text-3xl font-bold mb-2"}><p>{modalContent.title}</p></div>
                    <div className={"grid grid-cols-7 h-full"}>
                        <div className={"col-span-2 flex flex-col p-2 justify-center items-center bg-green-900 mr-2 my-auto py-4 rounded-lg"}>
                            <p className="mb-2 font-bold">Description:</p>
                            <p>{modalContent.description}</p>
                        </div>
                        <div className={"col-span-5"}>
                            <div className={"whitespace-pre-wrap p-4 text-left bg-blue-900 mb-2 rounded-lg"}>
                                <p className="mb-2 text-center font-bold text-lg">Instructions:</p>
                                <p>{modalContent.instructions}</p>
                            </div>
                            {(typeof (modalContent.link) === "string") ?
                                <a href={modalContent.link} target={"_blank"}>
                                    <div
                                        className={"whitespace-pre-wrap p-4 text-left bg-fuchsia-900 hover:bg-fuchsia-800 text-center rounded-lg"}>
                                        <p className={"font-bold"}>Click me!</p></div>
                                </a>
                            :
                                <div className={"grid grid-cols-2 gap-2"}>
                                    <a href={modalContent.link[0].url} target={"_blank"}>
                                        <div className={"whitespace-pre-wrap p-4 text-left bg-fuchsia-900 hover:bg-fuchsia-800 text-center rounded-lg"}>
                                            <p>{modalContent.link[0].title}</p>
                                        </div>
                                    </a>
                                    <a href={modalContent.link[1].url} target={"_blank"}>
                                        <div className={"whitespace-pre-wrap p-4 text-left bg-fuchsia-900 hover:bg-fuchsia-800 text-center rounded-lg"}>
                                            <p>{modalContent.link[1].title}</p>
                                        </div>
                                    </a>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}


export default ActivityModal;