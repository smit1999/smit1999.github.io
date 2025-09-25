import { MapPin, Calendar} from 'lucide-react';

const ExperienceCard = ({ experience, index }) => {
  return (
    <div className="group cursor-pointer transform hover:scale-103 transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-xl shadow-2xl">
        <div 
          className="h-60 relative"
          style={{ background: experience.thumbnail }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
          
          {/* Company badge */}
          <div className="absolute top-3 left-4">
            <span className="bg-600 text-white text-s px-3 py-2 rounded-full font-semibold shadow-lg border-2 border-transparent">
              {experience.type}
            </span>
          </div>
          
          {/* Rating */}
          {/* <div className="absolute top-4 right-4 flex items-center bg-black/70 px-3 py-2 rounded-full backdrop-blur-sm">
            <Star size={16} fill="gold" className="text-yellow-400 mr-2" />
            <span className="text-white font-bold">{experience.rating}</span>
          </div> */}
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white font-bold text-xl mb-1">{experience.title}</h3>
              <p className="text-gray-200 text-lg font-semibold mb-2">{experience.company}</p>
              <div className="flex items-center text-gray-300 text-sm mb-4">
                <MapPin size={14} className="mr-1 text-red-400" />
                <span className="mr-4">{experience.location}</span>
                <Calendar size={14} className="mr-1 text-blue-400" />
                <span>{experience.duration}</span>
              </div>
              <div className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="line-clamp-3">{experience.achievements}</p>
              </div>
            </div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-xl transition-all duration-500" />
        </div>
      </div>
    </div>
  );
};

// Experience Section Component
const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "ZSuite Technologies",
      type: "Fintech",
      location: "MA, USA",
      duration: "Sep 2024 - May 2025",
      achievements: [
        "Automated 1099 generation process using optimized SQL queries, performing joins on 5+ tables with aggregations, assuring 100% accuracy in clients' financial data calculations including 100+ beneficiaries having 40k+ account records.",
        "Leveraged and restructured Python code, formulating dependency injection, thereby optimizing and reducing code complexity by 30% with custom resource management using Poetry for selective library installation.",
        "Instituted an efficient GitHub workflow to check and auto-install required python libraries, also utilizing Pytest for automated code monitoring and testing upon code push, leading to 0 critical bugs reported post-deployment."
      ],
      rating: 9.2,
      thumbnail: "linear-gradient(135deg, #041d8bff 0%, #260a34ff 100%)"
    },
    {
      id: 2,
      title: "Software Developer II",
      company: "Sapio Analytics Pvt. Ltd.",
      type: "IT",
      location: "Mumbai, India",
      duration: "Nov 2022 - Jul 2023",
      achievements: [
        "Constructed a scalable job portal with 50+ REST APIs using Django Rest Framework with CRM tool that tracked user-application journey via ORM queries, ensuring storage in PostgreSQL, serving 1M+ job providers and seekers.",
        "Optimized whole calculation logic for loan defaulter system with Flask Framework and MongoDB, automating user default-interest reports for over 3000 defaulters and reducing generation time from 2 minutes to 4 seconds per report.",
        "Spearheaded the development of an Applicant Tracking Tool using AWS Lambda to automate text extraction from ZIP files, storing contents in S3, and indexing 1M+ records in AWS OpenSearch with 95% accuracy on resume search."
      ],
      rating: 8.9,
      thumbnail: "linear-gradient(135deg, #2e0432ff 0%, #570913ff 100%)"
    },
    {
      id: 3,
      title: "Software Developer",
      company: "LendenClub Techserve Pvt. Ltd.",
      type: "Fintech",
      location: "Mumbai, India",
      duration: "Jul 2021 - Oct 2022",
      achievements: [
        "Pivoted from scheduled cron-jobs to real-time repayment transactions in peer-to-peer lending platform with 500K+ users using batched sequential API calls, reducing repayment time from 5 hours to 2 minutes with 5k+ transactions.",
        "Converted existing monolithic architecture into microservices with Django REST and setup CI/CD pipelines using Docker, resulting in components having zero dependency, while reducing deployment issues by 40%.",
        "Developed 65+ REST APIs incorporating DRY and PEP8 principles enabling seamless code management across microservices, while monitoring API requests using New Relic and optimizing system performance by 32%."
      ],
      rating: 9.0,
      thumbnail: "linear-gradient(135deg, #023c6eff 0%, #2d3737ff 100%)"
    },
    {
      id: 4,
      title: "Associate Technical Analyst",
      company: "Colgate-Palmolive Pvt. Ltd.",
      type: "Healthcare",
      location: "Mumbai, India",
      duration: "Jan 2021 - Jun 2021",
      achievements: [
        "Designed an administrative portal using ReactJS and TypeScript enriched with features enabling seamless uploading, selection, and image editing having 6+ filters using React Hooks.",
        "Pioneered tool creation tailored for employee data management and monitoring active user devices. Formulated through Django integration, using Okta Authentication and Google Firebase Storage to manage data for 10K+ employees."
      ],
      rating: 8.5,
      thumbnail: "linear-gradient(135deg, #6a0423ff 0%, #49400dff 100%)"
    }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
            A journey through innovative fintech solutions and scalable software development
          </p>
        </div>
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection