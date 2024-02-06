import React, { useState } from 'react';
import uploadSlice from '../reducers/uploadDetailsSlice'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function FileUpload() {
    const userData = useSelector((state) => state.loginReducer);
    // const userId = userData._user_id;
    // const assignmentId = userData._assignment_id; // 

    const dispatch = useDispatch();

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [hasFile, setHasFile] = useState(false);

    const [uploadWait, setUploadWait] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const userId = useParams();
    const assignmentFileId = useParams();

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
        setHasFile(true);
    };

    const cancelUpload = () => {
        setFile(null);
        setFileName('');
    };

    const uploadFile = async () => {
        if (file !== null) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                // formData.append('userid', userId);

                setUploadWait(true);

                const res = await axios.post('http://localhost:8080/assignment_file', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                },
                    { withCredentials: true });
                console.log("Response Data:", res.data)

                if (res.status === 200) {
                    dispatch(uploadSlice.actions.uploadData(res.data));
                    setUploadWait(false);
                } else {
                    console.log('Upload failed:', res.data);
                    setUploadSuccess(true);

                    setTimeout(() => {
                        setUploadSuccess(false);
                    }, 2000);

                    const res2 = await axios.get('http://localhost:8080/assignment_file', { withCredentials: true });
                    dispatch(uploadSlice.actions.uploadData(res2.data));
                }
            } catch (error) {
                console.log('Error:', error);
                setUploadWait(false);
                setUploadSuccess(true);

                setTimeout(() => {
                    setUploadSuccess(false);
                }, 2000);

                // const res2 = await axios.get('http://localhost:8080/assignment_file/' + assignmentFileId, { withCredentials: true });
                // dispatch(uploadSlice.actions.uploadData(res2.data));
            }
        } else {
            setUploadWait(false);
            setEmpty(true);

            setTimeout(() => {
                setEmpty(false);
            }, 1000);
        }
    };

    const uploadData = useSelector((state) => state.uploadDetailsReducer);

    return (
        <div className='flex items-center justify-center'>
            <div class=" h-full w-[800px] lg:px-3  sm:px-8 md:px-16 sm:py-8">
                <main class="container w-[800px] h-[500px]">
                    {/* file upload modal */}
                    <article aria-label="File Upload Modal" class="relative h-full flex flex-col rounded-md" ondrop="dropHandler(event);" ondragover="dragOverHandler(event);" ondragleave="dragLeaveHandler(event);" ondragenter="dragEnterHandler(event);">

                        {/* scroll area  */}
                        <section class=" overflow-auto w-full h-full flex flex-col">
                            <header class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                                <p class="mb-3 font-semibold text-blue flex flex-wrap justify-center">
                                    <span>Drag and drop your files</span>
                                </p>
                                <input onChange={handleFileUpload} id="file-type" type="file" multiple hidden />
                                <label for="file-type" id="button" class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-purple focus:shadow-outline focus:outline-none">
                                    Upload a file
                                </label>
                            </header>
                            <ul id="gallery" class="flex flex-1 flex-wrap -m-1">
                                <li id="empty" class="h-full w-full text-center flex flex-col  justify-center items-center">
                                    <div className='mt-[-80px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 512 512" id="upload"><path d="M398.1 233.2c0-1.2.2-2.4.2-3.6 0-65-51.8-117.6-115.7-117.6-46.1 0-85.7 27.4-104.3 67-8.1-4.1-17.2-6.5-26.8-6.5-29.5 0-54.1 21.9-58.8 50.5C57.3 235.2 32 269.1 32 309c0 50.2 40.1 91 89.5 91H224v-80h-48.2l80.2-83.7 80.2 83.6H288v80h110.3c45.2 0 81.7-37.5 81.7-83.4 0-45.9-36.7-83.2-81.9-83.3z"></path></svg>
                                    </div>
                                    {/* <img class="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" /> */}
                                    <span class="text-small text-gray-500">{!hasFile && <h3>No file selected</h3>}{hasFile && <h3>{fileName}</h3>} </span>
                                </li>
                            </ul>
                        </section>

                        {/* sticky footer  */}
                        <footer class=" flex justify-end px-8 pb-8 pt-4">
                            <button onClick={uploadFile} id="submit" className="relative px-3 py-1 bg-blue hover:bg-blue/30 text-white font-bold focus:shadow-outline focus:outline-none rounded-md">
                                {!uploadWait && <h3>Upload Now</h3>}  {uploadWait && <img src="" alt='' className='w-[100px]' />}
                                {empty && <h3 className='absolute left-[-120px] top-2 text-sm text-center text-red-700'>Select a File</h3>}
                                {uploadSuccess && <h3 className='absolute left-[-120px] top-2 text-sm text-center text-blue'>Upload Sucess</h3>}
                            </button>
                            <button onClick={cancelUpload} id="cancel" class="ml-3 rounded-md px-3 py-1 bg-gray-300 hover:bg-gray-400 focus:shadow-outline focus:outline-none">
                                Cancel
                            </button>
                        </footer>
                    </article>

                    {/* using two similar templates for simplicity in js code */}
                    <template id="file-template">
                        <li class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                            <article tabindex="0" class="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm">
                                <img alt="upload preview" class="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed" />

                                <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                    <h1 class="flex-1 group-hover:text-blue-800"></h1>
                                    <div class="flex">
                                        <span class="p-1 text-blue-800">
                                            <i>
                                                <svg class="fill-current w-4 h-4 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                                                </svg>
                                            </i>
                                        </span>
                                        <p class="p-1 size text-xs text-gray-700"></p>
                                        <button class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800">
                                            <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path class="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                            </svg>
                                        </button>
                                    </div>
                                </section>
                            </article>
                        </li>
                    </template>

                    <template id="image-template">
                        <li class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                            <article tabindex="0" class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                <img alt="upload preview" class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

                                <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                    <h1 class="flex-1"></h1>
                                    <div class="flex">
                                        <span class="p-1">
                                            <i>
                                                <svg class="fill-current w-4 h-4 ml-auto pt-" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                                                </svg>
                                            </i>
                                        </span>

                                        <p class="p-1 size text-xs"></p>
                                        <button class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                            <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path class="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                            </svg>
                                        </button>
                                    </div>
                                </section>
                            </article>
                        </li>
                    </template>
                </main>
            </div>

            <div className="py-1 text-white relative bottom-12 px-2">
                <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-24 bg-gradient-to-b from-bethel-white/5 to-bethel-green/5">
                    {/* Your page visits section JSX */}
                </div>
            </div>
        </div>
    );
}

export default FileUpload;
