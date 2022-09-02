
import JSBI from 'jsbi'
import {Token} from "./entities";

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export const FTM_ZAPPER_ADDRESS = '0xE2379CB4c4627E5e9dF459Ce08c2342C696C4c1f'
export const AVAX_ZAPPER_ADDRESS = '0x1d0a9E2c445EB8f99767eF289832637921e6F6a5'
export const OG_MATIC_VAULT = '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'

export enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    MATIC = 137,
    MATIC_TESTNET = 80001,
    FANTOM = 250,
    FANTOM_TESTNET = 4002,
    XDAI = 100,
    BSC = 56,
    BSC_TESTNET = 97,
    ARBITRUM = 42161,
    MOONBASE = 1287,
    AVALANCHE = 43114,
    FUJI = 43113,
    HECO = 128,
    HECO_TESTNET = 256,
    HARMONY = 1666600000,
    HARMONY_TESTNET = 1666700000,
    MOONRIVER = 1285,
    CRONOS = 25,
    OPTIMISM = 10,
    SYSCOIN = 57,
    METIS = 1088,
    MOONBEAM = 1284,
    MILKOMEDA = 2001,
    KAVA = 2222,
    IOTEX = 4689,
    KLAYTN = 8217,
    CELO = 42220,
    AURORA = 1313161554,
    BOBA = 288,
    CUBE = 1818
}

export enum TradeType {
    EXACT_INPUT,
    EXACT_OUTPUT
}

export enum Rounding {
    ROUND_DOWN,
    ROUND_HALF_UP,
    ROUND_UP
}

