import React, {useState} from 'react';
import {useDropzone} from "react-dropzone";
import * as XLSX from 'xlsx';
import {FaDropbox} from "react-icons/fa";
import axios from "axios";
import {useProvider} from "../provider.jsx";

export const UploadFile = () => {

    const [fileInfo, setFileInfo] = useState({name: '', size: 0});
    const {totalSheet, setTotalSheet} = useProvider().providing;

    const onDrop = React.useCallback((acceptedFiles) => {

        acceptedFiles.forEach((file) => {

            const reader = new FileReader();

            reader.onabort = () => alert('file reading was aborted');
            reader.onerror = () => alert('file reading has failed');

            reader.onload = async (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {type: 'array'});

                setTotalSheet(workbook.SheetNames.length);

                const formData = new FormData();
                formData.append('file', file);

                await axios.post('http://localhost:8080/api/file', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(() => {
                    alert('Successfully sent file to server!');
                }).catch(() => {
                    alert('Error: file is not sent to server!');
                });
            };
            reader.readAsArrayBuffer(file);

            setFileInfo({name: file.name, size: file.size});
        });

    }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    return (
        <div>
            <div className={`absolute top-[140px] left-[170px] w-[500px] h-[100px]`}>
                <div className={`flex flex-col space-y-4`}>
                    <div className={`w-[150px] h-[45px] flex justify-center items-center bg-green-500 rounded-lg whitespace-nowrap cursor-pointer`} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div className={`flex flex-row justify-center items-center space-x-2`}>
                            <FaDropbox/>
                            <p className={`font-poppins`}>Upload file</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute bottom-1 right-[375px] w-[100px] h-[50px] text-white space-x-2`}>
                <div className={`flex flex-row justify-center items-center space-x-2 font-mono`}>
                    {fileInfo.name ? <p className={`whitespace-nowrap`}> | NAME: {fileInfo.name} | </p> : ''}
                    {fileInfo.size ? <p className={`whitespace-nowrap`}> SIZE: {fileInfo.size} bites | </p> : ''}
                    {totalSheet ? <p className={`whitespace-nowrap`}>SHEETS: {totalSheet} | </p> : ''}
                </div>

            </div>
        </div>

    );
}

