CUBESAT MISSION CONTROL - APP
=============================

SABSE EASY (Windows):
  Start-Dashboard.bat par double-click karo.
  Dashboard ek alag app-window me khulega (Edge ya Chrome use hota hai).
  Edge best hai: usme Indian/British natural voices milti hain (Jarvis voice ke liye).
  Internet chahiye (3D satellite ka Three.js library CDN se load hota hai).

Mac / Linux:  ./start-dashboard.sh

REAL .EXE BANANA (optional, Node.js chahiye - https://nodejs.org):
  1. Is folder me terminal kholo
  2. npm install
  3. npm start        -> desktop app khulega
  4. npm run dist     -> dist/ folder me portable .exe ban jayega

HARDWARE MODE (Arduino):
  1. cd hardware-bridge ; npm install ; node bridge.js COM3
  2. Dashboard me "Real hardware" select karo -> Connect (ws://localhost:8080)
  Arduino har sample ek JSON line me bheje, jaise:
  {"altitude_m":120.4,"pressure_hpa":1008.2,"temperature_c":25.4,"acceleration_mps2":9.8}

Files:
  index.html            - poora dashboard
  Start-Dashboard.bat   - one-click launcher (Windows)
  main.js, package.json - Electron desktop app
  hardware-bridge/      - Arduino serial -> WebSocket bridge

MMMUT LOGO:
  Logo file mmmut-logo.png is folder me pehle se hai.
  Logo na mile to uski jagah "MMMUT" text badge dikhta hai.

NEW (v2):
  - Header me MISSION / SENSORS tabs. SENSORS page: DHT11, BMP280, MPU6050, NEO-6M ke green tick circle,
    sensor par click karo to uska live data + graph dikhega.
  - Simulation aur inject buttons hata diye. Dashboard khulte hi ws://localhost:8080 se auto-connect hota hai.
  - Jarvis ENTER dabate hi on ho jata hai aur har change bolta hai.
  - Reference values: index.html me REF table (US Standard Atmosphere 1976 / ISA, NASA-published). Wahin edit kar sakte ho.
  - Arduino JSON keys: temperature_c, humidity_percent (DHT11) | pressure_hpa, altitude_m (BMP280)
    | acceleration_mps2, roll_deg, pitch_deg, yaw_deg (MPU6050) | latitude_deg, longitude_deg (NEO-6M)
    Optional "timestamp" (ISO, GPS UTC time) bhejoge to wahi time use hoga.

NEW (v3):
  - SENSORS page: sensor tile click -> popup "<sensor> SELECTED"; "SELECT ALL SENSORS" button -> "ALL SENSORS SELECTED".
    Popup shows sensor status, "All data is standard" check (NASA & ISRO reference, bands in REF table) and battery charge status
    (charging needed below 25 %, critical below 10 %). Battery panel is also shown permanently on the SENSORS page.
  - Intro page: sensor names removed. Background stars now twinkle softly instead of blinking.

NEW (v4):
  - Intro + dashboard background: 3D Milky Way (Three.js) - spiral arms + core live ghoom rahe hain, saare stars twinkle + move karte hain,
    paas ke stars camera ke paas se guzarte hain. Earth ke around 4 bade satellites apne orbit me ghoomte hain (trail + blinking beacon). Mouse hilao to camera halka move hota hai.
  - Size/speed badalna ho to index.html me 'MILKY WAY 3D' block ke CFG (sc = satellite size, sp = speed) aur layout() me s=.17 (Earth size) edit karo.

NEW (v5):
  - Earth hata diya. Ab neela ringed planet (satellites iske around orbit karte hain), upar-right me ringed gas giant + uske moons,
    sideways udte moons, pink-purple nebula patti aur chamakte cross-flare stars - sab live chalte hain (halka side-to-side sway bhi).

NEW (v6):
  - Naam/text ke peeche dark backdrop + bold shadow, pills opaque: ab team names saaf dikhte hain.
  - Blue planet ki jagah real Earth (continents + clouds + glow) aur uske around bahut saare patle chamakte blue rings (live ghoomte dust ke saath).
  - Saturn (gas giant) ke rings theek kiye: sahi tilt, near half planet ke aage, C/B/A rings gap ke saath.

NEW (v7):
  - Earth ab aapki image se bana hai (Earth + glowing rings), index.html me embed hai. Satellites iske around orbit karte hain aur Earth ke peeche jaate hain.

NEW (v8):
  - Background: Milky Way photo (assets/milkyway-4k.jpg, 3840x2160) live drift/zoom ke saath + twinkling moving stars upar se.
  - Earth: nayi Earth photo (4096x4096, index.html me embedded), halka rotate hota dikhta hai, satellites iske peeche/aage orbit karte hain.
  - Team name har jagah: TEAM SPACE SPARK.

NEW (v9):
  - Background: galaxy photo (assets/galaxy-4k.jpg, 3840 px wide). Poori photo dheere drift/zoom karti hai aur galaxy ka core (spiral) alag se ghoomta hai.
  - Earth ke bagal wale orbit rings hata diye (satellites aur unki chhoti trail rehti hai).

NEW (v10):
  - Earth ke bagal ka neela glow-ring (atmosphere) hata diya.

NEW (v11):
  - Galaxy background ab index.html ke andar embedded hai (3840 px) - assets folder ki zaroorat nahi.
  - Earth ke around satellites ke 4 orbit paths (patli glowing lines) wapas, har satellite ke color me.

NEW (v12):
  - ENTER MISSION CONTROL dabane par intro page ghoomte hue black hole me samaa jata hai, phir dashboard usi black hole se nikalta hai (~3.5 sec).

NEW (v13):
  - Wormhole hata diya. ENTER MISSION CONTROL dabane par welcome card black hole me samaa jata hai (aapki black hole image, index.html me embedded).
  - Black hole poori screen par ~10 sec tak dikhta hai: accretion rings, glowing plasma (hot-spots), funnel disk ke rings aur particles live chalte hain.
  - Phir camera black hole me dive karta hai (light flash) aur dashboard neeche wale funnel se nikalta hai. Transition 3 sec.
  - Black hole ka size/speed badalna ho to index.html me 'BLACK HOLE' block ke CA/CB (image px), ring speed (omA/omB/plas*), wB radius aur T_HOLD/T_DIVE timeline edit karo.

NEW (v14):
  - Black hole se dashboard nikalne ka time 2.5 sec se badhakar 6 sec kar diya. index.html me 'EM_DUR' (seconds) badalke aur kam/jyada kar sakte ho.
    Black hole ka fade-out bhi usi ke hisaab se slow hota hai, taaki dashboard funnel se hi nikalta dikhe.


CHANGES (black-hole intro):
  - Ringed planet: solid planet disc with limb darkening, sharper detail (unsharp mask), warm rim glow, rings glow; no blending into the galaxy.
  - Swallow sound (Web Audio, no files): rising whoosh, falling suction tone, deep rumble, sub boom + gulp at the flash, airy shimmer as the dashboard emerges. Synced to the same clock as the visuals (sound starts inside the ENTER click). Uses headphones for the 3D (HRTF) effect.
  - Screen ripple around the hole while it pulls; particles are pulled inward faster before the dive.

CHANGES (ring rendering):
  - Planet is now real 3D: banded sphere plus about 150,000 individual ring grains (point sprites), depth-tested, so the front ring passes over the globe and the back ring goes behind it.
  - Rings are opaque and sharp: no blending into the galaxy. Cassini division and Encke gap are left empty.
  - Grains orbit at Keplerian speeds; the planet spins and the whole system sways (yaw limited to +/-0.6 rad so the rings never go edge-on).
  - Planet's shadow falls across the rings; backlit rings get golden forward-scattering highlights.
  - Subtle fresnel rim light on the planet's limb. The galaxy is a separate layer and is never tinted by the planet.
