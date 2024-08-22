export default function Skills() {
  return (
      <div className="w-full min-h-screen bg-base-200 flex justify-center items-center p-4">
          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
              <div className="w-full flex justify-center items-center flex-col mb-7">
                  <h1 className="text-4xl sm:text-5xl font-bold">My Skills</h1>
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8">
                  {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "GitHub",
                      "Python",
                      "Tailwind",
                      "C",
                  ].map((skill, index) => (
                      <div
                          key={index}
                          className="shadow-lg shadow-primary hover:scale-105 duration-300 p-4 bg-base-200 rounded-lg"
                      >
                          <p className="my-4 text-base-content">{skill}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}
