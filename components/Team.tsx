import Image from "next/image";

interface TeamProps {
  name: string;
  role: string;
  img: string;
}

export const Team = ({ name, role, img }: TeamProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-100">
        <Image src={img} width={100} height={100} alt={`${name}'s image`} />
      </div>
      <h1 className="text-center">{name}</h1>
      <p className="text-gray-400 text-xs text-center">{role}</p>
    </div>
  );
};
