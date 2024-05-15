import { metaContractIcons } from './rules/metaContract'

export function getIconUri(params) {
  if (params.type === 'metaContract') {
    const logoName = metaContractIcons.find(
      (icon) => icon.genesis === params.genesis && icon.codehash === params.codehash,
    )?.logo

    if (!logoName) {
      return ''
    }

    return `https://unpkg.com/@mvc-org/mvc-resources/icons/meta-contract/${params.icon}`
  }

  return `https://unpkg.com/@mvc-org/mvc-resources/icons${params.icon}`
}
