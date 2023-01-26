import { ChangeEvent, useCallback, useState } from "react";
import { postImageUpload } from "../../api/imageUpload";

const ImageUploadForm = () => {
  const [image, setImage] = useState<File>();
  const [loading, toggleLoading] = useState(false)
  const [error, setError] = useState('')
  
  const memoizedHandleChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      toggleLoading(true)
      try {
        console.log(e)
        // do upload logic
        await postImageUpload(e.target.files[0])
        setImage(e.target.files[0])
      } catch (e) {
        setError(e.message)
      }
      toggleLoading(false)
    }, []
  );
  return (
    <form>
      <input type="file" onChange={memoizedHandleChange} accept="image/jpeg, image/png, image/jpg"/>
      {loading ? "Loading" : <></>}
      {error ? error : <></>}
      {image ? 
        <output>
          <img alt="not found" width={"250px"} src={URL.createObjectURL(image)} />
        </output>
        : <></>}
    </form>
  )
}

export default ImageUploadForm