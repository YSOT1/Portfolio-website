export default function Portfolio() {
  return (
      <div className="w-full min-h-screen text-base-content bg-base-200">
          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
              <div className="pb-8 w-full flex justify-center items-center flex-col">
                  <h1 className="text-4xl sm:text-5xl font-bold">Portfolio</h1>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center">
                  <div className="card bg-primary text-primary-content w-full max-w-xs md:max-w-sm h-[200px]">
                      <div className="card-body">
                          <h2 className="card-title">Video uploader from Instagram to Tiktok</h2>
                          <p>It is a Python automation tool using WebDriver and Selenium. It downloads videos from Instagram feeds and uploads them to a TikTok account.</p>
                      </div>
                  </div>
                  <div className="card bg-primary text-primary-content w-full max-w-xs md:max-w-sm h-[200px]">
                      <div className="card-body">
                          <h2 className="card-title">Long video to short clips</h2>
                          <p>It is a bash script using FFmpeg that takes a long video and extracts 90-second clips that you can share on different social media platforms.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
