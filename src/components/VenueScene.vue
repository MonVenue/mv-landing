<script setup>
// Drawn venue scenes in the brand palette, one per occasion.
// Square 240 artboard, cropped with `slice`: keep the subject inside x 24–216
// (portrait 4:5 crop) and y 56–184 (wide 2:1 crop).
import { useId } from 'vue'

defineProps({
  name: { type: String, required: true },
})

const uid = useId()
const id = (k) => `${uid}-${k}`
const url = (k) => `url(#${id(k)})`

// Points along a quadratic curve, for strings of lights.
function garland(x0, y0, cx, cy, x1, y1, n) {
  const pts = []
  for (let i = 1; i < n; i++) {
    const t = i / n
    const u = 1 - t
    pts.push({ x: u * u * x0 + 2 * u * t * cx + t * t * x1, y: u * u * y0 + 2 * u * t * cy + t * t * y1 })
  }
  return pts
}

const weddingLights = [...garland(48, 100, 84, 124, 120, 100, 8), ...garland(120, 100, 156, 124, 192, 100, 8)]
const partyA = garland(0, 64, 110, 132, 240, 76, 14)
const partyB = garland(0, 100, 130, 40, 240, 104, 14)
const partyColors = ['#f6e3b8', '#00bfa5', '#fcfaf6', '#d6b98a']

const skyline = [
  [0, 18, 112], [18, 14, 124], [32, 20, 98], [52, 12, 118], [64, 22, 106], [86, 16, 122], [102, 14, 114], [116, 10, 130],
  [176, 12, 126], [188, 18, 110], [206, 12, 120], [218, 22, 100],
]
const windows = [
  [36, 104], [42, 112], [36, 124], [68, 112], [76, 120], [70, 132], [106, 120], [192, 116], [200, 126], [222, 108], [228, 120],
]
const turfBands = [112, 122, 134, 148, 164, 184, 208, 240]
</script>

