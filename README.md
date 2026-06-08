# 🎥 Premium Hybrid Video Player

A sleek, premium, performance-optimized custom HTML5 media player application capable of cross-platform responsive scaling and fluid offline fallback routines. Built natively to run entirely serverless or self-hosted via local terminal sandboxes like Termux.

## 🚀 Key Architectural Features
- **🌐 Network-Adaptive State Logic:** Automatically tracks connectivity states and swaps UI controls dynamically from Online Stream links to Local File systems.
- **📁 IndexedDB Persistent Engine:** Saves device video arrays locally within client-side browser memory pools to retain tracks forever without streaming data dependencies.
- **🎛 Advanced DSP Audio Booster:** Harnesses the browser Web Audio API `AudioContext` node architecture to boost native file output gain up to 400%.
- **📱 Touch Interface Gesture Maps:** Custom localized coordinate mapping layers allowing multi-tap gesture tracking to fast-forward/rewind tracks seamlessly.
- **🔍 Sub-String Playlist Query Filter:** Instant client-side index lookup allows live matching against filename meta arrays across internal track structures.

## 🔧 Installation & Local Setup
To launch this project inside a local Android environment using **Termux**, execute:
```bash
# Update local folder targets
cd ~/videoplayer

# Fire lightweight http daemon
python -m http.server 8080 --bind 0.0.0.0
```
Open your destination path via **`http://localhost:8080`**.

