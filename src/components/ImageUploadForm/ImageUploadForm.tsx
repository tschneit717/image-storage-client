import { ChangeEvent, FormEventHandler, useCallback, useState } from "react";
import { postImageUpload } from "../../api/imageUpload";

const ImageUploadForm = () => {
  const [image, setImage] = useState<File>();
  const [loading, toggleLoading] = useState(false)
  const [error, setError] = useState('')
  
  const memoizedHandleChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.files[0])
    }, []
  );

  
  const handleSumbit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    toggleLoading(true)
    try {
      console.log(e)
      await postImageUpload(image)
    } catch (e) {
      setError(e.message)
    }
    toggleLoading(false)
}
  return (
    <form onSubmit={(e) => handleSumbit(e)}>
      <input type="file" onChange={memoizedHandleChange} accept="image/jpeg, image/png, image/jpg"/>
      <button type="submit">Submit</button>
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