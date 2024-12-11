import Image from "next/image";
import Link from "next/link";
import {geistVF} from '../app/fonts'
interface TeamProps {
  name: string;
  role: string;
  img: string;
  links?: Partial<Record<'instagram' | 'linkedin' | 'twitter' | 'github', string>>;
}

const socialIcons = {
  instagram: '/insta.svg',
  linkedin: '/linkedin.svg',
  twitter: '/X.svg',
  github: '/github.svg',
};

export const Team = ({ name, role, img, links }: TeamProps) => {
  return (
    <div className="relative flex flex-col items-center gap-2 group">
      {/* Image Container with Hover Effect */}
      <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]">
        <Image 
          src={img} 
          alt={`${name}'s image`} 
          fill 
          className="rounded-full object-cover" 
          priority={false} 
        />
        {/* Icons Container */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-hover rounded-full">
          {Object.entries(links ?? {}).map(([platform, url]) => (
            url && (
              <Link 
                key={platform} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
              >
                <Image 
                  src={socialIcons[platform as keyof typeof socialIcons]} 
                  width={24} 
                  height={24} 
                  alt={`Visit ${name}'s ${platform} profile`} 
                />
              </Link>
            )
          ))}
        </div>
      </div>
      {/* Name and Role */}
      <div className="mt-2 flex flex-col gap-1">
      <h2 className={`text-center text-md font-semibold`}>{name}</h2>
      <p className={`${geistVF.className} text-gray-400 text-md text-center`}>{role}</p>

      </div>
    </div>
  );
};
