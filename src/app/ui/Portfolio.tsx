
export default function portfolio(){
    return (
    <div  className=" w-full md:h-screen text-base-content bg-base-200">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold ">
            Portfolio
          </h1>
        </div> 
        <div>
            
    </div> 
    <div className="flex space-x-4 justify-center">
    <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
                <h2 className="card-title">Video uploader from Instagram to Tiktok</h2>
                <p>It is a python automation tool using webdriver and selenium .It downloads videos from instagram feeds and uploads to tiktok account.</p>
            </div>
        </div>
        <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
                <h2 className="card-title">Long video to short clips</h2>
                <p>It is a bash script using ffmpeg that takes a long video and extracts 90seconds clips that you can share to different social media platforms.</p>
            </div>
        </div>
    </div>
        
      </div>
    </div>
       );
}