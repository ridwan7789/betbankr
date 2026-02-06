# BetBankr - Prediction Protocol

BetBankr adalah protokol prediksi berbasis blockchain yang memungkinkan pengguna membuat prediksi tentang berbagai kejadian dunia nyata.

GitHub: [https://github.com/betbankr](https://github.com/betbankr)

## Monad Wallet Integration

This application supports wallet connections to the Monad blockchain network. The following features have been implemented:

### Features
- Wallet connection to Monad network (Chain ID: 143)
- Automatic network switching when connecting
- Visual indicators for network status
- Support for multiple wallet providers (MetaMask, WalletConnect, injected wallets)
- Network switching capabilities

### Setup Instructions

1. **WalletConnect Project ID** (optional but recommended):
   - Get a free project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)
   - Create a `.env` file in the root directory
   - Add your project ID:
     ```
     VITE_WALLETCONNECT_PROJECT_ID=your_actual_project_id_here
     ```

2. **Running the Application**:
   ```bash
   bun install
   bun run dev
   ```

### Technical Details

- **Chain ID**: 143 (Monad)
- **Native Token**: MON
- **RPC URL**: https://rpc.monad.xyz
- **Block Explorer**: https://monadvision.com

The wallet connection is handled through:
- `src/contexts/WalletContext.tsx` - Main wallet context and connection logic
- `src/components/WalletButton.tsx` - UI component for wallet connection
- `src/lib/chains.ts` - Monad chain configuration
- `src/lib/walletUtils.ts` - Utility functions for wallet operations

## Teknologi yang Digunakan

Proyek ini dibangun dengan:

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS
- Blockchain Integration

## Instalasi Lokal

Untuk menjalankan proyek ini secara lokal, pastikan Anda memiliki Node.js dan npm terinstal - [install dengan nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Ikuti langkah-langkah berikut:

```sh
# Langkah 1: Clone repositori ini
git clone <YOUR_REPOSITORY_URL>

# Langkah 2: Masuk ke direktori proyek
cd betbankr

# Langkah 3: Instal dependensi yang diperlukan
npm install

# Langkah 4: Jalankan server pengembangan
npm run dev
```

## Pengembangan

Proyek ini menggunakan arsitektur komponen modular dengan integrasi blockchain. Semua komponen UI menggunakan shadcn/ui dan distilasi dengan Tailwind CSS.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repositori ini dan kirimkan pull request dengan perubahan Anda.
