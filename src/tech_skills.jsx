import React from "react";

class TechSkills extends React.Component {
  render() {
    
    const fileId = "1QFBVXamFEG6Wfn-ogP0TKRPHHu_VPt1g";

    return (
      <div className="flex flex-wrap justify-evenly gap-2">
        
        <div className="w-80">
          <h1 className="text-4xl py-4 capitalize font-semibold">
            Programming Lang
            <hr className="w-20 bg-teal-600 border-0 p-0.5 mt-3" />
          </h1>
        </div>
        <div className="w-80 md:mx-20">
            <iframe
              src={`https://drive.google.com/file/d/${fileId}/preview`}
              className="md:mt-10 w-max md:w-md md:h-72 bg-white"
              title="Projects"
            />
          </div>
      </div>
    );
  }
}

export default TechSkills;