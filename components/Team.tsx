import Image from "next/image";
import Link from "next/link";

interface TeamProps {
  name: string;
  role: string;
  img: string;
  links?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const Team = ({ name, role, img, links }: TeamProps) => {
  return (
    <div className="relative flex flex-col items-center gap-2 group">
      {/* Image Container with Hover Effect */}
      <div className="relative w-[150px] h-[150px]">
        <Image src={img} width={150} height={150} alt={`${name}'s image`} className="rounded-full"/>
        {/* Icons Container */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
          {links?.instagram && (
            <Link href={links.instagram} target="_blank">
              <Image
                src="/insta.svg"
                width={24}
                height={24}
                alt="Instagram"
              />
            </Link>
          )}
          {links?.linkedin && (
            <Link href={links.linkedin} target="_blank">
              <Image
                src="/linkedin.svg"
                width={24}
                height={24}
                alt="LinkedIn"
              />
            </Link>
          )}
          {links?.twitter && (
            <Link href={links.twitter} target="_blank">
              <Image
                src="/X.svg"
                width={24}
                height={24}
                alt="Twitter"
              />
            </Link>
          )}
          {links?.github && (
            <Link href={links.github} target="_blank">
              <Image
                src="/github.svg"
                width={24}
                height={24}
                alt="GitHub"
              />
            </Link>
          )}
        </div>
      </div>
      {/* Name and Role */}
      <h1 className="text-center text-lg font-semibold">{name}</h1>
      <p className="text-gray-400 text-sm text-center">{role}</p>
    </div>
  );
};
