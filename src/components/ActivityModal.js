import React, { useState } from 'react';
import { Transition } from '@headlessui/react';


function ActivityModal({modalContent, onClose}) {
    if ( !modalContent ) return null;
    console.log(modalContent)
    const handleClose = (e) => {
        if ( e.target.id === "wrapper" ) onClose();
    }

    return (
        <div className={"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"} id="wrapper" onClick={handleClose}>
            <div className={"w-[600px] flex flex-col"}>
                <button className={"text-white text-xl place-self-end"} onClick={() => onClose()}>X</button>
                <div className={"bg-white p-2 rounded select-none"}>
                    <div className={"col-span-7 bg-red-600 text-3xl font-bold mb-2"}><p>{modalContent.title}</p></div>
                    <div className={"grid grid-cols-7 h-full"}>
                        <div className={"col-span-2 flex flex-col justify-center items-center bg-amber-200 mr-2"}>
                            <p className="mb-2 font-bold text-lg">Description:</p>
                            <p>{modalContent.description}</p>
                        </div>
                        <div className={"col-span-5"}>
                            <div className={"whitespace-pre-wrap p-4 text-left bg-blue-300 mb-2"}>
                                <p className="mb-2 text-center font-bold text-lg">Instructions:</p>
                                <p>{modalContent.instructions}</p>
                            </div>
                            <a href={modalContent.link} target={"_blank"} ><div className={"whitespace-pre-wrap p-4 text-left bg-green-300 hover:bg-green-400 text-center"}><p>Click me!</p></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}


export default ActivityModal;