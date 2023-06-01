import { TOKEN_DESCRIPTIONS } from './constants'

export type PLATFORM =
  | 'Beefy'
  | 'Yearn'
  | 'Curve'
  | 'AaveV2'
  | 'AaveV3'
  | 'Balancer'
  | 'Lido'
  | 'Arrakis'
  | 'QuickSwap'
  | 'Gains'
  | 'GotchiVault'
  | 'Stader'
  | 'StakeDAO'
  | 'Tetu'
  | 'Spookyswap'
  | 'Convex'

export const ProtocolInfo: { [k in PLATFORM]: { description: string; logo: string } } = {
  Beefy: {
    description: TOKEN_DESCRIPTIONS['beefy-finance'].shortDescription,
    logo: TOKEN_DESCRIPTIONS['beefy-finance'].logo,
  },
  Yearn: {
    description: TOKEN_DESCRIPTIONS['yearn-finance'].shortDescription,
    logo: TOKEN_DESCRIPTIONS['yearn-finance'].logo,
  },
  Curve: {
    description: TOKEN_DESCRIPTIONS['curve-finance'].shortDescription,
    logo: TOKEN_DESCRIPTIONS['curve-finance'].logo,
  },
  AaveV2: {
    description: TOKEN_DESCRIPTIONS['aave'].shortDescription,
    logo: TOKEN_DESCRIPTIONS['aave'].logo,
  },
  AaveV3: {
    description: TOKEN_DESCRIPTIONS['aave'].shortDescription,
    logo: TOKEN_DESCRIPTIONS['aave'].logo,
  },
  Balancer: {
    description: TOKEN_DESCRIPTIONS['balancer'].shortDescription,
    logo: TOKEN_DESCRIPTIONS['balancer'].logo,
  },
  Lido: {
    description: TOKEN_DESCRIPTIONS['lido-dao-token'].shortDescription,
    logo: TOKEN_DESCRIPTIONS['lido-dao-token'].logo,
  },
  Arrakis: {
    description:
      "Arrakis is web3's trustless market making infrastructure protocol that enables running sophisticated algorithmic strategies on Uniswap V3. Liquidity providers can utilize Arrakis Vaults to have their liquidity be managed in an automated, capital efficient, non-custodial and transparent manner.",
    logo: 'https://icons.llamao.fi/icons/protocols/arrakis-finance',
  },
  QuickSwap: {
    description: TOKEN_DESCRIPTIONS['quickswap'].shortDescription,
    logo: TOKEN_DESCRIPTIONS['quickswap'].logo,
  },
  Gains: {
    description: TOKEN_DESCRIPTIONS['gns'].shortDescription,
    logo: TOKEN_DESCRIPTIONS['gns'].logo,
  },
  GotchiVault: {
    description:
      'Gotchi Vault allows users to deposit their GHST and Aavegotchis into the Vault smart contracts to be collectively managed.',
    logo: 'https://icons.llamao.fi/icons/protocols/gotchivault',
  },
  Stader: {
    description: 'Stader offers the most convenient & safest way to maximize your returns on staking.',
    logo: 'https://icons.llamao.fi/icons/protocols/stader',
  },
  StakeDAO: {
    description:
      "Stake Capital DAO is a revenue sharing DAO which tokenizes Stake Capital's DeFi services and uses staking derivatives to unlock additional decentralized products. The Stake Capital DAO distributes value generated by a basket of DeFi services to stakeholders.",
    logo: 'https://icons.llamao.fi/icons/protocols/stakedao',
  },
  Tetu: {
    description:
      'Tetu is a decentralized organization committed to providing a next generation yield aggregator to DeFi investors.',
    logo: 'https://icons.llamao.fi/icons/protocols/tetu',
  },
  Spookyswap: {
    description: 'Automated Market Maker (AMM) built on the Fantom Opera Network.',
    logo: 'https://icons.llamao.fi/icons/protocols/spookyswap',
  },
  Convex: {
    description: 'Convex simplifies your Curve-boosting experience to maximize your yields.',
    logo: 'https://icons.llamao.fi/icons/protocols/convex-finance',
  },
}
