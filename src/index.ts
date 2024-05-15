import { metaContractIcons } from './rules/metaContract'

type Params = {
  type: 'metaContract'
  genesis: string
  codehash: string
}
export function getIconUri(params: Params) {
  if (params.type === 'metaContract') {
    const logoName = metaContractIcons.find(
      (icon) => icon.genesis === params.genesis && icon.codehash === params.codehash,
    )?.logo

    if (!logoName) {
      return ''
    }

    return `https://unpkg.com/@mvc-org/mvc-resources/icons/meta-contract/${logoName}`
  }

  return ``
}