export const INIT_CODE_HASH: string = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
    uint8 = 'uint8',
    uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
    [SolidityType.uint8]: JSBI.BigInt('0xff'),
    [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
    [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
    [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
    [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
    [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
    [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
    [ChainId.FANTOM]: '0x63B8310c5093ac917552931D8b15d5AB6945c0a6',
    [ChainId.FANTOM_TESTNET]: '',
    [ChainId.MATIC]: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E',
    [ChainId.MATIC_TESTNET]: '0x9Fc8e50Eb08C1F463b45d1AFb9c261B0a1903006',
    [ChainId.XDAI]: '0xb5b692a88BDFc81ca69dcB1d924f59f0413A602a',
    [ChainId.BSC]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
    [ChainId.BSC_TESTNET]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
    [ChainId.ARBITRUM]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
    [ChainId.MOONBASE]: '0x9B7D5fa91b4747031d8E7807DaEC906F0f683E78',
    [ChainId.AVALANCHE]: '0x0FB54156B496b5a040b51A71817aED9e2927912E',
    [ChainId.FUJI]: '0x0053957E18A0994D3526Cf879A4cA7Be88e8936A',
    [ChainId.HECO]: '0xc9a9F768ebD123A00B52e7A0E590df2e9E998707',
    [ChainId.HECO_TESTNET]: '0x935Bfe9AfaA2Be26049ea4EDE40A3A2243361F87',
    [ChainId.HARMONY]: '0xFE4980f62D708c2A84D3929859Ea226340759320',
    [ChainId.HARMONY_TESTNET]: '0xbcd3451992B923531615293Cb2b2c38ba8DE9529',
    [ChainId.MOONRIVER]: '0xe05349d6fE12602F6084550995B247a5C80C0E2C',
    [ChainId.CRONOS]: '0xA25da25BD11A26F1dd4ea195948305fb7C8cA102',
    [ChainId.OPTIMISM]: '0x142e2feac30d7fc3b61f9ee85fccad8e560154cc',
    [ChainId.SYSCOIN]: '',
    [ChainId.METIS]: '0xc39aBB6c4451089dE48Cffb013c39d3110530e5C',
    [ChainId.MOONBEAM]: '0x83e3b61886770de2F64AAcaD2724ED4f08F7f36B',
    [ChainId.MILKOMEDA]: '',
    [ChainId.KAVA]: '',
    [ChainId.IOTEX]: '0x9c8B105c94282CDB0F3ecF27e3cfA96A35c07be6',
    [ChainId.KLAYTN]: '0x5f5f0d1b9ff8b3dcace308e39b13b203354906e9',
    [ChainId.CELO]: '0xb8d0d2C1391eeB350d2Cd39EfABBaaEC297368D9',
    [ChainId.AURORA]: '0x32b50c286DEFd2932a0247b8bb940b78c063F16c',
    [ChainId.BOBA]: '0xfb91c019D9F12A0f9c23B4762fa64A34F8daDb4A',
    [ChainId.CUBE]: '',
}

type ChainTokenMap = {
    readonly [chainId in ChainId]?: Token
}

function makeTokenFn(symbol: string, name: string, decimals: number = 18) {
    return (chainId: ChainId, address: string) => {
        return new Token(chainId, address, decimals, symbol, name)
    }
}

const makeQiToken = makeTokenFn('QI', 'QiDao')
export const QI: { readonly [chainId in ChainId]?: Token } = {
    [ChainId.MATIC]: makeQiToken(ChainId.MATIC, '0x580A84C73811E1839F75d86d75d88cCa0c241fF4'),
    [ChainId.FANTOM]: makeQiToken(ChainId.FANTOM, '0x68Aa691a8819B07988B18923F712F3f4C8d36346'),
    [ChainId.AVALANCHE]: makeQiToken(ChainId.AVALANCHE, '0xA56F9A54880afBc30CF29bB66d2D9ADCdcaEaDD6'),
    [ChainId.ARBITRUM]: makeQiToken(ChainId.ARBITRUM, '0xB9C8F0d3254007eE4b98970b94544e473Cd610EC'),
    [ChainId.BOBA]: makeQiToken(ChainId.BOBA, '0xC85C1ce70C4Bf751a73793D735e9D0209152F13d'),
    [ChainId.XDAI]: makeQiToken(ChainId.XDAI, '0xdFA46478F9e5EA86d57387849598dbFB2e964b02'),
    [ChainId.METIS]: makeQiToken(ChainId.METIS, '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d'),
    [ChainId.OPTIMISM]: makeQiToken(ChainId.OPTIMISM, '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d'),
    [ChainId.BSC]: new Token(ChainId.BSC, '0xdDC3D26BAA9D2d979F5E2e42515478bf18F354D5', 18),
}

const makeLDOToken = makeTokenFn('LDO', 'Lido')
export const LDO: { readonly [chainId in ChainId]?: Token } = {
    [ChainId.MATIC]: makeLDOToken(ChainId.MATIC, '0xC3C7d422809852031b44ab29EEC9F1EfF2A58756'),
}

const makeMETISToken = makeTokenFn('METIS', 'Metis')
export const METIS: { readonly [chainId in ChainId]?: Token } = {
    [ChainId.METIS]: makeMETISToken(ChainId.METIS, '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000'),
}

const makeSDToken = makeTokenFn('SD', 'Stader Labs')
export const SD: { readonly [chainId in ChainId]?: Token } = {
    [ChainId.MATIC]: makeSDToken(ChainId.MATIC, '0x1d734A02eF1e1f5886e66b0673b71Af5B53ffA94'),
}

const makeMaiToken = makeTokenFn('MAI', 'MAI (miMatic)')

export const MAI: ChainTokenMap = {
    [ChainId.MATIC]: makeMaiToken(ChainId.MATIC, '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'),
    [ChainId.FANTOM]: makeMaiToken(ChainId.FANTOM, '0xfB98B335551a418cD0737375a2ea0ded62Ea213b'),
    [ChainId.AVALANCHE]: makeMaiToken(ChainId.AVALANCHE, '0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b'),
    [ChainId.MOONRIVER]: makeMaiToken(ChainId.MOONRIVER, '0xFb2019DfD635a03cfFF624D210AEe6AF2B00fC2C'),
    [ChainId.HARMONY]: makeMaiToken(ChainId.HARMONY, '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d'),
    [ChainId.CRONOS]: makeMaiToken(ChainId.CRONOS, '0x2Ae35c8E3D4bD57e8898FF7cd2bBff87166EF8cb'),
    [ChainId.ARBITRUM]: makeMaiToken(ChainId.ARBITRUM, '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d'),
    [ChainId.BOBA]: makeMaiToken(ChainId.BOBA, '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d'),
    [ChainId.XDAI]: makeMaiToken(ChainId.XDAI, '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d'),
    [ChainId.METIS]: makeMaiToken(ChainId.METIS, '0xdFA46478F9e5EA86d57387849598dbFB2e964b02'),
    [ChainId.BSC]: makeMaiToken(ChainId.BSC, '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d'),
    [ChainId.AURORA]: makeMaiToken(ChainId.AURORA, '0xdFA46478F9e5EA86d57387849598dbFB2e964b02'),
    [ChainId.CELO]: makeMaiToken(ChainId.CELO, '0xB9C8F0d3254007eE4b98970b94544e473Cd610EC'),
    [ChainId.IOTEX]: makeMaiToken(ChainId.IOTEX, '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d'),
    [ChainId.OPTIMISM]: makeMaiToken(ChainId.OPTIMISM, '0xdFA46478F9e5EA86d57387849598dbFB2e964b02'),
}