<template>
  <svg viewBox="0 0 240 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <!-- Weddings: a garden hall by the sea at dusk -->
    <template v-if="name === 'weddings'">
      <defs>
        <linearGradient :id="id('sky')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0a2340" />
          <stop offset="1" stop-color="#2a5079" />
        </linearGradient>
        <linearGradient :id="id('lawn')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#103f3b" />
          <stop offset="1" stop-color="#0a2a2b" />
        </linearGradient>
        <radialGradient :id="id('glow')">
          <stop offset="0" stop-color="#f6e3b8" stop-opacity="0.6" />
          <stop offset="1" stop-color="#f6e3b8" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="150" :fill="url('sky')" />
      <circle cx="184" cy="66" r="8" fill="#f3e2bf" />
      <rect y="128" width="240" height="22" fill="#163a5c" />
      <path d="M0 128.5h240" stroke="#d6b98a" stroke-opacity="0.35" />
      <rect x="178" y="133" width="12" height="1.5" rx="0.75" fill="#f3e2bf" opacity="0.5" />
      <rect x="181" y="138" width="6" height="1.5" rx="0.75" fill="#f3e2bf" opacity="0.35" />
      <rect y="150" width="240" height="90" :fill="url('lawn')" />
      <path d="M28 154c-6-22-3-50 4-70 7 20 10 48 4 70z" fill="#0b2f2c" />
      <path d="M206 154c-6-22-3-46 4-64 7 18 10 42 4 64z" fill="#0b2f2c" />
      <path d="M110 240l6-74h8l6 74z" fill="#e9dcc3" opacity="0.1" />
      <g fill="#e9dcc3" opacity="0.75">
        <rect x="47" y="100" width="2" height="62" />
        <rect x="119" y="100" width="2" height="62" />
        <rect x="191" y="100" width="2" height="62" />
      </g>
      <path d="M48 100Q84 124 120 100Q156 124 192 100" fill="none" stroke="#e9dcc3" stroke-opacity="0.4" stroke-width="0.75" />
      <circle v-for="(p, i) in weddingLights" :key="`g${i}`" :cx="p.x" :cy="p.y" r="5" :fill="url('glow')" />
      <circle v-for="(p, i) in weddingLights" :key="`b${i}`" :cx="p.x" :cy="p.y" r="1.6" fill="#f6e3b8" />
      <g fill="#d6b98a">
        <rect v-for="x in [66, 80, 94, 108, 126, 140, 154, 168]" :key="x" :x="x" y="141" width="6" height="11" rx="2" />
      </g>
      <ellipse cx="120" cy="168" rx="72" ry="6" fill="#f6e3b8" opacity="0.08" />
      <rect x="58" y="150" width="124" height="5" rx="1" fill="#fcfaf6" />
      <rect x="60" y="155" width="120" height="10" fill="#e6ddcc" />
      <g v-for="x in [78, 102, 138, 162]" :key="`c${x}`">
        <circle :cx="x" cy="147" r="4" :fill="url('glow')" />
        <circle :cx="x" cy="148" r="1.2" fill="#f6e3b8" />
      </g>
    </template>

    <!-- Rooftops: a Beirut terrace at sunset over the sea -->
    <template v-else-if="name === 'rooftops'">
      <defs>
        <linearGradient :id="id('sky')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#1f4468" />
          <stop offset="0.55" stop-color="#b99a7c" />
          <stop offset="1" stop-color="#ecd3a6" />
        </linearGradient>
        <linearGradient :id="id('floor')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#eadfca" />
          <stop offset="1" stop-color="#d7c6a7" />
        </linearGradient>
      </defs>
      <rect width="240" height="172" :fill="url('sky')" />
      <circle cx="150" cy="128" r="14" fill="#f8e7c2" />
      <rect y="138" width="240" height="34" fill="#3d5b73" />
      <g fill="#f8e7c2" opacity="0.45">
        <rect x="138" y="142" width="24" height="1.5" rx="0.75" />
        <rect x="142" y="147" width="16" height="1.5" rx="0.75" />
        <rect x="146" y="152" width="8" height="1.5" rx="0.75" />
      </g>
      <g fill="#14345a">
        <rect v-for="b in skyline" :key="b[0]" :x="b[0]" :y="b[2]" :width="b[1]" :height="172 - b[2]" />
      </g>
      <g fill="#f3dca8" opacity="0.85">
        <rect v-for="w in windows" :key="`${w[0]}-${w[1]}`" :x="w[0]" :y="w[1]" width="2" height="2" />
      </g>
      <rect y="166" width="240" height="74" :fill="url('floor')" />
      <rect y="164" width="240" height="4" fill="#f4ecdd" />
      <ellipse cx="80" cy="220" rx="40" ry="4" fill="#0a2340" opacity="0.08" />
      <g fill="#0a2340">
        <ellipse cx="80" cy="196" rx="14" ry="3.5" />
        <rect x="79" y="196" width="2" height="22" />
        <ellipse cx="80" cy="218" rx="7" ry="1.5" />
        <path d="M48 192h12v4H48zM49 196h2v22h-2zM57 196h2v22h-2z" />
        <path d="M100 192h12v4h-12zM101 196h2v22h-2zM109 196h2v22h-2z" />
        <rect x="48" y="181" width="12" height="11" rx="2" opacity="0.85" />
        <rect x="100" y="181" width="12" height="11" rx="2" opacity="0.85" />
      </g>
      <rect x="180" y="200" width="18" height="20" rx="2" fill="#b99a7c" />
      <circle cx="189" cy="186" r="14" fill="#0f3d3a" />
      <circle cx="181" cy="180" r="8" fill="#13514b" />
    </template>

    <!-- Restaurants: a private dining room under an arched window -->
    <template v-else-if="name === 'restaurants'">
      <defs>
        <linearGradient :id="id('wall')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#f1e8d8" />
          <stop offset="1" stop-color="#e4d5bb" />
        </linearGradient>
        <linearGradient :id="id('night')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0a2340" />
          <stop offset="1" stop-color="#22476e" />
        </linearGradient>
        <radialGradient :id="id('glow')">
          <stop offset="0" stop-color="#f6e3b8" stop-opacity="0.7" />
          <stop offset="1" stop-color="#f6e3b8" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="172" :fill="url('wall')" />
      <rect y="172" width="240" height="68" fill="#d2bd98" />
      <path d="M84 150V88a36 36 0 0 1 72 0v62z" :fill="url('night')" />
      <g fill="#f3e2bf" opacity="0.7">
        <circle cx="100" cy="80" r="0.9" />
        <circle cx="138" cy="70" r="0.9" />
        <circle cx="146" cy="96" r="0.9" />
        <circle cx="96" cy="112" r="0.9" />
      </g>
      <path d="M84 150V88a36 36 0 0 1 72 0v62z" fill="none" stroke="#d9c8a8" stroke-width="3" />
      <path d="M120 52v98M84 104h72" stroke="#d9c8a8" stroke-width="2" />
      <ellipse cx="120" cy="150" rx="80" ry="34" :fill="url('glow')" opacity="0.6" />
      <path d="M120 0v100" stroke="#8a7354" stroke-width="1" />
      <path d="M110 112h20l-5-12h-10z" fill="#c9a46f" />
      <rect x="110" y="111" width="20" height="1.5" fill="#f6e3b8" />
      <g fill="#14345a">
        <rect x="74" y="134" width="13" height="24" rx="3" />
        <rect x="98" y="132" width="13" height="24" rx="3" />
        <rect x="129" y="132" width="13" height="24" rx="3" />
        <rect x="153" y="134" width="13" height="24" rx="3" />
      </g>
      <path d="M68 158h104l-4 26H72z" fill="#efe7da" />
      <ellipse cx="120" cy="158" rx="52" ry="8" fill="#fcfaf6" />
      <g fill="#d6b98a">
        <rect x="96" y="151" width="2" height="5" rx="1" />
        <rect x="142" y="151" width="2" height="5" rx="1" />
      </g>
      <circle cx="120" cy="153" r="5" :fill="url('glow')" />
      <circle cx="120" cy="154" r="1.3" fill="#f6e3b8" />
    </template>

    <!-- Celebrations: a terrace party under strings of lights -->
    <template v-else-if="name === 'celebrations'">
      <defs>
        <linearGradient :id="id('sky')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0a2340" />
          <stop offset="1" stop-color="#17495a" />
        </linearGradient>
        <linearGradient :id="id('floor')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#e7dcc6" />
          <stop offset="1" stop-color="#cdbb99" />
        </linearGradient>
        <radialGradient :id="id('glow')">
          <stop offset="0" stop-color="#f6e3b8" stop-opacity="0.55" />
          <stop offset="1" stop-color="#f6e3b8" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="170" :fill="url('sky')" />
      <path d="M0 150c30-10 50-6 80-2s60-12 90-8 50 6 70 2v28H0z" fill="#0b2a33" />
      <rect y="166" width="240" height="74" :fill="url('floor')" />
      <path d="M0 64Q110 132 240 76M0 100Q130 40 240 104" fill="none" stroke="#e9dcc3" stroke-opacity="0.35" stroke-width="0.75" />
      <g v-for="(p, i) in [...partyA, ...partyB]" :key="i">
        <circle :cx="p.x" :cy="p.y" r="5" :fill="url('glow')" />
        <circle :cx="p.x" :cy="p.y + 1.5" r="1.8" :fill="partyColors[i % partyColors.length]" />
      </g>
      <ellipse cx="120" cy="178" rx="56" ry="5" fill="#0a2340" opacity="0.12" />
      <rect x="82" y="156" width="76" height="5" rx="1" fill="#fcfaf6" />
      <path d="M84 161h72v15H84z" fill="#efe7da" />
      <rect x="106" y="144" width="28" height="12" rx="2" fill="#fcfaf6" />
      <rect x="110" y="135" width="20" height="9" rx="2" fill="#f6efe2" />
      <rect x="114" y="128" width="12" height="7" rx="2" fill="#fcfaf6" />
      <g fill="#d6b98a">
        <rect x="106" y="149" width="28" height="1.5" />
        <rect x="110" y="139" width="20" height="1.5" />
        <rect x="119.25" y="121" width="1.5" height="7" />
      </g>
      <circle cx="120" cy="118" r="6" :fill="url('glow')" />
      <circle cx="120" cy="119" r="1.5" fill="#f6e3b8" />
      <g fill="#14345a">
        <ellipse cx="44" cy="198" rx="14" ry="3.5" />
        <rect x="43" y="198" width="2" height="20" />
        <ellipse cx="44" cy="218" rx="6" ry="1.5" />
        <ellipse cx="196" cy="198" rx="14" ry="3.5" />
        <rect x="195" y="198" width="2" height="20" />
        <ellipse cx="196" cy="218" rx="6" ry="1.5" />
      </g>
      <g v-for="x in [40, 48, 192, 200]" :key="`t${x}`">
        <circle :cx="x" cy="194" r="3" :fill="url('glow')" />
        <rect :x="x - 1" y="192" width="2" height="4" rx="0.5" fill="#f6e3b8" />
      </g>
    </template>

    <!-- Corporate: a meeting room with a view of the mountains -->
    <template v-else-if="name === 'corporate'">
      <defs>
        <linearGradient :id="id('view')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#d7e6e8" />
          <stop offset="1" stop-color="#f1ece0" />
        </linearGradient>
      </defs>
      <rect width="240" height="176" fill="#efe8dc" />
      <rect y="176" width="240" height="64" fill="#e0d4c0" />
      <rect x="28" y="44" width="184" height="106" :fill="url('view')" />
      <path d="M28 120l26-22 18 10 30-30 28 26 20-14 32 24 30-14v50H28z" fill="#a9bec2" />
      <path d="M28 132l34-12 30 8 36-16 40 14 44-10v34H28z" fill="#7fa0a2" />
      <rect x="28" y="140" width="184" height="10" fill="#8fbab5" />
      <rect x="28" y="44" width="184" height="106" fill="none" stroke="#d8cdb8" stroke-width="3" />
      <path d="M89 44v106M151 44v106" stroke="#d8cdb8" stroke-width="2" />
      <g fill="#1c292f">
        <rect x="52" y="142" width="16" height="22" rx="4" />
        <rect x="80" y="142" width="16" height="22" rx="4" />
        <rect x="112" y="142" width="16" height="22" rx="4" />
        <rect x="144" y="142" width="16" height="22" rx="4" />
        <rect x="172" y="142" width="16" height="22" rx="4" />
      </g>
      <rect x="40" y="160" width="160" height="6" rx="1" fill="#0a2340" />
      <g fill="#0a2340">
        <rect x="52" y="166" width="3" height="28" />
        <rect x="185" y="166" width="3" height="28" />
      </g>
      <g fill="#586865">
        <path d="M70 160l3-8h14l3 8z" />
        <path d="M146 160l3-8h14l3 8z" />
      </g>
      <rect x="112" y="155" width="8" height="5" rx="1" fill="#fcfaf6" />
    </template>

    <!-- Sports: a five-a-side pitch under floodlights -->
    <template v-else-if="name === 'sports'">
      <defs>
        <linearGradient :id="id('sky')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#071a31" />
          <stop offset="1" stop-color="#14345a" />
        </linearGradient>
        <radialGradient :id="id('glow')">
          <stop offset="0" stop-color="#fcfaf6" stop-opacity="0.5" />
          <stop offset="1" stop-color="#fcfaf6" stop-opacity="0" />
        </radialGradient>
        <clipPath :id="id('turf')">
          <rect y="108" width="240" height="132" />
        </clipPath>
      </defs>
      <rect width="240" height="112" :fill="url('sky')" />
      <rect y="100" width="240" height="10" fill="#0b2236" />
      <g :clip-path="url('turf')">
        <rect
          v-for="(y, i) in turfBands.slice(0, -1)"
          :key="y"
          :y="y - 4"
          width="240"
          :height="turfBands[i + 1] - y + 4"
          :fill="i % 2 ? '#008a7b' : '#007d70'"
        />
      </g>
      <path d="M29 44h6l105 140H0V96zM205 44h6l29 52v88H100z" fill="#fcfaf6" opacity="0.05" />
      <g fill="none" stroke="#fcfaf6" stroke-opacity="0.85" stroke-width="1.2">
        <path d="M44 116h152l28 120H16z" />
        <path d="M36 150h168" />
        <ellipse cx="120" cy="150" rx="24" ry="8" />
        <path d="M104 116v6h32v-6" />
      </g>
      <rect x="108" y="110" width="24" height="6" fill="none" stroke="#fcfaf6" stroke-width="1" />
      <g fill="#3b5470">
        <rect x="31" y="44" width="2" height="64" />
        <rect x="207" y="44" width="2" height="64" />
      </g>
      <circle cx="32" cy="42" r="16" :fill="url('glow')" />
      <circle cx="208" cy="42" r="16" :fill="url('glow')" />
      <rect x="24" y="38" width="16" height="6" rx="1.5" fill="#fcfaf6" />
      <rect x="200" y="38" width="16" height="6" rx="1.5" fill="#fcfaf6" />
    </template>
  </svg>
</template>

<style scoped>
svg {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
