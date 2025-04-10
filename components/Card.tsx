import {geistVF} from '../app/fonts'
interface CardProps {
    title: string;
    desc: string;
  }
  
  export const Card = ({ title, desc }: CardProps) => {
    return (
      <div className={`${geistVF.className} relative w-80 md:w-96 md:h-72 overflow-hidden rounded-lg p-[1px] backdrop-blur-2xl shadow-2xl`}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
        <div className="relative flex h-full w-full flex-col gap-4 rounded-lg bg-black p-4">
          <p className="font-bold text-2xl tracking-wider text-center text-white">{title}</p>
          <p className={`  text-lg tracking-wide text-white mt-4 text-center`} >{desc}</p>
        </div>
      </div>
    );
  };
  