const ProjectVision = () => {
    return (
      <div className="w-full min-h-screen relative mt-[6vw]">
        {/* Gradient background with clip-path */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#FFF280] to-[#FFA800]"
          style={{ clipPath: "polygon(50% 40%, 100% 25%, 100% 100%, 0 100%, 0 57%)" }}
        ></div>
  
        {/* Content Container */}
        <div className="container relative flex flex-col items-center justify-center gap-10 text-center z-10 px-4 sm:px-8">
          {/* Heading */}
          <div className="heading">
            <h1 className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl text-[rgba(255,168,0,1)] font-bold">
              Project Vision
            </h1>
          </div>
  
          {/* Image */}
          <div className="pic w-full h-auto sm:h-[50vh] md:h-[100vh]">
            <img
              className="w-full h-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/3a9f/0641/74f33d37d4f4ac9264a4163ac6abf312?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B2IsqxTnpVCaI0wLMiWgdDFT7YlimQjkf61hOlJh4-MG1-4XwrjPdrQJgSNWQGoYQ9iUDDiqiZKpxxuJmBzzw7sgVm9ZM~bI3aw7v4N3T0M18kRGf7S9AOspjHrkYlNcySGGItbZ~2lZXnmJUsPcS9nPRg3yZFRA5eT6gVT97dmuFH6msayRnx3C4bd2zAmr6O~oYvCoYMrl32FmzPr5O5aLbl-G9oF5KaJrLvcseH9NcisXcmjEwQpdmR294faYI-CISV~VYWGTa10kE5pNxTzoArtm3kC7aHzqh5wWcULcGcS0AmFy1rX7RMbxGiq~g9Nqp8E4UnnwRVeOoWi9mQ__"
              alt="Project Vision"
            />
          </div>
  
          {/* Paragraph */}
          <div className="para flex items-center justify-center text-center">
  <p className="w-full text-xl sm:text-lg md:text-xl lg:text-[2vw] font-bold font-poppins leading-normal lg:leading-relaxed">
    Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
  </p>
</div>

        </div>
      </div>
    );
  };
  
  export default ProjectVision;
  