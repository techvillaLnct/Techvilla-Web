import { Appbar } from "@/components/Appbar";
import { Footer } from "@/components/Footer";
import { Roadmaps } from "@/components/Roadmaps";
import { roadMapsdetails } from "@/data/data";

export default function Resources() {
    return (
        <div className="min-h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/techvilla-bg.png')" }}>
            <div className="mb-10">
                <Appbar />
            </div>
            <div>
                <div className="px-5">
                    <h1 className="text-center text-4xl md:text-3xl font-extralight">Resources</h1>
                    <div className="space-y-12 flex flex-col items-center gap-4">
                        <h1 className="mt-5 text-center text-xl lg:text-3xl">Enter To The Villa of Tech !</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                            {roadMapsdetails.map((data,index) => (
                                <Roadmaps key={index} img={data.img} title={data.title} desc={data.desc} link={data.link} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}
