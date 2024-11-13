import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


interface Trainer {
    id: number;
    name: string;
    gym: string;
    workoutType: string;
    timings: string;
    idealRate: string;
    email: string;
    phoneNumber: string;
  }

  const dummyTrainers: Trainer[] = [
    {
      id: 1,
      name: "John Doe",
      gym: "UCF RWC",
      workoutType: "Bulk",
      timings: "Afternoon (12PM-5PM)",
      idealRate: "$15/hr",
      email: "johndoe@email.com",
      phoneNumber: "123-456-7890"

    },
    {
      id: 2,
      name: "Jane Smith",
      gym: "Planet Fitness",
      workoutType: "Cut",
      timings: "Morning (8AM-12PM)",
      idealRate: "$20/hr",
      email: "janesmith@email.com",
      phoneNumber: "987-654-3210"
    }
  ];

  const SearchPage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleTrainerClick = (trainer: Trainer) => {
        if (selectedTrainer?.id === trainer.id) {
            setSelectedTrainer(null);
        } else {
            setSelectedTrainer(trainer);
        }
       
    };

    const filteredTrainers = dummyTrainers.filter((trainer) => trainer.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="search-container">
            <h1>Search Page</h1>

            <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name"
            />
        
            <div className="trainer-list">
                {filteredTrainers.map((trainer) => (
                    <div key={trainer.id} className="trainer-card" onClick={() =>handleTrainerClick(trainer)}>
                        <h2>{trainer.name}</h2>
                        <p>Gym: {trainer.gym}</p>
                        <p>Workout Type: {trainer.workoutType}</p>
                        {selectedTrainer?.id === trainer.id && (
                            <div className="trainer-contact">
                                <p><strong>Phone Number:</strong> {trainer.phoneNumber}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
  } 

  export default SearchPage;