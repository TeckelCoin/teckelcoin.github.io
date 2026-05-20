/**
 * ══════════════════════════════════════════════════════════
 *   TECKELCOIN — Frontend Configuration
 *   ⚠️  Actualizează CONTRACT_ADDRESS după deploy!
 * ══════════════════════════════════════════════════════════
 */

const TECKEL_CONFIG = {
  // ─── Contract ─────────────────────────────────────────────
  // TESTNET: 0xCA6b1bD482Fc0FeA79cdD84b27cC2dc57daCc054
  // MAINNET: actualizează după deploy mainnet
  CONTRACT_ADDRESS: "0xb4d478298f2215f912Ca59DC634752A562DF81E3",
  IS_TESTNET: false,

  // ─── Network BSC Testnet (schimbă la mainnet înainte de launch) ──
  NETWORK: {
    chainId:     "0x38",           // 56 = BSC Mainnet
    chainName:   "BNB Smart Chain",
    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
    rpcUrls:     ["https://bsc-dataseed1.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com/"],
  },

  // ─── Token info ───────────────────────────────────────────
  TOKEN: {
    name:        "TeckelCoin",
    symbol:      "TCKL",
    decimals:    18,
    totalSupply: "1,000,000,000",
    logo:        "assets/teckl-logo.png",
  },

  // ─── PancakeSwap ──────────────────────────────────────────
  PANCAKESWAP: {
    swapUrl:     "https://pancakeswap.finance/swap",
    addLiqUrl:   "https://pancakeswap.finance/add",
    chartUrl:    "https://dexscreener.com/bsc/",
    pooUrl:      "https://poocoin.app/tokens/",
  },

  // ─── Social links ─────────────────────────────────────────
  SOCIAL: {
    twitter:   "https://x.com/TeckelCoin2026",
    tiktok:    "https://tiktok.com/@teckelcoin_2026",
    facebook:  "https://www.facebook.com/profile.php?id=TeckelcoinDaschundofCrypto",
    github:    "https://github.com/TeckelCoin",
    bscscan:   "https://bscscan.com/token/",     // + CONTRACT_ADDRESS
  },

  // ─── Tokenomics display ───────────────────────────────────
  TOKENOMICS: [
    { label: "Vânzare Publică",  percent: 60, color: "#d4a843" },
    { label: "Lichiditate DEX",  percent: 20, color: "#8b6914" },
    { label: "Marketing",        percent: 10, color: "#c49a3b" },
    { label: "Echipă (vesting)", percent: 5,  color: "#6b4f10" },
    { label: "Rezervă",          percent: 5,  color: "#3d2d08" },
  ],

  // ─── ABI contract (minimal — doar funcțiile UI) ───────────
  ABI: [
    "function balanceOf(address owner) view returns (uint256)",
    "function totalSupply() view returns (uint256)",
    "function tradingActive() view returns (bool)",
    "function decimals() view returns (uint8)",
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function tokenInfo() view returns (string, string, uint256, uint8, uint256, uint256)",
    "event Transfer(address indexed from, address indexed to, uint256 value)",
  ],
};

// Freeze config să nu fie modificat accidental
Object.freeze(TECKEL_CONFIG);
