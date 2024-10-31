import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';
import PropTypes from 'prop-types';

const teamMembers = [
  {
    name: 'Alwin Bhandari',
    role: 'Graphics Designer, Video Editor',
    imgSrc: 'https://placehold.co/150x150',
    socialLinks: [
      {
        href: 'https://www.facebook.com/hero.keto.1447',
        icon: <FaFacebookF className='text-blue-600' />,
      },
      {
        href: '#',
        icon: <FaInstagram className='text-pink-500' />,
      },
      {
        href: 'https://github.com/Alwin203',
        icon: <FaGithub className='text-gray-300' />,
      },
    ],
  },
  {
    name: 'Samir Niroula',
    role: 'Web Developer, Photographer',
    imgSrc: 'https://placehold.co/150x150',
    socialLinks: [
      {
        href: 'https://www.facebook.com/samirn.com.np',
        icon: <FaFacebookF className='text-blue-600' />,
      },
      {
        href: 'https://www.instagram.com/samirn.me/',
        icon: <FaInstagram className='text-pink-500' />,
      },
      {
        href: 'https://github.com/smrn001',
        icon: <FaGithub className='text-gray-300' />,
      },
    ],
  },
  {
    name: 'Prabin Thakur',
    role: 'Data Scientist , Marketing Manager',
    imgSrc: 'https://placehold.co/150x150',
    socialLinks: [
      {
        href: 'https://www.facebook.com/prabin.thakur.148',
        icon: <FaFacebookF className='text-blue-600' />,
      },
      {
        href: '#',
        icon: <FaInstagram className='text-pink-500' />,
      },
      {
        href: 'https://github.com/pluto-111',
        icon: <FaGithub className='text-gray-300' />,
      },
    ],
  },
  {
    name: 'Piyush Karn',
    role: 'Web Developer, Videographer',
    imgSrc: 'https://placehold.co/150x150',
    socialLinks: [
      {
        href: 'https://www.facebook.com/piyush.karn.313',
        icon: <FaFacebookF className='text-blue-600' />,
      },
      {
        href: 'https://www.instagram.com/piyushkarn87/',
        icon: <FaInstagram className='text-pink-500' />,
      },
      {
        href: 'https://github.com/piiyuushh',
        icon: <FaGithub className='text-gray-300' />,
      },
    ],
  },
];
interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
  socialLinks: {
    href: string;
    icon: JSX.Element;
  }[];
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className='bg-white w-auto  dark:bg-[#09090B] border border-gray-300 dark:border-[#27272A] text-gray-800 dark:text-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg  flex flex-col justify-around transition-shadow duration-200 ease-in-out'>
    <img
      src={member.imgSrc}
      alt={member.name}
      className='rounded-full w-24 h-24 md:w-20 md:h-20 mx-auto mb-4'
    />
    <h3 className='text-lg md:text-xl font-medium text-center'>
      {member.name}
    </h3>
    <p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
      {member.role}
    </p>
    <div className='flex justify-center space-x-3 mt-4'>
      {member.socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
        >
          {link.icon}
        </a>
      ))}
    </div>
  </div>
);

const TeamSection = () => (
  <div className='py-12 bg-gray-50 dark:bg-black border border-gray-300 dark:border-[#27272A] rounded-xl mt-5 max-w-6xl mx-auto'>
    <h2 className='text-2xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-4'>
      Meet Our Team
    </h2>
    <p className='text-gray-700 dark:text-gray-100 text-center mb-4 mx-3'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
      repudiandae volupta
    </p>
    <div className='max-w-4xl mx-2 grid gap-2   sm:px-6 lg:px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  </div>
);

TeamMemberCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default TeamSection;
