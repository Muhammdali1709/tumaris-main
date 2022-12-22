import React,{useState} from 'react'
import "./fileupload.scss"
import cloud from "../../assets/images/cloud.svg"
function FileUpload(props) {
  const MAX_COUNT = 2;
  const [uploadedFiles, setUploadedFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false);


    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded) setUploadedFiles(uploaded)

    }

    const handleFileEvent =  (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }
  return (
    <>
    <input id='fileUpload' type='file' multiple
					accept='image/png,image/jpg,image/jpeg,image/svg'
                    onChange={handleFileEvent}
                    disabled={fileLimit}
			/>

			<label htmlFor='fileUpload' {...props}>
        <a className={` ${!fileLimit ? '' : 'disabled'} fileupload__btn `}>
          <img src={cloud} alt="cloud" className='cloud__img' />
          Upload Files
        </a>
			</label>

			<span className="uploaded-files-list">
				{uploadedFiles.map((file,index) => (
          <span key={index}>
                 <span className='uploaded-files'>
            {file.name.slice(0,10)}
            <span className='uploaded-files-active'>Uploaded</span>
            </span>
          </span>
        ))}
			</span>
    </>
  )
}

export default FileUpload
