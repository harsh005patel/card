import Card from '@/components/card.jsx';
import { Receipt, Gavel, User, CheckSquare, FileText } from 'lucide-react';

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-x-clip" style={{ backgroundColor: '#ebedf5', fontFamily: "'Inter', sans-serif" }}>
            {/* Background pills */}
            <div className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none" style={{ background: '#ffffffff', top: '10%', left: '30%' }} />
            <div className="absolute w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none" style={{ background: '#ffffffff', bottom: '20%', right: '20%' }} />

            {/* Background  pills */}
            <div className="absolute top-[7%] right-[-150px] md:right-[-250px] opacity-30">
                <Card variant="background" color="bg-[#b8cfff]" rotation="5" />
            </div>
            <div className="absolute top-[20%] right-[-80px] md:right-[-180px] opacity-30">
                <Card variant="background" color="bg-[#b8cfff]" rotation="0" />
            </div>
            <div className="absolute top-[35%] right-[-180px] md:right-[-280px] opacity-30">
                <Card variant="background" color="bg-[#b8cfff]" rotation="-1" />
            </div>
            <div className="absolute top-[60%] left-[-300px] md:right-[-200px] opacity-30">
                <Card variant="background" color="bg-[#b8cfff]" rotation="-10" />
            </div>
            <div className="absolute top-[73%] left-[-210px] md:right-[-260px] opacity-30">
                <Card variant="background" color="bg-[#b8cfff]" rotation="0" />
            </div>
            <div className="absolute top-[85%] left-[-120px] md:right-[-260px] opacity-30">
                <Card variant="background" color="bg-[#b8cfff]" rotation="-0" />
            </div>

            {/* Main content */}
            <div className="py-16 px-6 lg:py-30 lg:px-15 relative z-10 flex flex-col lg:flex-row max-w-6xl mx-auto min-h-screen gap-10 lg:gap-16">
                {/* Left: Text */}
                <div className="flex-[3] max-w-2xl">
                    <h1 className="text-4xl md:text-6xl leading-tight mb-6" style={{ color: '#797da7', fontWeight: 300 }}>
                        A single platform to{' '}
                        <span className="font-bold" style={{ color: '#797da7' }}>manage</span> every part of your{' '}
                        <span className="font-bold" style={{ color: '#797da7' }}>legal work</span>
                    </h1>
                    <p className="max-w-lg text-base leading-relaxed" style={{ color: '#2e43ff' }}>
                        Track matters, coordinate schedules, manage clients, centralize documents, and handle communication – all in one system.
                    </p>
                </div>

                {/* Right: Floating cards */}
                {/* Mobile: stacked */}
                <div className="flex flex-col items-center gap-5 lg:hidden">
                    <Card icon={<Receipt size={24} />} title="Billing" color="bg-[#2e43ff]" rotation="0" />
                    <Card icon={<Gavel size={24} />} title="Matters" color="bg-[#e37b2c]" rotation="0" />
                    <Card
                        icon={<User size={20} />}
                        title="John Doe - Portal"
                        subtitle="Hey! Could you please review a document for me?"
                        meta={<>
                            <span className="underline ">
                                MBT-3237
                            </span>
                            {" - 2 h ago"}
                        </>}
                        variant="portal"
                        rotation="0"
                    />
                    <Card icon={<CheckSquare size={24} />} title="Tasks" color="bg-[#322847]" rotation="0" titleColor="#e37b2c" />
                    <Card icon={<FileText size={24} />} title="Documents" color="bg-[#322847]" rotation="0" titleColor="#e37b2c" />
                </div>


                <div className="flex-[2] relative min-h-[500px] hidden lg:block ">
                    <div className="absolute top-[11rem] right-0">
                        <Card icon={<Receipt size={28} />} title="Billing" color="bg-[#2e43ff]" rotation="13" />
                    </div>

                    <div className="absolute top-[23rem] -left-[350px]">
                        <Card icon={<Gavel size={28} />} title="Matters" color="bg-[#e37b2c]" rotation="-13" />
                    </div>

                    <div className="absolute top-[20rem] ">
                        <Card
                            icon={<User size={20} />}
                            title="John Doe - Portal"
                            subtitle="Hey! Could you please review a document for me?"
                            meta={<>
                                <span className="underline ">
                                    MBT-3237
                                </span>
                                {" - 2 h ago"}
                            </>}
                            variant="portal"
                            rotation="8"
                        />
                    </div>

                    <div className="absolute top-[30rem] -left-[160px]">
                        <Card icon={<CheckSquare size={28} />} title="Tasks" color="bg-[#322847]" rotation="0" titleColor="#e37b2c" />
                    </div>

                    <div className="absolute top-[440px] right-[-200px] mr-20">
                        <Card icon={<FileText size={28} />} title="Documents" color="bg-[#322847]" rotation="-7" titleColor="#e37b2c" />
                    </div>
                </div>
            </div>
        </main>
    );
}