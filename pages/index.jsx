import Card from '@/components/card.jsx';

export default function Home() {
    return (
        <div className="min-h-screen p-8 relative">
            <Card
                icon="🚀"
                title="My Card"
                color="bg-purple-600"
                rotation="0"
                position="top-4 left-4"
            />
        </div>
    );
}