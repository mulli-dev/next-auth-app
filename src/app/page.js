"use client";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useEffect } from "react";

export default function Home() {
  // State management for dropdowns
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const toggleDropdown = (dropdown) => {
    // If the clicked dropdown is already open, close it, otherwise open it and close others
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const slides = [
    {
      backgroundImage:
        "url(' https://t3.ftcdn.net/jpg/02/56/92/58/360_F_256925881_PX62yR6uaLCqVXYbQQAVGbsmtXp16t2M.jpg')",

      title: "Research on Livestock",
      content:
        "KALRO addresses constraints in the livestock sub-sector through the development of technologies that improve feed availability throughout the year.",
    },
    {
      backgroundImage:
        "url(' https://media.istockphoto.com/id/1284394529/photo/ripe-milo-grain-heads-park-county-indiana.jpg?s=612x612&w=0&k=20&c=pchDlSvCfukbCfi_NW6mnLMJoaBwX1RTjdyJKlKn7A4=')",

      title: "Research on Sorghum Varieties",
      content:
        "Sorghum is a drought tolerant crop hence it's grown in the drier areas. Our research objectives in sorghum research are: Increased yield, drought, disease and pest tolerance, earliness, seed colour and marketability.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const resources = [
    {
      title: "NEWS",
      image:
        "https://library.busitema.ac.ug/sites/default/files/default_images/defaultagricimage.png",
      link: "/news",
    },
    {
      title: "FALL ARMYWORM",
      image: "https://www.dairynz.co.nz/media/n35kivij/fall-armyworm.jpg",
      link: "/fall-armyworm",
    },
    {
      title: "RESEARCH PROJECTS",
      image:
        "https://media.istockphoto.com/id/1327569521/photo/science-of-plant-research-chromosome-dna-and-genetic-development-of-rice-varieties-scientist.jpg?s=612x612&w=0&k=20&c=eBT06FCfRERpoQsCP-AEZzDfMd2TXBV24k04fL8F3yU=",
      link: "/research-projects",
    },
    {
      title: "INSTITUTES",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQGvAm-_Oo-pGw/feedshare-shrink_800/feedshare-shrink_800/0/1718198323766?e=2147483647&v=beta&t=WXPTIF0jaTHWxueTz-Xoj1rPoLQz-ju8J4U4tffSRY8",
      link: "/institutes",
    },
    {
      title: "INFORMATION RESOURCES",
      image:
        "https://agriculture.uonbi.ac.ke/sites/default/files/2021-10/land%20RM_1.jpg",
      link: "/information-resources",
    },
    {
      title: "COMPLAINTS AND FEEDBACK",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WIeONe37sw1gfR7Q5z6XXBXF31XZEvUxFA&s",
      link: "/complaints-feedback",
    },
  ];

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-green-600 z-10 font-carlito">
        <ul className="flex justify-center gap-6 py-2 font-semibold text-white">
          <li>
            <Link href="/">Home</Link>
          </li>

          {/* About Us Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("about")}
            >
              About Us
              <RiArrowDropDownLine className="ml-1" />
            </button>
            {openDropdown === "about" && (
              <ul className="absolute z-20 mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/board">KALRO Board</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/team">Vision and Mission</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/management">KALRO management</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Departments Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("departments")}
            >
              Departments
              <RiArrowDropDownLine className="ml-1" />
            </button>
            {openDropdown === "departments" && (
              <ul className="absolute z-20 mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/crops">Crops</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/livestock">Livestock</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/institutes">Institutes</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Information Resources Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("resources")}
            >
              Information Resources
              <RiArrowDropDownLine className="ml-1" />
            </button>
            {openDropdown === "resources" && (
              <ul className="absolute z-20 mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/application">Mobile application</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/web">KALRO Web Information Resources</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/is">Information brochures</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/publication">Publication</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/elrp">ELRP</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Media Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("media")}
            >
              Media
              <RiArrowDropDownLine className="ml-1" />
            </button>
            {openDropdown === "media" && (
              <ul className="absolute z-20 mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/press">Press Release</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/event">Upcoming events</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/briefs">Briefs</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/gallery">Gallery</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/videos">Videos</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Procurement Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("procurement")}
            >
              Procurement
              <RiArrowDropDownLine className="ml-1" />
            </button>
            {openDropdown === "procurement" && (
              <ul className="absolute z-20 mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/tender">Tenders</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/procurement">
                    Procurement Opportunities
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/archived">Archived Tenders</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Customer Care Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("customerCare")}
            >
              Customer Care
              <RiArrowDropDownLine className="ml-1" />
            </button>
            {openDropdown === "customerCare" && (
              <ul className="absolute z-20 mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/contact">Contact Us</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/report">
                    Report on Client Feedback on KALRO products and services
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/complaints">Complaints and Feedback</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/service">Service Charter</Link>
                </li>
                <li className="px-4 py-2 hover:bg-green-700">
                  <Link href="/about/customer">
                    Customer Satisfaction Survey
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-screen  overflow-hidden"
        style={{ height: "75vh" }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: slide.backgroundImage }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-8">
              <div className="bg-black bg-opacity-50 p-6 sm:p-8 max-w-3xl text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl">{slide.content}</p>
                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Click Here
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 bg-opacity-50 hover:bg-green-800 focus:outline-none text-white text-2xl transition-colors duration-100 rounded-full"
          onClick={nextSlide}
        >
          &#8250;
        </button>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 m-2 bg-gray-800 bg-opacity-60 hover:bg-green-800 focus:outline-none text-white text-2xl transition-colors duration-100 rounded-full"
          onClick={prevSlide}
        >
          &#8249;
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-3 h-3 rounded-full mx-1 ${
                currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Page Content */}
      {/* Page Content After Hero Section */}
      <div className="bg-white py-12 flex justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
            Welcome to KALRO
          </h2>

          <div className="mb-8 max-w-[1300px] mx-auto">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              Excellence in agricultural and livestock research towards
              transformed livelihoods.
            </p>
          </div>

          <div className="mb-8 max-w-[1300px] mx-auto">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To conduct agricultural research through the application of
              science, technology, and innovation to catalyze sustainable growth
              and development in agriculture and livestock Product Value Chains.
            </p>
          </div>

          <div className="mb-8 max-w-[1300px] mx-auto">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Goal</h3>
            <p className="text-gray-700">
              To contribute to the growth of the agricultural sector through
              research coordination and regulation; technology and innovation
              development; and catalyze transfer and utilization of agricultural
              research outputs.
            </p>
          </div>

          <div className="max-w-[1300px] mx-auto">
            <h3 className="text-xl font-normal text-green-600 mb-4">Mandate</h3>
            <p className="text-gray-700">
              The mandate of KALRO as stated in the Act is to:
            </p>
            <ol className="list-decimal pl-5 text-gray-700 mt-2">
              <li>
                Promote, streamline, coordinate, and regulate in Kenya research
                in crops, livestock, genetic resources, and biotechnology.
              </li>
              <li>
                Promote, streamline, coordinate, and regulate research in crops
                and animal diseases.
              </li>
              <li>
                Expedite equitable access to research information, resources,
                and technology and promote the application of the research
                findings and technology in the field of agriculture.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-green-600 py-12">
        <h2 className="text-center text-white text-3xl font-bold mb-6">
          Resources
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {resources.map((resource, index) => (
            <Link href={resource.link} key={index}>
              <div className="relative group">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-56 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xl font-bold">
                    {resource.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-center text-green-700 text-3xl font-bold mb-6">
          From our Blog
        </h2>
        <div className=" max-w-[1300px] mx-auto mb-6 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4    ">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://www.poultryworld.net/app/uploads/2022/10/IMG_broiler-breeders-group-nest-shenandoah-partner-article.jpg"
              alt="Poultry House"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Building Poultry House
              </h3>
              <p className="text-gray-600">
                Housing is necessary to protect chickens from predators, bad
                weather, and theft while providing shelter for egg-laying hens.
              </p>
              <div className="flex justify-center items-center w-full">
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://thebeatsheet.com.au/wp-content/uploads/FAWoats-20240326_102817-1024x768.jpg"
              alt="Fall Armyworm"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Identification and Management of Fall Armyworm in Kenya
              </h3>
              <p className="text-gray-600">
                Fall armyworm is an insect pest that damages crops at larval
                stages. First detected in Kenya in March 2017.
              </p>

              <div className="flex justify-center items-center w-full">
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden ">
            <img
              src="https://play-lh.googleusercontent.com/IzryeJoQliEpHaiYAjJ-K9xCsQu8vRoKmUf3WuI2q814lVOJZG-zfnvEJNV77mEL1PU"
              alt="KAOP"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Kenya Agricultural Observatory Platform (KAOP)
              </h3>
              <p className="text-gray-600">
                KAOP uses satellite geo-data to provide farmers with real-time
                insights on precipitation, temperature, and crop conditions.
              </p>
              <div className="flex justify-center items-center w-full">
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center w-full mt-6">
          <a
            href="/posts"
            className="text-green-500 hover:text-red-500 text-xl font-bold transition-colors duration-300"
          >
            View All Posts
          </a>
        </div>
      </div>
    </div>
  );
}
