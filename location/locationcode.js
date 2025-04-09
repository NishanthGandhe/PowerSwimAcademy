// Mock data for locations
const locations = [
    {
        id: 1,
        name: "Irving Location",
        address: "1200 Hidden Ridge",
        city: "Irving",
        state: "TX",
        zip: "75063",
        hours: {
            Monday: "6:00 AM - 9:00 PM",
            Tuesday: "6:00 AM - 9:00 PM",
            Wednesday: "6:00 AM - 9:00 PM",
            Thursday: "6:00 AM - 9:00 PM",
            Friday: "6:00 AM - 9:00 PM",
            Saturday: "8:00 AM - 6:00 PM",
            Sunday: "8:00 AM - 6:00 PM"
        },
        programs: [
            {
                name: "Baby Turtle",
                description: "No swimming ability necessary",
            },
            {
                name: "Frog",
                description: "Minimal swimming ability, just starting to learn basic skills. Recently comfortable with water",
            },
            {
                name: "Sea Otter",
                description: "Basic swimming skills developed but still lacks confidence and endurance.",
            },
            {
                name: "Seal",
                description: "Moderate swimming proficiency with improved technique and endurance.",
            },
            {
                name: "Stingray",
                description: "High swimming proficiency with strong technique and endurance.",
            },
            {
                name: "Orca",
                description: "Exceptional swimming ability with mastery of techniques, endurance, and safety skills.",
            }
        ],
    },
    {
        id: 2,
        name: "Coppell Location",
        address: "Coming Soon",
        city: "Coppell",
        state: "TX",
        zip: "75019",
        hours: {
            Monday: "7:00 AM - 8:00 PM",
            Tuesday: "7:00 AM - 8:00 PM",
            Wednesday: "7:00 AM - 8:00 PM",
            Thursday: "7:00 AM - 8:00 PM",
            Friday: "7:00 AM - 8:00 PM",
            Saturday: "8:00 AM - 6:00 PM",
            Sunday: "8:00 AM - 6:00 PM"
        },
        programs: [
            {
                name: "Baby Turtle",
                description: "No swimming ability necessary",
            },
            {
                name: "Frog",
                description: "Minimal swimming ability, just starting to learn basic skills. Recently comfortable with water",
            },
            {
                name: "Sea Otter",
                description: "Basic swimming skills developed but still lacks confidence and endurance.",
            },
            {
                name: "Seal",
                description: "Moderate swimming proficiency with improved technique and endurance.",
            },
            {
                name: "Stingray",
                description: "High swimming proficiency with strong technique and endurance.",
            },
            {
                name: "Orca",
                description: "Exceptional swimming ability with mastery of techniques, endurance, and safety skills.",
            }
        ],
    },
    {
        id: 3,
        name: "Prosper Location",
        address: "Coming Soon",
        city: "Prosper",
        state: "TX",
        zip: "75033",
        hours: {
            Monday: "6:00 AM - 10:00 PM",
            Tuesday: "6:00 AM - 10:00 PM",
            Wednesday: "6:00 AM - 10:00 PM",
            Thursday: "6:00 AM - 10:00 PM",
            Friday: "6:00 AM - 10:00 PM",
            Saturday: "8:00 AM - 8:00 PM",
            Sunday: "8:00 AM - 8:00 PM"
        },
        programs: [
            {
                name: "Baby Turtle",
                description: "No swimming ability necessary",
            },
            {
                name: "Frog",
                description: "Minimal swimming ability, just starting to learn basic skills. Recently comfortable with water",
            },
            {
                name: "Sea Otter",
                description: "Basic swimming skills developed but still lacks confidence and endurance.",
            },
            {
                name: "Seal",
                description: "Moderate swimming proficiency with improved technique and endurance.",
            },
            {
                name: "Stingray",
                description: "High swimming proficiency with strong technique and endurance.",
            },
            {
                name: "Orca",
                description: "Exceptional swimming ability with mastery of techniques, endurance, and safety skills.",
            }
        ],
    }
];

// DOM elements
const locationCount = document.getElementById('location-count');
const locationsGrid = document.querySelector('.locations-grid');
const modal = document.getElementById('location-modal');
const closeButton = document.querySelector('.close-button');
const backToList = document.getElementById('back-to-list');
const modalRegister = document.getElementById('modal-register');


// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add click event for location cards
    const locationCards = document.querySelectorAll('.location-card');
    locationCards.forEach(card => {
        card.addEventListener('click', () => {
            const locationId = parseInt(card.getAttribute('data-id'));
            openLocationModal(locationId);
        });
    });

    // Modal close
    closeButton.addEventListener('click', closeModal);
    backToList.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Register buttons
    const registerButtons = document.querySelectorAll('.register');
    registerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent opening the modal
            alert('Redirecting to registration page...');
        });
    });

    // View schedule buttons
    const scheduleButtons = document.querySelectorAll('.view-schedule');
    scheduleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent opening the modal
            alert('Schedule Coming Soon!');
        });
    });

    modalRegister.addEventListener('click', () => {
        alert('Redirecting to registration page...');
        //https://tinyurl.com/SwimInterestForm2025
        
    });
});

// Function to open location modal
function openLocationModal(locationId) {
    const location = locations.find(loc => loc.id === locationId);
    
    if (!location) {
        alert('Location not found');
        return;
    }
            
    // Set hours
    const hoursGrid = document.querySelector('.hours-grid');
    hoursGrid.innerHTML = '';
    
    for (const [day, hours] of Object.entries(location.hours)) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        
        const timeElement = document.createElement('div');
        timeElement.className = 'time';
        timeElement.textContent = hours;
        
        hoursGrid.appendChild(dayElement);
        hoursGrid.appendChild(timeElement);
    }
    
    // Set programs
    const programList = document.querySelector('.program-list');
    programList.innerHTML = '';
    
    location.programs.forEach(program => {
        const programElement = document.createElement('div');
        programElement.className = 'program';
        
        programElement.innerHTML = `
            <h4>${program.name}</h4>
            <p>${program.description}</p>
            <p>Next class: ${program.nextClass}</p>
            <span class="availability ${program.availability === 'limited' ? 'limited' : ''}">${program.availability === 'limited' ? 'Limited Spots' : 'Spots Available'}</span>
        `;
        
        programList.appendChild(programElement);
    });
    
    // Display modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
}