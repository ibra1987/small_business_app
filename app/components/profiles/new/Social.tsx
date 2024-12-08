


"use client";




const SocialLinks = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-start items-start">

        <label htmlFor="facebook"  className="w-full flex flex-col justify-start items-start">
           <span className="font-medium">Facebook page:</span>
            <input className="w-full p-2 rounded border-2" name="facebook" type="text" required placeholder="Facebook page"/>
            
        </label>
        <label htmlFor="linked_in" className="w-full flex flex-col justify-start items-start">
           <span className="font-medium">LinekdIn profile:</span>
            <input className="w-full p-2 rounded border-2" name="linked_in" type="text" required placeholder="LinkedIn"/>
            
        </label>
        <label htmlFor="instagram" className="w-full flex flex-col justify-start items-start">
           <span className="font-medium">Instagram profile:</span>
            <input className="w-full p-2 rounded border-2" name="instagram" type="text" required placeholder="LinkedIn"/>
            
        </label>
        <label htmlFor="website" className="w-full flex flex-col justify-start items-start">
           <span className="font-medium">website:</span>
            <input className="w-full p-2 rounded border-2" name="website" type="text" required placeholder="LinkedIn"/>
            
        </label>

    </div>
  )
}

export default SocialLinks