import invariant from 'tiny-invariant'
import { ChainId, WFTM_ADDRESS } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WNATIVE = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, WFTM_ADDRESS, 18, 'WFTM', 'Wrapped FTM'),
  [ChainId.FANTOM_TESTNET]: new Token(
    ChainId.FANTOM_TESTNET,
    '0xf1277d1Ed8AD466beddF92ef448A132661956621',
    18,
    'FTM',
    'Wrapped FTM'
  ),
  [ChainId.MATIC]: new Token(
    ChainId.MATIC,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.MATIC_TESTNET]: new Token(
    ChainId.MATIC_TESTNET,
    '0x5B67676a984807a212b1c59eBFc9B3568a474F0a',
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.XDAI]: new Token(ChainId.XDAI, '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d', 18, 'WXDAI', 'Wrapped xDai'),
  [ChainId.BSC]: new Token(ChainId.BSC, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.ARBITRUM]: new Token(
    ChainId.ARBITRUM,
    '0xf8456e5e6A225C2C1D74D8C9a4cB2B1d5dc1153b',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.MOONBASE]: new Token(
    ChainId.MOONBASE,
    '0xe73763DB808ecCDC0E36bC8E32510ED126910394',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [ChainId.FUJI]: new Token(ChainId.FUJI, '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18, 'WAVAX', 'Wrapped AVAX'),
  [ChainId.HECO]: new Token(ChainId.HECO, '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F', 18, 'WHT', 'Wrapped HT'),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0x5B2DA6F42CA09C77D577a12BeaD0446148830687',
    18,
    'WHT',
    'Wrapped HT'
  ),
  [ChainId.HARMONY]: new Token(
    ChainId.HARMONY,
    '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainId.HARMONY_TESTNET]: new Token(
    ChainId.HARMONY_TESTNET,
    '0x7a2afac38517d512E55C0bCe3b6805c10a04D60F',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainId.MOONRIVER]: new Token(
    ChainId.MOONRIVER,
    '0x98878B06940aE243284CA214f92Bb71a2b032B8A',
    18,
    'WMOVR',
    'Wrapped MOVR'
  ),
  [ChainId.CRONOS]: new Token(ChainId.CRONOS, '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23', 18, 'WCRO', 'Wrapped CRO'),
  [ChainId.OPTIMISM]: new Token(
    ChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.SYSCOIN]: new Token(
    ChainId.SYSCOIN,
    '0xd3e822f3ef011Ca5f17D82C956D952D8d7C3A1BB',
    18,
    'WSYS',
    'Wrapped Syscoin'
  ),
  [ChainId.METIS]: new Token(ChainId.METIS, '0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481', 18, 'WETH', 'Wrapped Metis'),
  [ChainId.MOONBEAM]: new Token(
    ChainId.MOONBEAM,
    '0xAcc15dC74880C9944775448304B263D191c6077F',
    18,
    'WGLMR',
    'Wrapped GLMR'
  ),
  [ChainId.MILKOMEDA]: new Token(
    ChainId.MILKOMEDA,
    '0xAE83571000aF4499798d1e3b0fA0070EB3A3E3F9',
    18,
    'WADA',
    'Wrapped ADA'
  ),
  [ChainId.KAVA]: new Token(ChainId.KAVA, '0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b', 18, 'WKAVA', 'Wrapped Kava'),
  [ChainId.IOTEX]: new Token(ChainId.IOTEX, '0xa00744882684c3e4747faefd68d283ea44099d03', 18, 'WIOTX', 'Wrapped IoTeX'),
  [ChainId.KLAYTN]: new Token(
    ChainId.KLAYTN,
    '0xfd844c2fca5e595004b17615f891620d1cb9bbb2',
    18,
    'WKLAY',
    'Wrapped Klaytn'
  ),
  [ChainId.CELO]: new Token(ChainId.CELO, '0x3Ad443d769A07f287806874F8E5405cE3Ac902b9', 18, 'WCELO', 'Wrapped Celo'),
  [ChainId.AURORA]: new Token(
    ChainId.AURORA,
    '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BOBA]: new Token(ChainId.BOBA, '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.CUBE]: new Token(ChainId.CUBE, '0x9d3f61338d6eb394e378d28c1fd17d5909ac6591', 18, 'WCUBE', 'Wrapped Cube'),
}
