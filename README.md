# kiran Portfolio

This project is a portfolio site featuring a 3D animated character using [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) and [@react-three/drei](https://docs.pmnd.rs/drei/introduction). The character model and animations are loaded from GLTF and FBX files.

## Features

- 3D character model (`manInSuit.glb`) rendered in real-time
- Animation support (Idle, Meeting, Typing, Talking)
- Easily switch between different animations
- Built with React and Three.js

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:Kiranmavi/og-portfolio.git
   cd og-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `components/ui/Model.jsx` – Main 3D model component
- `public/animations/` – Contains GLB and FBX files for the model and animations

## Customizing the Model

- To use a different model, replace `manInSuit.glb` in `public/animations/` and update the path in `Model.jsx`.
- To add or change animations, add FBX files to `public/animations/` and update the animation loading logic in `Model.jsx`.

## Troubleshooting

- **Model is too large/small:** Adjust the `scale` prop on the `<group>` in `Model.jsx`.
- **Model is not visible:** Check the camera position and ensure the model is centered.

## License

MIT
