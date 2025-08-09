# Data Structures & Algorithms Portfolio

A modern, interactive portfolio showcasing various data structures and algorithms implementations with real-time visualizations. Built with React.js frontend and Python Flask backend following industry-standard project structure.

## 🏗️ Project Structure

```
DSA-Portfolio/
├── frontend/                 # React.js application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── linkedlist/  # LinkedList specific components
│   │   │   └── Navbar.tsx   # Navigation component
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx     # Portfolio home page
│   │   │   ├── Projects.tsx # Projects overview
│   │   │   └── LinkedListPage.tsx
│   │   ├── services/        # API communication
│   │   └── App.tsx          # Main app with routing
│   ├── package.json
│   └── tsconfig.json
├── backend/                 # Python Flask API
│   ├── DLL/                 # Doubly Linked List implementation
│   │   ├── route/           # API routes
│   │   └── service/         # Business logic
│   ├── BTS/                 # Binary Tree implementation
│   ├── Sort/                # Sorting algorithms
│   ├── Graph/               # Graph algorithms
│   ├── HashTable/           # Hash table implementation
│   ├── Heap/                # Heap data structure
│   ├── Queue/               # Queue implementation
│   ├── Stack/               # Stack implementation
│   ├── app.py               # Flask application entry point
│   └── requirements.txt     # Python dependencies
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The React app will start on `http://localhost:3000`

### Backend Setup

```bash
cd backend
# Create virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
python app.py
```

The Flask API will start on `http://localhost:5000`

## 🎯 Features

### Current Implementations

#### 🔗 Doubly Linked List
- **Full CRUD Operations**: Insert, delete, update nodes at any position
- **Advanced Operations**: Reverse list, pop from head/tail
- **Real-time Visualization**: See changes instantly with smooth animations
- **API Integration**: Backend communication with latency tracking
- **Interactive UI**: Easy-to-use controls for all operations

### 📋 Planned Features

- **🌳 Binary Search Tree**: Insertion, deletion, traversal visualizations
- **🔍 Sorting Algorithms**: Bubble, Quick, Merge sort with step-by-step animation
- **📊 Graph Algorithms**: Dijkstra's, BFS, DFS pathfinding
- **🏔️ Heap Operations**: Priority queue with heapify visualization
- **🗂️ Hash Table**: Collision resolution and load factor analysis

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **React Router** for navigation
- **CSS3** with modern styling (Grid, Flexbox, Gradients)
- **Responsive Design** for mobile compatibility

### Backend
- **Python Flask** RESTful API
- **Flask-CORS** for cross-origin requests
- **Modular Architecture** with separate services and routes

## 📡 API Endpoints

### Doubly Linked List API

- `POST /DLL/v1/create` - Create new list
- `POST /DLL/v1/append` - Add element to end
- `POST /DLL/v1/prepend` - Add element to beginning
- `POST /DLL/v1/insert` - Insert at specific index
- `DELETE /DLL/v1/remove` - Remove by index
- `PUT /DLL/v1/reverse` - Reverse entire list
- `DELETE /DLL/v1/pop` - Remove last element
- `DELETE /DLL/v1/popFirst` - Remove first element
- `PUT /DLL/v1/setValue` - Update value at index
- `GET /DLL/v1/getValue` - Get value at index

## 🎨 Design Features

- **Modern UI/UX**: Glass-morphism effects, smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Professional Portfolio Layout**: Clean, organized presentation
- **Interactive Visualizations**: Real-time data structure animations
- **Color-coded Elements**: Intuitive visual feedback

## 🧪 Development

### Running in Development Mode

1. **Start Backend**:
   ```bash
   cd backend
   python app.py
   ```

2. **Start Frontend**:
   ```bash
   cd frontend
   npm start
   ```

### Project Standards

- **TypeScript** for type safety
- **Component-based Architecture** for reusability
- **Modular Backend** with separation of concerns
- **RESTful API Design** following best practices
- **Responsive CSS** without external frameworks

## 📱 Screenshots

### Home Page
- Hero section with portfolio introduction
- Featured projects grid
- Modern gradient background with glass effects

### LinkedList Visualizer
- Interactive node visualization
- Real-time operation controls
- API latency tracking
- Responsive design

### Projects Overview
- Comprehensive project listings
- Technology stack badges
- Status indicators (Completed/Planned)
- Feature breakdowns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Contact

Feel free to reach out for questions, suggestions, or collaboration opportunities!

---

**Built with ❤️ for learning and demonstrating Data Structures & Algorithms**