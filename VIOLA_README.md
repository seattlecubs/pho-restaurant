# Viola the Bird - Interactive Musical Experience

An interactive web-based musical instrument inspired by Google Arts & Culture's Viola the Bird experiment. This game allows you to play a virtual viola using your mouse or touch screen.

## Features

### 🎵 Interactive Musical Instrument
- **Real-time sound generation** using Web Audio API
- **Position-based frequency mapping** - different areas of the viola produce different pitches
- **Multiple instrument types** - switch between viola, violin, and cello sounds
- **Harmonic overtones** for more realistic instrument sounds

### 🎨 Visual Effects
- **Animated musical notes** that float up when you play
- **Particle effects** that burst from interaction points
- **Real-time waveform visualization** showing the current sound wave
- **Beautiful gradient backgrounds** and smooth animations

### 🎛️ Controls
- **Volume slider** to adjust sound level
- **Sound toggle** to mute/unmute
- **Instrument selector** to switch between different string instruments
- **Interactive bow** that can be dragged around

## How to Play

1. **Open the game**: Open `viola-the-bird.html` in a modern web browser
2. **Click and drag** on the viola body to create sounds
3. **Move your cursor** around different areas to change the pitch
4. **Drag the bow** to create additional effects
5. **Use the controls** in the top-right corner to adjust settings

### Touch Support
- Works on mobile devices and tablets
- Touch and drag on the viola to play
- Multi-touch gestures supported

## Technical Details

### Audio Implementation
- Uses Web Audio API for real-time sound synthesis
- Generates sine, triangle, and sawtooth waveforms
- Includes harmonic overtones for realistic instrument sounds
- Frequency range: 200-800 Hz

### Visual Effects
- CSS animations for musical notes and particles
- Canvas-based waveform visualization
- Smooth transitions and hover effects
- Responsive design for different screen sizes

### Browser Compatibility
- Modern browsers with Web Audio API support
- Chrome, Firefox, Safari, Edge
- Mobile browsers with touch support

## File Structure

```
pho-restaurant/
├── viola-the-bird.html      # Main game file
└── VIOLA_README.md          # This documentation
```

## Getting Started

1. Navigate to the pho-restaurant directory
2. Open `viola-the-bird.html` in your web browser
3. Allow audio permissions if prompted
4. Start playing!

## Customization

You can easily customize the game by modifying the JavaScript code:

- **Change frequency ranges** by modifying the frequency mapping in `updateFrequency()`
- **Add new instruments** by extending the `getWaveformType()` method
- **Modify visual effects** by adjusting CSS animations
- **Add new sound effects** by creating additional oscillators

## Credits

Inspired by Google Arts & Culture's Viola the Bird experiment, which uses machine learning to create an interactive cello experience. This web version brings similar interactive musical capabilities to the browser.

## License

This project is open source and available for educational and personal use. 